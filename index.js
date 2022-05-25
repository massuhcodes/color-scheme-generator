import { displayColorScheme, generateRandomColor } from "./utilities.js";
export { colorPickerEl, colorSchemeContainerEl, colorModeEl };

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
    .matchMedia("screen and (max-width: 1000px)")
    .addEventListener("change", (event) => {
        if (event.matches) {
            colorSchemeContainerEl.style.paddingTop = `${headerEl.offsetHeight}px`;
            console.log(headerEl.offsetHeight);
            const colorBars = document.getElementsByClassName("color-bar");
            // for (const bar of colorBars) {
            //     bar.style.height = `${height}%`;
            // }
        } else {
            console.log("more than 1000px");
        }
    });
