document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".role__bullets").forEach((el) => {
  el.style.setProperty("--bullets-height", el.scrollHeight + "px");
});

const hashTarget = document.getElementById(window.location.hash.slice(1));
if (hashTarget && hashTarget.tagName === "DETAILS") {
  hashTarget.open = true;
  hashTarget.scrollIntoView();
}
