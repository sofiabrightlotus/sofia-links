// ---------------------------------------------------------------------------
// EDIT YOUR CONTENT HERE. Everything below is rendered automatically.
// ---------------------------------------------------------------------------

// Set to true to bring back the Blog section once there's content.
const SHOW_BLOG = false;

// Set to true to bring back the "Do you like this website?" inquiry card.
const SHOW_NOTICE = false;

// Set to true to bring back the Peachy Keen Co Studio link (and its Instagram
// follow row) in the Links section.
const SHOW_PEACHY_KEEN = false;

// Set to true to bring back the Links section at the bottom of the page.
// Content stays defined in generalLinks() below either way — this only
// hides the section from view.
const SHOW_LINKS = false;

// Language shown on first visit / when a visitor has no saved preference.
const DEFAULT_LANG = "en";

const SOCIAL_LINKS = [
  { name: "Pinterest", url: "https://ca.pinterest.com/00dohboi/", icon: "pinterest" },
  { name: "Instagram", url: "https://www.instagram.com/sofiasidequests00/", icon: "instagram" },
];

// Featured reels, most-engaged first. video/poster point at the self-hosted,
// web-compressed files (see videos/ and images/ — transcoded from the raw
// phone exports with ffmpeg since those were 6-136MB each, too heavy to ship).
const FEATURED_REELS = [
  { badgeKey: "badgeTop", title: "Reel 01", url: "https://www.instagram.com/reel/DbwLmGWh2xF/", video: "videos/reel-4.mp4", poster: "images/reel-4-poster.jpg" },
  { badgeKey: "badgeFavorite", title: "Reel 02", url: "https://www.instagram.com/reel/DbrHE-ah2GJ/", video: "videos/reel-2.mp4", poster: "images/reel-2-poster.jpg" },
  { badgeKey: "badgeFavorite", title: "Reel 03", url: "https://www.instagram.com/reel/Dbw8SHwBNLb/", video: "videos/reel-3.mp4", poster: "images/reel-3-poster.jpg" },
  { badgeKey: "badgeFavorite", title: "Reel 04", url: "https://www.instagram.com/reel/DboWigQBl5j/", video: "videos/reel-1.mp4", poster: "images/reel-1-poster.jpg" },
  { badgeKey: "badgeFavorite", title: "Reel 05", url: "https://www.instagram.com/reel/Db3JVcaBdXk/", video: "videos/reel-5.mp4", poster: "images/reel-5-poster.jpg" },
  { badgeKey: "badgeFavorite", title: "Reel 06", url: "https://www.instagram.com/reel/Dby1xL9BvNR/", video: "videos/reel-6.mp4", poster: "images/reel-6-poster.jpg" },
];

// "video"       — self-hosted video plays inline on click (no autoplay), with
//                  a separate link out to the Instagram post. Requires each
//                  FEATURED_REELS entry to have a video + poster field.
// "embed"       — Instagram's real oEmbed widget per reel. Tested and NOT
//                  currently reliable: with 4 reels on one page, only the
//                  first actually renders (the rest stay blank white boxes)
//                  and the page balloons to 4000px+ tall on mobile. Left in
//                  as an option in case Instagram's widget improves, or if
//                  you ever go down to a single featured reel.
// "placeholder" — fast retro-styled card, no real thumbnail, lightest option.
const FEATURED_MODE = "video";

// Seed values shown until data/stats.json has real numbers from the
// scheduled GitHub Action (see .github/workflows/update-stats.yml).
// totalViews is a manually-set combined figure across both platforms.
const STATS_FALLBACK = {
  instagramFollowers: 182,
  pinterestFollowers: 8,
  totalViews: 10000,
  updatedAt: null,
};

const I18N = {
  en: {
    bio: "Skincare and lifestyle creator with a retro tech aesthetic. Just sharing what I actually use and love, kept simple and honest.",
    socialsLabel: "My socials",
    statTotalViews: "Total views",
    statTotalFollowers: "Total followers",
    statAcrossPlatforms: "across all platforms",
    featuredTitle: "Featured Reels",
    linksTitle: "Links",
    blogTitle: "Blog",
    noticeTitle: "Do you like this website?",
    noticeDesc: "Those interested in having a customized website with a similar purpose as this one, built for them, send me an inquiry via email and we'll chat.",
    contactCardTitle: "Contact Details",
    badgeTop: "Most watched",
    badgeFavorite: "Fan favourite",
    viewOnInstagram: "View on Instagram",
    aboutCardTitle: "About Me",
    aboutText: "I'm a content creator building toward UGC as my full time craft. I write, shoot, and direct product videos and social content, turning everyday products into stories people actually stop to watch. Beyond the camera, I manage a handful of projects (links below), where I handle graphic design, marketing, and the planning and resourcing that keeps teams and timelines moving. Creativity and structure feed each other for me. Being close to both makes me sharper at each.",
    introText: "I've worked with brands like Oh Canada Gifts, Kelowna Baskets, and Site Reports Online (among others) to create UGC and marketing content that helps their products connect with real audiences.",
  },
  fr: {
    bio: "Créatrice soins de la peau et style de vie avec une esthétique technologie rétro. Je partage simplement ce que j'utilise et que j'aime, de façon simple et honnête.",
    socialsLabel: "Mes réseaux",
    statTotalViews: "Vues totales",
    statTotalFollowers: "Total des abonnés",
    statAcrossPlatforms: "toutes plateformes confondues",
    featuredTitle: "Reels en vedette",
    linksTitle: "Liens",
    blogTitle: "Blogue",
    noticeTitle: "Ce site vous plaît?",
    noticeDesc: "Si vous voulez un site personnalisé avec un objectif semblable à celui-ci, envoyez-moi un courriel et on en discute.",
    contactCardTitle: "Coordonnées",
    badgeTop: "Plus regardé",
    badgeFavorite: "Coup de cœur",
    viewOnInstagram: "Voir sur Instagram",
    aboutCardTitle: "À propos de moi",
    aboutText: "Je suis créatrice de contenu et je bâtis mon métier autour du contenu généré par les utilisateurs (UGC), à temps plein. J'écris, je tourne et je réalise des vidéos de produits et du contenu pour les réseaux sociaux, transformant des produits du quotidien en histoires que les gens s'arrêtent réellement pour regarder. En dehors de la caméra, je gère plusieurs projets (liens ci-dessous), où je m'occupe du design graphique, du marketing, ainsi que de la planification et des ressources qui gardent les équipes et les échéanciers en mouvement. La créativité et la structure se nourrissent l'une l'autre chez moi. Être proche des deux me rend plus aiguisée dans chacune.",
    introText: "J'ai collaboré avec des marques comme Oh Canada Gifts, Kelowna Baskets et Site Reports Online (entre autres) pour créer du contenu UGC et marketing qui aide leurs produits à rejoindre de vrais publics.",
  },
};

function notice(lang) {
  return {
    iconKey: "mail",
    title: I18N[lang].noticeTitle,
    desc: I18N[lang].noticeDesc,
    copyValue: "sofia@brightlotus.ca",
    share: true,
    cardClass: "notice-card",
  };
}

// Same lined-paper card style as notice(), no left icon column — a small
// star sits inline at the start of the text instead. Uses desc (not title)
// so the weight/size matches About Me's paragraph rather than its heading.
function introNote(lang) {
  return {
    desc: `<span class="title-icon">${ICONS.star}</span>${I18N[lang].introText}`,
    cardClass: "notice-card",
  };
}

function generalLinks(lang) {
  const links = [
    {
      icon: "🎁",
      title: "Oh Canada Gifts",
      url: "https://ohcanadagifts.ca/",
      logo: "images/oh-canada-gift-icon.png",
      logoBare: true,
      share: true,
      social: { icon: "instagram", label: "@oh.canada.gifts", url: "https://www.instagram.com/oh.canada.gifts/" },
    },
    {
      icon: "📊",
      title: "Site Reports Online",
      desc: "Project",
      url: "https://www.sitereports.online/",
      logo: "images/site-reports-icon.png",
      logoBare: true,
      share: true,
    },
  ];

  if (SHOW_PEACHY_KEEN) {
    links.push({
      icon: "🛍️",
      title: "Peachy Keen Co Studio",
      desc: "Etsy Store",
      url: "https://www.etsy.com/ca/shop/PeachyKeenCoStudio?ref=profile_header",
      logo: "images/peachy-keen-icon.png",
      logoBare: true,
      share: true,
      social: { icon: "instagram", label: "@peachykeencostudio", url: "https://www.instagram.com/peachykeencostudio/" },
    });
  }

  return links;
}

function contactCard(lang) {
  return {
    iconKey: "contact",
    title: I18N[lang].contactCardTitle,
    toggle: true,
    moreHtml: `
      <div class="contact-name">Sofía</div>
      <div class="contact-row contact-row--mail" data-mailto="sofia@brightlotus.ca" title="Click to email">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'}<span>sofia@brightlotus.ca</span><button type="button" class="copy-icon-btn" data-copy="sofia@brightlotus.ca" title="Copy email" aria-label="Copy email">${'<svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'}</button></div>
      <div class="contact-row contact-row--copy" data-copy="https://sofiabrightlotus.github.io/sofia-links/" title="Click to copy">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 15l6-6"/><path d="M10 7l.9-.9a3.5 3.5 0 0 1 5 5l-.9.9"/><path d="M14 17l-.9.9a3.5 3.5 0 0 1-5-5l.9-.9"/></svg>'}<span>sofiabrightlotus.github.io/sofia-links</span>${'<svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'}</div>
    `,
  };
}

function aboutCard(lang) {
  return {
    title: `<span class="title-icon">${ICONS.about}</span>${I18N[lang].aboutCardTitle}`,
    desc: I18N[lang].aboutText,
    cardClass: "notice-card",
  };
}

// No posts yet — Blog section stays hidden (SHOW_BLOG = false above) until
// there's real content, then flip the flag and fill this in.
const BLOG_POSTS = [
];

// ---------------------------------------------------------------------------
// Rendering (no need to edit below this line)
// ---------------------------------------------------------------------------

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 4.9 3 9.1 7.3 10.8-.1-.9-.2-2.3 0-3.3.2-.9 1.4-6 1.4-6s-.4-.7-.4-1.8c0-1.7.9-2.9 2.1-2.9 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-1 3.9-.3 1.2.6 2.1 1.7 2.1 2.1 0 3.6-2.7 3.6-5.9 0-2.4-1.7-4.3-4.6-4.3-3.4 0-5.5 2.5-5.5 5.3 0 1 .3 1.6.7 2.2.2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.3-1.7-.7-2.5-2.6-2.5-4.6 0-3.5 2.9-7.6 8.7-7.6 4.6 0 7.7 3.4 7.7 6.9 0 4.7-2.6 8.3-6.4 8.3-1.3 0-2.5-.7-2.9-1.5l-.8 3.1c-.3 1-.9 2.2-1.4 3 1.1.3 2.2.5 3.4.5 6.4 0 11.5-5.1 11.5-11.5S18.4.5 12 .5z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4.5 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5v-7z"/></svg>',
  about: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.8 7.1-.7z"/></svg>',
};

const SHARE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>';

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
  SOCIAL_LINKS.forEach((s) => {
    const a = el("a", `social-link social-link--${s.icon}`, ICONS[s.icon] || "");
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", s.name);
    a.title = s.name;
    container.appendChild(a);
  });
}

function buildLinkGroup(link) {
    const group = el("div", "link-group");
    const isLink = Boolean(link.url);
    const hasMore = Boolean(link.more || link.moreHtml);

    const logoClasses = link.logoBare
      ? "link-icon link-icon--bare"
      : [
          "link-icon",
          "link-icon--logo",
          link.logoFit === "cover" ? "link-icon--fill" : "",
        ].filter(Boolean).join(" ");

    const zoomStyle = link.logoZoom ? ` style="transform: scale(${link.logoZoom})"` : "";

    const iconHtml = link.logo
      ? `<span class="${logoClasses}"><img src="${link.logo}" alt="${link.title} logo" loading="lazy"${zoomStyle} onerror="this.parentElement.textContent='${link.icon}'; this.parentElement.className='link-icon';" /></span>`
      : link.iconKey
        ? `<span class="link-icon link-icon--bare">${ICONS[link.iconKey] || ""}</span>`
        : link.icon
          ? `<span class="link-icon">${link.icon}</span>`
          : "";

    const bodyHtml = `
      ${iconHtml}
      <span class="link-text">
        ${link.title ? `<div class="link-title">${link.title}</div>` : ""}
        ${link.desc ? `<div class="link-desc">${link.desc}</div>` : ""}
      </span>
    `;

    let card;

    if (link.toggle) {
      // Whole card click expands/collapses the panel beneath it, no navigation.
      card = el("div", "link-card");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");
      card.innerHTML = bodyHtml;

      const panel = el("div", "more-panel", link.more ? `<p>${link.more}</p>` : link.moreHtml);
      panel.hidden = true;

      panel.querySelectorAll("[data-copy]").forEach((row) => {
        row.addEventListener("click", async (e) => {
          e.stopPropagation();
          const ok = await copyToClipboard(row.dataset.copy);
          showToast(ok ? "Copied!" : "Couldn't copy");
        });
      });

      // Rows with data-mailto open the visitor's email client to compose a
      // new message; a nested [data-copy] button (see above) still just
      // copies the address, since its click handler stops propagation here.
      panel.querySelectorAll("[data-mailto]").forEach((row) => {
        row.tabIndex = 0;
        row.setAttribute("role", "link");
        const open = () => { window.location.href = `mailto:${row.dataset.mailto}`; };
        row.addEventListener("click", open);
        row.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
        });
      });

      const toggle = () => {
        const expanded = card.getAttribute("aria-expanded") === "true";
        card.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
      };
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });

      group.appendChild(card);
      group.appendChild(panel);
    } else if (link.share) {
      const copyValue = link.url || link.copyValue;
      card = el("div", "link-card");
      card.tabIndex = 0;
      card.setAttribute("role", link.url ? "link" : "button");
      card.innerHTML = `
        <div class="card-top">
          ${bodyHtml}
          <button type="button" class="card-share" aria-label="Copy link for ${link.title}" title="Copy">${SHARE_ICON}</button>
        </div>
      `;

      const primaryAction = async () => {
        if (link.url) {
          window.open(link.url, "_blank", "noopener,noreferrer");
        } else {
          const ok = await copyToClipboard(copyValue);
          showToast(ok ? "Email copied!" : "Couldn't copy email");
        }
      };
      card.addEventListener("click", (e) => {
        if (e.target.closest(".card-share")) return;
        primaryAction();
      });
      card.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && !e.target.closest(".card-share")) {
          e.preventDefault();
          primaryAction();
        }
      });
      card.querySelector(".card-share").addEventListener("click", async (e) => {
        e.stopPropagation();
        const ok = await copyToClipboard(copyValue);
        showToast(ok ? "Copied!" : "Couldn't copy");
      });

      group.appendChild(card);
    } else if (isLink) {
      card = el("a", "link-card");
      card.href = link.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.innerHTML = `
        ${bodyHtml}
        <span class="link-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </span>
      `;
      group.appendChild(card);
    } else {
      card = el("div", "link-card link-card--info");
      card.innerHTML = bodyHtml;
      group.appendChild(card);
    }

    if (link.social) {
      const s = el("a", "link-social");
      s.href = link.social.url;
      s.target = "_blank";
      s.rel = "noopener noreferrer";
      s.innerHTML = `${ICONS[link.social.icon] || ""}<span>Follow on ${link.social.icon[0].toUpperCase()}${link.social.icon.slice(1)} — ${link.social.label}</span>`;
      group.appendChild(s);
    }

    group.querySelector(".link-card").classList.add(...(link.cardClass ? [link.cardClass] : []));

    return group;
}

function renderLinks(lang) {
  const container = document.getElementById("links");
  const section = container.closest(".section");
  if (!SHOW_LINKS) { section.style.display = "none"; return; }
  section.style.display = "";
  container.innerHTML = "";
  generalLinks(lang).forEach((link) => {
    container.appendChild(buildLinkGroup(link));
  });
}

function renderIntroNote(lang) {
  const container = document.getElementById("intro-card");
  if (!container) return;
  container.innerHTML = "";
  container.appendChild(buildLinkGroup(introNote(lang)));
}

function renderContactCard(lang) {
  const container = document.getElementById("contact-card");
  if (!container) return;
  container.innerHTML = "";
  container.appendChild(buildLinkGroup(contactCard(lang)));
}

function renderAboutCard(lang) {
  const container = document.getElementById("about-card");
  if (!container) return;
  container.innerHTML = "";
  container.appendChild(buildLinkGroup(aboutCard(lang)));
}

function renderNotice(lang) {
  const container = document.getElementById("notice-card");
  if (!container) return;
  container.innerHTML = "";
  if (!SHOW_NOTICE) { container.style.display = "none"; return; }
  container.style.display = "";
  container.appendChild(buildLinkGroup(notice(lang)));
}

function renderFeaturedPlaceholder(container, lang) {
  FEATURED_REELS.forEach((reel, i) => {
    const a = el("a", `featured-card featured-card--tone-${(i % 4) + 1}`);
    a.href = reel.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <div class="featured-thumb">
        ${reel.thumbnail
          ? `<img src="${reel.thumbnail}" alt="${reel.title}" loading="lazy" />`
          : `<span class="featured-thumb__mark">IG</span>`}
        <span class="featured-badge">${I18N[lang][reel.badgeKey] || ""}</span>
        <span class="featured-play">
          <svg viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/><path d="M10 8l6 4-6 4V8z"/></svg>
        </span>
      </div>
      <div class="featured-title">${reel.title}</div>
    `;
    container.appendChild(a);
  });
}

function renderFeaturedVideo(container, lang) {
  FEATURED_REELS.forEach((reel) => {
    const card = el("div", "featured-card featured-card--video");
    card.innerHTML = `
      <div class="featured-video-wrap">
        <video class="featured-video" poster="${reel.poster}" preload="none" playsinline>
          <source src="${reel.video}" type="video/mp4" />
        </video>
        <span class="featured-badge">${I18N[lang][reel.badgeKey] || ""}</span>
        <button type="button" class="featured-play" aria-label="Play video">
          <svg viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/><path d="M10 8l6 4-6 4V8z"/></svg>
        </button>
      </div>
      <div class="featured-title">${reel.title}</div>
      <a class="featured-view-link" href="${reel.url}" target="_blank" rel="noopener noreferrer">${I18N[lang].viewOnInstagram}</a>
    `;

    const video = card.querySelector("video");
    const wrap = card.querySelector(".featured-video-wrap");
    const playBtn = card.querySelector(".featured-play");

    playBtn.addEventListener("click", () => {
      video.controls = true;
      video.play();
    });
    video.addEventListener("play", () => wrap.classList.add("is-playing"));
    video.addEventListener("pause", () => wrap.classList.remove("is-playing"));

    container.appendChild(card);
  });
}

function loadInstagramEmbedScript(onReady) {
  if (window.instgrm && window.instgrm.Embeds) { onReady(); return; }
  let script = document.getElementById("ig-embed-script");
  if (!script) {
    script = document.createElement("script");
    script.id = "ig-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
  script.addEventListener("load", onReady, { once: true });
}

function renderFeaturedEmbed(container, lang) {
  FEATURED_REELS.forEach((reel) => {
    const card = el("div", "featured-card featured-card--embed");
    card.innerHTML = `
      <span class="featured-badge">${I18N[lang][reel.badgeKey] || ""}</span>
      <blockquote class="instagram-media" data-instgrm-permalink="${reel.url}" data-instgrm-version="14">
        <a href="${reel.url}" target="_blank" rel="noopener noreferrer">View this reel on Instagram</a>
      </blockquote>
    `;
    container.appendChild(card);
  });

  loadInstagramEmbedScript(() => window.instgrm.Embeds.process());
}

function renderFeatured(lang) {
  const container = document.getElementById("featured");
  if (!container || !FEATURED_REELS.length) return;
  container.innerHTML = "";
  // Instagram's embed widget has a real minimum width (~326px), too wide for
  // a half-column card on this page, so embed mode skips the mixed 2-up grid
  // and stacks every card full-width instead.
  container.classList.toggle("featured-grid--embed", FEATURED_MODE === "embed");

  if (FEATURED_MODE === "embed") {
    renderFeaturedEmbed(container, lang);
  } else if (FEATURED_MODE === "video") {
    renderFeaturedVideo(container, lang);
  } else {
    renderFeaturedPlaceholder(container, lang);
  }
}

function formatCompact(n) {
  try {
    return new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 }).format(n);
  } catch (e) {
    return String(n);
  }
}

async function renderStats(lang) {
  const container = document.getElementById("stats");
  if (!container) return;

  let stats = STATS_FALLBACK;
  try {
    const res = await fetch("data/stats.json", { cache: "no-store" });
    if (res.ok) stats = { ...STATS_FALLBACK, ...(await res.json()) };
  } catch (e) {
    // Offline or first load before the file exists — fall back silently.
  }

  const totalFollowers = (stats.instagramFollowers || 0) + (stats.pinterestFollowers || 0);

  container.innerHTML = `
    <div class="stat stat--wide">
      <div class="stat-value">${formatCompact(stats.totalViews)}</div>
      <div class="stat-label">${I18N[lang].statTotalViews}</div>
      <div class="stat-sublabel">${I18N[lang].statAcrossPlatforms}</div>
    </div>
    <div class="stat stat--wide">
      <div class="stat-value">${formatCompact(totalFollowers)}</div>
      <div class="stat-label">${I18N[lang].statTotalFollowers}</div>
      <div class="stat-sublabel">${I18N[lang].statAcrossPlatforms}</div>
    </div>
  `;
}

function renderBlog() {
  const container = document.getElementById("blog");
  const section = container.closest(".section");
  if (!SHOW_BLOG || !BLOG_POSTS.length) { section.style.display = "none"; return; }

  const sorted = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  sorted.forEach((post) => {
    const a = el("a", "blog-card");
    a.href = post.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const dateStr = new Date(post.date).toLocaleDateString(undefined, {
      year: "numeric", month: "short", day: "numeric",
    });
    a.innerHTML = `
      <div class="blog-date">${dateStr}</div>
      <div class="blog-title">${post.title}</div>
      ${post.excerpt ? `<div class="blog-excerpt">${post.excerpt}</div>` : ""}
    `;
    container.appendChild(a);
  });
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

function renderForLang(lang) {
  applyStaticI18n(lang);
  renderNotice(lang);
  renderIntroNote(lang);
  renderContactCard(lang);
  renderAboutCard(lang);
  renderLinks(lang);
  renderFeatured(lang);
  renderStats(lang);
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
renderBlog();
initLang();
initTheme();
initShare();
