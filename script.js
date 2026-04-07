const sensorZone = document.getElementById("sensorZone");
const doorArea = document.getElementById("doorArea");
const sensorLight = document.getElementById("sensor-light");
const statusText = document.getElementById("status");

let closeTimeout;

// Function to open door
function openDoor() {
    clearTimeout(closeTimeout);

    sensorLight.style.background = "green";
    statusText.textContent = "Status: Person Detected - Door Opening";
    doorArea.classList.add("open");
}

// Function to close door with delay
function closeDoor() {
    statusText.textContent = "Status: No Detection - Closing Soon...";

    closeTimeout = setTimeout(() => {
        doorArea.classList.remove("open");
        sensorLight.style.background = "red";
        statusText.textContent = "Status: Waiting for Detection...";
    }, 2000); // delay like real malls
}

// Detect entry (hover acts like sensor)
sensorZone.addEventListener("mouseenter", openDoor);

// Detect exit
sensorZone.addEventListener("mouseleave", closeDoor);