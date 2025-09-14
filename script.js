// Part 2: Functions

let globalMessage = "Hello from Global Scope!";

// Function with parameters & return value
function addNumbers(a, b) {
    return a + b;
}

// Function demonstrating local vs global scope
function showScopeExample() {
    let localMessage = "Hello from Local Scope!";
    console.log(globalMessage); // accessible
    console.log(localMessage);  // accessible only inside function
}

// Function to toggle a class (reusable)
function toggleClass(element, className) {
    element.classList.toggle(className);
}

// Run some test outputs
console.log("Sum of 5 + 7 =", addNumbers(5, 7));
showScopeExample();


// Part 3: CSS + JS

// Animate Box on Button Click
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
    toggleClass(animateBox, "active");
});

// Modal Logic
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});
