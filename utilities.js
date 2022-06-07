import { colorPickerEl, colorSchemeContainerEl, colorModeEl } from "./index.js";
export { displayColorScheme, generateRandomColor };

// display color scheme based on user-picked color (or randomized color) and mode
function displayColorScheme(seed) {
    const mode = colorModeEl.value;
    // fetch the scheme using an api
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}`)
        // convert the data from json
        .then((response) => response.json())
        // manipulate the data
        .then((data) => {
            let html = "";
            for (const color of data.colors) {
                const totalRGBValue = color.rgb.r + color.rgb.g + color.rgb.b;
                // 127 + 127 + 127 (the middle threshold)
                const midRGBValue = 381;
                const textColor =
                    totalRGBValue <= midRGBValue ? "white" : "black";
                html += `
                    <div class="color-bar" style="background-color:${color.hex.value};"><p class= "text-color-bar" style="color:${textColor};">${color.hex.clean}<p></div>
                `;
            }
            let spacer = `
                <div id="spacer"></div>
            `;
            colorSchemeContainerEl.innerHTML = spacer + html;
        });
}

// generate a random color in hex format
function generateRandomColor() {
    const characters = "0123456789ABCDEF";
    const maxLength = 6;
    let color = "";
    for (let i = 0; i < maxLength; i++) {
        color += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    colorPickerEl.value = "#" + color;
    return color;
}
