"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const featuredProducts = [
  {
    name: "KHA",
    badge: "signature",
    description: "Double ristretto dengan madu manuka.",
    detail: "Ristretto: ekstraksi kopi singkat, rasa lebih pekat. Double = porsi dua kali lipat.",
    image: "/kha-original.png",
  },
  {
    name: "KHA KHA",
    badge: "bold",
    description: "Varian lebih intense untuk yang butuh adrenalin.",
    image: "/kha-kha.png",
  },
  {
    name: "PALMSUIKER",
    badge: "daily",
    description: "Menu harian yang bikin nagih.",
    image: "/palmsuiker.png",
  },
  {
    name: "KARMELLA",
    badge: "smooth",
    description: "Profil rasa lembut, cocok buat pemula.",
    image: "/karmella.png",
  },
  {
    name: "MOKHA",
    badge: "kopi & cokelat",
    description: "Perpaduan kopi dan cokelat yang kaya.",
    image: "/mokha.png",
  },
  {
    name: "SHOKOLA",
    badge: "non-kopi",
    description: "Bukan kopi, tapi tetap bikin nagih.",
    image: "/shokola.png",
  },
];

const whyCards = [
  {
    title: "100% Arabica",
    body: "Untuk rasa kopi yang lebih clean dan serius.",
    image: "/kha-original.png",
  },
  {
    title: "Double Ristretto",
    body: "Lebih bold, lebih intense, lebih KHA.",
    image: "/kha-kha.png",
  },
  {
    title: "Local-Made",
    body: "Dibuat dekat dengan keseharianmu.",
    image: "/palmsuiker.png",
  },
  {
    title: "Kopi & Bukan Kopi",
    body: "Ada pilihan untuk caffeine dealer dan non-coffee drinker.",
    image: "/shokola.png",
  },
];

const tabs = [
  { id: "kopi", label: "Kopi" },
  { id: "bukan-kopi", label: "Bukan Kopi" },
  { id: "add-on", label: "Add On" },
  { id: "bites", label: "Bites" },
];

const menuItems = {
  kopi: [
    {
      name: "KHA",
      description: "Double ristretto dengan madu manuka.",
    },
    {
      name: "KHA KHA",
      description: "Varian lebih intense.",
    },
    {
      name: "PALMSUIKER",
      description: "Menu harian yang bikin nagih.",
    },
    {
      name: "KARMELLA",
      description: "Profil rasa lembut.",
    },
  ],
  "bukan-kopi": [
    {
      name: "SHOKOLA",
      description: "Non-kopi yang creamy.",
    },
    {
      name: "Segera Hadir",
      description: "Menu baru segera hadir.",
      comingSoon: true,
    },
  ],
  "add-on": [
    {
      name: "Extra Shot",
      description: "Tambahan untuk pesananmu.",
      comingSoon: true,
    },
    {
      name: "Topping",
      description: "Pilihan topping ekstra.",
      comingSoon: true,
    },
  ],
  bites: [
    {
      name: "Snack",
      description: "Pendamping kopi.",
      comingSoon: true,
    },
    {
      name: "Dessert",
      description: "Manis penutup.",
      comingSoon: true,
    },
  ],
};

const orderCards = [
  {
    title: "WhatsApp",
    description: "Chat langsung, pesan dalam hitungan detik.",
    action: "https://wa.me/",
  },
  {
    title: "Instagram DM",
    description: "Kirim pesan, kita fast response.",
    action: "https://instagram.com/",
  },
  {
    title: "Delivery App",
    description: "GrabFood, GoFood, ShopeeFood.",
    action: null,
  },
];

const locationCards = [
  {
    title: "Lokasi",
    description: "Lokasi pertama segera diumumkan.",
  },
  {
    title: "Jam Operasional",
    description: "Setiap hari, 08:00 - 22:00 WIB.",
  },
  {
    title: "Area Delivery",
    description: "Jangkauan pengiriman segera expand.",
  },
];

const testimonials = [
  {
    quote: "Kopi paling bold yang pernah gue coba. Langsung to the point.",
    name: "Rizky",
    role: "Coffee Enthusiast",
    rating: 5,
  },
  {
    quote: "Local brand yang nggak main aman. KHA emang beda kelas.",
    name: "Dian",
    role: "Regular Customer",
    rating: 5,
  },
  {
    quote: "Double ristretto-nya bikin nagih. Sekali coba, pasti balik lagi.",
    name: "Adit",
    role: "Caffeine Dealer",
    rating: 5,
  },
];

function BrandLogo({ className = "", alt = "Kopi KHA", variant = "blue" }) {
  const src = variant === "white" ? "/kha-white.svg" : "/kha-blue.svg";
  return (
    <span className={`brand-image ${className}`}>
      <Image src={src} alt={alt} width={950} height={569} priority />
    </span>
  );
}

function EmptyState({ label = "Segera Hadir" }) {
  return (
    <span className="empty-state">
      <span className="empty-state-pattern" aria-hidden="true" />
      <span className="empty-state-text">{label}</span>
    </span>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("kopi");

  const closeMenu = useCallback(() => setMenuOpen(false), []);

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
    function handleHashChange() {
      const hash = window.location.hash.replace("#", "");
      if (tabs.some((tab) => tab.id === hash)) {
        setActiveTab(hash);
      }
    }

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
    const backToTop = document.querySelector(".back-to-top");
    if (!backToTop) return undefined;

    function handleScroll() {
      if (window.scrollY > 400) {
        backToTop.classList.add("is-visible");
      } else {
        backToTop.classList.remove("is-visible");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

    switch (event.key) {
      case "ArrowRight":
        nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
        break;
      case "ArrowLeft":
        nextIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
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
          <a href="#menu" onClick={closeMenu}>
            Menu <span aria-hidden="true">+</span>
          </a>
          <a href="#about" onClick={closeMenu}>
            About <span aria-hidden="true">+</span>
          </a>
          <a href="#order" onClick={closeMenu}>
            Order <span aria-hidden="true">+</span>
          </a>
          <a href="#footer" onClick={closeMenu}>
            Instagram <span aria-hidden="true">+</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="section section-blue hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-content reveal">
              <h1 className="hero-title" id="hero-title">
                <BrandLogo className="hero-logo" variant="white" />
              </h1>
              <p className="hero-copy">
                Kopi lokal. Bold. Serius. Tanpa basa-basi.
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
                <Image
                  src="/kha-original.png"
                  alt="Kopi KHA - Double ristretto dengan madu manuka"
                  width={1122}
                  height={1402}
                  className="hero-product-image"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white" id="about" aria-labelledby="about-title">
          <div className="shell about-layout">
            <div className="section-intro reveal">
              <BrandLogo className="inline-logo label-logo" />
              <h2 className="display section-heading" id="about-title">
                Bukan sekadar kopi susu. Ini KHA.
              </h2>
              <p className="about-copy">
                <BrandLogo className="inline-logo body-logo" /> adalah local
                coffee brand untuk kamu yang butuh kafein tanpa drama. Bold,
                serius, dan tetap santai.
              </p>
              <div className="social-proof">
                <div className="proof-item">
                  <span className="proof-number">1K+</span>
                  <span className="proof-label">Cups Daily</span>
                </div>
                <div className="proof-item">
                  <span className="proof-number">100%</span>
                  <span className="proof-label">Arabica</span>
                </div>
                <div className="proof-item">
                  <span className="proof-number">Local</span>
                  <span className="proof-label">Made</span>
                </div>
              </div>
            </div>

            <aside
              className="about-note street-card reveal"
              aria-label="Brand note Kopi KHA"
            >
              <p className="script note-script">local, bold, direct</p>
              <p className="display note-display">NO SOFT DRAMA.</p>
            </aside>
          </div>
        </section>

        <section className="section section-blue" id="menu" aria-labelledby="featured-title">
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="featured-title">
                Menu Favorit
              </h2>
              <a className="btn btn-primary w-fit" href="#full-menu">
                Lihat Semua Menu
              </a>
            </div>

            <div className="featured-grid">
              {featuredProducts.map((product, index) => (
                <article
                  className="product-card street-card reveal"
                  key={product.name}
                  style={{ "--i": index }}
                >
                  <div className="product-card-top">
                    <h3 className="display">{product.name}</h3>
                    <span className="badge">{product.badge}</span>
                  </div>
                  <div
                    className="product-visual"
                    aria-label={`Visual produk ${product.name}`}
                  >
                    <Image
                      src={product.image}
                      alt={`Kopi ${product.name} - ${product.description}`}
                      width={1122}
                      height={1402}
                      className="product-image"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                  <p>{product.description}</p>
                  {product.detail && (
                    <span className="product-detail">{product.detail}</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="why-title">
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="why-title">
                Kenapa KHA?
              </h2>
            </div>

            <div className="why-grid">
              {whyCards.map((card, index) => (
                <article
                  className="why-card street-card reveal"
                  key={card.title}
                  style={{ "--i": index }}
                >
                  <div className="why-card-image">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1122}
                      height={1402}
                      loading="lazy"
                    />
                  </div>
                  <div className="why-card-content">
                    <h3 className="display">{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section-blue"
          id="full-menu"
          aria-labelledby="full-menu-title"
        >
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="full-menu-title">
                Semua Menu
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
                    onClick={() => {
                      setActiveTab(tab.id);
                      window.history.pushState(null, "", `#${tab.id}`);
                    }}
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
                    <article
                      className={`menu-item street-card reveal${item.comingSoon ? " coming-soon" : ""}`}
                      key={`${tab.id}-${index}`}
                    >
                      <h3 className="display">{item.name}</h3>
                      <p>{item.description}</p>
                      {item.comingSoon && (
                        <span className="coming-soon-badge">Segera Hadir</span>
                      )}
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-blue marquee" aria-label="Brand statement">
          <div className="marquee-track" aria-hidden="true" role="presentation">
            <span className="marquee-text">
              Support Your Local Caffeine Dealers
            </span>
            <span className="marquee-text">
              Support Your Local Caffeine Dealers
            </span>
            <span className="marquee-text">
              Support Your Local Caffeine Dealers
            </span>
            <span className="marquee-text">
              Support Your Local Caffeine Dealers
            </span>
          </div>
          <p className="sr-only">Support Your Local Caffeine Dealers</p>
        </section>

        <section className="section section-white order-section" id="order" aria-labelledby="order-title">
          <div className="shell">
            <div className="order-layout">
              <div className="order-header reveal">
                <h2 className="display section-heading" id="order-title">
                  Siap isi ulang kafein?
                </h2>
                <p className="about-copy">
                  Pilih menu, order lewat channel favoritmu.
                </p>
              </div>

              <div className="order-grid">
                {orderCards.map((card, index) => (
                  <article
                    className="order-card street-card reveal"
                    key={card.title}
                    style={{ "--i": index }}
                  >
                    <h3 className="display">{card.title}</h3>
                    <p className="order-description">{card.description}</p>
                    {card.action && (
                      <a
                        href={card.action}
                        className="btn btn-primary w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pesan Sekarang
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section section-blue"
          id="location"
          aria-labelledby="location-title"
        >
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="location-title">
                Temukan KHA
              </h2>
            </div>

            <div className="location-grid">
              {locationCards.map((card, index) => (
                <article
                  className="location-card street-card reveal"
                  key={card.title}
                  style={{ "--i": index }}
                >
                  <h3 className="display">{card.title}</h3>
                  <p className="location-description">{card.description}</p>
                </article>
              ))}
            </div>

            <div
              className="map-placeholder street-card mt-8 reveal"
              aria-label="Peta lokasi Kopi KHA"
            >
              <EmptyState label="Peta Segera Hadir" />
            </div>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="testimonial-title">
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="testimonial-title">
                Mereka Sudah Coba
              </h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article
                  className="testimonial-card street-card reveal"
                  key={`testimonial-${index}`}
                  style={{ "--i": index }}
                >
                  <div className="testimonial-rating" aria-label={`${testimonial.rating} dari 5 bintang`}>
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <blockquote>&quot;{testimonial.quote}&quot;</blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <cite>{testimonial.name}</cite>
                      <span className="testimonial-role">{testimonial.role}</span>
                    </div>
                  </div>
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
              <BrandLogo className="footer-logo" variant="white" />
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
              <span className="footer-label">Kontak</span>
              <p>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </p>
              <p>
                <a href="mailto:hello@kopikha.id">Email</a>
              </p>
            </div>
          </div>
          <div className="copyright">&copy; 2026 Kopi KHA. All rights reserved.</div>
        </div>
      </footer>

      <a className="mobile-sticky-cta" href="#order">
        <span className="btn btn-blue">Order Sekarang</span>
      </a>

      <a className="back-to-top" href="#top" aria-label="Kembali ke atas">
        <span className="back-to-top-icon" aria-hidden="true">↑</span>
      </a>
    </>
  );
}
