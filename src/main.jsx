import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { siteContent } from "./siteContent.js";

const getAbsoluteUrl = (path) => {
  if (!path) {
    return siteContent.seo.siteUrl;
  }

  try {
    return new URL(path, siteContent.seo.siteUrl).toString();
  } catch {
    return siteContent.seo.siteUrl;
  }
};

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertLink = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const applySiteMetadata = () => {
  const pageTitle = siteContent.browserTitle || siteContent.title;
  const description = siteContent.seo.description || siteContent.subtitle;
  const keywords = siteContent.seo.keywords.join(", ");
  const pageUrl = getAbsoluteUrl(siteContent.seo.siteUrl);
  const imageUrl = getAbsoluteUrl(siteContent.seo.image);

  document.documentElement.lang = "zh-CN";
  document.title = pageTitle;

  let iconLink = document.querySelector("link[rel='icon']");

  if (!iconLink) {
    iconLink = document.createElement("link");
    iconLink.rel = "icon";
    document.head.appendChild(iconLink);
  }

  iconLink.href = siteContent.iconHref;
  iconLink.type = siteContent.iconType;

  upsertLink("link[rel='canonical']", {
    rel: "canonical",
    href: pageUrl,
  });

  upsertMeta("meta[name='description']", {
    name: "description",
    content: description,
  });
  upsertMeta("meta[name='keywords']", {
    name: "keywords",
    content: keywords,
  });
  upsertMeta("meta[name='author']", {
    name: "author",
    content: siteContent.seo.author,
  });
  upsertMeta("meta[name='robots']", {
    name: "robots",
    content: "index, follow, max-image-preview:large",
  });
  upsertMeta("meta[name='theme-color']", {
    name: "theme-color",
    content: siteContent.seo.themeColor,
  });
  upsertMeta("meta[property='og:type']", {
    property: "og:type",
    content: "website",
  });
  upsertMeta("meta[property='og:locale']", {
    property: "og:locale",
    content: siteContent.seo.locale,
  });
  upsertMeta("meta[property='og:title']", {
    property: "og:title",
    content: pageTitle,
  });
  upsertMeta("meta[property='og:description']", {
    property: "og:description",
    content: description,
  });
  upsertMeta("meta[property='og:url']", {
    property: "og:url",
    content: pageUrl,
  });
  upsertMeta("meta[property='og:image']", {
    property: "og:image",
    content: imageUrl,
  });
  upsertMeta("meta[name='twitter:card']", {
    name: "twitter:card",
    content: "summary_large_image",
  });
  upsertMeta("meta[name='twitter:title']", {
    name: "twitter:title",
    content: pageTitle,
  });
  upsertMeta("meta[name='twitter:description']", {
    name: "twitter:description",
    content: description,
  });
  upsertMeta("meta[name='twitter:image']", {
    name: "twitter:image",
    content: imageUrl,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteContent.title,
    alternateName: siteContent.subtitle,
    url: pageUrl,
    description,
    inLanguage: "zh-CN",
    publisher: {
      "@type": "Organization",
      name: siteContent.seo.author,
      url: pageUrl,
      logo: imageUrl,
    },
  };
  let jsonLd = document.head.querySelector("script[type='application/ld+json']");

  if (!jsonLd) {
    jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    document.head.appendChild(jsonLd);
  }

  jsonLd.textContent = JSON.stringify(structuredData);
};

const lockBrowserZoom = () => {
  const root = document.getElementById("root");
  const basePixelRatio = window.devicePixelRatio || 1;

  const applyLockedScale = () => {
    const currentPixelRatio = window.devicePixelRatio || basePixelRatio;
    const scale = basePixelRatio / currentPixelRatio;

    root.style.width = `${100 / scale}vw`;
    root.style.height = `${100 / scale}vh`;
    root.style.transform = `scale(${scale})`;
    root.style.transformOrigin = "0 0";
  };

  const preventZoomShortcut = (event) => {
    const key = event.key.toLowerCase();
    const isZoomKey = ["+", "-", "=", "0"].includes(key);

    if ((event.ctrlKey || event.metaKey) && isZoomKey) {
      event.preventDefault();
    }
  };

  const preventZoomWheel = (event) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }
  };

  applyLockedScale();
  window.addEventListener("resize", applyLockedScale);
  window.visualViewport?.addEventListener("resize", applyLockedScale);
  window.addEventListener("keydown", preventZoomShortcut, { passive: false });
  window.addEventListener("wheel", preventZoomWheel, { passive: false });
  window.addEventListener("gesturestart", (event) => event.preventDefault(), { passive: false });
  window.addEventListener("gesturechange", (event) => event.preventDefault(), { passive: false });
};

applySiteMetadata();
lockBrowserZoom();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
