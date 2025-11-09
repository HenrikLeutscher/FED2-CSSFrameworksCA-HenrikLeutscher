const loginToggle = document.getElementById("login-toggle");
const registerToggle = document.getElementById("register-toggle");
const loginContent = document.getElementById("login-content");
const registerContent = document.getElementById("register-content");

loginToggle.addEventListener("click", () => {
  loginContent.style.display = "flex";
  registerContent.style.display = "none";
  document.title = "Login | Snazzy";
});

registerToggle.addEventListener("click", () => {
  registerContent.style.display = "flex";
  loginContent.style.display = "none";
  document.title = "Register | Snazzy";
});
