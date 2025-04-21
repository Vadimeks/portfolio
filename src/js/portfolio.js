document.addEventListener('DOMContentLoaded', adjustCardHeights);
window.addEventListener('resize', adjustCardHeights);

function adjustCardHeights() {
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  portfolioCards.forEach(card => {
    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');

    if (front && back) {
      const frontHeight = front.offsetHeight;
      const backHeight = back.offsetHeight;
      const maxHeight = Math.min(frontHeight, backHeight);

      card.style.height = `${maxHeight}px`;
    } else if (front) {
      card.style.height = `${front.offsetHeight}px`;
    } else if (back) {
      card.style.height = `${back.offsetHeight}px`;
    } else {
      card.style.height = 'auto';
    }
  });
}
document.addEventListener(
  'DOMContentLoaded',
  adjustCarouselButtonVerticalPosition
);
window.addEventListener('resize', adjustCarouselButtonVerticalPosition);

function adjustCarouselButtonVerticalPosition() {
  const carouselContainer = document.querySelector('.carousel-container');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  if (carouselContainer && prevButton && nextButton) {
    const containerHeight = carouselContainer.offsetHeight;
    const buttonHeight = prevButton.offsetHeight; // Висота обох кнопок має бути однаковою

    const verticalCenter = (containerHeight - buttonHeight) / 2;

    prevButton.style.top = `${verticalCenter}px`;
    nextButton.style.top = `${verticalCenter}px`;
  }
}
// Код для функціональності каруселі
document.addEventListener('DOMContentLoaded', initializeCarousel);

function initializeCarousel() {
  const carouselTrack = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (carouselTrack && prevButton && nextButton && portfolioItems.length > 0) {
    let currentIndex = 0;
    const itemWidth = portfolioItems[0].offsetWidth + 24; // Враховуємо margin-right

    function scrollToItem(index) {
      carouselTrack.style.transform = `translateX(-${index * itemWidth}px)`;
      currentIndex = index;
      updateButtonsVisibility();
    }

    function updateButtonsVisibility() {
      prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
      nextButton.style.display =
        currentIndex === portfolioItems.length - 1 ? 'none' : 'block';
    }

    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToItem(currentIndex - 1);
      }
    });

    nextButton.addEventListener('click', () => {
      if (currentIndex < portfolioItems.length - 1) {
        scrollToItem(currentIndex + 1);
      }
    });

    // Початкове відображення кнопок
    updateButtonsVisibility();
  }
}
