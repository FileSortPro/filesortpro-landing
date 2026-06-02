(function () {
  const STORAGE_KEY = 'filesort-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.checked = theme === 'light';
    const logoDark = document.getElementById('logo-dark');
    const logoLight = document.getElementById('logo-light');
    if (logoDark && logoLight) {
      logoDark.style.display = theme === 'dark' ? 'block' : 'none';
      logoLight.style.display = theme === 'light' ? 'block' : 'none';
    }
  }

  function initTheme() {
    const theme = getPreferredTheme();
    applyTheme(theme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('change', function () {
        const newTheme = this.checked ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);
      });
    }

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
