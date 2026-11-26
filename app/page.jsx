"use client";

import { useState } from "react";
import FarmScene from "../components/FarmScene";

const experiences = [
  {
    tag: "HANDS-ON",
    title: "A day on the farm",
    copy: "Get your hands in the soil, meet local growers and discover where food begins.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
  },
  {
    tag: "FRESH & LOCAL",
    title: "Harvest your own",
    copy: "Pick seasonal produce and experience the simple joy of harvesting fresh food.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=85"
  },
  {
    tag: "SLOW TRAVEL",
    title: "Stay close to nature",
    copy: "Swap the city rush for open skies, quiet mornings and welcoming farm stays.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#"><span className="brand-mark">f.</span> farm co.</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#experiences">Experiences</a>
          <a href="#story">Our story</a>
          <a href="#farmers">For farmers</a>
          <a className="nav-cta" href="mailto:hello@farmco.com">Get in touch <span>↗</span></a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-scene"><FarmScene /></div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light"><span /> A little closer to the land</p>
          <h1>Reconnect with nature.<br /><em>Experience farming.</em></h1>
          <p className="hero-copy">Discover beautiful farms, meet the people who grow our food, and make memories rooted in the real world.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#experiences">Explore experiences <span>↗</span></a>
            <a className="text-link light-link" href="#story">Discover Farm Co. <span>↓</span></a>
          </div>
        </div>
        <div className="hero-bottom"><span>01 / DISCOVER THE LAND</span><span>SCROLL TO EXPLORE ↓</span></div>
        <div className="hero-note">Move your cursor to explore the landscape</div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="intro-kicker">MORE THAN A GETAWAY <span>✳</span></div>
        <div className="intro-grid">
          <h2>Come for the<br /><em>experience.</em><br />Leave with a<br />connection.</h2>
          <div className="intro-copy">
            <p className="large-copy">The best way to understand farming is to experience it.</p>
            <p>Farm Co. brings curious people and passionate farmers together through meaningful visits, hands-on activities, workshops and stays in the countryside.</p>
            <a className="text-link dark-link" href="#experiences">Find your farm experience <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="experiences section-pad" id="experiences">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> MADE FOR THE CURIOUS</p><h2>Find your kind<br /><em>of outdoors.</em></h2></div>
          <p className="heading-side">Fresh air, new skills and stories worth sharing. Choose the experience that speaks to you.</p>
        </div>
        <div className="experience-grid">
          {experiences.map((item, index) => (
            <article className="experience-card" key={item.title}>
              <div className="card-image" style={{ backgroundImage: `url("${item.image}")` }}>
                <span className="card-number">0{index + 1}</span>
                <span className="card-arrow">↗</span>
              </div>
              <p className="card-tag">{item.tag}</p>
              <h3>{item.title}</h3>
              <p className="card-copy">{item.copy}</p>
              <a href="mailto:hello@farmco.com" className="card-link">Discover more <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="farmer-band" id="farmers">
        <div className="farmer-image" />
        <div className="farmer-content">
          <p className="eyebrow light"><span /> GROW WITH US</p>
          <h2>Your farm has<br />a story to <em>share.</em></h2>
          <p>Welcome visitors, share your knowledge and create new income opportunities for your farm and community.</p>
          <a className="button button-light" href="mailto:hello@farmco.com?subject=Farm%20partnership">Partner with Farm Co. <span>↗</span></a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#"><span className="brand-mark">f.</span> farm co.</a>
        <p>Rooted in the land. Made for everyone.</p>
        <div className="footer-bottom"><span>© 2026 FARM CO.</span><span>BUILT FOR A MORE CONNECTED WORLD.</span><a href="mailto:hello@farmco.com">SAY HELLO ↗</a></div>
      </footer>
    </main>
  );
}
