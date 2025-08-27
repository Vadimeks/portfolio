import emailjs from '@emailjs/browser';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('4BnxjGWY1aTaotznr');

  const modal = document.querySelector('[data-modal]');

  if (modal) {
    const openBtns = document.querySelectorAll('[data-modal-open]');
    const closeBtns = document.querySelectorAll('[data-modal-close]');

    const modalNameInput = document.querySelector('.modal-input-name');
    const modalEmailInput = document.querySelector('.modal-input-email');
    const modalSendButton = document.querySelector('.modal-form-btn');
    const modalForm = document.querySelector('.modal-form');

    const toggleModal = () => modal.classList.toggle('is-open');

    openBtns.forEach(btn => btn.addEventListener('click', toggleModal));
    closeBtns.forEach(btn => btn.addEventListener('click', toggleModal));

    modal.addEventListener('click', e => {
      if (e.target === modal) toggleModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        toggleModal();
      }
    });

    if (modalNameInput && modalEmailInput && modalSendButton) {
      modalNameInput.addEventListener('input', validateModalInputs);
      modalEmailInput.addEventListener('input', validateModalInputs);
    }

    function validateModalInputs() {
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

    if (modalForm) {
      modalForm.addEventListener('submit', async event => {
        event.preventDefault();

        const formData = new FormData(modalForm);
        const templateParams = {
          user_name: formData.get('user-name'),
          email: formData.get('email'),
          form_textarea: formData.get('form-textarea'),
        };

        try {
          const ownerEmailResponse = await emailjs.send(
            'service_exkn3na',
            'template_liq63t9',
            templateParams
          );
          console.log(
            'Email to owner SUCCESS!',
            ownerEmailResponse.status,
            ownerEmailResponse.text
          );

          iziToast.success({
            title: 'Success!',
            message: 'Your message successfully sent! I will contact you soon.',
            position: 'topRight',
            timeout: 5000,
            color: 'green',
          });

          modalForm.reset();
          if (modalSendButton) {
            modalSendButton.setAttribute('disabled', 'true');
            modalSendButton.classList.remove('active');
          }

          closeModal();
        } catch (error) {
          console.error('FAILED to send email(s):', error);
          alert('Something went wrong. Please try later.');
        }
      });
    }

    function closeModal() {
      modal.classList.remove('is-open');
    }
  } else {
    console.error(
      'Modal element with data-modal not found. Modal functionality will not work.'
    );
  }
});
