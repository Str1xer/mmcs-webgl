import { parseOBJ, loadModel } from "./utils/loadModel.js"


class Scene_Matvey {

    async preload() {

        loadedAssets["trebuchet"] = await parseOBJ(await loadModel("/assets/scene_Matvey/trebuchet.obj"));

    }

    async start() {

        lightSources = [
            {
                location: [0, 0, -100],
                intensivity: 1.
            },
        ]

        meshes = [
            {
                mesh: loadedAssets["trebuchet"],
                transform: {
                    location: [0, -1.5, -5],
                    rotation: [0, Math.PI / 4, 0],
                    scale: [1,1,1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/mat2.png"
            },

        ]

    }

    tick() {
        
    }

}



export { Scene_Matvey }