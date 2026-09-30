document.addEventListener("DOMContentLoaded", function () {
  const captions = document.querySelectorAll(".sidebar-primary-item p.caption");

  captions.forEach(function (caption) {
    const list = caption.nextElementSibling;
    if (!list || list.tagName !== "UL") return;

    // Add an arrow indicator
    const arrow = document.createElement("span");
    arrow.textContent = " ▾";
    arrow.style.fontSize = "0.8em";
    caption.querySelector(".caption-text").appendChild(arrow);

    caption.style.cursor = "pointer";

    caption.addEventListener("click", function () {
      const isHidden = list.style.display === "none";
      list.style.display = isHidden ? "" : "none";
      arrow.textContent = isHidden ? " ▾" : " ▸";
    });
  });
});