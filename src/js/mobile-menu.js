// mobile-menu.js
(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-menu-open]'),
    closeModalBtns: document.querySelectorAll('[data-menu-close]'),
    modalBackdrops: document.querySelectorAll('[data-menu]'),
    writeMeBtn: document.querySelector('.menu-writeme-btn'),
    modalWindow: document.querySelector('[data-modal]'),
    menuButtons: document.querySelectorAll('.btn-list-item'),
    header: document.querySelector('.header-section'),
  };

  if (refs.modalBackdrops.length > 0) {
    refs.openModalBtns.forEach(button => {
      button.addEventListener('click', toggleActiveMenu);
    });

    refs.closeModalBtns.forEach(button => {
      button.addEventListener('click', toggleActiveMenu);
    });
  }

  function toggleActiveMenu() {
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

  if (refs.writeMeBtn && refs.modalWindow && refs.modalBackdrops.length > 0) {
    refs.writeMeBtn.addEventListener('click', () => {
      refs.modalBackdrops.forEach(backdrop => {
        backdrop.classList.remove('is-open');
      });
      document.body.classList.remove('no-scroll');
      refs.modalWindow.classList.add('is-open');
      refs.modalWindow.style.zIndex = '300';
    });
  }

  refs.menuButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = button.getAttribute('data-scroll');
      if (targetId) {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
        });
      }
      refs.modalBackdrops.forEach(backdrop => {
        backdrop.classList.remove('is-open');
      });
      document.body.classList.remove('no-scroll');
    });
  });

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
