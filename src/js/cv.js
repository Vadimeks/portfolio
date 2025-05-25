document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-button');
  const cvSections = document.querySelectorAll('.cv-eng, .cv-ua');

  // Функцыя для пераключэння мовы
  function switchLanguage(lang) {
    cvSections.forEach(section => {
      if (section.dataset.lang === lang) {
        section.classList.remove('is-hidden');
      } else {
        section.classList.add('is-hidden');
      }
    });

    langButtons.forEach(button => {
      if (button.dataset.lang === lang) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    // Захоўваем выбраную мову ў localStorage
    localStorage.setItem('selectedLang', lang);
  }

  // Праверка захаванай мовы пры загрузцы старонкі
  const savedLang = localStorage.getItem('selectedLang');
  if (savedLang) {
    switchLanguage(savedLang);
  } else {
    // Па змаўчанні паказваем англійскую версію
    switchLanguage('eng');
  }

  // Апрацоўшчыкі падзей для кнопак
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      switchLanguage(lang);
    });
  });
});
