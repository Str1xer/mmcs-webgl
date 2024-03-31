export async function initImGUI(canvas) {
    await ImGui.default();

    ImGui.CreateContext();
    ImGui_Impl.Init(canvas);

    ImGui.StyleColorsDark();

    let done = false;

    window.requestAnimationFrame(_loop);
    function _loop(time) {
        ImGui_Impl.NewFrame(time);
        ImGui.NewFrame();

        ImGui.SetNextWindowPos(new ImGui.ImVec2(20, 20), ImGui.Cond.FirstUseEver);
        ImGui.SetNextWindowSize(new ImGui.ImVec2(294, 140), ImGui.Cond.FirstUseEver);
        ImGui.Begin("Debug");

        if (ImGui.Button(`Change shading mode (${shadingMode === 1 ? "Phong" : "Gouraud"})`)) {
            shadingMode *= -1;
        }
        if (ImGui.Button(`Change lightmode mode (${lightingMode === 1 ? "Phong" : "Lambert"})`)) {
            lightingMode *= -1;
        }

        ImGui.SliderFloat("Cube rotation", (_ = rotation) => rotation = _, 0.0, Math.PI * 2);

        ImGui.ColorEdit3("Ambient Light Color", ambientLightColor);
        ImGui.ColorEdit3("Diffusion Light Color", diffusionLightColor);
        ImGui.ColorEdit3("Specular Light Color", specularLightColor);

        ImGui.InputFloat("Linear Attenuation", (_ = linearAttenuation) => linearAttenuation = _);
        ImGui.InputFloat("Quadratic Attenuation", (_ = quadraticAttenuation) => quadraticAttenuation = _);
        ImGui.End();

        ImGui.EndFrame();

        ImGui.Render();

        ImGui_Impl.RenderDrawData(ImGui.GetDrawData());

        window.requestAnimationFrame(done ? _done : _loop);
    }

    function _done() {
        ImGui_Impl.Shutdown();
        ImGui.DestroyContext();
    }
}