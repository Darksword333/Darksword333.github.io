const toggle = document.getElementById('theme-toggle-checkbox');

// Fonction pour appliquer le thème visuellement
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  toggle.checked = (theme === 'light');
}

// Si un thème est enregistré dans localStorage, on l'applique
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  applyTheme(savedTheme);
} else {
  // Sinon on utilise le thème du système
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(systemTheme);
}

// Lorsqu'on clique sur le toggle, on change de thème et on le sauvegarde
toggle.addEventListener('change', () => {
  const newTheme = toggle.checked ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});
