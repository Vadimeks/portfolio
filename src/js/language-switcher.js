// src/js/language-switcher.js
import { showTypedTextByLang } from './typed-text.js';

document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-button');
  const langSections = document.querySelectorAll('[data-lang]:not(button)');

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

    localStorage.setItem('selectedLang', lang);
    showTypedTextByLang(lang);
  }

  const savedLang = localStorage.getItem('selectedLang');
  if (savedLang) {
    switchLanguage(savedLang);
  } else {
    switchLanguage('eng');
  }

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      switchLanguage(lang);
    });
  });
});
