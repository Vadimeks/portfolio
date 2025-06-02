// src/js/language-switcher.js

import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-button');

  const langSections = document.querySelectorAll('[data-lang]:not(button)');

  let typedEngInstance = null;
  let typedUaInstance = null;

  function initTypedJs(lang) {
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
          'An aspiring Web Developer creating',
          ' modern web solutions. Ready',
          'Ready to be your next team player',
          'Generations of people are working jobs they hate',
          'just to buy stuff they dont need. (Fight Club)',
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
      typedUaElement.textContent = '';
      typedUaInstance = new Typed('#typed-text-ua', {
        strings: [
          'Веб-розробник-початківець, що створює сучасні веб-рішення. Готовий стати вашим наступним членом команди.',
          'Покоління за поколіннями люди працюють на ненависних роботах лише для того, щоб мати змогу купити те, що їм не потрібно. (Бійцівський клуб)',
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

  // Функцыя для пераключэння мовы (ВАША ІСНУЮЧАЯ ФУНКЦЫЯ)
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

    // !!! ВАЖНА: ДАДАЙЦЕ ГЭТЫ ВЫКЛІК У ВАШУ ФУНКЦЫЮ switchLanguage !!!
    initTypedJs(lang);
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
