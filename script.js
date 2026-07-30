// ---------------------------------------------------------------------------
// EDIT YOUR CONTENT HERE. Everything below is rendered automatically.
// ---------------------------------------------------------------------------

// Set to true to bring back the Videos / Blog sections.
const SHOW_VIDEOS = false;
const SHOW_BLOG = false;

const SOCIAL_LINKS = [
  { name: "Pinterest", url: "https://ca.pinterest.com/00dohboi/", icon: "pinterest" },
  { name: "Instagram", url: "https://www.instagram.com/sofiasidequests00/", icon: "instagram" },
];

const NOTICE = {
  iconKey: "mail",
  title: "Do you like this website?",
  desc: "Those interested in having a customized website with a similar purpose as this one, built for them, send me an inquiry via email and we'll chat.",
  copyValue: "sofia@brightlotus.ca",
  share: true,
  cardClass: "notice-card",
};

const GENERAL_LINKS = [
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
  {
    icon: "🛍️",
    title: "Peachy Keen Co Studio",
    desc: "Etsy Store",
    url: "https://www.etsy.com/ca/shop/PeachyKeenCoStudio?ref=profile_header",
    logo: "images/peachy-keen-icon.png",
    logoBare: true,
    share: true,
    social: { icon: "instagram", label: "@peachykeencostudio", url: "https://www.instagram.com/peachykeencostudio/" },
  },
  {
    iconKey: "contact",
    title: "Contact Details",
    toggle: true,
    moreHtml: `
      <div class="contact-name">Sofía</div>
      <div class="contact-row contact-row--copy" data-copy="sofia@brightlotus.ca" title="Click to copy">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'}<span>sofia@brightlotus.ca</span>${'<svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'}</div>
      <div class="contact-row contact-row--copy" data-copy="https://sofiabrightlotus.github.io/sofia-links/" title="Click to copy">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 15l6-6"/><path d="M10 7l.9-.9a3.5 3.5 0 0 1 5 5l-.9.9"/><path d="M14 17l-.9.9a3.5 3.5 0 0 1-5-5l.9-.9"/></svg>'}<span>sofiabrightlotus.github.io/sofia-links</span>${'<svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'}</div>
    `,
  },
];

const VIDEOS = [
  { title: "How I built this site", url: "https://youtube.com/watch?v=example1", thumbnail: "" },
  { title: "Behind the scenes", url: "https://youtube.com/watch?v=example2", thumbnail: "" },
];

const BLOG_POSTS = [
  {
    title: "Why I started this blog",
    date: "2026-06-01",
    excerpt: "A quick note on what to expect here.",
    url: "https://example.com/blog/why-i-started",
  },
  {
    title: "Lessons from my first project",
    date: "2026-05-12",
    excerpt: "What went right, what went wrong, what I'd do differently.",
    url: "https://example.com/blog/first-project-lessons",
  },
];

// ---------------------------------------------------------------------------
// Rendering (no need to edit below this line)
// ---------------------------------------------------------------------------

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 4.9 3 9.1 7.3 10.8-.1-.9-.2-2.3 0-3.3.2-.9 1.4-6 1.4-6s-.4-.7-.4-1.8c0-1.7.9-2.9 2.1-2.9 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-1 3.9-.3 1.2.6 2.1 1.7 2.1 2.1 0 3.6-2.7 3.6-5.9 0-2.4-1.7-4.3-4.6-4.3-3.4 0-5.5 2.5-5.5 5.3 0 1 .3 1.6.7 2.2.2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.3-1.7-.7-2.5-2.6-2.5-4.6 0-3.5 2.9-7.6 8.7-7.6 4.6 0 7.7 3.4 7.7 6.9 0 4.7-2.6 8.3-6.4 8.3-1.3 0-2.5-.7-2.9-1.5l-.8 3.1c-.3 1-.9 2.2-1.4 3 1.1.3 2.2.5 3.4.5 6.4 0 11.5-5.1 11.5-11.5S18.4.5 12 .5z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4.5 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5v-7z"/></svg>',
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
      <span>
        <div class="link-title">${link.title}</div>
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

function renderLinks() {
  const container = document.getElementById("links");
  GENERAL_LINKS.forEach((link) => {
    container.appendChild(buildLinkGroup(link));
  });
}

function renderNotice() {
  const container = document.getElementById("notice-card");
  if (!container) return;
  container.appendChild(buildLinkGroup(NOTICE));
}

function youtubeThumbFromUrl(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{6,})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : "";
}

function renderVideos() {
  const container = document.getElementById("videos");
  const section = container.closest(".section");
  if (!SHOW_VIDEOS || !VIDEOS.length) { section.style.display = "none"; return; }

  VIDEOS.forEach((v) => {
    const thumb = v.thumbnail || youtubeThumbFromUrl(v.url);
    const a = el("a", "video-card");
    a.href = v.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <div class="video-thumb">
        ${thumb ? `<img src="${thumb}" alt="${v.title}" loading="lazy" />` : ""}
        <span class="video-play">
          <svg viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/><path d="M10 8l6 4-6 4V8z"/></svg>
        </span>
      </div>
      <div class="video-title">${v.title}</div>
    `;
    container.appendChild(a);
  });
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

function initShare() {
  const btn = document.getElementById("share-btn");
  btn.addEventListener("click", async () => {
    const ok = await copyToClipboard(window.location.href);
    showToast(ok ? "Link copied!" : "Couldn't copy link");
  });
}

renderSocials();
renderNotice();
renderLinks();
renderVideos();
renderBlog();
initTheme();
initShare();
