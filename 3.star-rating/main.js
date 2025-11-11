const stars = document.querySelectorAll(".star");
const selectedRatingValueText = document.querySelector(".selected-rating-value");
let currentTotalSelectedStars = 0;

function paint(n) {
  stars.forEach((s, i) => {
    if (i < n) s.classList.add('filled');
    else s.classList.remove('filled');
  });
}

stars.forEach((star, idx) => {
  const rating = idx + 1;
  star.dataset.rating = rating;

  star.addEventListener('mouseover', () => paint(rating));
  star.addEventListener('mouseout', () => paint(currentTotalSelectedStars));
  star.addEventListener('click', () => {
    currentTotalSelectedStars = rating;
    paint(currentTotalSelectedStars);
    if (selectedRatingValueText) selectedRatingValueText.textContent = currentTotalSelectedStars;
  });
});

