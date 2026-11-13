const QUOTES = [
  ["Begin the morning by saying to thyself: I shall meet with the busybody, the ungrateful, the arrogant, the deceitful, the envious, the unsocial.", "Marcus Aurelius", "Meditations II.1 · Long", "Stoic"],
  ["Every moment think steadily as a Roman and a man, to do what thou hast in hand with perfect and simple dignity, affection, freedom, and justice.", "Marcus Aurelius", "Meditations II.5 · Long", "Stoic"],
  ["Do every act of thy life as if it were the last, laying aside all carelessness and passionate aversion from the commands of reason.", "Marcus Aurelius", "Meditations II.5 · Long", "Stoic"],
  ["Though thou shouldst be going to live three thousand years, still remember that no man loses any other life than this which he now lives.", "Marcus Aurelius", "Meditations II.14 · Long", "Stoic"],
  ["Men seek retreats for themselves: houses in the country, sea-shores, and mountains. It is in thy power, whenever thou shalt choose, to retire into thyself.", "Marcus Aurelius", "Meditations IV.3 · Long", "Stoic"],
  ["Nowhere either with more quiet or more freedom from trouble does a man retire than into his own soul.", "Marcus Aurelius", "Meditations IV.3 · Long", "Stoic"],
  ["Take away thy opinion, and then there is taken away the complaint, I have been harmed. Take away the complaint, and the harm is taken away.", "Marcus Aurelius", "Meditations IV.7 · Long", "Stoic"],
  ["Do not act as if thou wert going to live ten thousand years. Death hangs over thee. While thou livest, while it is in thy power, be good.", "Marcus Aurelius", "Meditations IV.17 · Long", "Stoic"],
  ["Be like the promontory against which the waves continually break, but it stands firm and tames the fury of the water around it.", "Marcus Aurelius", "Meditations IV.49 · Long", "Stoic"],
  ["In the morning when thou risest unwillingly, let this thought be present: I am rising to the work of a human being.", "Marcus Aurelius", "Meditations V.1 · Long", "Stoic"],
  ["Such as are thy habitual thoughts, such also will be the character of thy mind; for the soul is dyed by the thoughts.", "Marcus Aurelius", "Meditations V.16 · Long", "Stoic"],
  ["The best way of avenging thyself is not to become like the wrongdoer.", "Marcus Aurelius", "Meditations VI.6 · Long", "Stoic"],
  ["Adapt thyself to the things with which thy lot has been cast, and love the men with whom thy lot has been cast, but do it truly.", "Marcus Aurelius", "Meditations VI.39 · Long", "Stoic"],
  ["What is not good for the swarm is not good for the bee.", "Marcus Aurelius", "Meditations VI.54 · Long", "Stoic"],
  ["The art of life is more like the wrestler's art than the dancer's: it should stand ready and firm to meet onsets that are sudden and unexpected.", "Marcus Aurelius", "Meditations VII.61 · Long", "Stoic"],
  ["If thou art pained by any external thing, it is not this thing that disturbs thee, but thy own judgement about it. And it is in thy power to wipe out that judgement now.", "Marcus Aurelius", "Meditations VIII.47 · Long", "Stoic"],
  ["No longer talk at all about the kind of man a good man ought to be, but be such.", "Marcus Aurelius", "Meditations X.16 · Long", "Stoic"],
  ["Kindness is invincible if it be sincere.", "Marcus Aurelius", "Meditations XI.18 · Long", "Stoic"],
  ["If it is not right, do not do it. If it is not true, do not say it.", "Marcus Aurelius", "Meditations XII.17 · Long", "Stoic"],
  ["How much trouble he avoids who does not look to see what his neighbour says or does, but only to what he does himself.", "Marcus Aurelius", "Meditations IV.18 · Long", "Stoic"],
  ["The universe is transformation. Life is opinion.", "Marcus Aurelius", "Meditations IV.3 · Long", "Stoic"],
  ["While we are postponing, life speeds by.", "Seneca", "Letters to Lucilius 1", "Stoic"],
  ["Nothing, Lucilius, is ours, except time.", "Seneca", "Letters to Lucilius 1", "Stoic"],
  ["We suffer more often in imagination than in reality.", "Seneca", "Letters to Lucilius 13", "Stoic"],
  ["He suffers more than is necessary who suffers before it is necessary.", "Seneca", "Letters to Lucilius 98", "Stoic"],
  ["It is not because things are difficult that we do not dare. It is because we do not dare that they are difficult.", "Seneca", "Letters to Lucilius 104", "Stoic"],
  ["As long as you live, keep learning how to live.", "Seneca", "Letters to Lucilius 76", "Stoic"],
  ["If one does not know to which port one is sailing, no wind is favorable.", "Seneca", "Letters to Lucilius 71", "Stoic"],
  ["What progress, you ask, have I made? I have begun to be a friend to myself.", "Seneca", "Letters to Lucilius 6", "Stoic"],
  ["Associate with those who will make a better man of you. Welcome those whom you yourself can improve.", "Seneca", "Letters to Lucilius 7", "Stoic"],
  ["It is not that we have a short time to live, but that we waste a great deal of it.", "Seneca", "On the Shortness of Life", "Stoic"],
  ["You are living as if destined to live forever. Your own frailty never occurs to you.", "Seneca", "On the Shortness of Life", "Stoic"],
  ["You act like mortals in all that you fear, and like immortals in all that you desire.", "Seneca", "On the Shortness of Life", "Stoic"],
  ["Life is long if you know how to use it.", "Seneca", "On the Shortness of Life", "Stoic"],
  ["Fire tests gold. Misfortune tests brave men.", "Seneca", "On Providence", "Stoic"],
  ["No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.", "Seneca", "On Providence", "Stoic"],
  ["A man is as unhappy as he has convinced himself he is.", "Seneca", "Letters to Lucilius 78", "Stoic"],
  ["It is difficulties that show what men are.", "Epictetus", "Discourses I.24", "Stoic"],
  ["First say to yourself what you would be, and then do what you have to do.", "Epictetus", "Discourses III.23", "Stoic"],
  ["For it is not death or pain that is to be feared, but the fear of pain or death.", "Epictetus", "Discourses II.1", "Stoic"],
  ["Know, first, who you are, and then adorn yourself accordingly.", "Epictetus", "Discourses III.1", "Stoic"],
  ["There is nothing good or evil save in the will. We are not to lead events, but to follow them.", "Epictetus", "Discourses III.10", "Stoic"],
  ["Men are disturbed not by things, but by the views which they take of things.", "Epictetus", "Enchiridion 5", "Stoic"],
  ["Some things are in our control and others are not. Things in our control are opinion, pursuit, desire, aversion, and our own actions.", "Epictetus", "Enchiridion 1", "Stoic"],
  ["Seek not that events should happen as you wish, but wish them to happen as they do, and you will have a tranquil flow of life.", "Epictetus", "Enchiridion 8", "Stoic"],
  ["Sickness is a hindrance to the body, but not to the will, unless the will itself consents.", "Epictetus", "Enchiridion 9", "Stoic"],
  ["Never say of anything, I have lost it, but say, I have given it back.", "Epictetus", "Enchiridion 11", "Stoic"],
  ["If you want to improve, be content to be thought foolish and stupid with regard to external things.", "Epictetus", "Enchiridion 13", "Stoic"],
  ["Remember that you are an actor in a drama, of such a kind as the author pleases to make it.", "Epictetus", "Enchiridion 17", "Stoic"],
  ["It is not he who gives abuse who affronts, but the view we take of those things as insulting.", "Epictetus", "Enchiridion 20", "Stoic"],
  ["Everything has two handles: one by which it may be carried, and one by which it cannot.", "Epictetus", "Enchiridion 43", "Stoic"],
  ["Never call yourself a philosopher, and do not talk a great deal among the unlearned about theorems. Act conformably to them.", "Epictetus", "Enchiridion 46", "Stoic"],
  ["Freedom is not acquired by satisfying yourself with what you desire, but by destroying your desire.", "Epictetus", "Discourses IV.1", "Stoic"],
  ["If you accomplish something good with hard work, the labor passes quickly, but the good endures.", "Musonius Rufus", "Lectures", "Stoic"],
  ["The goal of life is to live in agreement with nature.", "Zeno of Citium", "as reported by Diogenes Laertius", "Stoic"],
  ["The unexamined life is not worth living.", "Socrates", "Plato, Apology", "Famous"],
  ["I am wiser than this man, for neither of us knows anything great and good, but he fancies he knows something, and I do not fancy that I do.", "Socrates", "Plato, Apology", "Famous"],
  ["One swallow does not make a summer, nor does one day. So too one day, or a short time, does not make a person blessed and happy.", "Aristotle", "Nicomachean Ethics", "Famous"],
  ["It is the mark of an educated mind to look for precision in each class of things just so far as the nature of the subject admits.", "Aristotle", "Nicomachean Ethics", "Famous"],
  ["The beginning is the most important part of the work.", "Plato", "Republic", "Famous"],
  ["The mind is not a vessel to be filled, but a fire to be kindled.", "Plutarch", "On Listening to Lectures", "Famous"],
  ["You cannot step twice into the same river.", "Heraclitus", "Fragments", "Famous"],
  ["A person's character is their fate.", "Heraclitus", "Fragments", "Famous"],
  ["When you know a thing, hold that you know it. When you do not, allow that you do not. This is knowledge.", "Confucius", "Analects", "Famous"],
  ["Is it not a pleasure, having learned something, to try it out at due intervals?", "Confucius", "Analects", "Famous"],
  ["The journey of a thousand li commenced with a single step.", "Lao Tzu", "Tao Te Ching 64 · Legge", "Famous"],
  ["They can because they think they can.", "Virgil", "Aeneid", "Famous"],
  ["Begin, be bold, and venture to be wise.", "Horace", "Epistles", "Famous"],
  ["Be patient and tough. One day this pain will be useful to you.", "Ovid", "Amores", "Famous"],
  ["Knowledge itself is power.", "Francis Bacon", "Meditationes Sacrae", "Famous"],
  ["Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.", "Francis Bacon", "Of Studies", "Famous"],
  ["The reading of all good books is like a conversation with the finest people of past centuries.", "René Descartes", "Discourse on Method", "Famous"],
  ["Have courage to use your own understanding.", "Immanuel Kant", "What Is Enlightenment?", "Famous"],
  ["Be a philosopher, but, amidst all your philosophy, be still a man.", "David Hume", "An Enquiry Concerning Human Understanding", "Famous"],
  ["Well done is better than well said.", "Benjamin Franklin", "Poor Richard's Almanack", "Famous"],
  ["Lost time is never found again.", "Benjamin Franklin", "Poor Richard's Almanack", "Famous"],
  ["Diligence is the mother of good luck.", "Benjamin Franklin", "Poor Richard's Almanack", "Famous"],
  ["We have it in our power to begin the world over again.", "Thomas Paine", "Common Sense", "Famous"],
  ["Facts are stubborn things.", "John Adams", "argument in defense of the British soldiers", "Famous"],
  ["I cannot live without books.", "Thomas Jefferson", "letter to John Adams", "Famous"],
  ["A house divided against itself cannot stand.", "Abraham Lincoln", "speech, 1858", "Famous"],
  ["With malice toward none, with charity for all.", "Abraham Lincoln", "Second Inaugural Address", "Famous"],
  ["If there is no struggle, there is no progress.", "Frederick Douglass", "West India Emancipation speech, 1857", "Famous"],
  ["Nothing ever comes to one that is worth having, except as a result of hard work.", "Booker T. Washington", "Up from Slavery", "Famous"],
  ["The way to right wrongs is to turn the light of truth upon them.", "Ida B. Wells", "preface, A Red Record", "Famous"],
  ["I do not wish women to have power over men, but over themselves.", "Mary Wollstonecraft", "A Vindication of the Rights of Woman", "Famous"],
  ["Failure is impossible.", "Susan B. Anthony", "message to her birthday celebration, 1906", "Famous"],
  ["Whoso would be a man must be a nonconformist.", "Ralph Waldo Emerson", "Self-Reliance", "Famous"],
  ["A foolish consistency is the hobgoblin of little minds.", "Ralph Waldo Emerson", "Self-Reliance", "Famous"],
  ["Trust thyself. Every heart vibrates to that iron string.", "Ralph Waldo Emerson", "Self-Reliance", "Famous"],
  ["The cost of a thing is the amount of life which is required to be exchanged for it.", "Henry David Thoreau", "Walden", "Famous"],
  ["I went to the woods because I wished to live deliberately.", "Henry David Thoreau", "Walden", "Famous"],
  ["It is not enough to be busy. The question is: what are we busy about?", "Henry David Thoreau", "letter", "Famous"],
  ["The fault, dear Brutus, is not in our stars, but in ourselves.", "William Shakespeare", "Julius Caesar", "Famous"],
  ["This above all: to thine own self be true.", "William Shakespeare", "Hamlet", "Famous"],
  ["We know what we are, but know not what we may be.", "William Shakespeare", "Hamlet", "Famous"],
  ["I am not afraid of storms, for I am learning how to sail my ship.", "Louisa May Alcott", "Little Women", "Famous"],
  ["How wonderful it is that nobody need wait a single moment before starting to improve the world.", "Anne Frank", "diary, 26 March 1944", "Famous"],
  ["If I have seen further, it is by standing on the shoulders of giants.", "Isaac Newton", "letter to Robert Hooke, 1675", "Famous"],
  ["Nothing is too wonderful to be true, if it be consistent with the laws of nature.", "Michael Faraday", "laboratory diary", "Famous"],
  ["Ignorance more frequently begets confidence than does knowledge.", "Charles Darwin", "The Descent of Man", "Famous"],
  ["In the fields of observation, chance favors only the prepared mind.", "Louis Pasteur", "lecture, 1854", "Famous"],
  ["Genius is one percent inspiration and ninety-nine percent perspiration.", "Thomas Edison", "on his own work", "Famous"],
  ["Nothing in life is to be feared. It is only to be understood. Now is the time to understand more, so that we may fear less.", "Marie Curie", "as recalled by Eve Curie", "Famous"],
  ["The important thing is not to stop questioning. Curiosity has its own reason for existing.", "Albert Einstein", "statement, 1955", "Famous"],
  ["That brain of mine is something more than merely mortal, as time will show.", "Ada Lovelace", "letter, 1843", "Famous"],
  ["The first principle is that you must not fool yourself, and you are the easiest person to fool.", "Richard Feynman", "Cargo Cult Science, 1974", "Famous"],
  ["We are made of star-stuff.", "Carl Sagan", "Cosmos", "Famous"],
  ["Knowing is not enough. We must apply. Willing is not enough. We must do.", "Johann Wolfgang von Goethe", "Wilhelm Meister", "Famous"],
  ["Doubt is not a pleasant condition, but certainty is absurd.", "Voltaire", "letter, 1770", "Famous"],
  ["Teach your tongue to say I do not know, and you will progress.", "Maimonides", "Guide for the Perplexed, tradition", "Famous"],
  ["Know the enemy and know yourself. In a hundred battles you will never be in peril.", "Sun Tzu", "The Art of War · Giles", "Famous"],
  ["The worth of a state, in the long run, is the worth of the individuals composing it.", "John Stuart Mill", "On Liberty", "Famous"],
  ["Lock up your libraries if you like. But there is no gate, no lock, no bolt you can set upon the freedom of my mind.", "Virginia Woolf", "A Room of One's Own", "Famous"],
  ["Freedom is the freedom to say that two plus two make four.", "George Orwell", "Nineteen Eighty-Four", "Famous"],
  ["Life is either a daring adventure or nothing at all.", "Helen Keller", "The Open Door", "Famous"],
  ["You must do the thing you think you cannot do.", "Eleanor Roosevelt", "You Learn by Living", "Famous"],
  ["Do the best you can until you know better. Then when you know better, do better.", "Maya Angelou", "interview", "Famous"],
  ["Not everything that is faced can be changed, but nothing can be changed until it is faced.", "James Baldwin", "New York Times, 1962", "Famous"],
  ["If you have some power, then your job is to empower somebody else.", "Toni Morrison", "interview", "Famous"],
  ["Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela", "speech", "Famous"],
  ["One child, one teacher, one book, and one pen can change the world.", "Malala Yousafzai", "United Nations, 2013", "Famous"],
  ["When we are no longer able to change a situation, we are challenged to change ourselves.", "Viktor Frankl", "Man's Search for Meaning", "Famous"],
  ["Attention is the rarest and purest form of generosity.", "Simone Weil", "letter", "Famous"],
  ["I am still learning.", "Michelangelo", "note in old age", "Famous"],
  ["Make each day your masterpiece.", "John Wooden", "on coaching", "Famous"],
  ["The true college will ever have one goal: not to earn meat, but to know the end and aim of that life which meat nourishes.", "W. E. B. Du Bois", "The Souls of Black Folk", "Famous"],
  ["One's feelings waste themselves in words. They ought to be distilled into actions which bring results.", "Florence Nightingale", "letter", "Famous"],
  ["The greatest thing in the world is to know how to belong to oneself.", "Michel de Montaigne", "Essays", "Famous"],
  ["Have patience with all things, but chiefly have patience with yourself.", "Francis de Sales", "Introduction to the Devout Life", "Famous"],
  ["I took a deep breath and listened to the old brag of my heart: I am, I am, I am.", "Sylvia Plath", "The Bell Jar", "Famous"],
];

const STYLES = {
  serif: { label: "Classic serif", family: 'Georgia, "Iowan Old Style", "Palatino Linotype", Palatino, serif', style: "normal" },
  sans: { label: "Clean sans", family: 'system-ui, -apple-system, "Segoe UI", sans-serif', style: "normal" },
  humanist: { label: "Soft humanist", family: '"Avenir Next", "Segoe UI", "Gill Sans", "Trebuchet MS", sans-serif', style: "normal" },
  mono: { label: "Typewriter", family: 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace', style: "normal" },
  italic: { label: "Italic serif", family: 'Georgia, "Iowan Old Style", Palatino, serif', style: "italic" },
};

const MEASURES = { narrow: "28ch", reading: "42ch", wide: "68ch" };
const SPACING = { tight: "22px 20px 18px", ease: "32px 28px 24px", air: "44px 36px 28px" };
const STORE = "daily-quote-card-v2";

const DEFAULTS = {
  font_size: 30,
  font_style: "serif",
  text_align: "left",
  measure: "reading",
  spacing: "ease",
  pool: "all",
  use_theme: true,
  background_color: "",
  font_color: "",
};

function esc(value) {
  return String(value)
    .split("\u0026").join("\u0026amp;")
    .split("<").join("\u0026lt;")
    .split(">").join("\u0026gt;")
    .split('"').join("\u0026quot;");
}

function dayKey(date = new Date()) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function dayNumber(date = new Date()) {
  const start = Date.UTC(date.getFullYear(), 0, 0);
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((today - start) / 86400000);
}

function quoteId(text) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) hash = (hash * 33 + text.charCodeAt(index)) >>> 0;
  return hash.toString(36);
}

function safeSize(value) {
  const size = Number(value);
  if (!Number.isFinite(size)) return DEFAULTS.font_size;
  return Math.max(16, Math.min(72, Math.round(size)));
}

function oneOf(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

function safeColor(value) {
  if (Array.isArray(value) && value.length >= 3) {
    const channels = value.slice(0, 3).map((part) => Math.max(0, Math.min(255, Math.round(Number(part)))));
    if (channels.every((part) => Number.isFinite(part))) return `rgb(${channels.join(", ")})`;
  }
  if (typeof value !== "string") return "";
  const color = value.trim();
  if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(color)) return color;
  if (/^rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/.test(color)) return color;
  return "";
}

function themeOn(config) {
  if (typeof config.use_theme === "boolean") return config.use_theme;
  return !(config.background_color || config.font_color);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE) || "{}");
    const today = dayKey();
    return {
      day: today,
      skip: saved.day === today && Number.isFinite(saved.skip) ? saved.skip : 0,
      saved: Array.isArray(saved.saved) ? saved.saved.filter((item) => typeof item === "string") : [],
      mode: saved.mode === "saved" ? "saved" : "today",
      savedAt: Number.isFinite(saved.savedAt) ? saved.savedAt : 0,
    };
  } catch {
    return { day: dayKey(), skip: 0, saved: [], mode: "today", savedAt: 0 };
  }
}

class DailyQuoteCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = { ...DEFAULTS };
    this._state = loadState();
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
          selector: { select: { options: Object.entries(STYLES).map(([value, style]) => ({ value, label: style.label })) } },
        },
        {
          name: "text_align",
          label: "Alignment",
          selector: { select: { options: [{ value: "left", label: "Left" }, { value: "center", label: "Center" }] } },
        },
        {
          name: "measure",
          label: "Line length",
          selector: {
            select: {
              options: [
                { value: "narrow", label: "Narrow" },
                { value: "reading", label: "Reading" },
                { value: "wide", label: "Wide" },
              ],
            },
          },
        },
        {
          name: "spacing",
          label: "Spacing",
          selector: {
            select: {
              options: [
                { value: "tight", label: "Tight" },
                { value: "ease", label: "Comfortable" },
                { value: "air", label: "Airy" },
              ],
            },
          },
        },
        {
          name: "pool",
          label: "Which quotes",
          selector: {
            select: {
              options: [
                { value: "all", label: "Famous and Stoic" },
                { value: "stoic", label: "Stoic only" },
                { value: "famous", label: "Famous only" },
              ],
            },
          },
        },
        { name: "use_theme", label: "Match your theme", selector: { boolean: {} } },
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
    if (this.isConnected) this._paint();
  }

  set hass(hass) {
    this._hass = hass;
    if (this.isConnected) this._paint();
  }

  getCardSize() {
    return 4;
  }

  connectedCallback() {
    this._ensure();
    this._paint();
  }

  _persist() {
    try {
      localStorage.setItem(STORE, JSON.stringify(this._state));
    } catch {
      /* private mode */
    }
  }

  _pool() {
    const pool = oneOf(this._config.pool, ["all", "stoic", "famous"], "all");
    if (pool === "stoic") return QUOTES.filter((quote) => quote[3] === "Stoic");
    if (pool === "famous") return QUOTES.filter((quote) => quote[3] === "Famous");
    return QUOTES;
  }

  _current() {
    if (this._state.mode === "saved") {
      const saved = this._state.saved
        .map((id) => QUOTES.find((quote) => quoteId(quote[0]) === id))
        .filter(Boolean);
      if (!saved.length) return null;
      const index = ((this._state.savedAt % saved.length) + saved.length) % saved.length;
      return { quote: saved[index], saved: true, empty: false };
    }
    const list = this._pool();
    const index = (dayNumber() + this._state.skip) % list.length;
    return { quote: list[index], saved: false, empty: false };
  }

  _skip() {
    if (this._state.mode === "saved") {
      this._state.savedAt += 1;
    } else {
      this._state.skip += 1;
      this._state.day = dayKey();
    }
    this._persist();
    this._paint();
  }

  _toggleSave() {
    const current = this._current();
    if (!current?.quote) return;
    const id = quoteId(current.quote[0]);
    const index = this._state.saved.indexOf(id);
    if (index >= 0) this._state.saved.splice(index, 1);
    else this._state.saved.push(id);
    this._persist();
    this._paint();
  }

  _showSaved() {
    this._state.mode = this._state.mode === "saved" ? "today" : "saved";
    this._state.savedAt = 0;
    this._persist();
    this._paint();
  }

  _ensure() {
    if (this._built) return;
    this._built = true;
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card {
          display: block;
          background: var(--dq-bg, var(--ha-card-background, var(--card-background-color, transparent)));
          color: var(--dq-ink, var(--primary-text-color, inherit));
          border-radius: var(--ha-card-border-radius, 18px);
          overflow: hidden;
        }
        .wrap { padding: var(--dq-pad, 32px 28px 24px); }
        .kicker, .actions, .work { font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
        .top { display: flex; justify-content: space-between; gap: 12px; align-items: baseline; }
        .kicker {
          margin: 0;
          font-size: 11px;
          font-weight: 680;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--dq-muted, var(--secondary-text-color, currentColor));
          opacity: 0.8;
        }
        blockquote { margin: 18px 0 0; }
        .text {
          margin: 0;
          max-width: min(100%, var(--dq-measure, 42ch));
          font-family: var(--dq-family);
          font-style: var(--dq-style, normal);
          font-weight: 520;
          font-size: var(--dq-size, 30px);
          line-height: 1.28;
          letter-spacing: -0.02em;
          text-wrap: pretty;
          overflow-wrap: break-word;
        }
        .by {
          margin: 22px 0 0;
          font-family: var(--dq-family);
          font-style: var(--dq-style, normal);
          font-size: max(15px, calc(var(--dq-size, 30px) * 0.46));
          font-weight: 650;
        }
        .work { margin: 3px 0 0; font-size: 13px; color: var(--dq-muted, var(--secondary-text-color, currentColor)); }
        .stack, .text, .by, .work { text-align: var(--dq-align, left); }
        .stack { display: flex; flex-direction: column; align-items: var(--dq-items, stretch); }
        .rule {
          width: 2.5rem;
          height: 1px;
          margin-top: 20px;
          background: currentColor;
          opacity: 0.28;
          align-self: var(--dq-rule, flex-start);
        }
        .actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
        button {
          min-height: 44px;
          padding: 0 14px;
          border: 1px solid color-mix(in srgb, currentColor 28%, transparent);
          border-radius: 999px;
          background: transparent;
          color: inherit;
          font: inherit;
          font-size: 14px;
          font-weight: 640;
          cursor: pointer;
        }
        button[aria-pressed="true"] { background: color-mix(in srgb, currentColor 12%, transparent); }
        .empty { margin: 0; font-size: 16px; line-height: 1.4; }
      </style>
      <ha-card>
        <div class="wrap">
          <div class="top"><p class="kicker"></p></div>
          <div class="stack">
            <blockquote><p class="text"></p></blockquote>
            <span class="rule"></span>
            <p class="by"></p>
            <p class="work"></p>
          </div>
          <p class="empty" hidden></p>
          <div class="actions">
            <button type="button" id="another">Another</button>
            <button type="button" id="save">Save</button>
            <button type="button" id="saved">Saved</button>
          </div>
        </div>
      </ha-card>`;
    this.shadowRoot.getElementById("another").addEventListener("click", () => this._skip());
    this.shadowRoot.getElementById("save").addEventListener("click", () => this._toggleSave());
    this.shadowRoot.getElementById("saved").addEventListener("click", () => this._showSaved());
  }

  _paint() {
    this._ensure();
    if (this._state.day !== dayKey()) {
      this._state.day = dayKey();
      this._state.skip = 0;
      this._state.mode = "today";
      this._persist();
    }
    const config = this._config;
    const style = STYLES[oneOf(config.font_style, Object.keys(STYLES), "serif")];
    const align = oneOf(config.text_align, ["left", "center"], "left");
    const card = this.shadowRoot.querySelector("ha-card");
    card.style.setProperty("--dq-size", `${safeSize(config.font_size)}px`);
    card.style.setProperty("--dq-family", style.family);
    card.style.setProperty("--dq-style", style.style);
    card.style.setProperty("--dq-align", align);
    card.style.setProperty("--dq-items", align === "center" ? "center" : "stretch");
    card.style.setProperty("--dq-rule", align === "center" ? "center" : "flex-start");
    card.style.setProperty("--dq-measure", MEASURES[oneOf(config.measure, Object.keys(MEASURES), "reading")]);
    card.style.setProperty("--dq-pad", SPACING[oneOf(config.spacing, Object.keys(SPACING), "ease")]);
    if (themeOn(config)) {
      card.style.removeProperty("--dq-bg");
      card.style.removeProperty("--dq-ink");
      card.style.removeProperty("--dq-muted");
    } else {
      const background = safeColor(config.background_color) || "#f3ecdf";
      const ink = safeColor(config.font_color) || "#1c1915";
      card.style.setProperty("--dq-bg", background);
      card.style.setProperty("--dq-ink", ink);
      card.style.setProperty("--dq-muted", ink);
    }
    const root = this.shadowRoot;
    const current = this._current();
    const empty = root.querySelector(".empty");
    const stack = root.querySelector(".stack");
    const save = root.getElementById("save");
    const saved = root.getElementById("saved");
    const another = root.getElementById("another");
    saved.textContent = this._state.mode === "saved" ? "Today" : `Saved${this._state.saved.length ? ` ${this._state.saved.length}` : ""}`;
    if (!current) {
      stack.hidden = true;
      empty.hidden = false;
      empty.textContent = "No saved quotes yet. Save one, and it will wait here.";
      save.disabled = true;
      another.disabled = true;
      return;
    }
    stack.hidden = false;
    empty.hidden = true;
    save.disabled = false;
    another.disabled = false;
    const [text, author, source, kind] = current.quote;
    const when = new Date().toLocaleDateString(undefined, { weekday: "long" });
    root.querySelector(".kicker").textContent = current.saved ? `Saved · ${kind}` : `${when} · ${kind}`;
    root.querySelector(".text").textContent = text;
    root.querySelector(".by").textContent = author;
    root.querySelector(".work").textContent = source;
    const id = quoteId(text);
    const on = this._state.saved.includes(id);
    save.textContent = on ? "Saved" : "Save";
    save.setAttribute("aria-pressed", on ? "true" : "false");
    another.textContent = current.saved ? "Next saved" : "Another";
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
    description: "A sourced famous or Stoic quote for the day. Skip it, save it, and set the type.",
    preview: true,
  });
}
