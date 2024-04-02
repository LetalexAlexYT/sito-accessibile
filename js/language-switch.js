document.addEventListener('DOMContentLoaded', function() {
    var switchLangButton = document.getElementById('switch-lang');

    switchLangButton.addEventListener('click', function() {
        var currentPath = window.location.pathname;
        if (currentPath.includes('/ita/')) {
            window.location.pathname = currentPath.replace('/ita/', '/en/');
        } else if (currentPath.includes('/en/')) {
            window.location.pathname = currentPath.replace('/en/', '/ita/');
        }
    });
});
