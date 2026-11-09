const $ = s => document.querySelector(s);
const categoryRU = {
  "Alkaline Earth Metal": "Щелочноземельный металл",
  "Alkali Metal": "Щелочной металл",
  "Post-Transition Metal": "Постпереходный металл",
  "Transition Metal": "Переходный металл",
  "Lanthanide": "Лантаноид",
  "Actinide": "Актиноид",
  "Noble Gas": "Благородный газ",
  "Halogen": "Галоген",
  "Metalloid": "Металлоид",
  "Nonmetal": "Неметалл",
  "Reactive Nonmetal": "Реактивный неметалл",
  "lanthanide": "Лантаноид",
  "actinide": "Актиноид"
};

const elementRU = {
  "Hydrogen": "Водород", "Helium": "Гелий", "Lithium": "Литий", "Beryllium": "Бериллий",
  "Boron": "Бор", "Carbon": "Углерод", "Nitrogen": "Азот", "Oxygen": "Кислород",
  "Fluorine": "Фтор", "Neon": "Неон", "Sodium": "Натрий", "Magnesium": "Магний",
  "Aluminium": "Алюминий", "Silicon": "Кремний", "Phosphorus": "Фосфор", "Sulfur": "Сера",
  "Chlorine": "Хлор", "Argon": "Аргон", "Potassium": "Калий", "Calcium": "Кальций",
  "Scandium": "Скандий", "Titanium": "Титан", "Vanadium": "Ванадий", "Chromium": "Хром",
  "Manganese": "Марганец", "Iron": "Железо", "Cobalt": "Кобальт", "Nickel": "Никель",
  "Copper": "Медь", "Zinc": "Цинк", "Gallium": "Галлий", "Germanium": "Германий",
  "Arsenic": "Мышьяк", "Selenium": "Селен", "Bromine": "Бром", "Krypton": "Криптон",
  "Rubidium": "Рубидий", "Strontium": "Стронций", "Yttrium": "Иттрий", "Zirconium": "Цирконий",
  "Niobium": "Ниобий", "Molybdenum": "Молибден", "Technetium": "Технеций", "Ruthenium": "Рутений",
  "Rhodium": "Родий", "Palladium": "Палладий", "Silver": "Серебро", "Cadmium": "Кадмий",
  "Indium": "Индий", "Tin": "Олово", "Antimony": "Сурьма", "Tellurium": "Теллур",
  "Iodine": "Иод", "Xenon": "Ксенон", "Cesium": "Цезий", "Barium": "Барий",
  "Lanthanum": "Лантан", "Cerium": "Церий", "Praseodymium": "Празеодим", "Neodymium": "Неодим",
  "Promethium": "Прометий", "Samarium": "Самарий", "Europium": "Европий", "Gadolinium": "Гадолиний",
  "Terbium": "Тербий", "Dysprosium": "Диспрозий", "Holmium": "Гольмий", "Erbium": "Эрбий",
  "Thulium": "Тулий", "Ytterbium": "Иттербий", "Lutetium": "Лютеций", "Hafnium": "Гафний",
  "Tantalum": "Тантал", "Tungsten": "Вольфрам", "Rhenium": "Рений", "Osmium": "Осмий",
  "Iridium": "Иридий", "Platinum": "Платина", "Gold": "Золото", "Mercury": "Ртуть",
  "Thallium": "Таллий", "Lead": "Свинец", "Bismuth": "Висмут", "Polonium": "Полоний",
  "Astatine": "Астат", "Radon": "Радон", "Francium": "Франций", "Radium": "Радий",
  "Actinium": "Актиний", "Thorium": "Торий", "Protactinium": "Протактиний", "Uranium": "Уран",
  "Neptunium": "Нептуний", "Plutonium": "Плутоний", "Americium": "Америций", "Curium": "Кюрий",
  "Berkelium": "Берклий", "Californium": "Калифорний", "Einsteinium": "Эйнштейний", "Fermium": "Фермий",
  "Mendelevium": "Менделевий", "Nobelium": "Нобелий", "Lawrencium": "Лоуренсий", "Rutherfordium": "Резерфордий",
  "Dubnium": "Дубний", "Seaborgium": "Сиборгий", "Bohrium": "Борий", "Hassium": "Хассий",
  "Meitnerium": "Мейтнерий", "Darmstadtium": "Дармштадтий", "Roentgenium": "Рентгений", "Copernicium": "Коперниций",
  "Nihonium": "Нихоний", "Flerovium": "Флеровий", "Moscovium": "Московий", "Livermorium": "Ливерморий",
  "Tennessine": "Теннессин", "Oganesson": "Оганесон"
};

const cluesRU = {
  "At room temperature, I am a": "При комнатной температуре я —",
  "I am in the": "Я нахожусь в",
  "period": "периоде",
  "group": "группе",
  "block.": "блоке.",
  "My density is": "Моя плотность —",
  "My melting point is": "Моя температура плавления —",
  "My boiling point is": "Моя температура кипения —",
  "My electronegativity is": "Моя электроотрицательность —",
  "g/cm³.": "г/см³.",
  "K.": "K.",
  "Solid.": "Твёрдое.",
  "Liquid.": "Жидкое.",
  "Gas.": "Газообразное."
};

function translateText(text) {
  if (!text) return text;
  let q = text;
  if (categoryRU[q]) return categoryRU[q];
  if (categoryRU[q.trim()]) return categoryRU[q.trim()];

  if (q === "Which element am I?") q = "Какой это элемент?";
  else if (q.startsWith("What category does")) {
    const el = q.replace("What category does ", "").replace(" belong to?", "");
    q = `К какой категории относится ${translateElements(el)}?`;
  } else if (q.startsWith("What is the atomic number of")) {
    const el = q.replace("What is the atomic number of ", "").replace("?", "");
    q = `Каков атомный номер у ${translateElements(el)}?`;
  } else if (q.startsWith("What is the atomic mass of")) {
    const el = q.replace("What is the atomic mass of ", "").replace("?", "");
    q = `Какова атомная масса у ${translateElements(el)}?`;
  } else if (q.startsWith("What is the symbol for")) {
    const el = q.replace("What is the symbol for ", "").replace("?", "");
    q = `Каков химический символ у ${translateElements(el)}?`;
  } else if (q.startsWith("What element has the symbol")) {
    const sym = q.replace("What element has the symbol ", "").replace("?", "");
    q = `У какого элемента символ ${sym}?`;
  } else if (q.startsWith("What element has atomic number")) {
    const num = q.replace("What element has atomic number ", "").replace("?", "");
    q = `У какого элемента атомный номер ${num}?`;
  } else {
    q = translateElements(q);
  }
  return q;
}

function translateElements(text) {
  let res = text;
  for (const [en, ru] of Object.entries(elementRU)) {
    res = res.replace(new RegExp(`\\b${en}\\b`, 'g'), ru);
  }
  return res;
}

function translateClue(clue) {
  let res = translateElements(clue);
  res = res.replace(/^At room temperature, I am a (.*?)\.$/, (match, state) => {
    const states = { "Solid": "твёрдое вещество", "Liquid": "жидкость", "Gas": "газ" };
    return `При комнатной температуре я — ${states[state] || state}`;
  });
  res = res.replace(/^I am in the (.*?)\.$/, (match, block) => {
    const blocks = { "s-block": "s-блоке", "p-block": "p-блоке", "d-block": "d-блоке", "f-block": "f-блоке" };
    return `Я нахожусь в ${blocks[block] || block}`;
  });
  res = res.replace(/^I am in period (.*?), group (.*?)\.$/, "Я нахожусь в периоде $1, группе $2");
  res = res.replace(/^My density is (.*?) g\/cm³\.$/, "Моя плотность — $1 г/см³");
  res = res.replace(/^My melting point is (.*?) K\.$/, "Моя температура плавления — $1 K");
  res = res.replace(/^My boiling point is (.*?) K\.$/, "Моя температура кипения — $1 K");
  res = res.replace(/^My electronegativity is (.*?)\.$/, "Моя электроотрицательность — $1");
  return res.replace(/\.$/, '').trim();
}

const views = { menu: $('#menu'), quiz: $('#quiz'), daily: $('#daily'), finder: $('#finder'), random: $('#random') };let streak = 0;
let timerId = null;
let highScore = parseInt(localStorage.getItem('chemHighScore')) || 0;

let currentView = 'menu';
let currentElement = null;
let showSummary = false;
let favorites = JSON.parse(localStorage.getItem('chemFavs')) || [];

let localCount = 0;
let externalCount = 0;

let audioCtx;
function playSound(type) {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (type === 'correct') {
    osc.type = 'sine'; osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } else if (type === 'wrong') {
    osc.type = 'sawtooth'; osc.frequency.setValueAtTime(200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.start(); osc.stop(audioCtx.currentTime + 0.3);
  }
}

function show(name) {
  for (const v of Object.values(views)) v.hidden = true;
  views[name].hidden = false;
  currentView = name;
}

async function getJSON(path) {
  const isExternal = path.includes('/quiz') || path.includes('/daily');
  if (isExternal) {
    externalCount++;
    const extDiv = $('#api-external');
    if (extDiv) extDiv.textContent = `Запросы к API: ${externalCount}`;
  } else {
    localCount++;
    const localDiv = $('#api-limit');
    if (localDiv) localDiv.textContent = `Локальные запросы: ${localCount}`;
  }
  const r = await fetch('/api' + path);
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return r.json();
}

document.querySelectorAll('[data-back]').forEach(b => b.onclick = () => { show('menu'); currentElement = null; });

function acceptableAnswers(quiz, elements) {
  const set = new Set();
  if (quiz.answer != null) set.add(String(quiz.answer).trim().toLowerCase());
  const match = elements.find(el =>
    el.atomic_number === quiz.answer ||
    String(el.symbol).toLowerCase() === String(quiz.answer).toLowerCase() ||
    String(el.name).toLowerCase() === String(quiz.answer).toLowerCase()
  );
  if (match) {
    set.add(String(match.atomic_number).toLowerCase());
    set.add(String(match.symbol).trim().toLowerCase());
    set.add(String(match.name).trim().toLowerCase());
  }
  return { set, match };
}

function choiceMatches(choice, answers) {
  if (typeof choice === 'object' && choice !== null) {
    return ['atomic_number', 'symbol', 'name', 'label', 'value'].some(k =>
      choice[k] != null && answers.has(String(choice[k]).trim().toLowerCase())
    );
  }
  return answers.has(String(choice).trim().toLowerCase());
}

function formatChoice(choice) {
  if (typeof choice === 'object' && choice !== null) {
    return choice.label || choice.value || choice.name || choice.symbol || JSON.stringify(choice);
  }
  return String(choice);
}

function renderElementDossier(el) {
  currentElement = el;
  const nameRU = translateElements(el.name);
  const catRU = translateText(el.category) || 'н/д';
  const stateMap = { "solid": "Твёрдое", "liquid": "Жидкое", "gas": "Газообразное" };
  const rawState = el.state_at_room_temp ? String(el.state_at_room_temp).toLowerCase() : '';
  const state = stateMap[rawState] || el.state_at_room_temp || 'н/д';

  const mass = el.atomic_mass || 'н/д';
  const year = el.discovery_year || 'н/д';
  const density = el.density ? el.density + ' г/см³' : 'н/д';
  const melting = el.melting_point ? el.melting_point + ' K' : 'н/д';
  const boiling = el.boiling_point ? el.boiling_point + ' K' : 'н/д';
  const config = el.electron_configuration_semantic || 'н/д';

  let text = `${nameRU} (${el.symbol}) — №${el.atomic_number}\n` +
    `────────────────────────────\n` +
    `Атомная масса:   ${mass}\n` +
    `Категория:       ${catRU}\n` +
    `Фаза (20°C):     ${state}\n` +
    `Плотность:       ${density}\n` +
    `Т. плавления:    ${melting}\n` +
    `Т. кипения:      ${boiling}\n` +
    `Конфигурация:    ${config}\n` +
    `Год открытия:    ${year}`;

  if (showSummary && el.summary) text += `\n\n📖 Описание:\n${el.summary}`;
  return text;
}

async function loadQuiz() {
  const out = $('#quiz-out');
  const form = $('#quiz-form');
  const input = $('#quiz-input');
  const next = $('#quiz-next');
  const timerText = $('#timer-text');
  const scoreText = $('#score-text');

  if (timerId) clearInterval(timerId);
  scoreText.textContent = `🏆 Рекорд: ${highScore}`;
  form.hidden = true; next.hidden = true; input.value = '';
  out.textContent = 'Начинаю квест...';

  try {
    const [quiz, elements] = await Promise.all([getJSON('/quiz'), getJSON('/elements')]);
    let text = '';
    if (quiz.question === 'Which element am I?' && Array.isArray(quiz.clues)) {
      text += 'Подсказки:\n' + quiz.clues.map(c => '• ' + translateClue(c)).join('\n') + '\n\n';
    }
    text += translateText(quiz.question) + '\n';
    if (Array.isArray(quiz.choices)) {
      text += quiz.choices.map((c, i) => `${i + 1}. ${translateText(formatChoice(c))}`).join('\n');
    }
    out.textContent = text;

    const { set: answers, match } = acceptableAnswers(quiz, elements);
    const label = match ? `${translateElements(match.name)} (${match.symbol}, ${match.atomic_number})` : String(quiz.answer);

    let timeLeft = 15;
    timerText.textContent = `⏱️ ${timeLeft}с`; timerText.style.color = '#00e5ff';

    timerId = setInterval(() => {
      timeLeft--;
      timerText.textContent = `⏱️ ${timeLeft}с`;
      if (timeLeft <= 5) timerText.style.color = '#ff4d4d';
      if (timeLeft <= 0) {
        clearInterval(timerId);
        playSound('wrong');
        streak = 0;
        form.hidden = true; next.hidden = false;
        out.textContent = out.textContent.replace(/\n\n(✅|❌|⏰)[\s\S]*$/, '') + `\n\n⏰ Время вышло! Правильный ответ: ${label}\n💀 Стрик сброшен.`;
      }
    }, 1000);

    form.hidden = false; input.focus();

    form.onsubmit = (e) => {
      e.preventDefault();
      if (timerId) clearInterval(timerId);
      const idx = parseInt(input.value, 10);
      const valid = Number.isInteger(idx) && idx >= 1 && idx <= quiz.choices.length;
      const correct = valid && choiceMatches(quiz.choices[idx - 1], answers);

      if (!valid) {
        out.textContent = out.textContent.replace(/\n\n(✅|❌|⏰)[\s\S]*$/, '') + `\n\n⚠️ Введи номер от 1 до ${quiz.choices.length}.`;
        return;
      }

      if (correct) {
        playSound('correct');
        streak++;
        if (streak > highScore) {
          highScore = streak;
          localStorage.setItem('chemHighScore', highScore);
          scoreText.textContent = `🏆 Рекорд: ${highScore}`;
        }
        out.textContent += `\n\n✅ Победил! Ответ ${idx} — это ${label}\n🔥 Твой стрик: ${streak}`;
      } else {
        playSound('wrong');
        streak = 0;
        out.textContent += `\n\n❌ Неверно. Ты выбрал ${idx}. Правильный ответ: ${label}\n💀 Стрик сброшен.`;
      }
      form.hidden = true; next.hidden = false;
    };
  } catch (e) { out.textContent = 'Ошибка: ' + e.message; }
}

$('#btn-quiz').onclick = () => { show('quiz'); loadQuiz(); };
$('#quiz-next').onclick = () => loadQuiz();

$('#btn-daily').onclick = async () => {
  show('daily');
  const out = $('#daily-out');
  out.textContent = 'Загружаю данные...';
  try {
    const dailyInfo = await getJSON('/daily');
    const el = await getJSON('/element/' + dailyInfo.atomic_number);
    out.textContent = renderElementDossier(el) + `\n\n📅 День элемента: ${dailyInfo.date}`;
    // Сохраняем дату отдельно, чтобы при переключении описания она не терялась
    currentElement._dailyDate = dailyInfo.date;
  } catch (e) { out.textContent = 'Ошибка: ' + e.message; }
};

$('#btn-finder').onclick = () => { show('finder'); $('#finder-out').textContent = ''; currentElement = null; };

$('#finder-form').onsubmit = async (e) => {
  e.preventDefault();
  const type = $('#finder-type').value;
  const query = $('#finder-input').value.trim();
  const out = $('#finder-out');
  out.textContent = 'Ищу...';

  try {
    let el;
    if (type === 'number') {
      const n = parseInt(query, 10);
      if (isNaN(n)) throw new Error('Введите число');
      el = await getJSON('/element/' + n);
    } else {
      const elements = await getJSON('/elements');
      const match = elements.find(item => {
        if (type === 'name') return item.name.toLowerCase() === query.toLowerCase();
        if (type === 'symbol') return item.symbol.toLowerCase() === query.toLowerCase();
        return false;
      });
      if (!match) throw new Error('Не найдено');
      el = await getJSON('/element/' + match.atomic_number);
    }
    out.textContent = renderElementDossier(el);
  } catch (err) { out.textContent = 'Не найдено. Проверьте запрос.'; }
};

$('#btn-random').onclick = () => {
  show('random');
  $('#random-out').textContent = 'Выберите категорию и нажмите "Крутить рулетку".';
  currentElement = null;
};

$('#btn-roll-random').onclick = async () => {
  const out = $('#random-out');
  const category = $('#random-category').value;
  out.textContent = 'Ищу...';
  try {
    const elements = await getJSON('/elements');
    let pool = elements;
    if (category !== 'all') {
      pool = elements.filter(el => el.category && el.category.toLowerCase() === category.toLowerCase());
    }
    if (pool.length === 0) throw new Error('Нет элементов в этой категории');

    const randomEl = pool[Math.floor(Math.random() * pool.length)];
    const el = await getJSON('/element/' + randomEl.atomic_number);
    out.textContent = renderElementDossier(el);
  } catch (e) { out.textContent = 'Ошибка: ' + e.message; }
};

function toggleSummary() {
  showSummary = !showSummary;
  document.querySelectorAll('[id^="btn-toggle-summary"]').forEach(btn => {
    btn.textContent = showSummary ? '📖 Скрыть' : '📖 Описание';
  });

  if (currentElement) {
    if (currentView === 'finder') $('#finder-out').textContent = renderElementDossier(currentElement);
    if (currentView === 'random') $('#random-out').textContent = renderElementDossier(currentElement);
    if (currentView === 'daily') {
        const dateStr = currentElement._dailyDate ? `\n\n📅 День элемента: ${currentElement._dailyDate}` : '';
        $('#daily-out').textContent = renderElementDossier(currentElement) + dateStr;
    }
  }
}
$('#btn-toggle-summary-daily').onclick = toggleSummary;
$('#btn-toggle-summary-finder').onclick = toggleSummary;
$('#btn-toggle-summary-random').onclick = toggleSummary;

function updateFavoritesUI() {
  const list = $('#favorites-list');
  if (!list) return;
  list.innerHTML = '';

  if (favorites.length === 0) {
    list.innerHTML = '<li style="color: #8b919e; font-size: 0.85rem; cursor: default; border: none;">Список пуст</li>';
    return;
  }

  favorites.forEach(el => {
    const li = document.createElement('li');
    li.innerHTML = `<strong style="color: #00e5ff;">${el.symbol}</strong> — ${translateElements(el.name)}`;
    li.onclick = () => {
      show('finder');
      $('#finder-type').value = 'number';
      $('#finder-input').value = el.atomic_number;
      $('#finder-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    };
    list.appendChild(li);
  });
}

function saveToFavorites() {
  if (!currentElement) return alert('Сначала найдите элемент!');
  if (!favorites.some(f => f.atomic_number === currentElement.atomic_number)) {
    favorites.push(currentElement);
    localStorage.setItem('chemFavs', JSON.stringify(favorites));
    updateFavoritesUI();
  } else {
    alert(`Уже в избранном!`);
  }
}

$('#btn-save-fav-daily').onclick = saveToFavorites;
$('#btn-save-fav-finder').onclick = saveToFavorites;
$('#btn-save-fav-random').onclick = saveToFavorites;

$('#btn-clear-favs').onclick = () => {
  if (confirm('Точно очистить избранное?')) {
    favorites = [];
    localStorage.setItem('chemFavs', JSON.stringify(favorites));
    updateFavoritesUI();
  }
};

updateFavoritesUI();

document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});
