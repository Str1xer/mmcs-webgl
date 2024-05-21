import { parseOBJ, loadModel } from "./utils/loadModel.js"


class Scene_Matvey {

    async preload() {

        loadedAssets["scene"] = await parseOBJ(await loadModel("/assets/scene_Matvey/scene.obj"));
        loadedAssets["chest"] = await parseOBJ(await loadModel("/assets/scene_Matvey/chest.obj"));
        loadedAssets["chest_lid"] = await parseOBJ(await loadModel("/assets/scene_Matvey/chest_lid.obj"));
        loadedAssets["plane"] = await parseOBJ(await loadModel("/assets/scene_Egor/plane.obj"));
        loadedAssets["tree-tall"] = await parseOBJ(await loadModel("/assets/scene_Egor/tree.obj"));
        loadedAssets["ram"] = await parseOBJ(await loadModel("/assets/scene_Matvey/ram.obj"));
        loadedAssets["ram-s"] = await parseOBJ(await loadModel("/assets/scene_Matvey/ram-s.obj"));

    }

    async start() {

        lightSources = [
            {
                location: [-5, 0, -40],
                intensivity: 1
            },
            {
                location: [-4, -0.3, -10],
                intensivity: 1
            },
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
                mesh: loadedAssets["scene"],
                transform: {
                    location: [1.5, -2, -9],
                    rotation: [0, - Math.PI / 5, 0],
                    scale: [1.2,1.2,1.2],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["chest"],
                transform: {
                    location: [-2.5, -2, -6.2],
                    rotation: [0, Math.PI / 14, 0],
                    scale: [1.5, 1.5, 1.5],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [5, -2.5, -12.5],
                    rotation: [0, 0, 0],
                    scale: [1.5, 1.5, 1.5],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [-2, -2.5, -12.5],
                    rotation: [0, 0, 0],
                    scale: [1.2, 1.2, 1.2],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [-4.2, -2.5, -15.5],
                    rotation: [0, 0, 0],
                    scale: [1.5, 1.5, 1.5],
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
                    scale: [1.3, 1.3, 1.3],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
            {
                mesh: loadedAssets["tree-tall"],
                transform: {
                    location: [-3.5, -2.5, -6.5],
                    rotation: [0, 0, 0],
                    scale: [1.3, 1.3, 1.3],
                },
                origin: [0, 0, 0],
                color: [0, 1, 0, 1],
                texture: "/textures/survival-a"
            },
        ]

        this.chest_lid = {
            mesh: loadedAssets["chest_lid"],
            transform: {
                location: [-2.5, -2, -6.2],
                rotation: [0, Math.PI / 14, 0],
                scale: [1.5, 1.5, 1.5],
            },
            origin: [0, 0, 0],
            color: [0, 1, 0, 1],
            texture: "/textures/survival-a"
        }

        this.ram = {
            mesh: loadedAssets["ram"],
            transform: {
                location: [-5, -2.265, -11],
                rotation: [0, -Math.PI / 4, 0],
                scale: [1, 1, 1],
            },
            origin: [0, 0, 0],
            color: [0, 1, 0, 1],
            texture: "/textures/castle-a"
        }

        this.rams = {
            mesh: loadedAssets["ram-s"],
            transform: {
                location: [-5, -1.725, -11],
                rotation: [0, -Math.PI / 4, 0],
                scale: [1,1,1],
            },
            origin: [0, 0, 0],
            color: [0, 1, 0, 1],
            texture: "/textures/castle-a"
        }

        meshes.push(this.chest_lid);
        meshes.push(this.ram);
        meshes.push(this.rams);

        document.addEventListener("wheel", e => {
            ram(e, this.ram);
            rams(e,this.rams);
        });

    }

    tick() {
        //this.chest_lid.transform.rotation[1] += 0.02; 
        this.rams.transform.rotation[0] += 0.02; 
    }

}


function ram(e, object) {
    var delta = e.deltaY || e.detail || e.wheelDelta;
    object.transform.location[0] -= delta / 2000;
    object.transform.location[2] -= delta / 2000;

    lightSources[1].location[0] -= delta / 2000;
    lightSources[1].location[2] -= delta / 2000;
}

function rams(e, object) {
    var delta = e.deltaY || e.detail || e.wheelDelta;
    object.transform.location[0] -= delta / 2000;
    object.transform.location[2] -= delta / 2000;
}


export { Scene_Matvey }