function loadSection(id, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(`Could not load ${filePath}:`, error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadSection('header', './src/partials/header.html');
  loadSection('hero', './src/partials/hero.html');
  loadSection('about', './src/partials/about.html');
  loadSection('team', './src/partials/team.html');
  loadSection('portfolio', './src/partials/portfolio.html');
  loadSection('footer', './src/partials/footer.html');
});
