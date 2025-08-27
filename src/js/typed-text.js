import Typed from 'typed.js';

export function startTypedMultiline(elementId, strings, options = {}) {
  let currentLine = 0;
  const parent = document.getElementById(elementId);
  if (!parent) return;

  function typeNextLine() {
    if (currentLine >= strings.length) {
      if (options.loop) {
        currentLine = 0;
        parent.textContent = '';
        typeNextLine();
      }
      return;
    }
    const lineSpan = document.createElement('div');
    lineSpan.className = 'typed-multiline-line';
    parent.appendChild(lineSpan);

    new Typed(lineSpan, {
      ...options,
      strings: [strings[currentLine]],
      showCursor: currentLine === strings.length - 1,
      onComplete: () => {
        currentLine++;
        typeNextLine();
      },
    });
  }

  parent.textContent = '';
  typeNextLine();
}

export function showTypedTextByLang(lang) {
  if (lang === 'eng') {
    startTypedMultiline(
      'typed-text-eng',
      [
        'An aspiring Web Developer,',
        'creating modern web solutions,',
        'Ready to be your next team player',
        '________________________________________________',
        'Generations of people are working jobs they hate',
        'just to buy stuff they dont need. (Fight Club)',
        '________________________________________________',
        '↓ Watch my CV ↓',
      ],
      {
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: false,
        showCursor: true,
        cursorChar: '|',
      }
    );
  } else if (lang === 'ua') {
    startTypedMultiline(
      'typed-text-ua',
      [
        'Веб-розробник-початківець,',
        'що створює сучасні веб-рішення,',
        'готовий стати вашим наступним членом команди.',
        '________________________________________________',
        'Покоління за поколіннями люди працюють на ненависних роботах лише для того,',
        'щоб мати змогу купити те, що їм не потрібно. (Бійцівський клуб)',
        '________________________________________________',
        '↓ Подивіться резюме. ↓',
      ],
      {
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: false,
        showCursor: true,
        cursorChar: '|',
      }
    );
  }
}
