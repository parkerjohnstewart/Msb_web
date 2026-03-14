const SITE_DATA = window.SITE_DATA || {};
const SITE_CONFIG = SITE_DATA.site || {};
const SITE_LABELS = SITE_DATA.labels || {};
const SITE_META = SITE_DATA.meta || {};
const SITE_COPY = SITE_DATA.pages || {};

const NAV_ITEMS = [
  { href: "index.html", key: "home", label: SITE_LABELS.nav?.home || "Home" },
  { href: "about.html", key: "about", label: SITE_LABELS.nav?.about || "About" },
  { href: "medicare.html", key: "medicare", label: SITE_LABELS.nav?.medicare || "Medicare" },
  { href: "contact.html", key: "contact", label: SITE_LABELS.nav?.contact || "Contact" }
];

function getValue(path, root = SITE_COPY) {
  return path.split(".").reduce((value, key) => value?.[key], root);
}

function buildHeader(pageKey) {
  const links = NAV_ITEMS.map((item) => {
    const activeClass = item.key === pageKey ? "is-active" : "";
    const current = item.key === pageKey ? ' aria-current="page"' : "";
    return `<a class="nav-link ${activeClass}" href="${item.href}"${current}>${item.label}</a>`;
  }).join("");

  return `
    <header class="site-header" data-site-header>
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="${SITE_CONFIG.agencyName} home">
          <img class="brand-logo" src="${SITE_CONFIG.logoImage}" alt="${SITE_CONFIG.agencyName} logo" />
          <span class="brand-copy">
            <strong>${SITE_CONFIG.agencyName}</strong>
            <span>${SITE_CONFIG.cityState}</span>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
          <span class="sr-only">Open navigation</span>
          <span class="nav-toggle-lines" aria-hidden="true"></span>
        </button>
        <nav class="site-nav" id="site-navigation" aria-label="Primary">
          <div class="nav-links">${links}</div>
          <div class="button-row">
            <a class="btn btn-primary" href="contact.html">${SITE_LABELS.nav?.book || "Book Consultation"}</a>
          </div>
        </nav>
      </div>
    </header>
  `;
}

function buildFooter() {
  const footerNotes = [SITE_CONFIG.disclaimerShort, SITE_CONFIG.disclaimerLong, SITE_CONFIG.licenseInfo]
    .filter(Boolean)
    .map((text) => `<p class="footer-small">${text}</p>`)
    .join("");

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-card">
            <h3>${SITE_CONFIG.agencyName}</h3>
            <p>${SITE_CONFIG.serviceArea}</p>
          </div>
          <div class="footer-card">
            <h3>${SITE_LABELS.footer?.contact || "Contact"}</h3>
            <p><a href="${SITE_CONFIG.phoneHref}">${SITE_CONFIG.phoneDisplay}</a></p>
            <p><a href="${SITE_CONFIG.emailHref}">${SITE_CONFIG.email}</a></p>
            <p>${SITE_CONFIG.officeHours}</p>
          </div>
        </div>
        <div class="footer-bottom">
          ${footerNotes}
        </div>
      </div>
    </footer>
  `;
}

function applyMeta(pageKey) {
  const meta = SITE_META[pageKey];
  if (!meta) return;

  const title = document.querySelector("title");
  if (title && meta.title) title.textContent = meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description && meta.description) description.setAttribute("content", meta.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && meta.ogTitle) ogTitle.setAttribute("content", meta.ogTitle);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && meta.ogDescription) ogDescription.setAttribute("content", meta.ogDescription);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && meta.ogImage) ogImage.setAttribute("content", meta.ogImage);
}

function applySchema() {
  const schemaNode = document.querySelector("[data-site-schema]");
  if (!schemaNode) return;

  schemaNode.textContent = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      name: SITE_CONFIG.agencyName,
      telephone: SITE_CONFIG.phoneHref?.replace("tel:", "+"),
      email: SITE_CONFIG.email,
      areaServed: SITE_CONFIG.cityState
    },
    null,
    2
  );
}

function bindConfig() {
  document.querySelectorAll("[data-config]").forEach((element) => {
    const value = SITE_CONFIG[element.dataset.config];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-config-href]").forEach((element) => {
    const value = SITE_CONFIG[element.dataset.configHref];
    if (value) element.setAttribute("href", value);
  });

  document.querySelectorAll("[data-config-src]").forEach((element) => {
    const value = SITE_CONFIG[element.dataset.configSrc];
    if (value) element.setAttribute("src", value);
  });

  document.querySelectorAll("[data-config-url]").forEach((element) => {
    const value = SITE_CONFIG[element.dataset.configUrl];
    if (value) element.setAttribute("data-url", value);
  });
}

function bindContent() {
  document.querySelectorAll("[data-content]").forEach((element) => {
    const value = getValue(element.dataset.content);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-content-alt]").forEach((element) => {
    const value = getValue(element.dataset.contentAlt);
    if (typeof value === "string") element.setAttribute("alt", value);
  });
}

function renderCardCollection(selector, items) {
  const container = document.querySelector(selector);
  if (!container || !Array.isArray(items)) return;

  container.innerHTML = items
    .map(
      (item) => `
        <article class="info-card">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderCollections() {
  renderCardCollection('[data-render="home.audiences.cards"]', getValue("home.audiences.cards"));
  renderCardCollection('[data-render="home.basics.cards"]', getValue("home.basics.cards"));
  renderCardCollection('[data-render="medicare.overview.cards"]', getValue("medicare.overview.cards"));
}

function initNavigation() {
  const header = document.querySelector("[data-site-header]");
  const toggle = header?.querySelector(".nav-toggle");

  if (!header || !toggle) return;

  const closeMenu = () => {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

function initHeaderScroll() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const sync = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function initCalendlyButtons() {
  const buttons = document.querySelectorAll("[data-calendly-button]");
  const inlineWidgets = document.querySelectorAll("[data-calendly-inline]");
  if (!buttons.length && !inlineWidgets.length) return;

  const hasPlaceholder = SITE_CONFIG.calendlyUrl.includes("your-calendly-link");

  const loadScript = () =>
    new Promise((resolve) => {
      if (window.Calendly) {
        resolve();
        return;
      }

      const existing = document.querySelector('script[data-calendly-script="true"]');
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.dataset.calendlyScript = "true";
      script.addEventListener("load", resolve, { once: true });
      document.head.appendChild(script);
    });

  inlineWidgets.forEach((widget) => {
    widget.setAttribute("data-url", SITE_CONFIG.calendlyUrl);

    if (hasPlaceholder) {
      widget.innerHTML = '<div class="note">Replace the Calendly URL in <code>content-config.js</code> to show the scheduler here.</div>';
    }
  });

  buttons.forEach((button) => {
    button.setAttribute("href", SITE_CONFIG.calendlyUrl);

    if (hasPlaceholder) return;

    button.addEventListener("click", async (event) => {
      event.preventDefault();
      await loadScript();
      window.Calendly.initPopupWidget({ url: SITE_CONFIG.calendlyUrl });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const pageKey = document.body.dataset.page || "home";
  const headerRoot = document.querySelector("[data-header-root]");
  const footerRoot = document.querySelector("[data-footer-root]");

  applyMeta(pageKey);
  applySchema();

  if (headerRoot) headerRoot.innerHTML = buildHeader(pageKey);
  if (footerRoot) footerRoot.innerHTML = buildFooter();

  bindConfig();
  bindContent();
  renderCollections();
  initNavigation();
  initHeaderScroll();
  initCalendlyButtons();
});
