// ---------------------------------------------------------------------------
// EDIT YOUR CONTENT HERE. Everything below is rendered automatically.
// ---------------------------------------------------------------------------

// Language shown on first visit / when a visitor has no saved preference.
const DEFAULT_LANG = "en";

// Social icons. Set url to null to show the icon greyed-out and unclickable
// until you have a real link for that platform.
const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://www.instagram.com/sofiasidequests00/", icon: "instagram" },
  { name: "Pinterest", url: "https://ca.pinterest.com/00dohboi/", icon: "pinterest" },
  { name: "TikTok", url: "https://www.tiktok.com/@sofiasidequests00", icon: "tiktok" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61593942565406", icon: "facebook" },
  { name: "YouTube", url: "https://youtube.com/@sofiasidequests00", icon: "youtube" },
  { name: "Threads", url: "https://www.threads.com/@sofiasidequests00", icon: "threads" },
];

// Featured strip, left to right. video/poster point at the self-hosted,
// web-compressed files (see videos/ and images/). instagramUrl set to null
// shows no Instagram link on that tile until you send the real reel URL.
const FEATURED_TILES = [
  { video: "videos/tile-1.mp4", poster: "images/tile-1-poster.jpg", instagramUrl: null },
  { video: "videos/tile-2.mp4", poster: "images/tile-2-poster.jpg", instagramUrl: null },
  { video: "videos/tile-3.mp4", poster: "images/tile-3-poster.jpg", instagramUrl: null },
  { video: "videos/tile-4.mp4", poster: "images/tile-4-poster.jpg", instagramUrl: null },
  { video: "videos/tile-5.mp4", poster: "images/tile-5-poster.jpg", instagramUrl: null },
  { video: "videos/tile-6.mp4", poster: "images/tile-6-poster.jpg", instagramUrl: null },
  { video: "videos/tile-7.mp4", poster: "images/tile-7-poster.jpg", instagramUrl: null },
  { video: "videos/tile-8.mp4", poster: "images/tile-8-poster.jpg", instagramUrl: null },
  { video: "videos/tile-9.mp4", poster: "images/tile-9-poster.jpg", instagramUrl: null },
];

// Seed values shown until data/stats.json has real numbers from the
// scheduled GitHub Action (see .github/workflows/update-stats.yml).
// totalViews is a manually-set combined figure across both platforms.
const STATS_FALLBACK = {
  instagramFollowers: 942,
  pinterestFollowers: 8,
  totalViews: 26200,
  updatedAt: null,
};

const I18N = {
  en: {
    statTotalViews: "Total views",
    statFollowers: "Followers",
    statContact: "Contact",
    copyLink: "Copy URL link",
    featuredTitle: "Featured",
    aboutTitle: "About me",
    aboutText: "I'm a content creator building toward UGC as my full time craft. I write, shoot, and direct product videos and social content, turning everyday products into stories people actually stop to watch. Beyond the camera, I manage a handful of projects, where I handle graphic design, marketing, and the planning and resourcing that keeps teams and timelines moving.",
    workedWithText: "I've worked with COSNORI, iUNIK, Star Kitty Vintage, and Kelowna Baskets, creating unique content.",
    quoteText: "Creativity and structure feed each other for me. Being close to both makes me sharper at each.",
  },
  fr: {
    statTotalViews: "Vues totales",
    statFollowers: "Abonnés",
    statContact: "Contact",
    copyLink: "Copier le lien URL",
    featuredTitle: "En vedette",
    aboutTitle: "À propos",
    aboutText: "Je suis créatrice de contenu et je bâtis mon métier autour du contenu généré par les utilisateurs (UGC), à temps plein. J'écris, je tourne et je réalise des vidéos de produits et du contenu pour les réseaux sociaux, transformant des produits du quotidien en histoires que les gens s'arrêtent réellement pour regarder. En dehors de la caméra, je gère plusieurs projets, où je m'occupe du design graphique, du marketing, ainsi que de la planification et des ressources qui gardent les équipes et les échéanciers en mouvement.",
    workedWithText: "J'ai collaboré avec COSNORI, iUNIK, Star Kitty Vintage et Kelowna Baskets pour créer du contenu unique.",
    quoteText: "La créativité et la structure se nourrissent l'une l'autre chez moi. Être proche des deux me rend plus aiguisée dans chacune.",
  },
};

// ---------------------------------------------------------------------------
// Rendering (no need to edit below this line)
// ---------------------------------------------------------------------------

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 4.9 3 9.1 7.3 10.8-.1-.9-.2-2.3 0-3.3.2-.9 1.4-6 1.4-6s-.4-.7-.4-1.8c0-1.7.9-2.9 2.1-2.9 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-1 3.9-.3 1.2.6 2.1 1.7 2.1 2.1 0 3.6-2.7 3.6-5.9 0-2.4-1.7-4.3-4.6-4.3-3.4 0-5.5 2.5-5.5 5.3 0 1 .3 1.6.7 2.2.2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.3-1.7-.7-2.5-2.6-2.5-4.6 0-3.5 2.9-7.6 8.7-7.6 4.6 0 7.7 3.4 7.7 6.9 0 4.7-2.6 8.3-6.4 8.3-1.3 0-2.5-.7-2.9-1.5l-.8 3.1c-.3 1-.9 2.2-1.4 3 1.1.3 2.2.5 3.4.5 6.4 0 11.5-5.1 11.5-11.5S18.4.5 12 .5z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2 1.8 3.6 3.8 3.9v2.6c-1.4 0-2.7-.4-3.8-1.1v6.4a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8V3h2.7z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none"/></svg>',
  threads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12.2 3.3c-4.4 0-7.1 2.9-7.1 8.2 0 5.1 2.6 9.2 7.3 9.2 3.9 0 6.2-2.1 6.2-5 0-2.6-1.9-4-4.5-4-2.1 0-3.5 1-3.5 2.5 0 1.2 1 2 2.4 2 1.6 0 2.6-1 2.9-2.6"/><path d="M9.3 8.2c1-.5 2-.7 3-.7 3.4 0 5.6 2 5.9 5.3"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.4c0-.9.2-1.5 1.5-1.5h1.6V4.2C16.3 4.1 15.3 4 14.2 4c-2.5 0-4.2 1.5-4.2 4.3v2.2H7.5v3H10V21h3.5z"/></svg>',
};

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("share-toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    return true;
  } catch (e) {
    return false;
  }
}

function renderSocials() {
  const container = document.getElementById("socials");
  container.innerHTML = "";
  SOCIAL_LINKS.forEach((s) => {
    if (s.url) {
      const a = el("a", `social-link social-link--${s.icon}`, ICONS[s.icon] || "");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", s.name);
      a.title = s.name;
      container.appendChild(a);
    } else {
      const span = el("span", `social-link social-link--${s.icon} social-link--disabled`, ICONS[s.icon] || "");
      span.setAttribute("aria-hidden", "true");
      span.title = `${s.name} (coming soon)`;
      container.appendChild(span);
    }
  });
}

function renderFeatured() {
  const container = document.getElementById("featured");
  container.innerHTML = "";

  FEATURED_TILES.forEach((tile) => {
    const wrap = el("div", "featured-tile");
    wrap.innerHTML = `
      <video poster="${tile.poster}" preload="none" playsinline>
        <source src="${tile.video}" type="video/mp4" />
      </video>
      <button type="button" class="tile-play" aria-label="Play video">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/><path d="M10 8l6 4-6 4V8z"/></svg>
      </button>
      ${tile.instagramUrl ? `<a class="tile-ig-link" href="${tile.instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="View on Instagram">${ICONS.instagram}</a>` : ""}
    `;

    const video = wrap.querySelector("video");
    const playBtn = wrap.querySelector(".tile-play");
    playBtn.addEventListener("click", () => {
      video.controls = true;
      video.play();
    });
    video.addEventListener("play", () => wrap.classList.add("is-playing"));
    video.addEventListener("pause", () => wrap.classList.remove("is-playing"));

    container.appendChild(wrap);
  });
}

function formatCompact(n) {
  try {
    return new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 }).format(n);
  } catch (e) {
    return String(n);
  }
}

async function renderStats() {
  let stats = STATS_FALLBACK;
  try {
    const res = await fetch("data/stats.json", { cache: "no-store" });
    if (res.ok) stats = { ...STATS_FALLBACK, ...(await res.json()) };
  } catch (e) {
    // Offline or first load before the file exists — fall back silently.
  }

  const totalFollowers = (stats.instagramFollowers || 0) + (stats.pinterestFollowers || 0);
  document.getElementById("stat-views").textContent = formatCompact(stats.totalViews);
  document.getElementById("stat-followers").textContent = formatCompact(totalFollowers);
}

function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  if (stored) document.documentElement.setAttribute("data-theme", stored);

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme")
      || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

const SITE_URL = "https://sofiabrightlotus.github.io/sofia-links/";

function initShare() {
  const btn = document.getElementById("share-btn");
  btn.addEventListener("click", async () => {
    const ok = await copyToClipboard(SITE_URL);
    showToast(ok ? "Link copied!" : "Couldn't copy link");
  });
}

function applyStaticI18n(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (I18N[lang][key]) node.textContent = I18N[lang][key];
  });
}

function renderAboutContent(lang) {
  document.getElementById("about-text").textContent = I18N[lang].aboutText;
  document.getElementById("about-worked").textContent = I18N[lang].workedWithText;
  document.getElementById("about-quote").textContent = I18N[lang].quoteText;
}

function renderForLang(lang) {
  applyStaticI18n(lang);
  renderAboutContent(lang);
}

function initLang() {
  const toggle = document.getElementById("lang-toggle");
  let lang = localStorage.getItem("lang") || DEFAULT_LANG;
  renderForLang(lang);
  toggle.textContent = lang === "en" ? "FR" : "EN";

  toggle.addEventListener("click", () => {
    lang = lang === "en" ? "fr" : "en";
    localStorage.setItem("lang", lang);
    toggle.textContent = lang === "en" ? "FR" : "EN";
    renderForLang(lang);
  });
}

renderSocials();
renderFeatured();
renderStats();
initLang();
initTheme();
initShare();
