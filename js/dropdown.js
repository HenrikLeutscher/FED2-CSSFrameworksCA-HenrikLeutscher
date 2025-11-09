const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownButton = document.getElementById("dropdown-button");

// Shows dropdown when "Menu" has been clicked
dropdownButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
});

// Hides the dropdown when clicked outside
document.addEventListener("click", () => {
    dropdownMenu.classList.add("hidden");
});