function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const currentPosition = parseInt(dodger.style.left);
    const newPosition = Math.max(0, currentPosition - 1); // Adjust this value as needed
    dodger.style.left = newPosition + "px";
}

function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const currentPosition = parseInt(dodger.style.left);
    const newPosition = Math.min(360, currentPosition + 1); // Adjust this value as needed
    dodger.style.left = newPosition + "px";
}
