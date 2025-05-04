import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
  // Дадайце сюды аб'екты для іншых праектаў, калі яны ёсць
];

const portfolioList = document.querySelector('.portfolio-list');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselContainer = document.querySelector('.carousel-container');

function createProjectCard(project) {
  return `
    <li class="portfolio-item">
      <a class="portfolio-link" href="${project.largeImageUrl}" data-caption="${
    project.title
  }: ${project.descriptionBack}">
        <div class="portfolio-card">
          <div class="card-front">
            <h3 class="title-project">${project.title}</h3>
            <picture class="portfolio-pic">
              <img class="content-image" src="${project.imageUrl}" alt="${
    project.title
  }">
            </picture>
          </div>
          ${
            project.liveDemoUrl
              ? `<div class="project-link-container"><a href="${project.liveDemoUrl}" target="_blank" class="accent-link">Live Demo</a></div>`
              : ''
          }
        </div>
      </a>
    </li>
  `;
}

function renderProjects(projectsArray) {
  const projectsHTML = projectsArray
    .map(project => createProjectCard(project))
    .join('');
  portfolioList.innerHTML = projectsHTML;
}

renderProjects(projects);

// Ініцыялізацыя SimpleLightbox
const lightbox = new SimpleLightbox('.portfolio-list a', {
  captionsData: 'data-caption',
  captionDelay: 250,
});

// Карусель
let currentIndex = 0;
let itemWidth;

function updateCarousel() {
  itemWidth = portfolioList.offsetWidth / getItemsToShow();
  portfolioList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function getItemsToShow() {
  if (window.innerWidth < 768) {
    return 1; // Паказваць па адным на мабільных (можна змяніць на 2, калі хочаце)
  } else if (window.innerWidth < 1280) {
    return 2;
  } else {
    return 3;
  }
}

function scrollTo(direction) {
  const itemsToShow = getItemsToShow();
  currentIndex += direction;
  const totalPages = Math.ceil(projects.length / itemsToShow);

  if (currentIndex < 0) {
    currentIndex = totalPages - 1;
  } else if (currentIndex >= totalPages) {
    currentIndex = 0;
  }
  updateCarousel();
}

// Ініцыялізацыя каруселі
updateCarousel();
window.addEventListener('resize', updateCarousel);

prevButton.addEventListener('click', () => scrollTo(-1));
nextButton.addEventListener('click', () => scrollTo(1));

// Свайпы
let touchStartX = null;
let touchEndX = null;

portfolioList.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0].clientX;
});

portfolioList.addEventListener('touchend', event => {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchStartX - touchEndX > swipeThreshold) {
    scrollTo(1);
  }
  if (touchEndX - touchStartX > swipeThreshold) {
    scrollTo(-1);
  }
  touchStartX = null;
  touchEndX = null;
}

function toggleCarouselButtons() {
  prevButton.style.display = 'block';
  nextButton.style.display = 'block';
}

toggleCarouselButtons();
window.addEventListener('resize', toggleCarouselButtons);
