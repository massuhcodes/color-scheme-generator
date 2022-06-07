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

window.addEventListener("DOMContnetLoaded", (event) => {
    console.log(document.getElementById("spacer"));
    console.log("loaded");
});
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

// window
//     .matchMedia("screen and (max-width: 500px)")
//     .addEventListener("change", (event) => {
//         if (event.matches) {
//             columnLayout();
//         }
//     });

// window
//     .matchMedia("screen and (min-width: 501px)")
//     .addEventListener("change", (event) => {
//         if (event.matches) {
//             rowLayout();
//         }
//     });

// function columnLayout() {
//     document.getElementById(
//         "spacer"
//     ).style.height = `${headerEl.offsetHeight}px`;
//     let barHeight =
//         (colorSchemeContainerEl.offsetHeight - headerEl.offsetHeight) / 5;
//     const colorBars = document.getElementsByClassName("color-bar");
//     for (const bar of colorBars) {
//         bar.style.height = `${barHeight}px`;
//     }
// }

// function rowLayout() {
//     const colorBars = document.getElementsByClassName("color-bar");
//     for (const bar of colorBars) {
//         bar.style.height = `${colorSchemeContainerEl.offsetHeight}px`;
//     }
// }
