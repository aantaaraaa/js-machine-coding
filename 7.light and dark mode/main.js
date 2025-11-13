const changeThemeBtn = document.querySelector('.change-theme-btn');
const body = document.body;

changeThemeBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
});
