// Toggle between light and dark mode
const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleThemeBtn.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
