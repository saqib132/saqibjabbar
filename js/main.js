document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".role__bullets").forEach((el) => {
  el.style.setProperty("--bullets-height", el.scrollHeight + "px");
});

const hashTarget = document.getElementById(window.location.hash.slice(1));
if (hashTarget && hashTarget.tagName === "DETAILS") {
  hashTarget.open = true;
  hashTarget.scrollIntoView();
}

const timeline = document.querySelector(".timeline");
if (timeline) {
  if ("IntersectionObserver" in window) {
    const lineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timeline.classList.add("in-view");
          lineObserver.disconnect();
        }
      });
    }, { threshold: 0.1 });
    lineObserver.observe(timeline);

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          itemObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll(".timeline__item").forEach((item) => itemObserver.observe(item));
  } else {
    timeline.classList.add("in-view");
    document.querySelectorAll(".timeline__item").forEach((item) => item.classList.add("in-view"));
  }
}

const journeyMap = document.querySelector(".journey-map");
if (journeyMap) {
  if ("IntersectionObserver" in window) {
    const mapObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          journeyMap.classList.add("in-view");
          mapObserver.disconnect();
        }
      });
    }, { threshold: 0.2 });
    mapObserver.observe(journeyMap);
  } else {
    journeyMap.classList.add("in-view");
  }
}

document.querySelectorAll(".case-video-thumb[data-video-id]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${btn.dataset.videoId}?autoplay=1`;
    iframe.title = "YouTube video player";
    iframe.className = "case-video-thumb__iframe";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
  });
});
