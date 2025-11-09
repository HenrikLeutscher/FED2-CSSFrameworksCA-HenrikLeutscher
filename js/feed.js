const openCreatePostBtn = document.getElementById("openCreatePost");
const closeCreatePostBtn = document.getElementById("closeCreatePost");
const createPostWindow = document.getElementById("createPostWindow");

openCreatePostBtn.addEventListener("click", () => {
  createPostWindow.classList.remove("hidden");
  createPostWindow.classList.add("flex");
  document.title = "Create a Post | Snazzy";
});

closeCreatePostBtn.addEventListener("click", () => {
  createPostWindow.classList.add("hidden");
  createPostWindow.classList.remove("flex");
  document.title = "Feed | Snazzy";
});

document.addEventListener("click", (e) => {
  if (e.target === createPostWindow) {
    createPostWindow.classList.add("hidden");
    document.title = "Feed | Snazzy";
  }
});