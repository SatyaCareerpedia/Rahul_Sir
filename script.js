const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeImage();
    panel.classList.add("active");
  });
});

const removeImage = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
