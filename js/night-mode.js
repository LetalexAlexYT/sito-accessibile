const toggleSwitch = document.querySelector('#darkModeToggle');

// Add event listener for the switch
toggleSwitch.addEventListener('change', switchTheme, false);

// Function to switch theme
function switchTheme() {
    if (toggleSwitch.checked) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
}
