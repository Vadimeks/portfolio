// mobile-menu.js
(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-menu-open]'),
    closeModalBtns: document.querySelectorAll('[data-menu-close]'),
    // !!! ЗМЕНЕНА: Цяпер мы выбіраем УСЕ мадальныя бэкдропы !!!
    modalBackdrops: document.querySelectorAll('[data-menu]'),
    writeMeBtn: document.querySelector('.menu-writeme-btn'),
    modalWindow: document.querySelector('[data-modal]'), // Гэта, здаецца, іншае мадальнае акно, не меню
    menuButtons: document.querySelectorAll('.btn-list-item'),
    header: document.querySelector('.header-section'),
  };

  // Адкрыццё/закрыццё меню
  // Праверце, ці ёсць хоць адзін бэкдроп
  if (refs.modalBackdrops.length > 0) {
    // Дадаем слухач да КОЖНАЙ кнопкі адкрыцця
    refs.openModalBtns.forEach(button => {
      button.addEventListener('click', toggleActiveMenu);
    });

    // Дадаем слухач да КОЖНАЙ кнопкі закрыцця
    refs.closeModalBtns.forEach(button => {
      button.addEventListener('click', toggleActiveMenu);
    });
  }

  // !!! НОВАЯ ФУНКЦЫЯ: toggleActiveMenu - каб знайсці актыўны бэкдроп !!!
  function toggleActiveMenu() {
    // Знайсці актыўны бэкдроп (той, які НЕ мае клас 'is-hidden' ад language-switcher.js)
    let activeModal = null;
    refs.modalBackdrops.forEach(backdrop => {
      if (!backdrop.classList.contains('is-hidden')) {
        activeModal = backdrop;
      }
    });

    if (activeModal) {
      activeModal.classList.toggle('is-open');
      document.body.classList.toggle('no-scroll');
    }
  }

  // Логіка для кнопкі "Напісаць мне" ў меню
  if (refs.writeMeBtn && refs.modalWindow && refs.modalBackdrops.length > 0) {
    refs.writeMeBtn.addEventListener('click', () => {
      // Схаваць усе мабільныя меню, калі адкрываецца іншае мадальнае акно
      refs.modalBackdrops.forEach(backdrop => {
        backdrop.classList.remove('is-open');
      });
      document.body.classList.remove('no-scroll'); // Упэўніваемся, што скрол уключаны
      refs.modalWindow.classList.add('is-open');
      refs.modalWindow.style.zIndex = '300';
    });
  }

  // Дадаем падзею на кнопкі ў меню для скрола і закрыцця меню
  refs.menuButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = button.getAttribute('data-scroll');
      if (targetId) {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
        });
      }
      // Схаваць усе мабільныя меню пасля кліку на пункт меню
      refs.modalBackdrops.forEach(backdrop => {
        backdrop.classList.remove('is-open');
      });
      document.body.classList.remove('no-scroll');
    });
  });

  // Фіксацыя хедера пры скроле
  if (!refs.header) {
    console.error('⚠ Хедэр-секцыя не знойдзена! Правер клас у HTML.');
  } else {
    function checkScroll() {
      if (window.scrollY > 50) {
        refs.header.classList.add('fixed');
      } else {
        refs.header.classList.remove('fixed');
      }
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  }
})();
