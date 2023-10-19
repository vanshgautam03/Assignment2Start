// Constants for query selector
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const studentId = "My Student Id : 200544016";


// Function to change bg color from user input and add student id
function changeCustomColor() {
    const inputNumber = customNumberInput.value;
    const bgColor = getBackgroundColor(inputNumber);
    document.body.style.backgroundColor = bgColor;
    document.getElementById("myStudentId").textContent = studentId;
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomInput = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomInput; // Display the random number in the input field
    const bgColor = getBackgroundColor(randomInput);
    document.body.style.backgroundColor = bgColor;
    document.getElementById("myStudentId").textContent = studentId;
}

function getBackgroundColor(inputNumber) {
    if (inputNumber < 0 || inputNumber > 100) {
        return "red";
    } else if (inputNumber >= 0 && inputNumber <= 20) {
        return "green";
    } else if (inputNumber > 20 && inputNumber <= 40) {
        return "blue";
    } else if (inputNumber > 40 && inputNumber <= 60) {
        return "orange";
    } else if (inputNumber > 60 && inputNumber <= 80) {
        return "purple";
    } else if (inputNumber > 80 && inputNumber <= 100) {
        return "yellow";
    }
}

// Function to generate options for select list
function addList() {
    const imageOptions = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    for (let i = 0; i < imageOptions.length; i++) {
        const option = document.createElement("option");
        option.value = imageOptions[i]; // Set the value to the image filename
        option.textContent = `Image ${i + 1}`; // Display user-friendly text
        imageSelect.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `../img/${selectedImage}`; // Construct the image path
}

// Event listeners for buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Call addList function to populate the select options
addList();
