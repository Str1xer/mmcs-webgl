import { drawMesh } from "../meshes-render-core/draw-mesh.js";
import { Particle1 } from "../../content/particles/particle2.js";

class ParticlesRenderCore {
    constructor() {
        this.particle1 = new Particle1();
    }

    preload() {
        this.particle1.preload();
    }

    tick(deltaTime) {
        this.particle1.tick(deltaTime);

        particles.forEach(particle => {
            drawMesh(
                particle.mesh.mesh,
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