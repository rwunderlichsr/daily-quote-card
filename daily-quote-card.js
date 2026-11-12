const QUOTES = [
  ["You have power over your mind, not outside events. Realize this, and you will find strength.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["The impediment to action advances action. What stands in the way becomes the way.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["Waste no more time arguing about what a good man should be. Be one.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["If it is not right, do not do it. If it is not true, do not say it.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["The happiness of your life depends upon the quality of your thoughts.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["Dwell on the beauty of life. Watch the stars, and see yourself running with them.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["The soul becomes dyed with the color of its thoughts.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["Very little is needed to make a happy life. It is all within yourself, in your way of thinking.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["The best revenge is not to become like the person who wronged you.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["Today I escaped anxiety. Or no, I discarded it, because it was within me.", "Marcus Aurelius", "Meditations", "Stoic"],
  ["We suffer more often in imagination than in reality.", "Seneca", "Letters to Lucilius", "Stoic"],
  ["It is not that we have a short time to live, but that we waste a great deal of it.", "Seneca", "On the Shortness of Life", "Stoic"],
  ["Begin at once to live, and count each separate day as a separate life.", "Seneca", "Letters to Lucilius", "Stoic"],
  ["Difficulties strengthen the mind, as labor does the body.", "Seneca", "Moral Letters", "Stoic"],
  ["As long as you live, keep learning how to live.", "Seneca", "Letters to Lucilius", "Stoic"],
  ["He who is brave is free.", "Seneca", "Moral Letters", "Stoic"],
  ["True happiness is to enjoy the present, without anxious dependence upon the future.", "Seneca", "On the Shortness of Life", "Stoic"],
  ["People are disturbed not by things, but by the views they take of them.", "Epictetus", "Enchiridion", "Stoic"],
  ["First say to yourself what you would be, and then do what you have to do.", "Epictetus", "Discourses", "Stoic"],
  ["No one is free who is not master of himself.", "Epictetus", "Discourses", "Stoic"],
  ["Make the best use of what is in your power, and take the rest as it happens.", "Epictetus", "Enchiridion", "Stoic"],
  ["If you want to improve, be content to be thought foolish and stupid.", "Epictetus", "Enchiridion", "Stoic"],
  ["Wealth consists not in having great possessions, but in having few wants.", "Epictetus", "Discourses", "Stoic"],
  ["Don't explain your philosophy. Embody it.", "Epictetus", "Discourses", "Stoic"],
  ["He is a wise man who does not grieve for the things he has not, but rejoices for those which he has.", "Epictetus", "Discourses", "Stoic"],
  ["If you accomplish something good with hard work, the labor passes quickly, but the good endures.", "Musonius Rufus", "Lectures", "Stoic"],
  ["The unexamined life is not worth living.", "Socrates", "Plato, Apology", "Famous"],
  ["The only true wisdom is in knowing you know nothing.", "Socrates", "Plato, Apology", "Famous"],
  ["It is the mark of an educated mind to be able to entertain a thought without accepting it.", "Aristotle", "attributed", "Famous"],
  ["We are what we repeatedly do. Excellence, then, is not an act but a habit.", "Will Durant", "on Aristotle", "Famous"],
  ["The beginning is the most important part of the work.", "Plato", "Republic", "Famous"],
  ["The mind is not a vessel to be filled, but a fire to be kindled.", "Plutarch", "On Listening", "Famous"],
  ["No man ever steps in the same river twice.", "Heraclitus", "Fragments", "Famous"],
  ["Character is destiny.", "Heraclitus", "Fragments", "Famous"],
  ["A journey of a thousand miles begins with a single step.", "Lao Tzu", "Tao Te Ching", "Famous"],
  ["Knowing others is intelligence. Knowing yourself is true wisdom.", "Lao Tzu", "Tao Te Ching", "Famous"],
  ["Is it not a pleasure, having learned something, to try it out at due intervals?", "Confucius", "Analects", "Famous"],
  ["They can because they think they can.", "Virgil", "Aeneid", "Famous"],
  ["Begin, be bold, and venture to be wise.", "Horace", "Epistles", "Famous"],
  ["Be patient and tough. Someday this pain will be useful to you.", "Ovid", "as later quoted", "Famous"],
  ["A room without books is like a body without a soul.", "Cicero", "attributed", "Famous"],
  ["The reading of all good books is like a conversation with the finest people of past centuries.", "René Descartes", "Discourse on Method", "Famous"],
  ["Knowledge is power.", "Francis Bacon", "Meditationes Sacrae", "Famous"],
  ["Well done is better than well said.", "Benjamin Franklin", "Poor Richard's Almanack", "Famous"],
  ["An investment in knowledge pays the best interest.", "Benjamin Franklin", "attributed", "Famous"],
  ["Whatever you are, be a good one.", "Abraham Lincoln", "attributed", "Famous"],
  ["If there is no struggle, there is no progress.", "Frederick Douglass", "West India Emancipation", "Famous"],
  ["Nothing ever comes to one, that is worth having, except as a result of hard work.", "Booker T. Washington", "Up from Slavery", "Famous"],
  ["Education is the key to unlock the golden door of freedom.", "George Washington Carver", "attributed", "Famous"],
  ["The way to right wrongs is to turn the light of truth upon them.", "Ida B. Wells", "speech", "Famous"],
  ["Truth is powerful and it prevails.", "Sojourner Truth", "attributed", "Famous"],
  ["I am still learning.", "Michelangelo", "at age 87", "Famous"],
  ["Learning never exhausts the mind.", "Leonardo da Vinci", "notebooks", "Famous"],
  ["If I have seen further, it is by standing on the shoulders of giants.", "Isaac Newton", "letter to Hooke", "Famous"],
  ["Chance favors only the prepared mind.", "Louis Pasteur", "lecture", "Famous"],
  ["I have not failed. I've just found ten thousand ways that won't work.", "Thomas Edison", "on the light bulb", "Famous"],
  ["Genius is one percent inspiration and ninety-nine percent perspiration.", "Thomas Edison", "interview", "Famous"],
  ["Nothing in life is to be feared. It is only to be understood.", "Marie Curie", "as recalled by her daughter", "Famous"],
  ["The important thing is not to stop questioning.", "Albert Einstein", "interview", "Famous"],
  ["In the middle of difficulty lies opportunity.", "Albert Einstein", "attributed", "Famous"],
  ["The first principle is that you must not fool yourself, and you are the easiest person to fool.", "Richard Feynman", "Cargo Cult Science", "Famous"],
  ["Somewhere, something incredible is waiting to be known.", "Carl Sagan", "interview", "Famous"],
  ["Knowing is not enough. We must apply. Willing is not enough. We must do.", "Johann Wolfgang von Goethe", "attributed", "Famous"],
  ["Doubt is not a pleasant condition, but certainty is absurd.", "Voltaire", "letter", "Famous"],
  ["The price of anything is the amount of life you exchange for it.", "Henry David Thoreau", "Walden", "Famous"],
  ["It is not enough to be busy. The question is: what are we busy about?", "Henry David Thoreau", "letter", "Famous"],
  ["Whoso would be a man must be a nonconformist.", "Ralph Waldo Emerson", "Self-Reliance", "Famous"],
  ["How wonderful it is that nobody need wait a single moment before starting to improve the world.", "Anne Frank", "diary", "Famous"],
  ["The fault, dear Brutus, is not in our stars, but in ourselves.", "William Shakespeare", "Julius Caesar", "Famous"],
  ["It is never too late to be what you might have been.", "George Eliot", "attributed", "Famous"],
  ["I am not afraid of storms, for I am learning how to sail my ship.", "Louisa May Alcott", "Little Women", "Famous"],
  ["You must do the thing you think you cannot do.", "Eleanor Roosevelt", "You Learn by Living", "Famous"],
  ["Do the best you can until you know better. Then when you know better, do better.", "Maya Angelou", "interview", "Famous"],
  ["Not everything that is faced can be changed, but nothing can be changed until it is faced.", "James Baldwin", "As Much Truth as One Can Bear", "Famous"],
  ["If you have some power, then your job is to empower somebody else.", "Toni Morrison", "interview", "Famous"],
  ["Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela", "speech", "Famous"],
  ["One child, one teacher, one book, and one pen can change the world.", "Malala Yousafzai", "United Nations speech", "Famous"],
  ["When we are no longer able to change a situation, we are challenged to change ourselves.", "Viktor Frankl", "Man's Search for Meaning", "Famous"],
  ["Attention is the rarest and purest form of generosity.", "Simone Weil", "letter", "Famous"],
  ["Teach your tongue to say I do not know, and you shall progress.", "Maimonides", "attributed", "Famous"],
  ["The future depends on what we do in the present.", "Mahatma Gandhi", "attributed", "Famous"],
  ["Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", "Rumi", "as commonly translated", "Famous"],
  ["In the midst of chaos, there is also opportunity.", "Sun Tzu", "The Art of War", "Famous"],
  ["Make each day your masterpiece.", "John Wooden", "coaching", "Famous"],
  ["I think one's feelings waste themselves in words. They ought to be distilled into actions which bring results.", "Florence Nightingale", "letter", "Famous"],
  ["Education must not simply teach work. It must teach life.", "W. E. B. Du Bois", "The Talented Tenth", "Famous"],
];

const STYLES = {
  serif: { label: "Classic serif", family: 'Georgia, "Iowan Old Style", "Palatino Linotype", Palatino, serif', style: "normal" },
  sans: { label: "Clean sans", family: 'system-ui, -apple-system, "Segoe UI", sans-serif', style: "normal" },
  humanist: { label: "Soft humanist", family: '"Avenir Next", "Segoe UI", "Gill Sans", "Trebuchet MS", sans-serif', style: "normal" },
  mono: { label: "Typewriter", family: 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace', style: "normal" },
  italic: { label: "Italic serif", family: 'Georgia, "Iowan Old Style", Palatino, serif', style: "italic" },
};

const DEFAULTS = {
  font_size: 32,
  font_style: "serif",
  background_color: "#f3ecdf",
  font_color: "#1c1915",
};

function esc(value) {
  return String(value)
    .split("\u0026").join("\u0026amp;")
    .split("<").join("\u0026lt;")
    .split(">").join("\u0026gt;")
    .split('"').join("\u0026quot;");
}

function safeSize(value) {
  const size = Number(value);
  if (!Number.isFinite(size)) return DEFAULTS.font_size;
  return Math.max(16, Math.min(72, Math.round(size)));
}

function safeStyle(value) {
  return Object.prototype.hasOwnProperty.call(STYLES, value) ? value : DEFAULTS.font_style;
}

function safeColor(value, fallback) {
  if (Array.isArray(value) && value.length >= 3) {
    const channels = value.slice(0, 3).map((part) => Math.max(0, Math.min(255, Math.round(Number(part)))));
    if (channels.every((part) => Number.isFinite(part))) return `rgb(${channels.join(", ")})`;
  }
  if (typeof value !== "string") return fallback;
  const color = value.trim();
  if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(color)) return color;
  if (/^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/.test(color)) return color;
  return fallback;
}

function quoteForToday() {
  const now = new Date();
  const start = Date.UTC(now.getFullYear(), 0, 0);
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const day = Math.floor((today - start) / 86400000);
  const index = ((day % QUOTES.length) + QUOTES.length) % QUOTES.length;
  const [text, author, work, kind] = QUOTES[index];
  return { text, author, work, kind, index };
}

class DailyQuoteCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = { ...DEFAULTS };
  }

  static getConfigForm() {
    return {
      schema: [
        {
          name: "font_size",
          label: "Font size",
          selector: { number: { min: 16, max: 72, step: 1, mode: "slider", unit_of_measurement: "px" } },
        },
        {
          name: "font_style",
          label: "Font style",
          selector: {
            select: {
              options: Object.entries(STYLES).map(([value, style]) => ({ value, label: style.label })),
            },
          },
        },
        { name: "background_color", label: "Background color", selector: { color_rgb: {} } },
        { name: "font_color", label: "Font color", selector: { color_rgb: {} } },
      ],
    };
  }

  static getStubConfig() {
    return { ...DEFAULTS };
  }

  setConfig(config) {
    this._config = { ...DEFAULTS, ...(config || {}) };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  getCardSize() {
    return 4;
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    const config = this._config || DEFAULTS;
    const size = safeSize(config.font_size);
    const style = STYLES[safeStyle(config.font_style)];
    const background = safeColor(config.background_color, DEFAULTS.background_color);
    const ink = safeColor(config.font_color, DEFAULTS.font_color);
    const quote = quoteForToday();
    const signature = `${quote.index}|${size}|${config.font_style}|${background}|${ink}`;
    if (signature === this._signature) return;
    this._signature = signature;
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card, .card {
          display: block;
          background: ${background};
          color: ${ink};
          border: none;
          border-radius: 18px;
          overflow: hidden;
        }
        .wrap { padding: 28px 24px 24px; }
        .kicker {
          margin: 0 0 18px;
          font-family: system-ui, sans-serif;
          font-size: 12px;
          font-weight: 650;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.62;
        }
        blockquote {
          margin: 0;
          font-family: ${style.family};
          font-style: ${style.style};
          font-weight: 520;
          font-size: ${size}px;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }
        .by {
          margin: 22px 0 0;
          font-family: system-ui, sans-serif;
          font-size: 15px;
          font-weight: 650;
        }
        .work {
          margin: 2px 0 0;
          font-family: system-ui, sans-serif;
          font-size: 13px;
          opacity: 0.7;
        }
      </style>
      <ha-card>
        <div class="wrap">
          <p class="kicker">Daily quote · ${esc(quote.kind)}</p>
          <blockquote>“${esc(quote.text)}”</blockquote>
          <p class="by">${esc(quote.author)}</p>
          <p class="work">${esc(quote.work)}</p>
        </div>
      </ha-card>`;
  }
}

if (!customElements.get("daily-quote-card")) {
  customElements.define("daily-quote-card", DailyQuoteCard);
}

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "daily-quote-card")) {
  window.customCards.push({
    type: "daily-quote-card",
    name: "Daily Quote",
    description: "One famous or Stoic quote a day, with your own type and colors.",
    preview: true,
  });
}
