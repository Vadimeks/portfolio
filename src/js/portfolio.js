import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const projects = [
  {
    title: 'Adaptive Web Project Organic Vegetables',
    descriptionFront: 'Organic Vegetables',
    imageUrl: './img/portfolio/project-1@2x-mob.jpg',
    largeImageUrl: './img/portfolio/project-1@2x-tab.jpg',
    descriptionBack:
      'This is a modern web project designed to present organic vegetables through an adaptive web interface, ensuring a seamless experience for users on different devices. The first team project developed as part of our HTML & CSS course.',
    liveDemoUrl: 'https://vadimeks.github.io/devdreamers-project-01/',
  },
  {
    title: 'Adaptive Web Project WebStudio',
    descriptionFront: 'WebStudio',
    imageUrl: './img/portfolio/project-2@2x-mob.jpg',
    largeImageUrl: './img/portfolio/project-2@2x-tab.jpg',
    descriptionBack:
      'This is a project completed based on homework assignments during the HTML/CSS block for the Web Studio, which focuses on education and application development.',
    liveDemoUrl: 'https://vadimeks.github.io/goit-markup-hw-06/',
  },
  {
    title: 'Adaptive Web Project Portfolio',
    descriptionFront: 'Portfolio',
    imageUrl: './img/portfolio/project-3@2x-mob.jpg',
    largeImageUrl: './img/portfolio/project-3@2x-tab.jpg',
    descriptionBack:
      "This is my own project, which I did completely independently in parallel with my studies - for showcasing my work, as well as for reinforcing the skills I've acquired.",
    liveDemoUrl: 'https://vadimeks.github.io/portfolio/',
  },
  // Додайте сюди об'єкти для інших проєктів, якщо вони є
];

const portfolioList = document.querySelector('.portfolio-list');

function createProjectCard(project) {
  return `
    <li class="portfolio-item">
      <div class="portfolio-card">
        <div class="card-front">
          <h3 class="title-project">${project.title}</h3>
          <picture class="portfolio-pic">
            <img class="content-image" src="${project.imageUrl}" alt="${
    project.title
  }" data-large-src="${project.largeImageUrl}">
          </picture>
        </div>
        <div class="card-back">
          <h3 class="title-project">${project.title}</h3>
          <p class="text-project">${project.descriptionBack}</p>
          ${
            project.liveDemoUrl
              ? `<a href="${project.liveDemoUrl}" target="_blank" class="accent-link">Live Demo</a>`
              : ''
          }
        </div>
      </div>
    </li>
  `;
}

function renderProjects(projectsArray) {
  const projectsHTML = projectsArray
    .map(project => createProjectCard(project))
    .join('');
  portfolioList.innerHTML = projectsHTML;
}

// Викликаємо функцію рендерингу, передаючи їй масив projects
renderProjects(projects);

portfolioList.addEventListener('click', event => {
  const clickedElement = event.target;

  // Перевіряємо, чи клік був на заголовку проєкту (перевертання картки)
  if (clickedElement.classList.contains('title-project')) {
    const portfolioCard = clickedElement.closest('.portfolio-card');
    if (portfolioCard) {
      portfolioCard.classList.toggle('flipped');
    }
  }

  // Перевіряємо, чи клік був на описі проєкту (перевертання картки)
  if (clickedElement.classList.contains('text-project')) {
    const portfolioCard = clickedElement.closest('.portfolio-card');
    if (portfolioCard) {
      portfolioCard.classList.toggle('flipped');
    }
  }

  // Перевіряємо, чи клік був на зображенні (відкриття модального вікна)
  if (clickedElement.classList.contains('content-image')) {
    const largeImageUrl = clickedElement.dataset.largeSrc;
    const altText = clickedElement.alt;

    if (largeImageUrl) {
      const instance = basicLightbox.create(
        `<img src="${largeImageUrl}" alt="${altText}">`,
        {
          onShow: instance => {
            document.addEventListener('keydown', event => {
              if (event.key === 'Escape') {
                instance.close();
              }
            });
          },
        }
      );
      instance.show();
    }
  }
});
