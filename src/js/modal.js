document.addEventListener('DOMContentLoaded', () => {
  // Скрыпт для мадальнага вакна
  const modal = document.querySelector('[data-modal]'); // Гэта .backdrop з data-modal

  // Пераканайцеся, што мадальнае вакно знойдзена
  if (modal) {
    const openBtns = document.querySelectorAll('[data-modal-open]'); // Кнопка 'Write me'
    const closeBtns = document.querySelectorAll('[data-modal-close]'); // Кнопка закрыцця мадальнага вакна
    const backdrop = document.querySelector('.backdrop'); // Сам backdrop (ужо знойдзены як modal)

    const modalNameInput = document.querySelector('.modal-input-name');
    const modalEmailInput = document.querySelector('.modal-input-email');
    const modalSendButton = document.querySelector('.modal-form-btn');
    // Важна: Цяпер шукаем '.modal-form', таму што мы змянілі клас у HTML
    const modalForm = document.querySelector('.modal-form');

    const toggleModal = () => modal.classList.toggle('is-open');

    // Адкрыццё мадальнага вакна
    openBtns.forEach(btn => btn.addEventListener('click', toggleModal));
    // Закрыццё мадальнага вакна праз кнопку
    closeBtns.forEach(btn => btn.addEventListener('click', toggleModal));

    // Закрыццё мадальнага вакна пры кліку па backdrop
    // 'modal' тут і ёсць '.backdrop', таму выкарыстоўваем 'modal'
    modal.addEventListener('click', e => {
      if (e.target === modal) toggleModal(); // Калі клікнулі менавіта па backdrop, а не па яго ўнутраных элементах
    });

    // Закрыццё мадальнага вакна пры націсканні Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        toggleModal();
      }
    });

    // ----- Логіка валідацыі формы ў мадальным акне -----
    // Праверка на існаванне інпутаў і кнопкі перад даданнем слухачоў
    if (modalNameInput && modalEmailInput && modalSendButton) {
      modalNameInput.addEventListener('input', validateModalInputs);
      modalEmailInput.addEventListener('input', validateModalInputs);
    }

    function validateModalInputs() {
      // Гэтая праверка на ўсялякі выпадак, калі кнопка чамусьці не знойдзена
      if (!modalSendButton) {
        console.warn(
          'Modal send button not found for validation. Validation will not enable/disable button.'
        );
        return;
      }
      const isModalNameValid = modalNameInput.checkValidity();
      const isModalEmailValid = modalEmailInput.checkValidity();

      if (isModalNameValid && isModalEmailValid) {
        modalSendButton.removeAttribute('disabled');
        modalSendButton.classList.add('active');
      } else {
        modalSendButton.setAttribute('disabled', 'true');
        modalSendButton.classList.remove('active');
      }
    }

    // ----- Апрацоўка адпраўкі формы ў мадальным акне -----
    // Праверка на існаванне формы перад даданнем слухача
    if (modalForm) {
      modalForm.addEventListener('submit', event => {
        event.preventDefault(); // Прадухіляем перазагрузку старонкі
        closeModal(); // Закрываем мадальнае акно
        setTimeout(() => {
          window.location.href = '/'; // Перанакіроўваем на галоўную старонку
        }, 1000); // Затрымка ў 1 секунду
      });
    }

    // Дапаможная функцыя для закрыцця мадальнага вакна (калі яна патрэбна асобна)
    function closeModal() {
      modal.classList.remove('is-open');
    }
  } else {
    console.error(
      'Modal element with data-modal not found. Modal functionality will not work.'
    );
  }
});
