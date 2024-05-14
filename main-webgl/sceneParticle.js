import { Particle1 } from "./content/particles/particle1.js";
import { parseOBJ, loadModel } from "./utils/loadModel.js"


class SceneParticle {

    async preload() {
        loadedAssets["particle-plane"] = await parseOBJ(await loadModel("/assets/particle-plane.obj"));
        // loadedAssets["vehicleTyres"] = await parseOBJ(await loadModel("/assets/vehicleTyres.obj"));
        // loadedAssets["vehicle"] = await parseOBJ(await loadModel("/assets/vehicle.obj"));
    }

    async start() {

        lightSources = [
            {
                location: [0, 5, 5],
                intensivity: 1.
            },
        ]

        this.particle1 = new Particle1();

        // this.vehicleBody = {
        //     mesh: loadedAssets["vehicle"],
        //     transform: {
        //         location: [-3, -2.5, -12],
        //         rotation: [0, Math.PI / 2 * (-0.9), 0],
        //         scale: [0.08, 0.08, 0.08],
        //     },
        //     origin: [0, 0.4 / 0.0125, 0],
        //     color: [0, 1, 0, 1],
        //     texture: "/textures/mat6.png"
        // }
        // this.vehicleTyres = {
        //     mesh: loadedAssets["vehicleTyres"],
        //     transform: {
        //         location: [-3, -2.5, -12],
        //         rotation: [0, Math.PI / 2 * (-0.9), 0],
        //         scale: [0.08, 0.08, 0.08],
        //     },
        //     origin: [0, 0.4 / 0.0125, 0],
        //     color: [0, 1, 0, 1],
        //     texture: "/textures/mat0.png"
        // }

        // meshes.push(this.vehicleBody)
        // meshes.push(this.vehicleTyres)
    }

    tick(deltaTime) {
        this.particle1.tick(deltaTime);
    }
}

export { SceneParticle }