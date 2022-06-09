import { generateRandomColor } from "./utilities.js";

const colorPickerEl = document.getElementById("color-picker");
const colorSchemeContainerEl = document.getElementById(
    "color-scheme-container"
);
const colorModeEl = document.getElementById("color-mode");
const headerEl = document.getElementById("header");

// display default scheme
displayColorScheme(colorPickerEl.value.slice(1), "monochrome");

/*-------------
Event Listeners
---------------*/

// listen for when a new scheme is requested
document.getElementById("get-scheme-btn").addEventListener("click", () => {
    displayColorScheme(colorPickerEl.value.slice(1));
});

// listen for when a randomized scheme is requested
document
    .getElementById("randomize-scheme-btn")
    .addEventListener("click", () => {
        displayColorScheme(generateRandomColor());
    });

window
    .matchMedia("screen and (max-width: 750px)")
    .addEventListener("change", (event) => {
        if (event.matches) {
            columnLayout();
        }
    });

window
    .matchMedia("screen and (min-width: 751px)")
    .addEventListener("change", (event) => {
        if (event.matches) {
            rowLayout();
        }
    });

const columnLayout = () => {
    document.getElementById(
        "spacer"
    ).style.height = `${headerEl.offsetHeight}px`;
    const colorBars = document.getElementsByClassName("color-bar");
    let barHeight =
        (colorSchemeContainerEl.offsetHeight - headerEl.offsetHeight) / 5;
    for (const bar of colorBars) {
        console.log(bar);
        bar.style.height = `${barHeight}px`;
    }
};

const rowLayout = () => {
    const colorBars = document.getElementsByClassName("color-bar");
    for (const bar of colorBars) {
        bar.style.height = `${colorSchemeContainerEl.offsetHeight}px`;
    }
};

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
                    <div class="color-bar" style="background-color:${color.hex.value};">
                        <p class= "text-color-bar" style="color:${textColor};">${color.hex.clean}<p>
                    </div>
                `;
            }
            let spacer = `
                <div id="spacer"></div>
            `;
            colorSchemeContainerEl.innerHTML = spacer + html;

            // determine the layout based on the width of the window
            window.innerWidth <= 750 ? columnLayout() : rowLayout();
        });
}
