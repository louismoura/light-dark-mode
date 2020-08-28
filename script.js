const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        // Make Theme = Dark Mode
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        // Otherwise keep as Light Mode
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);