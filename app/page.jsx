"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const featuredProducts = [
  {
    name: "KHA",
    badge: "signature",
    description: "Signature coffee untuk kebutuhan kafein harianmu."
  },
  {
    name: "KHA KHA",
    badge: "bold",
    description: "Pilihan dengan karakter lebih intens."
  },
  {
    name: "PALMSUIKER",
    badge: "daily",
    description: "Varian menu harian yang pasti bikin nagih."
  },
  {
    name: "KARMELLA",
    badge: "smooth",
    description: "Menu dengan profil rasa yang lembut dan smooth."
  },
  {
    name: "MOKHA",
    badge: "menu",
    description: "Perpaduan kopi dan cokelat yang kaya."
  },
  {
    name: "SHOKOLA",
    badge: "non-kopi",
    description: "Pilihan bukan kopi yang nggak kalah seru."
  }
];

const whyCards = [
  {
    title: "100% Arabica",
    body: "Untuk rasa kopi yang lebih clean dan serius."
  },
  {
    title: "Double Ristretto",
    body: "Lebih bold, lebih intense, lebih KHA."
  },
  {
    title: "Local-Made",
    body: "Dibuat dekat dengan keseharianmu."
  },
  {
    title: "Kopi & Bukan Kopi",
    body: "Ada pilihan untuk caffeine dealer dan non-coffee drinker."
  }
];

const tabs = [
  { id: "kopi", label: "Kopi" },
  { id: "bukan-kopi", label: "Bukan Kopi" },
  { id: "add-on", label: "Add On" },
  { id: "bites", label: "Bites" }
];

const menuItems = {
  kopi: [
    {
      name: "KHA",
      description: "Double ristretto dengan madu manuka.",
      size: "Coming Soon"
    },
    {
      name: "KHA KHA",
      description: "Varian kopi dengan karakter lebih bold.",
      size: "Coming Soon"
    },
    {
      name: "PALMSUIKER",
      description: "Menu kopi dengan rasa yang unik dan nagih.",
      size: "Coming Soon"
    },
    {
      name: "KARMELLA",
      description: "Menu kopi dengan profil rasa yang lembut.",
      size: "Coming Soon"
    }
  ],
  "bukan-kopi": [
    {
      name: "SHOKOLA",
      description: "Pilihan non-kopi yang rich dan creamy.",
      size: "Coming Soon"
    },
    {
      name: "Coming Soon",
      description: "Menu baru segera hadir.",
      size: "Coming Soon"
    }
  ],
  "add-on": [
    {
      name: "Coming Soon",
      description: "Extra shot dan topping pilihan.",
      size: "Coming Soon"
    },
    {
      name: "Coming Soon",
      description: "Tambahan untuk pesananmu.",
      size: "Coming Soon"
    }
  ],
  bites: [
    {
      name: "Coming Soon",
      description: "Snack pendamping kopi.",
      size: "Coming Soon"
    },
    {
      name: "Coming Soon",
      description: "Bites untuk teman ngopi.",
      size: "Coming Soon"
    }
  ]
};

const visualPlaceholders = [
  { label: "Coming Soon", title: "Bottle" },
  { label: "Coming Soon", title: "Cup" },
  { label: "Coming Soon", title: "Local" }
];

const orderCards = [
  {
    title: "Order via WhatsApp",
    placeholder: "Coming Soon"
  },
  {
    title: "DM Instagram",
    placeholder: "Coming Soon"
  },
  {
    title: "Delivery App",
    placeholder: "Coming Soon"
  }
];

const locationCards = [
  {
    title: "Lokasi",
    placeholder: "Coming Soon"
  },
  {
    title: "Jam Operasional",
    placeholder: "Coming Soon"
  },
  {
    title: "Area Delivery",
    placeholder: "Coming Soon"
  }
];

const testimonials = [
  {
    quote: "Coming Soon",
    name: "Coming Soon"
  },
  {
    quote: "Coming Soon",
    name: "Coming Soon"
  },
  {
    quote: "Coming Soon",
    name: "Coming Soon"
  }
];

function BrandLogo({ className = "", alt = "Kopi KHA" }) {
  return (
    <span className={`brand-image ${className}`}>
      <Image src="/KHA-web-logo.png" alt={alt} width={644} height={384} priority />
    </span>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("kopi");

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll(".reveal");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    const stickyCta = document.querySelector(".mobile-sticky-cta");
    
    if (!footer || !stickyCta) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stickyCta.style.opacity = "0";
            stickyCta.style.pointerEvents = "none";
          } else {
            stickyCta.style.opacity = "1";
            stickyCta.style.pointerEvents = "auto";
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      document
        .querySelectorAll(`[data-panel="${activeTab}"] .reveal`)
        .forEach((element) => element.classList.add("is-visible"));
    });
  }, [activeTab]);

  function handleTabKeyDown(event, tabId) {
    const currentIndex = tabs.findIndex((tab) => tab.id === tabId);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    }

    if (event.key === "ArrowLeft") {
      nextIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      setActiveTab(tabs[nextIndex].id);
      document.querySelector(`#tab-${tabs[nextIndex].id}`)?.focus();
    }
  }

  return (
    <>
      <a className="skip-link sr-only" href="#top">
        Skip to content
      </a>
      <header className="site-header" aria-label="Navigasi utama">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Kembali ke hero Kopi KHA">
            <BrandLogo className="brand-logo" alt="" />
          </a>

          <nav className="desktop-nav" aria-label="Navigasi desktop">
            <a className="nav-link" href="#menu">
              Menu
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#location">
              Location
            </a>
            <a className="nav-link nav-cta" href="#order">
              Order Now
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav
          className={`mobile-menu${menuOpen ? " is-open" : ""}`}
          id="mobile-menu"
          aria-label="Navigasi mobile"
        >
          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menu <span aria-hidden="true">+</span>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About <span aria-hidden="true">+</span>
          </a>
          <a href="#order" onClick={() => setMenuOpen(false)}>
            Order <span aria-hidden="true">+</span>
          </a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>
            Instagram <span aria-hidden="true">+</span>
          </a>
          <span className="placeholder">Coming Soon</span>
        </nav>
      </header>

      <main id="top">
        <section className="section section-blue hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-content reveal">
              <span className="label hero-kicker">Support Your Local Caffeine Dealers</span>
              <h1 className="hero-title logo-heading" id="hero-title">
                <BrandLogo className="hero-logo" />
              </h1>
              <p className="hero-copy">
                Kopi lokal dengan karakter bold, rasa serius, dan gaya santai untuk kebutuhan
                kafein harianmu.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#order">
                  Order Sekarang
                </a>
                <a className="btn btn-secondary" href="#menu">
                  Lihat Menu
                </a>
              </div>
            </div>

            <div className="hero-visual reveal" aria-label="Visual produk Kopi KHA">
              <div className="hero-product-card street-card">
                <span className="placeholder">Coming Soon</span>
                <p className="display hero-product-title">KOPI KHA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white" id="about" aria-labelledby="about-title">
          <div className="shell about-layout">
            <div className="section-intro reveal">
              <span className="label label-with-logo">
                About <BrandLogo className="inline-logo label-logo" />
              </span>
              <h2 className="display section-heading" id="about-title">
                Bukan sekadar kopi susu. Ini KHA.
              </h2>
              <p className="about-copy">
                <BrandLogo className="inline-logo body-logo" /> adalah local coffee brand yang
                dibuat untuk kamu yang butuh kafein harian tanpa banyak basa-basi. Bold secara
                visual, serius soal rasa, dan tetap santai untuk dinikmati kapan saja.
              </p>
              <span className="placeholder">Coming Soon</span>
            </div>

            <aside className="about-note street-card reveal" aria-label="Brand note Kopi KHA">
              <p className="script note-script">local, bold, direct</p>
              <p className="display note-display">NO SOFT DRAMA.</p>
            </aside>
          </div>
        </section>

        <section className="section section-blue" id="menu" aria-labelledby="featured-title">
          <div className="shell">
            <div className="section-intro reveal">
              <span className="label">kopi / bukan kopi / bites</span>
              <h2 className="display section-heading" id="featured-title">
                Menu Favorit
              </h2>
              <a className="btn btn-primary w-fit" href="#full-menu">
                Lihat Full Menu
              </a>
            </div>

            <div className="featured-grid">
              {featuredProducts.map((product) => (
                <article className="product-card street-card reveal" key={product.name}>
                  <div className="product-card-top">
                    <h3 className="display">{product.name}</h3>
                    <span className="badge">{product.badge}</span>
                  </div>
                  <div className="product-visual" aria-label={`Visual produk ${product.name}`}>
                    <div className="product-visual-inner">
                      <span className="display visual-kha">KHA</span>
                      <span className="placeholder mt-3">Coming Soon</span>
                    </div>
                  </div>
                  <p>{product.description}</p>
                  <span className="placeholder">Coming Soon</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="why-title">
          <div className="shell">
            <div className="section-intro reveal">
              <span className="label">one shot is not enough</span>
              <h2 className="display section-heading" id="why-title">
                Why KHA?
              </h2>
            </div>

            <div className="why-grid">
              {whyCards.map((card) => (
                <article className="why-card street-card reveal" key={card.title}>
                  <h3 className="display">{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blue" id="full-menu" aria-labelledby="full-menu-title">
          <div className="shell">
            <div className="section-intro reveal">
              <span className="label">category board</span>
              <h2 className="display section-heading" id="full-menu-title">
                Menu
              </h2>
            </div>

            <div className="menu-tabs" role="tablist" aria-label="Kategori menu Kopi KHA">
              {tabs.map((tab) => {
                const selected = activeTab === tab.id;

                return (
                  <button
                    className="tab-button"
                    id={`tab-${tab.id}`}
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, tab.id)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="menu-panels">
              {tabs.map((tab) => (
                <div
                  className="menu-panel"
                  id={`panel-${tab.id}`}
                  key={tab.id}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  data-panel={tab.id}
                  hidden={activeTab !== tab.id}
                >
                  {menuItems[tab.id].map((item, index) => (
                    <article className="menu-item street-card reveal" key={`${tab.id}-${index}`}>
                      <h3 className="display">{item.name}</h3>
                      <p>{item.description}</p>
                      <p className="size-line">{item.size}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="visual-title">
          <div className="shell">
            <div className="section-intro reveal">
              <span className="label">future product shots</span>
              <h2 className="display section-heading" id="visual-title">
                Bold Look. Daily Caffeine.
              </h2>
            </div>

            <div className="visual-grid">
              {visualPlaceholders.map((item, index) => (
                <article className="visual-placeholder street-card reveal" key={`visual-${index}`}>
                  <span className="placeholder">{item.label}</span>
                  <p className="display">{item.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-blue marquee" aria-label="Brand statement">
          <div className="marquee-track" aria-hidden="true">
            <span className="marquee-text">Support Your Local Caffeine Dealers</span>
            <span className="marquee-text">Support Your Local Caffeine Dealers</span>
            <span className="marquee-text">Support Your Local Caffeine Dealers</span>
            <span className="marquee-text">Support Your Local Caffeine Dealers</span>
          </div>
          <p className="sr-only">Support Your Local Caffeine Dealers</p>
        </section>

        <section className="section section-white" id="order" aria-labelledby="order-title">
          <div className="shell">
            <div className="section-intro reveal">
              <span className="label">order gateway</span>
              <h2 className="display section-heading" id="order-title">
                Siap isi ulang kafein?
              </h2>
              <p className="about-copy">Pilih menu favoritmu, lalu order lewat channel yang tersedia.</p>
            </div>

            <div className="order-grid">
              {orderCards.map((card) => (
                <article className="order-card street-card reveal" key={card.title}>
                  <h3 className="display">{card.title}</h3>
                  <span className="placeholder">{card.placeholder}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blue" id="location" aria-labelledby="location-title">
          <div className="shell">
            <div className="section-intro reveal">
              <span className="label">location &amp; ops</span>
              <h2 className="display section-heading" id="location-title">
                Find Your KHA
              </h2>
            </div>

            <div className="location-grid">
              {locationCards.map((card) => (
                <article className="location-card street-card reveal" key={card.title}>
                  <h3 className="display">{card.title}</h3>
                  <span className="placeholder">{card.placeholder}</span>
                </article>
              ))}
            </div>

            <div className="map-placeholder street-card mt-8 reveal" aria-label="Peta lokasi Kopi KHA">
              <span className="placeholder">Coming Soon</span>
            </div>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="testimonial-title">
          <div className="shell">
            <div className="section-intro reveal">
              <span className="label">social proof</span>
              <h2 className="display section-heading" id="testimonial-title">
                Kata mereka yang sudah kena kafein
              </h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article className="testimonial-card street-card reveal" key={`testimonial-${index}`}>
                  <blockquote>&quot;{testimonial.quote}&quot;</blockquote>
                  <cite>- {testimonial.name}</cite>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="section site-footer" id="footer">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <BrandLogo className="footer-logo" />
              <p>Support your local caffeine dealers.</p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <span className="footer-label">Menu</span>
              <a href="#menu">Menu</a>
              <a href="#about">About</a>
              <a href="#order">Order</a>
              <a href="#location">Location</a>
            </nav>
            <div className="footer-contact" aria-label="Kontak Kopi KHA">
              <span className="footer-label">Hubungi Kami</span>
              <p>Instagram: Coming Soon</p>
              <p>WhatsApp: Coming Soon</p>
              <p>Email: Coming Soon</p>
            </div>
          </div>
          <div className="copyright">
            &copy; 2026 Kopi KHA. All rights reserved.
          </div>
        </div>
      </footer>

      <a className="mobile-sticky-cta" href="#order">
        <span className="btn btn-blue">Order Sekarang</span>
      </a>
    </>
  );
}
