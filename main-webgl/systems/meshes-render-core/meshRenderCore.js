import { drawMesh } from "./draw-mesh.js";

class MeshesRenderCore {
    constructor(gl, programInfo) {
        this.gl = gl;
        this.programInfo = programInfo;
    }

    tick() {
        meshes.forEach(mesh => {
            drawMesh(this.gl,
                this.programInfo,
                mesh.mesh,
                projectionMatrix,
                mesh.transform.scale,
                mesh.transform.location,
                mesh.transform.rotation,
                mesh.origin,
                mesh.color,
                [
                    loadedAssets[mesh.texture]
                ],
                {
                    type: "Mesh"
                }
            )
        });
    }
}

export { MeshesRenderCore };