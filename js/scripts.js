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

// Array of image paths
const imageArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];


// Function to generate options for select list
function addList() {
  for (let i = 0; i < imageArray.length; i++) {
    let option = document.createElement('option');
    option.value = imageArray[i];
    option.text = 'Image ' + (i + 1);
    imageSelect.appendChild(option);
}
}

// Function to change the image based on selected option
function changeImage() {
  images.src = imageSelect.value;
}

// Immediately populate dropdown on page load
addList();

// Set default image
images.src = imageArray[0];

// Event listeners for buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Call addList function to populate the select options
addList();
