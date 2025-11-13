const openModal = document.querySelector(".openModal");
const modalBg = document.querySelector(".modal-background");
const closeIcon = document.querySelector(".close-icon");
const closeBtn = document.querySelector(".close");

openModal.addEventListener("click", () => {
  modalBg.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  modalBg.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  modalBg.style.display = "none";
});

modalBg.addEventListener("click", (e) => {
  if (e.target === modalBg) modalBg.style.display = "none";
});
