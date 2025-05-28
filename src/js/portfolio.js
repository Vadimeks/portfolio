import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function getImageUrl(name) {
  try {
    return new URL(`../img/portfolio/${name}`, import.meta.url).href;
  } catch (error) {
    console.error(`Error getting image URL for ${name}:`, error);
    return '';
  }
}

const projects = [
  {
    title: 'Adaptive Web Project Organic Vegetables',
    descriptionFront: 'Organic Vegetables',
    imageUrl: getImageUrl('project-1-mob.jpg'),
    imageUrlRetina: getImageUrl('project-1@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-1-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-1@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-1-tab.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-1@2x-tab.jpg'),
    largeImageUrl: getImageUrl('project-1@2x-tab.jpg'),
    description:
      'This is a modern web project designed to present organic vegetables through an adaptive web interface, ensuring a seamless experience for users on different devices. The first team project developed as part of our HTML & CSS course.',
    liveDemoUrl: 'https://vadimeks.github.io/devdreamers-project-01/',
    githubUrl: 'https://github.com/vadimeks/devdreamers-project-01',
  },
  {
    title: 'Adaptive Web Project WebStudio',
    descriptionFront: 'WebStudio',
    imageUrl: getImageUrl('project-2-mob.jpg'),
    imageUrlRetina: getImageUrl('project-2@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-2-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-2@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-2-tab.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-2@2x-tab.jpg'),
    largeImageUrl: getImageUrl('project-2@2x-tab.jpg'),
    description:
      'This is a project completed based on homework assignments during the HTML/CSS block for the Web Studio, which focuses on education and application development.',
    liveDemoUrl: 'https://vadimeks.github.io/goit-markup-hw-06/',
    githubUrl: 'https://github.com/vadimeks/goit-markup-hw-06',
  },
  {
    title: 'Adaptive Web Project Portfolio',
    descriptionFront: 'Portfolio',
    imageUrl: getImageUrl('project-3-mob.jpg'),
    imageUrlRetina: getImageUrl('project-3@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-3-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-3@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-3-tab.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-3@2x-tab.jpg'),
    largeImageUrl: getImageUrl('project-3@2x-tab.jpg'),
    description:
      "This is my own project, which I did completely independently in parallel with my studies - for showcasing my work, as well as for reinforcing the skills I've acquired.",
    liveDemoUrl: 'https://vadimeks.github.io/portfolio/',
    githubUrl: 'https://github.com/vadimeks/portfolio',
  },
  {
    title: 'Adaptive Web Project Fresh Harvest (Example)',
    descriptionFront: 'Fresh Harvest',
    imageUrl: getImageUrl('project-4-mob.jpg'),
    imageUrlRetina: getImageUrl('project-4@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-4-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-4@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-4-tab.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-4@2x-tab.jpg'),
    largeImageUrl: getImageUrl('project-4@2x-tab.jpg'),
    description:
      'A responsive website for a local farm, showcasing their fresh produce and sustainable practices. Built with modern HTML5, CSS3, and a touch of JavaScript for interactivity.',
    liveDemoUrl: 'https://example.com/fresh-harvest',
    githubUrl: 'https://github.com/your-repo/fresh-harvest',
  },
  // {
  //   title: 'Adaptive Web Project Recipe App (Example)',
  //   descriptionFront: 'Recipe App',
  //   imageUrl: getImageUrl('project-5-mob.jpg'),
  //   imageUrlRetina: getImageUrl('project-5@2x-mob.jpg'),
  //   imageUrlTablet: getImageUrl('project-5-tab.jpg'),
  //   imageUrlTabletRetina: getImageUrl('project-5@2x-tab.jpg'),
  //   imageUrlDesktop: getImageUrl('project-5-tab.jpg'),
  //   imageUrlDesktopRetina: getImageUrl('project-5@2x-tab.jpg'),
  //   largeImageUrl: getImageUrl('project-5@2x-tab.jpg'),
  //   description:
  //     'A web application to discover and save recipes. Features dynamic searching and user authentication. Technologies: React, Node.js (Express), MongoDB.',
  //   liveDemoUrl: 'https://example.com/recipe-app',
  //   githubUrl: 'https://github.com/your-repo/recipe-app',
  // },
  // {
  //   title: 'Adaptive Web Project E-commerce Store (Example)',
  //   descriptionFront: 'E-commerce Store',
  //   imageUrl: getImageUrl('project-6-mob.jpg'),
  //   imageUrlRetina: getImageUrl('project-6@2x-mob.jpg'),
  //   imageUrlTablet: getImageUrl('project-6-tab.jpg'),
  //   imageUrlTabletRetina: getImageUrl('project-6@2x-tab.jpg'),
  //   imageUrlDesktop: getImageUrl('project-6-tab.jpg'),
  //   imageUrlDesktopRetina: getImageUrl('project-6@2x-tab.jpg'),
  //   largeImageUrl: getImageUrl('project-6@2x-tab.jpg'),
  //   description:
  //     'An online store for handcrafted goods. Implemented with Vue.js for the frontend and Firebase for backend services (authentication, database).',
  //   liveDemoUrl: 'https://example.com/e-store',
  //   githubUrl: 'https://github.com/your-repo/e-store',
  // },
  // {
  //   title: 'Adaptive Web Project Landing Page (Example)',
  //   descriptionFront: 'Modern Landing',
  //   imageUrl: getImageUrl('project-7-mob.jpg'),
  //   imageUrlRetina: getImageUrl('project-7@2x-mob.jpg'),
  //   imageUrlTablet: getImageUrl('project-7-tab.jpg'),
  //   imageUrlTabletRetina: getImageUrl('project-7@2x-tab.jpg'),
  //   imageUrlDesktop: getImageUrl('project-7-tab.jpg'),
  //   imageUrlDesktopRetina: getImageUrl('project-7@2x-tab.jpg'),
  //   largeImageUrl: getImageUrl('project-7@2x-tab.jpg'),
  //   description:
  //     'A sleek, responsive landing page for a SaaS product, designed to convert visitors into leads. Features interactive elements and a clean, minimalist design.',
  //   liveDemoUrl: 'https://example.com/landing-page',
  //   githubUrl: 'https://github.com/your-repo/landing-page',
  // },
  // {
  //   title: 'Adaptive Web Project Blog Platform (Example)',
  //   descriptionFront: 'Blog Platform',
  //   imageUrl: getImageUrl('project-8-mob.jpg'),
  //   imageUrlRetina: getImageUrl('project-8@2x-mob.jpg'),
  //   imageUrlTablet: getImageUrl('project-8-tab.jpg'),
  //   imageUrlTabletRetina: getImageUrl('project-8@2x-tab.jpg'),
  //   imageUrlDesktop: getImageUrl('project-8-tab.jpg'),
  //   imageUrlDesktopRetina: getImageUrl('project-8@2x-tab.jpg'),
  //   largeImageUrl: getImageUrl('project-8@2x-tab.jpg'),
  //   description:
  //     'A full-stack blog platform allowing users to create, edit, and publish articles. Backend in Python (Django) and frontend with Jinja templates and vanilla JS.',
  //   liveDemoUrl: 'https://example.com/blog-platform',
  //   githubUrl: 'https://github.com/your-repo/blog-platform',
  // },
];

const portfolioList = document.querySelector('.portfolio-list');
const portfolioToggleButton = document.querySelector(
  '.portfolio-toggle-button'
);
const portfolioSection = document.getElementById('portfolio');

let lightboxInstance = null;

const INITIAL_PROJECTS_COUNT_MOBILE = 2;
const INITIAL_PROJECTS_COUNT_TABLET = 2;
const INITIAL_PROJECTS_COUNT_DESKTOP_MIN_WIDTH = 1280;
const INITIAL_PROJECTS_COUNT_DESKTOP = 2;

function createProjectCard(project) {
  return `
    <li class="portfolio-item">
      <div class="portfolio-card">
        <a class="portfolio-image-link" href="${
          project.largeImageUrl
        }" data-caption="${project.title}: ${project.description}">
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
          <h3 class="title-project">${project.title}</h3>
          <p class="text-project">${project.description}</p>
          <div class="project-links">
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

function getProjectsCountForCurrentBreakpoint() {
  const width = window.innerWidth;
  if (width >= INITIAL_PROJECTS_COUNT_DESKTOP_MIN_WIDTH) {
    return INITIAL_PROJECTS_COUNT_DESKTOP;
  } else if (width >= 768) {
    return INITIAL_PROJECTS_COUNT_TABLET;
  } else {
    return INITIAL_PROJECTS_COUNT_MOBILE;
  }
}

function initializeLightbox() {
  if (lightboxInstance) {
    lightboxInstance.destroy();
  }
  lightboxInstance = new SimpleLightbox(
    '.portfolio-list a.portfolio-image-link',
    {
      captionsData: 'data-caption',
      captionDelay: 250,
    }
  );
}

function renderAndManagePortfolio() {
  if (!portfolioList || !portfolioToggleButton || !portfolioSection) {
    console.warn(
      'One or more essential portfolio elements not found in DOM. Retrying on DOMContentLoaded.'
    );
    return;
  }

  const allProjectsHTML = projects.map(createProjectCard).join('');
  portfolioList.innerHTML = allProjectsHTML;

  const currentInitialCount = getProjectsCountForCurrentBreakpoint();
  const allPortfolioItems = portfolioList.querySelectorAll('.portfolio-item');

  if (projects.length <= currentInitialCount) {
    portfolioToggleButton.style.display = 'none';
    allPortfolioItems.forEach(item => {
      item.classList.remove('is-hidden-item');
    });
  } else {
    allPortfolioItems.forEach((item, index) => {
      if (index >= currentInitialCount) {
        item.classList.add('is-hidden-item');
      } else {
        item.classList.remove('is-hidden-item');
      }
    });
    portfolioToggleButton.style.display = 'flex';
    portfolioToggleButton.classList.remove('is-active');
  }

  initializeLightbox();
}

document.addEventListener('DOMContentLoaded', () => {
  if (!portfolioList || !portfolioToggleButton || !portfolioSection) {
    console.warn(
      'Portfolio elements (list, toggle button, or section) not found. Skipping portfolio JS initialization.'
    );
    return;
  }

  renderAndManagePortfolio();

  portfolioToggleButton.addEventListener('click', () => {
    const allPortfolioItems = portfolioList.querySelectorAll('.portfolio-item');
    const isCurrentlyExpanded =
      portfolioToggleButton.classList.contains('is-active');

    if (isCurrentlyExpanded) {
      const currentInitialCount = getProjectsCountForCurrentBreakpoint();
      allPortfolioItems.forEach((item, index) => {
        if (index >= currentInitialCount) {
          item.classList.add('is-hidden-item');
        }
      });
      portfolioToggleButton.classList.remove('is-active');
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      allPortfolioItems.forEach(item => {
        item.classList.remove('is-hidden-item');
      });
      portfolioToggleButton.classList.add('is-active');
    }

    initializeLightbox();
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderAndManagePortfolio();
    }, 200);
  });
});
