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

class Scene_Egor {

    async preload() {

        loadedAssets["plane"] = await parseOBJ(await loadModel("/assets/scene_Egor/plane.obj"));

        loadedAssets["roadOutside"] = await parseOBJ(await loadModel("/assets/scene_Egor/roadOutside.obj"));
        loadedAssets["roadInside"] = await parseOBJ(await loadModel("/assets/scene_Egor/roadInside.obj"));

        loadedAssets["finishTowers"] = await parseOBJ(await loadModel("/assets/scene_Egor/finishTowers.obj"));
        loadedAssets["insideFlowers"] = await parseOBJ(await loadModel("/assets/scene_Egor/insideFlowers.obj"));
        loadedAssets["objectLine"] = await parseOBJ(await loadModel("/assets/scene_Egor/objectLine.obj"));
        loadedAssets["bushes1"] = await parseOBJ(await loadModel("/assets/scene_Egor/bushes1.obj"));
        loadedAssets["bushes2"] = await parseOBJ(await loadModel("/assets/scene_Egor/bushes2.obj"));

        loadedAssets["redTyres"] = await parseOBJ(await loadModel("/assets/scene_Egor/redTyres.obj"));
        loadedAssets["whiteTyres"] = await parseOBJ(await loadModel("/assets/scene_Egor/whiteTyres.obj"));

        loadedAssets["treeBases"] = await parseOBJ(await loadModel("/assets/scene_Egor/treeBases.obj")); //*
        loadedAssets["treeHeaders1"] = await parseOBJ(await loadModel("/assets/scene_Egor/treeHeaders1.obj"));
        loadedAssets["treeHeaders2"] = await parseOBJ(await loadModel("/assets/scene_Egor/treeHeaders2.obj"));

        loadedAssets["sand"] = await parseOBJ(await loadModel("/assets/scene_Egor/sand.obj"));

        loadedAssets["tribune"] = await parseOBJ(await loadModel("/assets/scene_Egor/tribune.obj"));
        loadedAssets["tribuneBase"] = await parseOBJ(await loadModel("/assets/scene_Egor/tribuneBase.obj"));

        loadedAssets["light"] = await parseOBJ(await loadModel("/assets/scene_Egor/light.obj"));

        loadedAssets["finishHeader"] = await parseOBJ(await loadModel("/assets/scene_Egor/finishHeader.obj"));
        loadedAssets["finishText"] = await parseOBJ(await loadModel("/assets/scene_Egor/finishText.obj"));

        loadedAssets["vehicleTyres"] = await parseOBJ(await loadModel("/assets/scene_Egor/vehicleTyres.obj"));
        loadedAssets["vehicle"] = await parseOBJ(await loadModel("/assets/scene_Egor/vehicle.obj"));

    }

    async start() {

        lightSources = [
            {
                location: [-1.5, 0, -12.5],
                intensivity: 1.
            },
            {
                location: [2, 0, -12.5],
                intensivity: 1.
            },
            {
                location: [-3.2, -1.9, -11.5],
                intensivity: 1.
            },
            {
                location: [-2.8, -1.9, -11.5],
                intensivity: 1.
            }
        ]

        meshes = [
            {
                mesh: loadedAssets["plane"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat15.png"
            },
            {
                mesh: loadedAssets["roadOutside"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat6.png"
            },
            {
                mesh: loadedAssets["finishTowers"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat0.png"
            },
            {
                mesh: loadedAssets["roadInside"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat16.png"
            },
            {
                mesh: loadedAssets["insideFlowers"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat15.png"
            },
            {
                mesh: loadedAssets["objectLine"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat0.png"
            },
            {
                mesh: loadedAssets["bushes1"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat15.png"
            },
            {
                mesh: loadedAssets["bushes2"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat1.png"
            },
            {
                mesh: loadedAssets["redTyres"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat6.png"
            },
            {
                mesh: loadedAssets["whiteTyres"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat0.png"
            },
            {
                mesh: loadedAssets["treeBases"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat2.png"
            },
            {
                mesh: loadedAssets["treeHeaders1"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat15.png"
            },
            {
                mesh: loadedAssets["treeHeaders2"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat1.png"
            },
            {
                mesh: loadedAssets["sand"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat13.png"
            },
            {
                mesh: loadedAssets["tribune"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat0.png"
            },
            {
                mesh: loadedAssets["tribuneBase"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat6.png"
            },
            {
                mesh: loadedAssets["light"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat0.png"
            },
            {
                mesh: loadedAssets["finishHeader"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat6.png"
            },
            {
                mesh: loadedAssets["finishText"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, Math.PI / 2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 1.25],
                color: [0, 1, 0, 1],
                texture: "/textures/mat0.png"
            },

        ]

        this.vehicleBody = {
            mesh: loadedAssets["vehicle"],
            transform: {
                location: [-3, -2.5, -12],
                rotation: [0, Math.PI / 2 * (-3.9), 0],
                scale: [0.0125, 0.0125, 0.0125],
            },
            origin: [0, 0.4 / 0.0125, 0],
            color: [0, 1, 0, 1],
            texture: "/textures/mat6.png"
        }
        this.vehicleTyres = {
            mesh: loadedAssets["vehicleTyres"],
            transform: {
                location: [-3, -2.5, -12],
                rotation: [0, Math.PI / 2 * (-3.9), 0],
                scale: [0.0125, 0.0125, 0.0125],
            },
            origin: [0, 0.4 / 0.0125, 0],
            color: [0, 1, 0, 1],
            texture: "/textures/mat0.png"
        }

        meshes.push(this.vehicleBody)
        meshes.push(this.vehicleTyres)
    }

    tick() {
        this.vehicleBody.transform.rotation[1] += 0.02;
        this.vehicleTyres.transform.rotation[1] += 0.02;
    }
}

export { Scene_Egor, Scene_Matvey }