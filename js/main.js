document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".role__bullets").forEach((el) => {
  el.style.setProperty("--bullets-height", el.scrollHeight + "px");
});
