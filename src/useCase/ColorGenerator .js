export function getRandomPastelColor() {
    // Define range of values for color components (excluding white and black)
    var r = Math.floor(Math.random() * 155) + 100; // 100-255
    var g = Math.floor(Math.random() * 155) + 100; // 100-255
    var b = Math.floor(Math.random() * 155) + 100; // 100-255

    // Combine color components into a hex color code
    var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

    // Adjust lightness/darkness of the color to make it softer
    var softColor = shadeColor(color, -5);

    //    console.log(softColor);
    return softColor;
}

function shadeColor(color, percent) {
    var num = parseInt(color.slice(1), 16);
    var amt = Math.round(2.55 * percent);
    var r = (num >> 16) + amt;
    var g = (num >> 8 & 0x00FF) + amt;
    var b = (num & 0x0000FF) + amt;
    r = Math.max(Math.min(255, r), 100).toString(16).padStart(2, '0'); // limit range to 100-255 to avoid black
    g = Math.max(Math.min(255, g), 100).toString(16).padStart(2, '0');
    b = Math.max(Math.min(255, b), 100).toString(16).padStart(2, '0');
    return "#" + r + g + b;
}
