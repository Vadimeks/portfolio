function loadSection(id, filePath, callback) {
  fetch(filePath)
    .then(response => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // Запускаем код пасля загрузкі
    })
    .catch(error => console.error(`Could not load ${filePath}:`, error));
}

document.addEventListener('DOMContentLoaded', () => {
  loadSection('header', './src/partials/header.html');
  loadSection('hero', './src/partials/hero.html');
  loadSection('about', './src/partials/about.html');
  loadSection('team', './src/partials/team.html');
  loadSection('portfolio', './src/partials/portfolio.html');
  loadSection('footer', './src/partials/footer.html', () => {
    console.log('Усе секцыі загружаны, ініцыялізую скрыпты...');
    initScripts(); // Запуск modal.js і menu.js пасля загрузкі HTML
  });
});

// Функцыя ініцыялізацыі modal.js і menu.js
function initScripts() {
  const scriptModal = document.createElement('script');
  scriptModal.src = './src/js/modal.js';
  document.body.appendChild(scriptModal);

  const scriptMenu = document.createElement('script');
  scriptMenu.src = './src/js/menu.js';
  document.body.appendChild(scriptMenu);
}
