document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-button');

  const langSections = document.querySelectorAll('[data-lang]:not(button)');
  console.log('Элементы langSections пры DOMContentLoaded:', langSections); // ТУТ ПРАВЕРЦЕ
  // Функцыя для пераключэння мовы
  function switchLanguage(lang) {
    langSections.forEach(section => {
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
// src/js/language-switcher.js

import Typed from 'typed.js'; // Імпартуем бібліятэку Typed.js

(() => {
  const langButtons = document.querySelectorAll('.lang-btn');
  const langSections = document.querySelectorAll('[data-lang]'); // Выбіраем усе элементы з data-lang
  const savedLang = localStorage.getItem('selectedLang');

  let typedEngInstance = null; // Захоўваем экзэмпляр Typed.js для англійскай
  let typedUaInstance = null; // Захоўваем экзэмпляр Typed.js для ўкраінскай

  function initTypedJs(lang) {
    // Знішчаем папярэднія экзэмпляры, каб пазбегнуць дубліравання анімацый
    if (typedEngInstance) {
      typedEngInstance.destroy();
      typedEngInstance = null;
    }
    if (typedUaInstance) {
      typedUaInstance.destroy();
      typedUaInstance = null;
    }

    const typedEngElement = document.getElementById('typed-text-eng');
    const typedUaElement = document.getElementById('typed-text-ua');

    if (lang === 'eng' && typedEngElement) {
      typedEngElement.textContent = ''; // Ачышчаем элемент перад ініцыялізацыяй
      typedEngInstance = new Typed('#typed-text-eng', {
        strings: [
          'Aspiring Web Developer',
          'Creating modern web solutions',
          'Your next team player',
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
    } else if (lang === 'ua' && typedUaElement) {
      typedUaElement.textContent = ''; // Ачышчаем элемент перад ініцыялізацыяй
      typedUaInstance = new Typed('#typed-text-ua', {
        strings: [
          'Веб-розробник-початківець',
          'Створюю сучасні веб-рішення',
          'Ваш майбутній колега',
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
    }
  }

  function switchLanguage(selectedLang) {
    // Захоўваем абраную мову ў localStorage
    localStorage.setItem('selectedLang', selectedLang);

    langSections.forEach(section => {
      if (section.dataset.lang === selectedLang) {
        section.classList.remove('is-hidden');
      } else {
        section.classList.add('is-hidden');
      }
    });

    langButtons.forEach(button => {
      if (button.dataset.lang === selectedLang) {
        button.classList.add('is-active');
      } else {
        button.classList.remove('is-active');
      }
    });

    // !!! ВАЖНА: Выклікаем initTypedJs пасля змены мовы і бачнасці секцый !!!
    initTypedJs(selectedLang);
  }

  // Ініцыялізацыя мовы пры загрузцы старонкі
  if (savedLang) {
    switchLanguage(savedLang);
  } else {
    // Мова па змаўчанні - англійская
    switchLanguage('eng');
  }

  // Слухачы падзей для кнопак пераключэння мовы
  langButtons.forEach(button => {
    button.addEventListener('click', event => {
      const selectedLang = event.target.dataset.lang;
      switchLanguage(selectedLang);
    });
  });
})();
