import { parseOBJ, loadModel } from "./utils/loadModel.js"

class Scene_Egor {

    async preload() {

        loadedAssets["plane"] = await parseOBJ(await loadModel("/assets/scene_Egor/plane.obj"));

        loadedAssets["millbase"] = await parseOBJ(await loadModel("/assets/scene_Egor/millbase.obj"));
        loadedAssets["millbase_wings"] = await parseOBJ(await loadModel("/assets/scene_Egor/millbase_wings.obj"));

        loadedAssets["tree-tall"] = await parseOBJ(await loadModel("/assets/scene_Egor/tree.obj"));

        loadedAssets["siege-tower"] = await parseOBJ(await loadModel("/assets/scene_Egor/siege-tower.obj"));

        loadedAssets["rock-flat-grass"] = await parseOBJ(await loadModel("/assets/scene_Egor/rock-flat-grass.obj"));

        loadedAssets["campfire-pit"] = await parseOBJ(await loadModel("/assets/scene_Egor/campfire-pit.obj"));
        loadedAssets["tent-canvas"] = await parseOBJ(await loadModel("/assets/scene_Egor/tent-canvas.obj"));
    }

    async start() {

        lightSources = [
            {
                location: [4.8, -1, -14],
                intensivity: 1
            },
            {
                location: [0, -0.9, -10.5],
                intensivity: 1
            },
            // {
            //     location: [2, 0, -12.5],
            //     intensivity: 1
            // },
            // {
            //     location: [-3.2, -1.9, -11.5],
            //     intensivity: 1.
            // },
            // {
            //     location: [-2.8, -1.9, -11.5],
            //     intensivity: 1.
            // }
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
                texture: "/textures/grass.png"
            },
            {
                mesh: loadedAssets["millbase"],
                transform: {
                    location: [2, -2.5, -12.5],
                    rotation: [0, -Math.PI / 2 - 0.4, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [0, -2.5, -12.5],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [-1, -2.5, -12.5],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [-0.5, -2.5, -13.5],
                    rotation: [0, 0.6, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [0.5, -2.5, -14.5],
                    rotation: [0, 0.2, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [1, -2.5, -15.5],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [6, -2.5, -15.5],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [5.4, -2.5, -16],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [7, -2.5, -17],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [6.9, -2.5, -15.6],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },

            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [5.5, -2.5, -9.5],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [5, -2.5, -10.5],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [5.2, -2.5, -10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [3.2, -2.5, -10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [3.3, -2.5, -12],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },

            {
                mesh: loadedAssets["rock-flat-grass"],
                transform: {
                    location: [-2.8, -2.2, -10.5],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },

            {
                mesh: loadedAssets["rock-flat-grass"],
                transform: {
                    location: [4, -2.2, -8.5],
                    rotation: [0, -0.9, 0],
                    scale: [1, 1, 1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },

            {
                mesh: loadedAssets["campfire-pit"],
                transform: {
                    location: [4.6, -2.2, -11.5],
                    rotation: [0, 0, 0],
                    scale: [1.3, 1.3, 1.3],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },

            {
                mesh: loadedAssets["tent-canvas"],
                transform: {
                    location: [5.5, -2.2, -12.9],
                    rotation: [0, -0.6, 0],
                    scale: [1.1, 1.1, 1.1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tent-canvas"],
                transform: {
                    location: [4.5, -2.2, -12.9],
                    rotation: [0, 0.1, 0],
                    scale: [1.1, 1.1, 1.1],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
        ]

        this.millbase_wings = {
            mesh: loadedAssets["millbase_wings"],
            transform: {
                location: [2, 0, -12.5],
                rotation: [0, -Math.PI / 2 - 0.4, 0],
                scale: [1, 1, 1],
            },
            origin: [0, 0, 0],
            color: [0, 1, 0, 1],
            texture: "/textures/survival-a"
        }

        this.siege_tower = {
            mesh: loadedAssets["siege-tower"],
            transform: {
                location: [0, -2.265, -10.5],
                rotation: [0, -Math.PI / 2 + 0.6, 0],
                scale: [0.6, 0.6, 0.6],
            },
            origin: [0, 0, 0],
            color: [0, 1, 0, 1],
            texture: "/textures/castle-c"
        }


        meshes.push(this.millbase_wings)
        meshes.push(this.siege_tower)

        document.addEventListener("wheel", e => {
            onWheel(e, this.siege_tower)
        });
    }

    tick() {
        this.millbase_wings.transform.rotation[0] += 0.02;
    }
}

function onWheel(e, object) {
    var delta = e.deltaY || e.detail || e.wheelDelta;
    object.transform.location[0] += delta / 2000;
    object.transform.location[2] += delta / 2000;

    lightSources[1].location[0] += delta / 2000;
    lightSources[1].location[2] += delta / 2000;
}

export { Scene_Egor }