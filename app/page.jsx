"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import {
  CONTACT,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  WHATSAPP_ORDER_MSG,
  LOCATION,
  BRAND,
} from "../lib/config";

/* ── Product Data ─────────────────────────────────────────────────── */

const featuredProducts = [
  {
    name: "KHA",
    slug: "kha-original",
    badge: "Signature",
    tag: "Best Seller",
    description: "Double ristretto dengan madu manuka.",
    priceLabel: "Mulai Rp18K",
    image: "/kha-original.png",
    alt: "Kopi KHA Original — double ristretto dengan madu manuka dalam gelas khas KHA",
    category: "kopi",
  },
  {
    name: "KHA KHA",
    slug: "kha-kha",
    badge: "Bold",
    tag: "Power Move",
    description: "Varian lebih intense untuk yang butuh adrenalin.",
    priceLabel: "Mulai Rp20K",
    image: "/kha-kha.png",
    alt: "Kopi KHA KHA — varian intense dengan rasa kopi paling pekat",
    category: "kopi",
  },
  {
    name: "PALMSUIKER",
    slug: "palmsuiker",
    badge: "Daily",
    tag: "Local Favorite",
    description: "Menu harian yang bikin nagih.",
    priceLabel: "Mulai Rp18K",
    image: "/palmsuiker.png",
    alt: "Kopi Palmsuiker — kopi susu gula aren yang jadi menu harian",
    category: "kopi",
  },
  {
    name: "KARMELLA",
    slug: "karmella",
    badge: "Smooth",
    tag: "Creamy",
    description: "Profil rasa lembut, cocok buat pemula.",
    priceLabel: "Mulai Rp18K",
    image: "/karmella.png",
    alt: "Kopi Karmella — kopi susu karamel yang creamy dan lembut",
    category: "kopi",
  },
  {
    name: "MOKHA",
    slug: "mokha",
    badge: "Kopi & Cokelat",
    tag: "Indulgent",
    description: "Perpaduan kopi dan cokelat yang kaya.",
    priceLabel: "Mulai Rp20K",
    image: "/mokha.png",
    alt: "Kopi Mokha — perpaduan kopi dan cokelat dalam satu gelas",
    category: "kopi",
  },
  {
    name: "SHOKOLA",
    slug: "shokola",
    badge: "Non-Kopi",
    tag: "Non-Coffee",
    description: "Bukan kopi, tapi tetap bikin nagih.",
    priceLabel: "Mulai Rp18K",
    image: "/shokola.png",
    alt: "Shokola — minuman cokelat creamy tanpa kopi",
    category: "bukan-kopi",
  },
];

const allMenuItems = [
  { name: "KHA", description: "Double ristretto dengan madu manuka.", priceLabel: "Mulai Rp18K", category: "kopi" },
  { name: "KHA KHA", description: "Varian lebih intense.", priceLabel: "Mulai Rp20K", category: "kopi" },
  { name: "PALMSUIKER", description: "Menu harian yang bikin nagih.", priceLabel: "Mulai Rp18K", category: "kopi" },
  { name: "KARMELLA", description: "Profil rasa lembut.", priceLabel: "Mulai Rp18K", category: "kopi" },
  { name: "MOKHA", description: "Perpaduan kopi dan cokelat.", priceLabel: "Mulai Rp20K", category: "kopi" },
  { name: "SHOKOLA", description: "Non-kopi yang creamy.", priceLabel: "Mulai Rp18K", category: "bukan-kopi" },
];

const comingSoonItems = [
  { name: "Es Kopi Susu", description: "Kopi susu dingin klasik." },
  { name: "Extra Shot", description: "Tambahan espresso untuk pesananmu." },
  { name: "Topping", description: "Pilihan topping ekstra." },
  { name: "Snack", description: "Pendamping kopi." },
];

const tabs = [
  { id: "kopi", label: "Kopi" },
  { id: "bukan-kopi", label: "Non-Kopi" },
];

const whyCards = [
  { title: "100% Arabica", body: "Untuk rasa kopi yang lebih clean dan serius." },
  { title: "Double Ristretto", body: "Lebih bold, lebih intense, lebih KHA." },
  { title: "Local-Made", body: "Dibuat dekat dengan keseharianmu." },
  { title: "Kopi & Bukan Kopi", body: "Ada pilihan untuk semua." },
];

const testimonials = [
  {
    quote: "KHA KHA bikin gue sadar, kopi lokal bisa sebold ini. Rasa kopinya nendang, nggak ada basa-basi.",
    name: "Rizky",
    role: "Freelance Designer",
    rating: 5,
    product: "KHA KHA",
  },
  {
    quote: "Palmsuiker jadi ritual pagi gue sekarang. Manis gula arennya pas, kopinya strong tapi nggak pahit.",
    name: "Dian",
    role: "Mahasiswa",
    rating: 5,
    product: "Palmsuiker",
  },
  {
    quote: "Karmella perfect buat yang belum terlalu suka kopi pahat. Creamy, smooth, tapi tetap ada kick kopi-nya.",
    name: "Adit",
    role: "Barista Wannabe",
    rating: 5,
    product: "Karmella",
  },
  {
    quote: "Mokha combo-nya gila — kopi + cokelat jadi satu, rasanya kayak dessert tapi nggak berat.",
    name: "Sari",
    role: "Ibu Rumah Tangga",
    rating: 5,
    product: "Mokha",
  },
];

/* ── Small Components ──────────────────────────────────────────────── */

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

/* ── Main Page ────────────────────────────────────────────────────── */

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("semua");
  const [stickyVisible, setStickyVisible] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  /* body scroll lock when mobile menu open */
  useEffect(() => {
    if (menuOpen) {
      lastFocusedRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      // focus first link in menu
      const firstLink = mobileMenuRef.current?.querySelector("a");
      firstLink?.focus();
    } else {
      document.body.style.overflow = "";
      lastFocusedRef.current?.focus();
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* focus trap inside mobile menu */
  useEffect(() => {
    if (!menuOpen) return undefined;
    function handleTabTrap(e) {
      if (e.key !== "Tab") return;
      const focusable = mobileMenuRef.current?.querySelectorAll('a[href], button');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", handleTabTrap);
    return () => document.removeEventListener("keydown", handleTabTrap);
  }, [menuOpen]);

  /* Escape closes mobile menu */
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* sync tab from hash */
  useEffect(() => {
    function onHash() {
      const hash = window.location.hash.replace("#", "");
      if (tabs.some((t) => t.id === hash)) setActiveTab(hash);
    }
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  /* reveal on scroll */
  useEffect(() => {
    document.documentElement.classList.add("js-enabled");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll(".reveal");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* sticky CTA: show only after scrolling past hero */
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return undefined;
    function onScroll() {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setStickyVisible(heroBottom < 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* hide sticky CTA when footer visible */
  useEffect(() => {
    const footer = document.getElementById("footer");
    const sticky = document.querySelector(".mobile-sticky-cta");
    if (!footer || !sticky) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sticky.style.opacity = "0";
          sticky.style.pointerEvents = "none";
        } else {
          sticky.style.opacity = "";
          sticky.style.pointerEvents = "";
        }
      }),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  /* back-to-top */
  useEffect(() => {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return undefined;
    function onScroll() {
      btn.classList.toggle("is-visible", window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* reveal on tab switch */
  useEffect(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll(`[data-panel="${activeTab}"] .reveal`).forEach((el) => el.classList.add("is-visible"));
    });
  }, [activeTab]);

  /* tab keyboard nav */
  function handleTabKeyDown(event, tabId) {
    const idx = tabs.findIndex((t) => t.id === tabId);
    let next = idx;
    switch (event.key) {
      case "ArrowRight": next = (idx + 1) % tabs.length; break;
      case "ArrowLeft": next = (idx - 1 + tabs.length) % tabs.length; break;
      case "Home": next = 0; break;
      case "End": next = tabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActiveTab(tabs[next].id);
    document.querySelector(`#tab-${tabs[next].id}`)?.focus();
  }

  /* filtered menu items for tabs */
  function getMenuForTab(tabId) {
    return allMenuItems.filter((i) => i.category === tabId);
  }

  return (
    <>
      <a className="skip-link sr-only" href="#top">
        Skip to content
      </a>

      {/* ── Header ────────────────────────────────────── */}
      <header className="site-header" role="banner">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Kembali ke hero Kopi KHA">
            <BrandLogo className="brand-logo" alt="" />
          </a>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            <a className="nav-link" href="#menu">Menu</a>
            <a className="nav-link" href="#about">Tentang</a>
            <a className="nav-link" href="#location">Lokasi</a>
            {INSTAGRAM_URL && <a className="nav-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>}
            <a className="nav-link nav-cta" href="#full-menu">Order Sekarang</a>
          </nav>

          <button
            ref={menuButtonRef}
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="menu-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <nav
        ref={mobileMenuRef}
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        aria-label="Navigasi mobile"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <a href="#menu" onClick={closeMenu}>Menu</a>
        <a href="#about" onClick={closeMenu}>Tentang</a>
        <a href="#location" onClick={closeMenu}>Lokasi</a>
        {INSTAGRAM_URL && (
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Instagram ↗</a>
        )}
        <a href="#full-menu" onClick={closeMenu}>Order</a>
      </nav>

      <main id="top">
        {/* ── Hero ────────────────────────────────────── */}
        <section className="section section-blue hero" aria-label="Hero Kopi KHA">
          <div className="shell hero-inner">
            <div className="hero-content reveal">
              <Image src="/kha-white.svg" alt="Kopi KHA" width={950} height={569} className="hero-logo-img" priority />
              <p className="hero-copy">
                Kopi lokal. Bold. Serius. Tanpa basa-basi.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#full-menu">Order Sekarang</a>
                <a className="btn btn-secondary" href="#menu">Lihat Menu</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ───────────────────────────────────── */}
        <section className="section section-white" id="about" aria-labelledby="about-title">
          <div className="shell about-center">
            <div className="about-kicker reveal">
              <Image src="/kha-blue.svg" alt="Kopi KHA" width={950} height={569} className="about-kicker-img" />
            </div>
            <h2 className="display section-heading reveal" id="about-title">
              Bukan sekadar kopi susu.<br />Ini KHA.
            </h2>
            <p className="about-copy reveal">
              Local coffee brand untuk kamu yang butuh kafein tanpa drama.
              Bold, serius, dan tetap santai.
            </p>
            <div className="about-pillars reveal">
              <div className="about-pillar">
                <span className="pillar-label">Arabica 100%</span>
                <span className="pillar-desc">Clean, serius, nggak main-main.</span>
              </div>
              <div className="about-pillar">
                <span className="pillar-label">Double Ristretto</span>
                <span className="pillar-desc">Ekstraksi singkat, rasa lebih pekat.</span>
              </div>
              <div className="about-pillar">
                <span className="pillar-label">Local-Made</span>
                <span className="pillar-desc">Dibuat dekat dengan keseharianmu.</span>
              </div>
            </div>
            <div className="about-statement street-card reveal">
              <p className="script statement-script">local, bold, direct</p>
              <p className="display statement-display">NO SOFT DRAMA.</p>
            </div>
          </div>
        </section>

        {/* ── Featured Menu ────────────────────────────── */}
        <section className="section section-blue" id="menu" aria-labelledby="featured-title">
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="featured-title">Menu Favorit</h2>
              <p className="section-subtitle">Pilihan terlaris, siap order.</p>
            </div>

            <div className="featured-grid">
              {featuredProducts.map((product, index) => (
                <article
                  className="product-card street-card reveal"
                  key={product.slug}
                  style={{ "--i": index }}
                >
                  <div className="product-card-top">
                    <h3 className="display">{product.name}</h3>
                    <span className="badge">{product.badge}</span>
                  </div>
                  <div className="product-tag">
                    <span className="tag">{product.tag}</span>
                  </div>
                  <div className="product-visual">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={1122}
                      height={1402}
                      className="product-image"
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.priceLabel}</span>
                    {WHATSAPP_URL ? (
                      <a
                        className="btn btn-sm"
                        href={WHATSAPP_ORDER_MSG(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-disabled" aria-disabled="true">Order</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why KHA ─────────────────────────────────── */}
        <section className="section section-white" aria-labelledby="why-title">
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="why-title">Kenapa KHA?</h2>
            </div>

            <div className="why-grid">
              {whyCards.map((card, index) => (
                <article className="why-card street-card reveal" key={card.title} style={{ "--i": index }}>
                  <div className="why-card-content">
                    <h3 className="display">{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Full Menu ────────────────────────────────── */}
        <section className="section section-blue" id="full-menu" aria-labelledby="full-menu-title">
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="full-menu-title">Semua Menu</h2>
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
              {tabs.map((tab) => {
                const items = getMenuForTab(tab.id);
                return (
                  <div
                    className="menu-panel"
                    id={`panel-${tab.id}`}
                    key={tab.id}
                    role="tabpanel"
                    aria-labelledby={`tab-${tab.id}`}
                    data-panel={tab.id}
                    hidden={activeTab !== tab.id}
                  >
                    <div className="menu-grid">
                      {items.map((item, index) => (
                        <article
                          className="menu-item street-card reveal"
                          key={`${tab.id}-${index}`}
                        >
                          <div className="menu-item-header">
                            <h3 className="display">{item.name}</h3>
                            <span className="menu-price">{item.priceLabel}</span>
                          </div>
                          <p>{item.description}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="coming-soon-section reveal">
              <p className="coming-soon-label">Segera Hadir</p>
              <div className="coming-soon-list">
                {comingSoonItems.map((item, index) => (
                  <span className="coming-soon-item" key={index}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Marquee ──────────────────────────────────── */}
        <section className="section-blue marquee" aria-label="Brand statement">
          <div className="marquee-track" aria-hidden="true" role="presentation">
            {Array.from({ length: 6 }).map((_, i) => (
              <span className="marquee-text" key={i}>Support Your Local Caffeine Dealers</span>
            ))}
          </div>
          <p className="sr-only">Support Your Local Caffeine Dealers</p>
        </section>

        {/* ── Testimonials ─────────────────────────────── */}
        <section className="section section-blue" aria-labelledby="testimonial-title">
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="testimonial-title">Mereka Sudah Coba</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article className="testimonial-card street-card reveal" key={`testimonial-${index}`} style={{ "--i": index }}>
                  <div className="testimonial-rating" aria-label={`${testimonial.rating} dari 5 bintang`}>
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  <div className="testimonial-product">
                    <span className="tag">{testimonial.product}</span>
                  </div>
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

        {/* ── Location ─────────────────────────────────── */}
        <section className="section section-white" id="location" aria-labelledby="location-title">
          <div className="shell">
            <div className="section-intro reveal">
              <h2 className="display section-heading" id="location-title">Temukan KHA</h2>
              <p className="section-subtitle">Cara dapatkan Kopi KHA.</p>
            </div>

            <div className="location-grid">
              <article className="location-card street-card reveal" style={{ "--i": 0 }}>
                <h3 className="display">Lokasi</h3>
                {LOCATION.address ? (
                  <p className="location-description">{LOCATION.address}</p>
                ) : (
                  <p className="location-description">Outlet pertama segera diumumkan. Pantau terus!</p>
                )}
                {LOCATION.mapsUrl && (
                  <a className="btn btn-sm w-fit" href={LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Buka di Maps
                  </a>
                )}
              </article>

              <article className="location-card street-card reveal" style={{ "--i": 1 }}>
                <h3 className="display">Jam Operasional</h3>
                <p className="location-description">{LOCATION.hours}</p>
              </article>

              <article className="location-card street-card reveal" style={{ "--i": 2 }}>
                <h3 className="display">Delivery</h3>
                {CONTACT.deliveryAvailable ? (
                  <p className="location-description">Tersedia di GrabFood, GoFood, ShopeeFood.</p>
                ) : (
                  <p className="location-description">{LOCATION.deliveryNote}</p>
                )}
              </article>
            </div>

            <div className="map-placeholder street-card mt-8 reveal">
              <EmptyState label="Peta Segera Hadir" />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="section site-footer" id="footer" role="contentinfo">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <BrandLogo className="footer-logo" variant="white" />
              <p>{BRAND.tagline}</p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <span className="footer-label">Menu</span>
              <a href="#menu">Menu</a>
              <a href="#about">Tentang</a>
              <a href="#full-menu">Semua Menu</a>
              <a href="#location">Lokasi</a>
            </nav>
            <div className="footer-contact" aria-label="Kontak Kopi KHA">
              <span className="footer-label">Kontak</span>
              {INSTAGRAM_URL && (
                <p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </p>
              )}
              {WHATSAPP_URL && (
                <p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </p>
              )}
              <p>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
            </div>
          </div>
          <div className="copyright">&copy; {BRAND.copyright}. All rights reserved.</div>
        </div>
      </footer>

      {/* ── Mobile Sticky CTA ─────────────────────────── */}
      <a
        className="mobile-sticky-cta"
        href="#full-menu"
        aria-label="Order Kopi KHA sekarang"
        style={{
          opacity: stickyVisible ? undefined : "0",
          pointerEvents: stickyVisible ? undefined : "none",
        }}
      >
        <span className="btn btn-blue">Order Sekarang</span>
      </a>

      <a className="back-to-top" href="#top" aria-label="Kembali ke atas">
        <span className="back-to-top-icon" aria-hidden="true">↑</span>
      </a>
    </>
  );
}
