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

const GENERAL_LINKS = [
  {
    icon: "🎁",
    title: "Oh Canada Gifts",
    url: "https://ohcanadagifts.ca/",
    logo: "images/oh-canada-gift-icon.png",
    logoBare: true,
    social: { icon: "instagram", label: "@oh.canada.gifts", url: "https://www.instagram.com/oh.canada.gifts/" },
  },
  {
    icon: "📊",
    title: "Site Reports Online",
    desc: "Project",
    url: "https://www.sitereports.online/",
    logo: "images/site-reports-icon.png",
    logoBare: true,
  },
  {
    icon: "🛍️",
    title: "Peachy Keen Co Studio",
    desc: "Etsy Store",
    url: "https://www.etsy.com/ca/shop/PeachyKeenCoStudio?ref=profile_header",
    logo: "images/peachy-keen-icon.png",
    logoBare: true,
    social: { icon: "instagram", label: "@peachykeencostudio", url: "https://www.instagram.com/peachykeencostudio/" },
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
};

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
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

function renderLinks() {
  const container = document.getElementById("links");
  GENERAL_LINKS.forEach((link) => {
    const group = el("div", "link-group");

    const a = el("a", "link-card");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

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
      : link.iconSvg
        ? `<span class="link-icon link-icon--logo link-icon--svg">${ICONS[link.iconSvg] || ""}</span>`
        : `<span class="link-icon">${link.icon}</span>`;

    a.innerHTML = `
      ${iconHtml}
      <span>
        <div class="link-title">${link.title}</div>
        ${link.desc ? `<div class="link-desc">${link.desc}</div>` : ""}
      </span>
      <span class="link-arrow" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </span>
    `;
    group.appendChild(a);

    if (link.social) {
      const s = el("a", "link-social");
      s.href = link.social.url;
      s.target = "_blank";
      s.rel = "noopener noreferrer";
      s.innerHTML = `${ICONS[link.social.icon] || ""}<span>Follow on ${link.social.icon[0].toUpperCase()}${link.social.icon.slice(1)} — ${link.social.label}</span>`;
      group.appendChild(s);
    }

    container.appendChild(group);
  });
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

document.getElementById("year").textContent = new Date().getFullYear();
renderSocials();
renderLinks();
renderVideos();
renderBlog();
initTheme();
