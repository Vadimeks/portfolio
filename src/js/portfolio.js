import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const projects = [
  {
    title: 'Adaptive Web Project Organic Vegetables', // Поўны загаловак праекта
    descriptionFront: 'Organic Vegetables', // Кароткі загаловак для пярэдняга боку карткі (можа быць выдалены, калі не патрэбны)
    imageUrl: './img/portfolio/project-1-mob.jpg', // Мабільная выява (1x)
    imageUrlRetina: './img/portfolio/project-1@2x-mob.jpg', // Мабільная выява (2x)
    imageUrlTablet: './img/portfolio/project-1-tab.jpg', // Планшэтная выява (1x)
    imageUrlTabletRetina: './img/portfolio/project-1@2x-tab.jpg', // Планшэтная выява (2x)
    imageUrlDesktop: './img/portfolio/project-1-desk.jpg', // Дэсктопная выява (1x)
    imageUrlDesktopRetina: './img/portfolio/project-1@2x-desk.jpg', // Дэсктопная выява (2x)
    largeImageUrl: './img/portfolio/project-1-large.jpg', // Вялікая выява для SimpleLightbox
    description:
      'This is a modern web project designed to present organic vegetables through an adaptive web interface, ensuring a seamless experience for users on different devices. The first team project developed as part of our HTML & CSS course.', // Апісанне для адваротнага боку карткі
    liveDemoUrl: 'https://vadimeks.github.io/devdreamers-project-01/', // Спасылка на жывое дэма
    githubUrl: 'https://github.com/vadimeks/devdreamers-project-01', // Спасылка на GitHub (апцыянальна)
  },
  {
    title: 'Adaptive Web Project WebStudio',
    descriptionFront: 'WebStudio',
    imageUrl: './img/portfolio/project-2-mob.jpg',
    imageUrlRetina: './img/portfolio/project-2@2x-mob.jpg',
    imageUrlTablet: './img/portfolio/project-2-tab.jpg',
    imageUrlTabletRetina: './img/portfolio/project-2@2x-tab.jpg',
    imageUrlDesktop: './img/portfolio/project-2-desk.jpg',
    imageUrlDesktopRetina: './img/portfolio/project-2@2x-desk.jpg',
    largeImageUrl: './img/portfolio/project-2-large.jpg',
    description:
      'This is a project completed based on homework assignments during the HTML/CSS block for the Web Studio, which focuses on education and application development.',
    liveDemoUrl: 'https://vadimeks.github.io/goit-markup-hw-06/',
    githubUrl: 'https://github.com/vadimeks/goit-markup-hw-06',
  },
  {
    title: 'Adaptive Web Project Portfolio',
    descriptionFront: 'Portfolio',
    imageUrl: './img/portfolio/project-3-mob.jpg',
    imageUrlRetina: './img/portfolio/project-3@2x-mob.jpg',
    imageUrlTablet: './img/portfolio/project-3-tab.jpg',
    imageUrlTabletRetina: './img/portfolio/project-3@2x-tab.jpg',
    imageUrlDesktop: './img/portfolio/project-3-desk.jpg',
    imageUrlDesktopRetina: './img/portfolio/project-3@2x-desk.jpg',
    largeImageUrl: './img/portfolio/project-3-large.jpg',
    description:
      "This is my own project, which I did completely independently in parallel with my studies - for showcasing my work, as well as for reinforcing the skills I've acquired.",
    liveDemoUrl: 'https://vadimeks.github.io/portfolio/',
    githubUrl: 'https://github.com/vadimeks/portfolio',
  },
  {
    title: 'Adaptive Web Project Fresh Harvest (Example)',
    descriptionFront: 'Fresh Harvest',
    imageUrl: './img/portfolio/project-4-mob.jpg',
    imageUrlRetina: './img/portfolio/project-4@2x-mob.jpg',
    imageUrlTablet: './img/portfolio/project-4-tab.jpg',
    imageUrlTabletRetina: './img/portfolio/project-4@2x-tab.jpg',
    imageUrlDesktop: './img/portfolio/project-4-desk.jpg',
    imageUrlDesktopRetina: './img/portfolio/project-4@2x-desk.jpg',
    largeImageUrl: './img/portfolio/project-4-large.jpg',
    description:
      'A responsive website for a local farm, showcasing their fresh produce and sustainable practices. Built with modern HTML5, CSS3, and a touch of JavaScript for interactivity.',
    liveDemoUrl: 'https://example.com/fresh-harvest',
    githubUrl: 'https://github.com/your-repo/fresh-harvest',
  },
  {
    title: 'Adaptive Web Project Recipe App (Example)',
    descriptionFront: 'Recipe App',
    imageUrl: './img/portfolio/project-5-mob.jpg',
    imageUrlRetina: './img/portfolio/project-5@2x-mob.jpg',
    imageUrlTablet: './img/portfolio/project-5-tab.jpg',
    imageUrlTabletRetina: './img/portfolio/project-5@2x-tab.jpg',
    imageUrlDesktop: './img/portfolio/project-5-desk.jpg',
    imageUrlDesktopRetina: './img/portfolio/project-5@2x-desk.jpg',
    largeImageUrl: './img/portfolio/project-5-large.jpg',
    description:
      'A web application to discover and save recipes. Features dynamic searching and user authentication. Technologies: React, Node.js (Express), MongoDB.',
    liveDemoUrl: 'https://example.com/recipe-app',
    githubUrl: 'https://github.com/your-repo/recipe-app',
  },
  {
    title: 'Adaptive Web Project E-commerce Store (Example)',
    descriptionFront: 'E-commerce Store',
    imageUrl: './img/portfolio/project-6-mob.jpg',
    imageUrlRetina: './img/portfolio/project-6@2x-mob.jpg',
    imageUrlTablet: './img/portfolio/project-6-tab.jpg',
    imageUrlTabletRetina: './img/portfolio/project-6@2x-tab.jpg',
    imageUrlDesktop: './img/portfolio/project-6-desk.jpg',
    imageUrlDesktopRetina: './img/portfolio/project-6@2x-desk.jpg',
    largeImageUrl: './img/portfolio/project-6-large.jpg',
    description:
      'An online store for handcrafted goods. Implemented with Vue.js for the frontend and Firebase for backend services (authentication, database).',
    liveDemoUrl: 'https://example.com/e-store',
    githubUrl: 'https://github.com/your-repo/e-store',
  },
  {
    title: 'Adaptive Web Project Landing Page (Example)',
    descriptionFront: 'Modern Landing',
    imageUrl: './img/portfolio/project-7-mob.jpg',
    imageUrlRetina: './img/portfolio/project-7@2x-mob.jpg',
    imageUrlTablet: './img/portfolio/project-7-tab.jpg',
    imageUrlTabletRetina: './img/portfolio/project-7@2x-tab.jpg',
    imageUrlDesktop: './img/portfolio/project-7-desk.jpg',
    imageUrlDesktopRetina: './img/portfolio/project-7@2x-desk.jpg',
    largeImageUrl: './img/portfolio/project-7-large.jpg',
    description:
      'A sleek, responsive landing page for a SaaS product, designed to convert visitors into leads. Features interactive elements and a clean, minimalist design.',
    liveDemoUrl: 'https://example.com/landing-page',
    githubUrl: 'https://github.com/your-repo/landing-page',
  },
  {
    title: 'Adaptive Web Project Blog Platform (Example)',
    descriptionFront: 'Blog Platform',
    imageUrl: './img/portfolio/project-8-mob.jpg',
    imageUrlRetina: './img/portfolio/project-8@2x-mob.jpg',
    imageUrlTablet: './img/portfolio/project-8-tab.jpg',
    imageUrlTabletRetina: './img/portfolio/project-8@2x-tab.jpg',
    imageUrlDesktop: './img/portfolio/project-8-desk.jpg',
    imageUrlDesktopRetina: './img/portfolio/project-8@2x-desk.jpg',
    largeImageUrl: './img/portfolio/project-8-large.jpg',
    description:
      'A full-stack blog platform allowing users to create, edit, and publish articles. Backend in Python (Django) and frontend with Jinja templates and vanilla JS.',
    liveDemoUrl: 'https://example.com/blog-platform',
    githubUrl: 'https://github.com/your-repo/blog-platform',
  },
];

const portfolioList = document.querySelector('.portfolio-list');
const seeMoreButton = document.querySelector('.see-more-button');
let lightboxInstance = null;

function createProjectCard(project) {
  return `
    <li class="portfolio-item">
      <div class="portfolio-card">
        <a class="portfolio-image-link" href="${
          project.largeImageUrl
        }" data-caption="${project.title}: ${project.descriptionBack}">
          <picture class="portfolio-pic">
            <source media="(min-width: 1280px)" 
                    srcset="${project.imageUrlDesktop} 1x, ${
    project.imageUrlDesktopRetina
  } 2x">
            <source media="(min-width: 768px)" 
                    srcset="${project.imageUrlTablet} 1x, ${
    project.imageUrlTabletRetina
  } 2x">
            <source media="(max-width: 767px)" 
                    srcset="${project.imageUrl} 1x, ${
    project.imageUrlRetina
  } 2x">
            <img class="content-image" src="${project.imageUrl}" alt="${
    project.title
  }" loading="lazy">
          </picture>
        </a>
        
        <div class="portfolio-info-block">
          <h3 class="title-project">${
            project.title
          }</h3> <p class="text-project">${
    project.descriptionBack
  }</p> <div class="project-links">
            ${
              project.liveDemoUrl
                ? `<a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="project-button live-demo-btn">Live Demo</a>`
                : ''
            }
            ${
              project.githubUrl
                ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-button github-btn">GitHub</a>`
                : ''
            }
          </div>
        </div>
      </div>
    </li>
  `;
}

// Заўвага: На гэтым кроку функцыі рэндэрынгу і логіка кнопкі "See more"
// яшчэ не дададзены. Яны будуць дададзены на наступных кроках.
