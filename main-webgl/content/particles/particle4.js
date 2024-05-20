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

    }

    async start() {
        console.log("Start")
        for (let i = 0; i < 2; ++i) {
            this.particles.push(new Emiter())
            this.particles[this.particles.length - 1].static = false;
        }

        for (let i = 0; i < 6; ++i) {
            this.particles.push(new Emiter())
            this.particles[this.particles.length - 1].static = true;
        }
    }

    trail(vertices, indexies, colors) {
        gl.useProgram(shaderPrograms.trailParticleProgram);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(programInfoCollection.trailInfo.attribLocations.vertexPosition);
        gl.vertexAttribPointer(programInfoCollection.trailInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);

        const colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.enableVertexAttribArray(programInfoCollection.trailInfo.attribLocations.color);
        gl.vertexAttribPointer(programInfoCollection.trailInfo.attribLocations.color, 3, gl.FLOAT, false, 0, 0);

        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexies), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

        const modelViewMatrix = mat4.create();
        mat4.identity(modelViewMatrix);

        mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, -8])

        mat4.scale(modelViewMatrix, modelViewMatrix, [1, 1, 1])

        const newrot = mat4.create();
        const q = mat4.create();
        quat.fromEuler(q, 0, 0, 0);
        mat4.fromQuat(newrot, q);

        mat4.multiply(modelViewMatrix, modelViewMatrix, newrot);

        mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, 0]);

        gl.uniformMatrix4fv(programInfoCollection.trailInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(programInfoCollection.trailInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

        const vertexCount = indexies.length;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);

        gl.deleteBuffer(positionBuffer);
        gl.deleteBuffer(colorBuffer);
        gl.deleteBuffer(indexBuffer);
    }

    tick(deltaTime) {
        if (this.timeFromSpawn > 0.01) {
            this.particles = this.particles.filter(elem => {
                elem.update(deltaTime)

                return true;
            })
            this.timeFromSpawn = 0;
        } else {
            this.timeFromSpawn += deltaTime;
        }

        this.particles = this.particles.filter(elem => {
            this.trail(elem.vertexes, elem.indecies, elem.colors);

            return true;
        })
    }
}

class Emiter {
    constructor() {

        this.duration = 0;
        this.lifetime = 2;

        this.vertexes = [

        ]

        this.indecies = [

        ]

        this.colors = [

        ]

        this.position = [0, 4, -8];
        this.rotation = [Math.PI / 2, 0, 0];
        this.scale = [0.1, 0.5, 1]
        this.velocity = [0.0, -0.1, 0.0];

        this.width = 0.05;

        this.isCollided = false;

        this.static = false;
    }

    update(deltaTime) {
        this.duration += deltaTime;

        if (Math.random() < 0.2) {
            this.vertexes = [];
            this.colors = [];
            this.indecies = [];
            return;
        }

        this.vertexes = []

        this.width = Math.random() * 0.05;

        this.colors = []

        const mouseViewportPosY = !this.static ? (-1 * yMousePos * 7 / document.body.clientHeight) : 0;
        const mouseViewportPosX = !this.static ? (1 * xMousePos * 13 / document.body.clientWidth) : 4;

        const maxSteps = Math.sqrt(mouseViewportPosX * mouseViewportPosX + mouseViewportPosY * mouseViewportPosY);
        const countSteps = Math.round(Math.random() * maxSteps * 2 + maxSteps * 1);

        const widthStepX = mouseViewportPosX / countSteps;
        const widthStepY = mouseViewportPosY / countSteps;

        for (let i = 0; i <= countSteps; i++) {
            const yPos = widthStepY * i + Math.random() * 0.5 - 0.25;
            const xPos = Math.random() * 2 - 1;
            this.vertexes.push((!this.static ? 0 : -2) + i * widthStepX, i == 0 ? 0 : (i == countSteps ? widthStepY * i : yPos + this.width), 0)
            this.vertexes.push((!this.static ? 0 : -2) + i * widthStepX, i == 0 ? 0 : (i == countSteps ? widthStepY * i : yPos), 0);

            if (i % 2)
                this.colors.push(0.35, 0.8, 0.91, 0.35, 0.8, 0.91)
            else
                this.colors.push(0, 0, 0, 0.35, 0.8, 0.91)
        }

        this.indecies = []

        for (let i = 0; i <= countSteps - 1; i++) {
            this.indecies.push(i * 2, (i + 1) * 2, (i + 1) * 2 + 1)
            this.indecies.push(i * 2, (i + 1) * 2 + 1, i * 2 + 1)
        }

        this.position[0] += this.velocity[0];
        this.position[1] = this.position[1] + this.velocity[1] > -2 ? this.position[1] + this.velocity[1] : this.position[1];
    }
}

export { Particle1 };