// Toggle between light and dark mode
const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleThemeBtn.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});