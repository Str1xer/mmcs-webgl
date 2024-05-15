import { draw } from "../../systems/meshes-render-core/draw.js";
import { initBuffers } from "../../systems/meshes-render-core/init-mesh-buffers.js";

class Particle1 {
    constructor() {
        this.timeFromSpawn = 0.0;
        this.toggle = true;

        this.particles = [];
        this.timeFromSpawn = 0;
    }

    async preload() {
        console.log(shaderPrograms);

        programInfoCollection.sparkInfo = {
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderPrograms.deafultParticleProgram, "aVertexPosition"),
                textureCoord: gl.getAttribLocation(shaderPrograms.deafultParticleProgram, "aTextureCoord"),
            },
            uniformLocations: {
                projectionMatrix: gl.getUniformLocation(shaderPrograms.deafultParticleProgram, "uProjectionMatrix"),
                modelViewMatrix: gl.getUniformLocation(shaderPrograms.deafultParticleProgram, "uModelViewMatrix"),
                sampler: gl.getUniformLocation(shaderPrograms.deafultParticleProgram, "uSampler"),
            },
        }

        programInfoCollection.trailInfo = {
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderPrograms.trailParticleProgram, "a_position"),
                color: gl.getAttribLocation(shaderPrograms.trailParticleProgram, "a_color"),
            },
            uniformLocations: {
                projectionMatrix: gl.getUniformLocation(shaderPrograms.trailParticleProgram, "u_pMatrix"),
                modelViewMatrix: gl.getUniformLocation(shaderPrograms.trailParticleProgram, "u_mvMatrix")
            }
        }

        console.log("Particle Shader Init")
    }

    async start() {

    }

    spark(position, rotation, scale) {
        draw(
            {
                mesh: loadedAssets["particle-plane"],
                transform: {
                    location: position,
                    rotation: rotation,
                    scale: [scale, scale, scale]
                }
            },
            {
                domain: "particle",
                color: [0, 0, 0, 1],
                textureObjects: [
                    loadedAssets["/textures/spark.png"]
                ]
            }
        )
    }

    trail(position, rotation) {
        gl.useProgram(shaderPrograms.trailParticleProgram);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            0, 0.03, 0,
            Math.sqrt(position[0] * position[0] + position[1] * position[1]), 0, 0,
            0, -0.03, 0,

        ]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(programInfoCollection.trailInfo.attribLocations.vertexPosition);
        gl.vertexAttribPointer(programInfoCollection.trailInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);

        const colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            0.9, 0.9, 0.7,
            0.7, 0.7, 0.25,
            0.9, 0.9, 0.7,
        ]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.enableVertexAttribArray(programInfoCollection.trailInfo.attribLocations.color);
        gl.vertexAttribPointer(programInfoCollection.trailInfo.attribLocations.color, 3, gl.FLOAT, false, 0, 0);

        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

        const modelViewMatrix = mat4.create();
        mat4.identity(modelViewMatrix);

        mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, position[2]])

        mat4.scale(modelViewMatrix, modelViewMatrix, [1, 1, 1])

        const newrot = mat4.create();
        const q = mat4.create();
        quat.fromEuler(q, rotation[0] * 180 / Math.PI, rotation[1] * 180 / Math.PI, rotation[2] * 180 / Math.PI);
        mat4.fromQuat(newrot, q);

        mat4.multiply(modelViewMatrix, modelViewMatrix, newrot);

        mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, 0]);

        gl.uniformMatrix4fv(programInfoCollection.trailInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(programInfoCollection.trailInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

        const vertexCount = 3;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);

        gl.deleteBuffer(positionBuffer);
        gl.deleteBuffer(colorBuffer);
        gl.deleteBuffer(indexBuffer);
    }

    tick(deltaTime) {
        if (this.timeFromSpawn > 0.025) {
            for (let i = 0; i < 5; ++i) {
                this.particles.push(new Emiter())
            }
            this.timeFromSpawn = 0;
        } else {
            this.timeFromSpawn += deltaTime;
        }

        this.particles = this.particles.filter(elem => {
            elem.lifetime -= deltaTime;
            elem.position[0] += elem.velocity[0];
            elem.position[1] += elem.velocity[1];

            this.trail(elem.position, [0, 0, Math.sign(elem.position[1]) * Math.acos(elem.position[0] / Math.sqrt(elem.position[0] * elem.position[0] + elem.position[1] * elem.position[1]))]);
            this.spark(elem.position, [Math.PI / 2, 0, Math.PI * 2 * elem.rotation[2]], elem.scale)

            return elem.lifetime > 0
        })

        console.log(this.particles)
    }
}

class Emiter {
    constructor() {
        this.lifetime = 0.3;
        this.position = [0, 0, -8];
        this.rotation = [0, 0, Math.random()];
        this.scale = Math.random() * 0.10 + 0.05;
        this.velocity = [(Math.random() * 0.03 + 0.008) * Math.sign(Math.random() - 0.5), (Math.random() * 0.03 + 0.008) * Math.sign(Math.random() - 0.5), 0];
    }
}

export { Particle1 };