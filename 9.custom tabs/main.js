const tabContainer = document.querySelector(".container");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".content");
tabContainer.addEventListener("click", (event) => {
  const btn = event.target.closest(".tab-button");
  if (!btn) return;
  const id = btn.dataset.id;
  if (!id) return;
  tabButtons.forEach((b) => b.classList.toggle("active", b === btn));
  tabContents.forEach((c) => c.classList.toggle("active", c.id === id));
});
