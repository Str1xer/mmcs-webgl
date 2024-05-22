import { parseOBJ, loadModel } from "./utils/loadModel.js";

class Scene_Alex {
  async preload() {
    loadedAssets["plane"] = await parseOBJ(
      await loadModel("/assets/scene_Egor/plane.obj")
    );

    loadedAssets["millbase"] = await parseOBJ(
      await loadModel("/assets/scene_Egor/millbase.obj")
    );
    loadedAssets["millbase_wings"] = await parseOBJ(
      await loadModel("/assets/scene_Egor/millbase_wings.obj")
    );

    loadedAssets["tree-tall"] = await parseOBJ(
      await loadModel("/assets/scene_Egor/tree.obj")
    );

    loadedAssets["siege-tower"] = await parseOBJ(
      await loadModel("/assets/scene_Egor/siege-tower.obj")
    );

    loadedAssets["rock-flat-grass"] = await parseOBJ(
      await loadModel("/assets/scene_Egor/rock-flat-grass.obj")
    );

    loadedAssets["campfire-pit"] = await parseOBJ(
      await loadModel("/assets/scene_Egor/campfire-pit.obj")
    );

    loadedAssets["altar-stone"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/altar-stone.obj")
    );

    loadedAssets["crypt-large"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/crypt-large.obj")
    );

    loadedAssets["crypt-large-roof"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/crypt-large-roof.obj")
    );
    loadedAssets["ghost"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/character-ghost.obj")
    );
    loadedAssets["grave1"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/gravestone-cross-large.obj")
    );
    loadedAssets["grave2"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/gravestone-cross.obj")
    );
    loadedAssets["grave3"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/grave.obj")
    );
    loadedAssets["grave4"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/gravestone-flat.obj")
    );
    loadedAssets["grave5"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/gravestone-broken.obj")
    );
    loadedAssets["grave6"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/gravestone-round.obj")
    );
    loadedAssets["grave7"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/gravestone-decorative.obj")
    );
    loadedAssets["grave8"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/gravestone-wide.obj")
    );
    loadedAssets["crypt-small"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/crypt-small.obj")
    );
    loadedAssets["crypt-small-roof"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/crypt-small-roof.obj")
    );
    loadedAssets["crypt-small-ent"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/crypt-small-entrance.obj")
    );
    loadedAssets["pumkin1"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/pumpkin-carved.obj")
    );
    loadedAssets["pumkin2"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/pumpkin-tall-carved.obj")
    );
    loadedAssets["pumkin3"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/pumpkin.obj")
    );
    loadedAssets["lightpost"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/lightpost-single.obj")
    );
    loadedAssets["lavka"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/bench.obj")
    );
    loadedAssets["tree1"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/pine.obj")
    );
    loadedAssets["tree2"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/pine-fall.obj")
    );
    loadedAssets["vampire"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/character-vampire.obj")
    );
    loadedAssets["player"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/character-digger.obj")
    );
    loadedAssets["lamp"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/lantern-glass.obj")
    );
    loadedAssets["dig"] = await parseOBJ(
      await loadModel("../assets/scene_Alex/shovel-dirt.obj")
    );
  }
  async start() {
    lightSources = [
      {
        location: [0.8, -0.7, -8.5],
        intensivity: 1,
      },
      {
        location: [-0.3, -2.2, -8],
        intensivity: 0.5,
      },
      {
        location: [-6, -2.2, -10],
        intensivity: 0.8,
      },
      // {
      //     location: [-3.2, -1.9, -11.5],
      //     intensivity: 1.
      // },
      // {
      //     location: [-2.8, -1.9, -11.5],
      //     intensivity: 1.
      // }
    ];

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
        texture: "/textures/grass.png",
      },

      //graves-far-left
      {
        mesh: loadedAssets["grave3"],
        transform: {
          location: [-5.0, -2.2, -12.5],
          rotation: [0, 0.4, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave6"],
        transform: {
          location: [-5.5, -2.2, -14],
          rotation: [0, 0.4, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave2"],
        transform: {
          location: [-6.0, -2.2, -14],
          rotation: [0, 0.4, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave1"],
        transform: {
          location: [-6.5, -2.2, -14],
          rotation: [0, 0.4, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave4"],
        transform: {
          location: [-7, -2.2, -14],
          rotation: [0, 0.4, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },

      {
        mesh: loadedAssets["grave2"],
        transform: {
          location: [-7.5, -2.2, -14],
          rotation: [0, 0.4, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave8"],
        transform: {
          location: [-8.3, -2.2, -14],
          rotation: [0, 0.4, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      //grave-far-right-dec
      {
        mesh: loadedAssets["tree1"],
        transform: {
          location: [5.5, -2.2, -12.5],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["tree2"],
        transform: {
          location: [6.5, -2.2, -12.5],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["tree2"],
        transform: {
          location: [7.5, -2.2, -11.5],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["tree1"],
        transform: {
          location: [6.0, -2.2, -10.5],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },

      //grave-far-right
      {
        mesh: loadedAssets["grave3"],
        transform: {
          location: [1.5, -2.2, -12.5],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave6"],
        transform: {
          location: [1.5, -2.2, -14],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave2"],
        transform: {
          location: [2.0, -2.2, -14],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave1"],
        transform: {
          location: [2.5, -2.2, -14],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave4"],
        transform: {
          location: [3, -2.2, -14],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },

      {
        mesh: loadedAssets["grave2"],
        transform: {
          location: [3.5, -2.2, -14],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["grave7"],
        transform: {
          location: [4, -2.2, -14],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },

      {
        mesh: loadedAssets["altar-stone"],
        transform: {
          location: [-2, -2.2, -7],
          rotation: [0, 0.3, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },

      {
        mesh: loadedAssets["altar-stone"],
        transform: {
          location: [2, -2.2, -8],
          rotation: [0, 0.3, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["crypt-large"],
        transform: {
          location: [-1, -2.2, -10],
          rotation: [0, 0.4, 0],
          scale: [1.5, 1.5, 1.5],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["crypt-large-roof"],
        transform: {
          location: [-1, -0.7, -10],
          rotation: [0, 0.4, 0],
          scale: [1.5, 1.5, 1.5],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      //large crypt dec start
      {
        mesh: loadedAssets["pumkin1"],
        transform: {
          location: [0, -2.2, -8],
          rotation: [0, 0.1, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["pumkin2"],
        transform: {
          location: [-2, -2.2, -10],
          rotation: [0, 0.2, 0],
          scale: [1.5, 1.5, 1.5],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["pumkin3"],
        transform: {
          location: [-1.2, -2.2, -7.5],
          rotation: [0, 0.0, 0],
          scale: [2, 2, 2],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["lightpost"],
        transform: {
          location: [0.8, -2.2, -8.5],
          rotation: [0, 0.0, 0],
          scale: [1.5, 1.5, 1.5],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["lavka"],
        transform: {
          location: [0.8, -2.2, -7.5],
          rotation: [0, 0, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      //large crypt dec end
      {
        mesh: loadedAssets["crypt-small"],
        transform: {
          location: [4, -2.2, -10],
          rotation: [0, -0.8, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["crypt-small-roof"],
        transform: {
          location: [4, -1.3, -10],
          rotation: [0, -0.8, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["crypt-small-ent"],
        transform: {
          location: [3.55, -2.2, -9.5],
          rotation: [0, -0.8, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["lamp"],
        transform: {
          location: [-6, -2.2, -10],
          rotation: [0, -0.8, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["dig"],
        transform: {
          location: [-6, -2.2, -9],
          rotation: [0, -0.8, 0],
          scale: [1.0, 1.0, 1.0],
        },
        origin: [0, 0, 0],
        color: [1, 1, 1, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["tree1"],
        transform: {
          location: [-7, -2.2, -9],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["tree2"],
        transform: {
          location: [-8.5, -2.2, -12.5],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
      {
        mesh: loadedAssets["tree2"],
        transform: {
          location: [-8, -2.2, -10.5],
          rotation: [0, 0, 0],
          scale: [1.1, 1, 1],
        },
        origin: [0, 0, 0],
        color: [0, 1, 0, 1],
        texture: "/textures/graveyard",
      },
    ];

    this.ghost = {
      mesh: loadedAssets["ghost"],
      transform: {
        location: [-0.3, -2.2, -8],
        rotation: [0, 0.4, 0],
        scale: [0.8, 0.8, 0.8],
      },
      origin: [0, 0, 0],
      color: [0, 1, 0, 1],
      texture: "/textures/graveyard",
    };
    this.vampire = {
      mesh: loadedAssets["vampire"],
      transform: {
        location: [4, -0.8, -10],
        rotation: [0, -0.8, 0],
        scale: [0.8, 0.8, 0.8],
      },
      origin: [0, 0, 0],
      color: [0, 1, 0, 1],
      texture: "/textures/graveyard",
    };
    this.player = {
      mesh: loadedAssets["player"],
      transform: {
        location: [-7, -2.2, -10],
        rotation: [0, 0.8, 0],
        scale: [0.8, 0.8, 0.8],
      },
      origin: [0, 0, 0],
      color: [0, 1, 0, 1],
      texture: "/textures/graveyard",
    };

    meshes.push(this.ghost);
    meshes.push(this.vampire);
    meshes.push(this.player);

    document.addEventListener("keydown", (e) => {
      onKeyPress(e, this.ghost);
    });
    document.addEventListener("keydown", (e) => {
      onKeyPressPlayer(e, this.player);
    });
  }

  tick() {
    const vampire = this.vampire;
    const speed = 0.03;
    let currentTarget = getRandomTarget();

    const location = vampire.transform.location;
    const direction = [
      currentTarget[0] - location[0],
      currentTarget[1] - location[1],
      currentTarget[2] - location[2],
    ];
    const distance = Math.sqrt(
      direction[0] ** 2 + direction[1] ** 2 + direction[2] ** 2
    );

    if (distance < speed) {
      // If close enough to the target, snap to the target and generate a new random target
      vampire.transform.location = currentTarget.slice();
      currentTarget = getRandomTarget();
    } else {
      // Normalize direction and move towards the target
      direction[0] /= distance;
      direction[1] /= distance;
      direction[2] /= distance;

      vampire.transform.location[0] += direction[0] * speed;
      vampire.transform.location[1] += direction[1] * speed;
      vampire.transform.location[2] += direction[2] * speed;
      const angleY = Math.atan2(direction[0], direction[2]); // Rotation around the y-axis

      // Update vampire rotation to face the movement direction
    }
  }
}

function onKeyPress(e, object) {
  // Adjust the amount to move the object for each key press
  const moveAmount = 0.1;

  // Use key codes to determine which key was pressed
  switch (e.key) {
    case "w" || "ц": // Move up (along the y-axis)
      object.transform.location[2] += moveAmount;
      object.transform.rotation[1] = 0;
      break;
    case "s" || "ы": // Move down (along the y-axis)
      object.transform.location[2] -= moveAmount;
      object.transform.rotation[1] = Math.PI;
      break;
    case "a" || "ф": // Move left (along the x-axis)
      object.transform.location[0] -= moveAmount;
      object.transform.rotation[1] = -Math.PI / 2;
      break;
    case "d" || "в": // Move right (along the x-axis)
      object.transform.location[0] += moveAmount;
      object.transform.rotation[1] = Math.PI / 2;

      break;
  }

  // Optionally, update lightSources[1] if they should move with the ghost
  lightSources[1].location[0] = object.transform.location[0];
  lightSources[1].location[2] = object.transform.location[2];
}
function onKeyPressPlayer(e, object) {
  // Adjust the amount to move the object for each key press
  const moveAmount = 0.1;

  // Use key codes to determine which key was pressed
  switch (e.key) {
    case "ArrowUp": // Move up (along the z-axis)
      object.transform.location[2] += moveAmount; // Usually in 3D, down means increasing z-axis
      object.transform.rotation[1] = 0; // Facing forward
      break;
    case "ArrowDown": // Move down (along the z-axis)
      object.transform.location[2] -= moveAmount; // Usually in 3D, up means decreasing z-axis
      object.transform.rotation[1] = Math.PI; // Facing backward
      break;
    case "ArrowLeft": // Move left (along the x-axis)
      object.transform.location[0] -= moveAmount;
      object.transform.rotation[1] = -Math.PI / 2; // Facing left
      break;
    case "ArrowRight": // Move right (along the x-axis)
      object.transform.location[0] += moveAmount;
      object.transform.rotation[1] = Math.PI / 2; // Facing right
      break;
  }
}
function getRandomTarget() {
  const boundaries = {
    minX: -10,
    maxX: 10,
    minY: -2,
    maxY: 0,
    minZ: -15,
    maxZ: -5,
  };
  return [
    Math.random() * (boundaries.maxX - boundaries.minX) + boundaries.minX,
    Math.random() * (boundaries.maxY - boundaries.minY) + boundaries.minY,
    Math.random() * (boundaries.maxZ - boundaries.minZ) + boundaries.minZ,
  ];
}

export { Scene_Alex };
