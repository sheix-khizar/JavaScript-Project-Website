function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Update all dark mode icons
    const darkModeIcons = document.querySelectorAll('.dark-mode-icon');
    darkModeIcons.forEach(icon => {
      icon.innerHTML = isDarkMode
        ? '<i class="fas fa-sun text-yellow-400"></i>'
        : '<i class="fas fa-moon text-blue-800"></i>';
    });
  }

  function initializeDarkMode() {
    const darkModePreference = localStorage.getItem('darkMode');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldUseDark = darkModePreference === 'true' || (prefersDarkScheme && !darkModePreference);
    if (shouldUseDark) {
      document.body.classList.add('dark-mode');
    }

    // Set the correct icon on load
    const darkModeIcons = document.querySelectorAll('.dark-mode-icon');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeIcons.forEach(icon => {
      icon.innerHTML = isDark
        ? '<i class="fas fa-sun text-yellow-400"></i>'
        : '<i class="fas fa-moon text-blue-800"></i>';
    });

    // Add toggle events for both buttons
    const darkModeToggleDesktop = document.getElementById('dark-mode-toggle');
    const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');

    if (darkModeToggleDesktop) {
      darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
    }
    if (darkModeToggleMobile) {
      darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    }
  }

  document.addEventListener('DOMContentLoaded', initializeDarkMode);