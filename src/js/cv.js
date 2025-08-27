document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.cv-accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.dataset.target;
      const content = document.getElementById(targetId);

      if (content) {
        content.classList.toggle('is-collapsed');
        header.classList.toggle('is-active');
        if (!content.classList.contains('is-collapsed')) {
          header.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });
  document.querySelectorAll('.cv-content').forEach(content => {
    if (content.id === 'eng-profile-content') {
      content.classList.remove('is-collapsed');
      const header = document.querySelector(
        `.cv-accordion-header[data-target="${content.id}"]`
      );
      if (header) header.classList.add('is-active');
    } else if (content.id === 'ua-profile-content') {
      content.classList.remove('is-collapsed');
      const header = document.querySelector(
        `.cv-accordion-header[data-target="${content.id}"]`
      );
      if (header) header.classList.add('is-active');
    } else {
      if (!content.classList.contains('is-collapsed')) {
        content.classList.add('is-collapsed');
      }
      const header = document.querySelector(
        `.cv-accordion-header[data-target="${content.id}"]`
      );
      if (header) header.classList.remove('is-active');
    }
  });
});
