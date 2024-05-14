import { initShaderProgram } from "../../utils/init-shaders.js";
import { LightingSystem } from "../lighting-render-core/ligthingCore.js";
import { MeshesRenderCore } from "../meshes-render-core/meshRenderCore.js";
import { ParticlesRenderCore } from "../particles-render-core/particlesRenderCore.js";
import { loadTexture } from "../../utils/loadTextures.js";

class RenderCore {
    constructor(canvas, vsSource, fsSource) {
        console.log("Render core construct");

        this.canvas = canvas;

        this.gl = canvas.getContext("webgl2", {
            premultipliedAlpha: false
        });

        if (this.gl === null) {
            alert(
                "Unable to initialize WebGL. Your browser or machine may not support it."
            );
            return;
        }

        this.shaderProgram = initShaderProgram(this.gl, vsSource, fsSource);
        this.gl.useProgram(this.shaderProgram);

        this.programInfo = {
            program: this.shaderProgram,
            attribLocations: {
                vertexPosition: this.gl.getAttribLocation(this.shaderProgram, "aVertexPosition"),
                vertexNormal: this.gl.getAttribLocation(this.shaderProgram, "aVertexNormal"),
                // vertexTangent: this.gl.getAttribLocation(this.shaderProgram, "aVertexTangent"),
                // vertexBitangent: this.gl.getAttribLocation(this.shaderProgram, "aVertexBitangent"),
                // vertexColor: this.gl.getAttribLocation(this.shaderProgram, "aVertexColor"),
                textureCoord: this.gl.getAttribLocation(this.shaderProgram, "aTextureCoord"),
            },
            uniformLocations: {
                projectionMatrix: this.gl.getUniformLocation(this.shaderProgram, "uProjectionMatrix"),
                modelViewMatrix: this.gl.getUniformLocation(this.shaderProgram, "uModelViewMatrix"),
                sampler: this.gl.getUniformLocation(this.shaderProgram, "uSampler"),
                normalSampler: this.gl.getUniformLocation(this.shaderProgram, "uNormalSampler"),

                ambientLightColor: this.gl.getUniformLocation(this.shaderProgram, "uAmbientLightColor"),
                diffusionLightColor: this.gl.getUniformLocation(this.shaderProgram, "uDiffuseLightColor"),
                specularLightColor: this.gl.getUniformLocation(this.shaderProgram, "uSpecularLightColor"),

                linearAttenuation: this.gl.getUniformLocation(this.shaderProgram, "uLinearAttenuation"),
                quadraticAttenuation: this.gl.getUniformLocation(this.shaderProgram, "uQuadraticAttenuation"),
                intensivity: this.gl.getUniformLocation(this.shaderProgram, "uIntensivity"),

                materialMode: this.gl.getUniformLocation(this.shaderProgram, "uParticle"),
            },
        };

        this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexPosition);
        this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexNormal);
        this.gl.enableVertexAttribArray(this.programInfo.attribLocations.vertexColor);
        this.gl.enableVertexAttribArray(this.programInfo.attribLocations.textureCoord);

        this.meshRenderCore = new MeshesRenderCore(this.gl, this.programInfo);
        this.ligtingCore = new LightingSystem(this.gl, this.programInfo);
        this.particlesRenderCore = new ParticlesRenderCore(this.gl, this.programInfo);
    }

    async preload() {
        // loadedAssets["/textures/mat0.png"] = await loadTexture(this.gl, "/textures/mat0.png");
        // loadedAssets["/textures/mat1.png"] = await loadTexture(this.gl, "/textures/mat1.png");
        // loadedAssets["/textures/mat2.png"] = await loadTexture(this.gl, "/textures/mat2.png");
        // loadedAssets["/textures/mat6.png"] = await loadTexture(this.gl, "/textures/mat6.png");
        // loadedAssets["/textures/mat9.png"] = await loadTexture(this.gl, "/textures/mat9.png");
        // loadedAssets["/textures/mat13.png"] = await loadTexture(this.gl, "/textures/mat13.png");
        // loadedAssets["/textures/mat15.png"] = await loadTexture(this.gl, "/textures/mat15.png");
        // loadedAssets["/textures/mat16.png"] = await loadTexture(this.gl, "/textures/mat16.png");

        loadedAssets["/textures/Smoke.png"] = await loadTexture(this.gl, "/textures/Smoke.png");

        // console.log("Render core preload");
    }

    async start() {
        // console.log("Render core start");
    }

    tick() {
        // console.log("Render core tick");

        this.gl.clearColor(111/255, 217/255, 208/255, 1.0);

        this.gl.clearDepth(1.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.gl.enable(this.gl.ALPHA_TEST);

        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true)

        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        const fieldOfView = (45 * Math.PI) / 180;
        const aspect = this.gl.canvas.clientWidth / this.gl.canvas.clientHeight;
        const zNear = 0.1;
        const zFar = 100.0;
        projectionMatrix = mat4.create();
        mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

        // Renders
        this.gl.depthMask(false);
        this.particlesRenderCore.tick();
        this.gl.depthMask(true);
        this.meshRenderCore.tick();
        this.ligtingCore.tick();

        this.gl.flush();
    }
}

export { RenderCore };