import Typed from 'typed.js';

export function startTypedMultiline(elementId, strings, options = {}) {
  const parent = document.getElementById(elementId);
  if (!parent) return;

  let currentLine = 0;
  let cycleTimeoutId;

  const typedOptions = { ...options, loop: false };

  function typeNextLine() {
    if (currentLine >= strings.length) {
      if (options.loop) {
        cycleTimeoutId = setTimeout(
          function () {
            parent.textContent = '';
            currentLine = 0;
            typeNextLine();
          },
          options.loopDelay ? options.loopDelay : 2000
        );
      }
      return;
    }

    var lineSpan = document.createElement('div');
    lineSpan.className = 'typed-multiline-line';

    parent.appendChild(lineSpan);

    new Typed(lineSpan, {
      ...typedOptions,
      strings: [strings[currentLine]],
      showCursor: currentLine === strings.length - 1,
      onComplete: function () {
        currentLine = currentLine + 1;
        typeNextLine();
      },
    });
  }

  if (cycleTimeoutId) {
    clearTimeout(cycleTimeoutId);
  }
  parent.textContent = '';
  typeNextLine();
}

export function showTypedTextByLang(lang) {
  var baseOptions = {
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    startDelay: 500,
    loop: true, 
    loopDelay: 2000, 
    showCursor: true,
    cursorChar: '|',
  };

  var engNode = document.getElementById('typed-text-eng');
  if (engNode) {
    engNode.textContent = '';
  }
  var uaNode = document.getElementById('typed-text-ua');
  if (uaNode) {
    uaNode.textContent = '';
  }

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
      baseOptions
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
      baseOptions
    );
  }
}
