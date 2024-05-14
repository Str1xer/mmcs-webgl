import { drawMesh } from "../meshes-render-core/draw-mesh.js";

class ParticlesRenderCore {
    constructor(gl, programInfo) {
        this.gl = gl;
        this.programInfo = programInfo;
    }

    tick() {
        particles.forEach(particle => {
            drawMesh(this.gl,
                this.programInfo,
                particle.mesh.mesh,
                projectionMatrix,
                particle.mesh.transform.scale,
                particle.mesh.transform.location,
                particle.mesh.transform.rotation,
                particle.mesh.origin,
                particle.mesh.color,
                [
                    loadedAssets[particle.mesh.texture]
                ],
                {
                    type: "Particle"
                }
            )
        });
    }
}

export { ParticlesRenderCore };