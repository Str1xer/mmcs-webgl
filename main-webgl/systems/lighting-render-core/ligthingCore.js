class LightingSystem {
    constructor(gl, programInfo) {
        this.gl = gl;
        this.programInfo = programInfo;
    }

    tick() {
        this.gl.uniform3fv(
            this.programInfo.uniformLocations.ambientLightColor, ambientLightColor
        );
        this.gl.uniform3fv(
            this.programInfo.uniformLocations.diffusionLightColor, diffusionLightColor
        );
        this.gl.uniform3fv(
            this.programInfo.uniformLocations.specularLightColor, specularLightColor
        );
        this.gl.uniform1f(
            this.programInfo.uniformLocations.linearAttenuation, linearAttenuation
        );
        this.gl.uniform1f(
            this.programInfo.uniformLocations.quadraticAttenuation, quadraticAttenuation
        );

        this.gl.uniform1i (
            this.programInfo.uniformLocations.lightSourceCount, lightSources.length
        );

        lightSources.forEach((source, idx) => {
            const uniformLocation = this.gl.getUniformLocation(this.programInfo.program, "uLightPosition[" + idx + "]");
            this.gl.uniform3fv(uniformLocation, source.location);
            const uniformIntensivity = this.gl.getUniformLocation(this.programInfo.program, "uLightIntensivity[" + idx + "]");
            this.gl.uniform1f(uniformIntensivity, source.intensivity);
        })
    }
}

export { LightingSystem };