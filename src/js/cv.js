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
  const accordionHeaders = document.querySelectorAll('.cv-accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.dataset.target;
      const content = document.getElementById(targetId);

      if (content) {
        // Пераключаем клас 'is-collapsed' для змесціва (ЗМЕНЕНА)
        content.classList.toggle('is-collapsed');
        // Пераключаем клас 'is-active' для загалоўка (для павароту стрэлкі)
        header.classList.toggle('is-active');

        // Калі змесціва толькі што адкрылася, пракручваем да яго загалоўка
        if (!content.classList.contains('is-collapsed')) {
          // ЗМЕНЕНА
          header.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });

  // Ініцыялізацыя: пераканацца, што "Profile" заўсёды адкрыты па змаўчанні, астатнія - закрыты
  document.querySelectorAll('.cv-content').forEach(content => {
    // Для англійскай версіі
    if (content.id === 'eng-profile-content') {
      content.classList.remove('is-collapsed'); // ЗМЕНЕНА
      const header = document.querySelector(
        `.cv-accordion-header[data-target="${content.id}"]`
      );
      if (header) header.classList.add('is-active');
    }
    // Для ўкраінскай версіі
    else if (content.id === 'ua-profile-content') {
      content.classList.remove('is-collapsed'); // ЗМЕНЕНА
      const header = document.querySelector(
        `.cv-accordion-header[data-target="${content.id}"]`
      );
      if (header) header.classList.add('is-active');
    } else {
      // Для ўсіх астатніх, пераканаемся, што яны схаваныя
      if (!content.classList.contains('is-collapsed')) {
        // ЗМЕНЕНА
        content.classList.add('is-collapsed'); // ЗМЕНЕНА
      }
      const header = document.querySelector(
        `.cv-accordion-header[data-target="${content.id}"]`
      );
      if (header) header.classList.remove('is-active');
    }
  });
});
