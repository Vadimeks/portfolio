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

// English projects

const projectsEn = [
  {
    title: '🎵 ArtistsHub - Music Discovery Platform',
    descriptionFront: 'Music Discovery Platform',
    imageUrl: getImageUrl('project-4-mob.webp'),
    imageUrlRetina: getImageUrl('project-4@2x-mob.webp'),
    imageUrlTablet: getImageUrl('project-4-tab.webp'),
    imageUrlTabletRetina: getImageUrl('project-4@2x-tab.webp'),
    imageUrlDesktop: getImageUrl('project-4-min.webp'),
    imageUrlDesktopRetina: getImageUrl('project-4-min.webp'),
    largeImageUrl: getImageUrl('project-4-min.webp'),
    description:
      'ArtistsHub is a dynamic web platform created to help users discover music and explore detailed information about artists and bands through a sleek and adaptive interface. This is a first team project developed during our JavaScript course. <br><strong>Stack:</strong> HTML5, CSS3, JavaScript, GitHub, Vite, Trello, Figma, Swiper, Css-star-rating, Axios',
    liveDemoUrl: 'https://vadimeks.github.io/script-ninjas-project/',
    githubUrl: 'https://github.com/Vadimeks/script-ninjas-project',
  },
  {
    title: 'Adaptive Web Project Organic Vegetables',
    descriptionFront: 'Organic Vegetables',
    imageUrl: getImageUrl('project-1-mob.jpg'),
    imageUrlRetina: getImageUrl('project-1@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-1-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-1@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-1-min.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-1-min.jpg'),
    largeImageUrl: getImageUrl('project-1-min.jpg'),
    description:
      'This is a modern web project designed to present organic vegetables through an adaptive web interface, ensuring a seamless experience for users on different devices. The first team project developed as part of our HTML & CSS course. <br><strong>Stack:</strong> HTML5, CSS3, JS, GitHub, Vite, Trello, Figma',
    liveDemoUrl: 'https://vadimeks.github.io/devdreamers-project-01/',
    githubUrl: 'https://github.com/vadimeks/devdreamers-project-01',
  },
  {
    title: 'Adaptive Web Project Portfolio',
    descriptionFront: 'Portfolio',
    imageUrl: getImageUrl('project-3-mob.jpg'),
    imageUrlRetina: getImageUrl('project-3@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-3-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-3@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-3-min.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-3-min.jpg'),
    largeImageUrl: getImageUrl('project-3-min.jpg'),
    description:
      "This is my own project, which I did completely independently in parallel with my studies - for showcasing my work, as well as for reinforcing the skills I've acquired. <br><strong>Stack:</strong> HTML5, CSS3, JavaScript, GitHub, Vite, Izitoast, Simplelightbox, Emailjs",
    liveDemoUrl: 'https://vadimeks.github.io/portfolio/',
    githubUrl: 'https://github.com/vadimeks/portfolio',
  },
  {
    title: 'Fading Storm Puzzle: Rush Game',
    descriptionFront: 'Fading Storm Puzzle: Rush Game',
    imageUrl: getImageUrl('project-5-mob.webp'),
    imageUrlRetina: getImageUrl('project-5@2x-mob.webp'),
    imageUrlTablet: getImageUrl('project-5-tab.webp'),
    imageUrlTabletRetina: getImageUrl('project-5@2x-tab.webp'),
    imageUrlDesktop: getImageUrl('project-5-min.webp'),
    imageUrlDesktopRetina: getImageUrl('project-5-min.webp'),
    largeImageUrl: getImageUrl('project-5-min.webp'),
    description:
      'This website serves as a dynamic and engaging presentation for "Fading Storm Puzzle: Rush Game," a mobile puzzle game that blends classic block-matching with fast-paced challenges. It\'s designed to showcase the game\'s features, unique gameplay mechanics, various game modes, and player testimonials. <br><strong>Stack:</strong> HTML5, CSS3, JavaScript, Swiper.js, iziToast, LocalStorage',
    liveDemoUrl: 'https://vadimeks.github.io/stp-9500/',
    githubUrl: 'https://github.com/Vadimeks/stp-9500',
  },
  {
    title: 'Adaptive Web Project WebStudio',
    descriptionFront: 'WebStudio',
    imageUrl: getImageUrl('project-2-mob.jpg'),
    imageUrlRetina: getImageUrl('project-2@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-2-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-2@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-2-min.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-2-min.jpg'),
    largeImageUrl: getImageUrl('project-2-min.jpg'),
    description:
      'This is a project completed based on homework assignments during the HTML/CSS block for the Web Studio, which focuses on education and application development. <br><strong>Stack:</strong> HTML5, CSS3, JavaScript, GitHub, Figma',
    liveDemoUrl: 'https://vadimeks.github.io/goit-markup-hw-06/',
    githubUrl: 'https://github.com/vadimeks/goit-markup-hw-06',
  },
  {
    title: 'YOUR PROJECT might be here',
    descriptionFront: 'YOUR PROJECT',
    imageUrl: getImageUrl('project-ex-mob.webp'),
    imageUrlRetina: getImageUrl('project-ex@2x-mob.webp'),
    imageUrlTablet: getImageUrl('project-ex-tab.webp'),
    imageUrlTabletRetina: getImageUrl('project-ex@2x-tab.webp'),
    imageUrlDesktop: getImageUrl('project-ex-min.webp'),
    imageUrlDesktopRetina: getImageUrl('project-ex-min.webp'),
    largeImageUrl: getImageUrl('project-ex-min.webp'),
    description:
      'Any website or web application for products or services — built with adaptive design and best practices using HTML, CSS, JavaScript, React, Next.js, and Node.js. <br>Just get in touch!',
    liveDemoUrl: 'https://vadimeks.github.io/portfolio/',
    githubUrl: 'https://github.com/Vadimeks',
  },
];

// Ukrainian projects
const projectsUa = [
  {
    title: '🎵 ArtistsHub - Music Discovery Platform',
    descriptionFront: 'Платформа для пошуку музики',
    imageUrl: getImageUrl('project-4-mob.webp'),
    imageUrlRetina: getImageUrl('project-4@2x-mob.webp'),
    imageUrlTablet: getImageUrl('project-4-tab.webp'),
    imageUrlTabletRetina: getImageUrl('project-4@2x-tab.webp'),
    imageUrlDesktop: getImageUrl('project-4-min.webp'),
    imageUrlDesktopRetina: getImageUrl('project-4-min.webp'),
    largeImageUrl: getImageUrl('project-4-min.webp'),
    description:
      'ArtistsHub — це динамічна веб-платформа для пошуку музики, яка допомагає користувачам відкривати нових артистів та гурти через стильний адаптивний інтерфейс. Перший командний проект під час курсу JavaScript. <br><strong>Стек:</strong> HTML5, CSS3, JavaScript, GitHub, Vite, Trello, Figma, Swiper, Css-star-rating, Axios',
    liveDemoUrl: 'https://vadimeks.github.io/script-ninjas-project/',
    githubUrl: 'https://github.com/Vadimeks/script-ninjas-project',
  },
  {
    title: 'Адаптивний веб-проект Organic Vegetables',
    descriptionFront: 'Organic Vegetables',
    imageUrl: getImageUrl('project-1-mob.jpg'),
    imageUrlRetina: getImageUrl('project-1@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-1-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-1@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-1-min.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-1-min.jpg'),
    largeImageUrl: getImageUrl('project-1-min.jpg'),
    description:
      'Сучасний веб-проект для презентації органічних овочів через адаптивний інтерфейс, що забезпечує комфорт користування на різних пристроях. Перший командний проект у рамках курсу HTML & CSS. <br><strong>Стек:</strong> HTML5, CSS3, JS, GitHub, Vite, Trello, Figma',
    liveDemoUrl: 'https://vadimeks.github.io/devdreamers-project-01/',
    githubUrl: 'https://github.com/vadimeks/devdreamers-project-01',
  },
  {
    title: 'Адаптивний веб-проект Portfolio',
    descriptionFront: 'Портфоліо',
    imageUrl: getImageUrl('project-3-mob.jpg'),
    imageUrlRetina: getImageUrl('project-3@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-3-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-3@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-3-min.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-3-min.jpg'),
    largeImageUrl: getImageUrl('project-3-min.jpg'),
    description:
      'Це мій власний проект, який я створював самостійно паралельно з навчанням — для презентації робіт та закріплення отриманих навичок. <br><strong>Стек:</strong> HTML5, CSS3, JavaScript, GitHub, Vite, Izitoast, Simplelightbox, Emailjs',
    liveDemoUrl: 'https://vadimeks.github.io/portfolio/',
    githubUrl: 'https://github.com/vadimeks/portfolio',
  },
  {
    title: 'Fading Storm Puzzle: Rush Game',
    descriptionFront: 'Fading Storm Puzzle: Rush Game',
    imageUrl: getImageUrl('project-5-mob.webp'),
    imageUrlRetina: getImageUrl('project-5@2x-mob.webp'),
    imageUrlTablet: getImageUrl('project-5-tab.webp'),
    imageUrlTabletRetina: getImageUrl('project-5@2x-tab.webp'),
    imageUrlDesktop: getImageUrl('project-5-min.webp'),
    imageUrlDesktopRetina: getImageUrl('project-5-min.webp'),
    largeImageUrl: getImageUrl('project-5-min.webp'),
    description:
      'Сайт для мобільної гри "Fading Storm Puzzle: Rush Game" — це динамічна презентація, що поєднує класичний блоковий пазл із швидкими викликами. Представляє механіку, режими гри та відгуки гравців. <br><strong>Стек:</strong> HTML5, CSS3, JavaScript, Swiper.js, iziToast, LocalStorage',
    liveDemoUrl: 'https://vadimeks.github.io/stp-9500/',
    githubUrl: 'https://github.com/Vadimeks/stp-9500',
  },
  {
    title: 'Адаптивний веб-проект WebStudio',
    descriptionFront: 'WebStudio',
    imageUrl: getImageUrl('project-2-mob.jpg'),
    imageUrlRetina: getImageUrl('project-2@2x-mob.jpg'),
    imageUrlTablet: getImageUrl('project-2-tab.jpg'),
    imageUrlTabletRetina: getImageUrl('project-2@2x-tab.jpg'),
    imageUrlDesktop: getImageUrl('project-2-min.jpg'),
    imageUrlDesktopRetina: getImageUrl('project-2-min.jpg'),
    largeImageUrl: getImageUrl('project-2-min.jpg'),
    description:
      'Проект виконано на основі домашніх завдань під час проходження блоку HTML/CSS (Web Studio) з акцентом на навчання та розробку додатків. <br><strong>Стек:</strong> HTML5, CSS3, JavaScript, GitHub, Figma',
    liveDemoUrl: 'https://vadimeks.github.io/goit-markup-hw-06/',
    githubUrl: 'https://github.com/vadimeks/goit-markup-hw-06',
  },
  {
    title: 'ВАШ ПРОЕКТ може бути тут',
    descriptionFront: 'ВАШ ПРОЕКТ',
    imageUrl: getImageUrl('project-ex-mob.webp'),
    imageUrlRetina: getImageUrl('project-ex@2x-mob.webp'),
    imageUrlTablet: getImageUrl('project-ex-tab.webp'),
    imageUrlTabletRetina: getImageUrl('project-ex@2x-tab.webp'),
    imageUrlDesktop: getImageUrl('project-ex-min.webp'),
    imageUrlDesktopRetina: getImageUrl('project-ex-min.webp'),
    largeImageUrl: getImageUrl('project-ex-min.webp'),
    description:
      'Будь-який веб-сайт чи веб-додаток для продукту або сервісу — з адаптивним дизайном і використанням кращих практик та технологій HTML, CSS, JavaScript, React, Next.js, Node.js. <br>Просто напишіть мені!',
    liveDemoUrl: 'https://vadimeks.github.io/portfolio/',
    githubUrl: 'https://github.com/Vadimeks',
  },
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

function getCurrentLang() {
  return localStorage.getItem('selectedLang') || 'eng';
}

function getCurrentProjects() {
  return getCurrentLang() === 'ua' ? projectsUa : projectsEn;
}

function createProjectCard(project) {
  return `
    <li class="portfolio-item">
      <div class="portfolio-card">
        <a class="portfolio-image-link" href="${project.largeImageUrl}">
          <picture class="portfolio-pic">
            <source media="(min-width: 1280px)" srcset="${
              project.imageUrlDesktop
            } 1x, ${project.imageUrlDesktopRetina} 2x">
            <source media="(min-width: 768px)" srcset="${
              project.imageUrlTablet
            } 1x, ${project.imageUrlTabletRetina} 2x">
            <source media="(max-width: 767px)" srcset="${
              project.imageUrl
            } 1x, ${project.imageUrlRetina} 2x">
            <img class="content-image" src="${project.imageUrl}" alt="${
    project.title
  }" data-caption="${project.title}<br>${project.description}" loading="lazy">
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
      captionType: 'html',
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

  const projects = getCurrentProjects();
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
      // REMOVE scrollIntoView for mobile usability!
      // portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      allPortfolioItems.forEach(item => {
        item.classList.remove('is-hidden-item');
      });
      portfolioToggleButton.classList.add('is-active');
    }

    initializeLightbox();
  });

  document.addEventListener('languageChanged', () => {
    renderAndManagePortfolio();
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderAndManagePortfolio();
    }, 200);
  });
});
