document.addEventListener('DOMContentLoaded', () => {
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
