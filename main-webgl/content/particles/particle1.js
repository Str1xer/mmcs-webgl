const clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

class Particle1 {
    constructor() {
        this.selfParticles = [];
        this.timeFromSpawn = 0.0;
        this.toggle = true;
    }

    async preload() {

    }

    async start() {

    }

    smoke() {
        for (let i = 0; i < 1; ++i) {
            const size = 0.4 + Math.random() * 0.6;

            this.selfParticles.push({
                lifetime: 1 + Math.random(),
                vlocity: [0.04, 0.0075, 0],
                initScale: size,
                mesh: {
                    mesh: loadedAssets["particle-plane"],
                    transform: {
                        location: [0.1 + (Math.random() - 0.5) * 1, 0, -12.5 + (Math.random() - 0.5) * 1],
                        rotation: [Math.PI / 2, 0, Math.random() * Math.PI * 2],
                        scale: [0, 0, 0],
                    },
                    origin: [0, 0, 0],
                    color: [0, 0, 0, 1],
                    texture: "/textures/Smoke.png"
                }
            });
        }
    }

    tick(deltaTime) {
        this.selfParticles = this.selfParticles.filter(elem => elem.lifetime > 0)

        if (this.timeFromSpawn > 0.03) {
            this.smoke();
            this.timeFromSpawn = 0;
        } else {
            this.timeFromSpawn += deltaTime;
        }

        this.selfParticles.forEach(elem => {
            elem.lifetime -= deltaTime;
            elem.mesh.transform.location[0] += elem.vlocity[0];
            elem.mesh.transform.location[1] += elem.vlocity[1];
            elem.mesh.transform.location[2] += elem.vlocity[2];
            const currentRatioScale = clamp((0.8 * 0.8 - (elem.lifetime - 0.8) * (elem.lifetime - 0.8)) / 0.8 / 0.8, 0, 1);
            elem.mesh.transform.scale[0] = elem.initScale * currentRatioScale * currentRatioScale;
            elem.mesh.transform.scale[1] = elem.initScale * currentRatioScale * currentRatioScale;
            elem.mesh.transform.scale[2] = elem.initScale * currentRatioScale * currentRatioScale;
        });

        particles = this.selfParticles;
    }
}

export { Particle1 };