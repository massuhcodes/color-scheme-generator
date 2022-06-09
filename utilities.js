// generate a random color in hex format
export const generateRandomColor = () => {
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
};
