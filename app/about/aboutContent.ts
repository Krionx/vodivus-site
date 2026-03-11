export const ABOUT_HTML = String.raw`
<section id="vv-about" aria-label="About Vodivus">
  <style>
    #vv-about{
      --vv-max: 1200px;
      --vv-shell: min(var(--vv-max), calc(100vw - 32px));
      --vv-title: clamp(36px, 5.1vw, 64px);
      --vv-h2: clamp(28px, 3.4vw, 44px);
      --vv-h3: clamp(21px, 2.2vw, 30px);
      --vv-body: clamp(18px, 1.3vw, 23px);
      --vv-border: rgba(123,183,235,.44);
      --vv-glass: rgba(8, 14, 28, .62);
      color: rgba(242,248,255,.96);
      padding: 0 0 60px;
    }
    #vv-about *{ box-sizing: border-box; }
    #vv-about .vv-shell{ width: var(--vv-shell); margin: 0 auto; }
    #vv-about .vv-hero-spacer{
      height: 118px;
      margin-top: calc(18px + env(safe-area-inset-top) + 100px);
    }

    @media (max-width: 900px){
      #vv-about .vv-hero-spacer{
        margin-top: calc(18px + env(safe-area-inset-top) + 90px);
      }
    }

    @media (max-width: 480px){
      #vv-about .vv-hero-spacer{
        margin-top: calc(12px + env(safe-area-inset-top) + 84px);
      }
    }
    #vv-about p,
    #vv-about li,
    #vv-about h1,
    #vv-about h2,
    #vv-about h3{
      overflow-wrap: anywhere;
    }
    #vv-about h1,
    #vv-about h2,
    #vv-about h3{ margin: 0; color: rgba(250,253,255,.98); }
    #vv-about h1{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-title); line-height: 1.05; text-shadow: 0 0 18px rgba(112,190,255,.2); }
    #vv-about h2{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-h2); line-height: 1.1; }
    #vv-about h3{ font-family: "Cinzel", serif; font-size: var(--vv-h3); line-height: 1.14; }
    #vv-about p,
    #vv-about li,
    #vv-about a,
    #vv-about span,
    #vv-about b{ font-family: "Cormorant Garamond", serif; font-size: var(--vv-body); line-height: 1.42; }
    #vv-about p{ margin: 0; color: rgba(232,243,255,.9); }

    #vv-about .vv-block{
      border-radius: 24px;
      border: 1px solid var(--vv-border);
      background:
        radial-gradient(680px 420px at -8% 96%, rgba(11,33,63,.96), transparent 64%),
        linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01)),
        var(--vv-glass);
      box-shadow: 0 24px 72px rgba(0,0,0,.52), inset 0 1px 0 rgba(255,255,255,.08);
      padding: clamp(22px, 3.2vw, 34px);
    }
    #vv-about .vv-block + .vv-block{ margin-top: 18px; }

    #vv-about .vv-kicker{ text-transform: uppercase; letter-spacing: .14em; font-size: clamp(14px, .95vw, 16px); color: rgba(193,224,251,.78); }
    #vv-about .vv-hero-copy{ max-width: none; width: 100%; margin: 10px auto 0; text-align: center; }
    #vv-about .vv-hero-sub{ max-width: 60ch; margin: 14px auto 0; text-align: center; }

    #vv-about .vv-grid{ display: grid; gap: 14px; }
    #vv-about .vv-thesis{ grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 16px; }
    #vv-about .vv-principles{ grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 16px; }
    #vv-about .vv-team-carousel{ margin-top: 16px; }
    #vv-about .vv-team-viewport{ overflow: hidden; border-radius: 18px; }
    #vv-about .vv-team-track{ display: flex; transition: transform .34s ease; will-change: transform; }

    #vv-about .vv-tile,
    #vv-about .vv-principle,
    #vv-about .vv-member{ border-radius: 18px; border: 1px solid rgba(120,170,220,.38); background: rgba(255,255,255,.04); padding: 14px; }

    #vv-about .vv-member{ min-width: calc(100% / 3); }
    #vv-about .vv-member-photo{
      aspect-ratio: 3 / 4;
      border-radius: 12px;
      border: 1px dashed rgba(150,208,255,.38);
      background: linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.02)), rgba(10,18,34,.64);
      display: grid;
      place-items: center;
      color: rgba(205,232,255,.78);
      font-size: clamp(16px, 1.1vw, 18px);
      letter-spacing: .05em;
      text-transform: uppercase;
      margin-bottom: 10px;
      overflow: hidden;
    }
    #vv-about .vv-member-photo img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 35%;
      display: block;
    }
    #vv-about .vv-member-photo img.vv-photo-daniel-wentworth{
      object-position: center 28%;
    }
    #vv-about .vv-member h3{ margin-bottom: 6px; }

    #vv-about .vv-member em{ display: block; color: rgba(197,228,255,.86); margin-bottom: 4px; }

    #vv-about .vv-team-controls{
      margin-top: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    #vv-about .vv-team-btn{
      min-height: 44px;
      min-width: 44px;
      border-radius: 12px;
      border: 1px solid rgba(140,204,255,.46);
      background: rgba(255,255,255,.06);
      color: rgba(238,248,255,.96);
      font-family: "Cinzel", serif;
      font-size: 18px;
      cursor: pointer;
    }
    #vv-about .vv-team-dots{ display: inline-flex; align-items: center; gap: 8px; }
    #vv-about .vv-team-dot{
      width: 10px;
      height: 10px;
      border-radius: 999px;
      border: 1px solid rgba(146,207,255,.5);
      background: rgba(255,255,255,.2);
      padding: 0;
      cursor: pointer;
    }
    #vv-about .vv-team-dot.is-active{ background: rgba(191,230,255,.9); box-shadow: 0 0 14px rgba(120,200,255,.5); }

    @media (max-width: 980px){
      #vv-about .vv-member{ min-width: 100%; }
    }

    #vv-about .vv-cta-row{ display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
    #vv-about .vv-cta{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 46px;
      padding: 10px 16px;
      border-radius: 14px;
      text-decoration: none;
      transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    #vv-about .vv-cta:hover{ transform: translateY(-2px); }
    #vv-about .vv-cta-primary{
      border: 1px solid rgba(123,198,255,.55);
      background: linear-gradient(rgba(0,0,0,0) 8%, rgba(92,154,230,.68) 88%);
      color: rgba(255,255,255,.96);
      box-shadow: 0 12px 30px rgba(65,126,209,.34);
    }
    #vv-about .vv-cta-ghost{
      border: 1px solid rgba(230,242,255,.2);
      background: rgba(255,255,255,.04);
      color: rgba(233,244,255,.92);
    }

    @media (max-width: 980px){
      #vv-about .vv-thesis,
      #vv-about .vv-principles{ grid-template-columns: 1fr; }
    }

    @media (max-width: 1280px){
      #vv-about{ --vv-shell: min(var(--vv-max), calc(100vw - 28px)); }
    }

    @media (max-width: 1024px){
      #vv-about{ --vv-shell: min(var(--vv-max), calc(100vw - 22px)); padding-bottom: 52px; }
      #vv-about .vv-block{ padding: clamp(18px, 2.8vw, 26px); }
    }

    @media (max-width: 768px){
      #vv-about{ --vv-shell: min(var(--vv-max), calc(100vw - 18px)); }
      #vv-about .vv-cta{ width: 100%; min-height: 44px; }
      #vv-about .vv-cta-row{ gap: 10px; }
    }

    @media (max-width: 480px){
      #vv-about{ --vv-shell: min(var(--vv-max), calc(100vw - 14px)); }
      #vv-about .vv-block,
      #vv-about .vv-tile,
      #vv-about .vv-principle,
      #vv-about .vv-member{ border-radius: 16px; }
      #vv-about .vv-block{ padding: 14px; }
    }

    @media (max-width: 360px){
      #vv-about{ --vv-shell: min(var(--vv-max), calc(100vw - 10px)); }
    }
  </style>

  <div class="vv-shell">
    <div class="vv-hero-spacer" aria-hidden="true"></div>
    <section class="vv-block" aria-label="About hero">
      <p class="vv-kicker">Philosophical Depth</p>
      <h1 class="vv-hero-copy">We Treat Ventures as Living Systems, Not Static Brands.</h1>
      <p class="vv-hero-sub">Vodivus is built on a simple conviction: strategy, operations, and identity are one organism. If they evolve independently, the venture fragments. If they move together, momentum compounds.</p>
    </section>

    <section class="vv-block" aria-label="Core thesis">
      <h2>Our Thesis</h2>
      <div class="vv-grid vv-thesis">
        <article class="vv-tile">
          <h3>Clarity Is Ethical</h3>
          <p>When leadership is unclear, teams absorb the cost through confusion, rework, and avoidable stress. Structural clarity is not cosmetic. It is a responsibility.</p>
        </article>
        <article class="vv-tile">
          <h3>Execution Reveals Truth</h3>
          <p>Ideas feel coherent in theory. Reality exposes contradictions. We design for contact with reality, not protection from it.</p>
        </article>
        <article class="vv-tile">
          <h3>Systems Over Hustle</h3>
          <p>Startups fail less from lack of effort than lack of structure. Durable ventures are built on systems that compound, not chaos that burns out.</p>
        </article>
      </div>
    </section>

    <section class="vv-block" aria-label="Operating philosophy">
      <h2>Operating Philosophy</h2>
      <div class="vv-grid vv-principles">
        <article class="vv-principle">
          <h3>Depth Over Velocity Theater</h3>
          <p>Fast is useful only when direction is valid. We prioritize directional integrity before acceleration.</p>
        </article>
        <article class="vv-principle">
          <h3>Systems Over Personality</h3>
          <p>A venture cannot depend on individual heroics. Durable systems protect both performance and people.</p>
        </article>
        <article class="vv-principle">
          <h3>Identity as Behavior</h3>
          <p>Brand is not a visual layer; it is how your operation behaves under pressure when no script survives intact.</p>
        </article>
      </div>
    </section>

    <section class="vv-block" aria-label="Team">
      <h2>The Team</h2>
      <div class="vv-team-carousel" aria-roledescription="carousel" aria-label="Team members carousel">
        <div class="vv-team-viewport">
          <div class="vv-team-track">
            <article class="vv-member">
              <div class="vv-member-photo"><img src="/images/founder.jpg" alt="Founder" loading="lazy" /></div>
              <h3>Founder</h3>
              <em>Founder</em>
              <p>Defines strategic direction and ensures vision, systems, and execution remain aligned across the venture.</p>
            </article>
            <article class="vv-member">
              <div class="vv-member-photo"><img class="vv-photo-daniel-wentworth" src="/images/Dwentworth%20potrait.jpg" alt="Daniel Wentworth" loading="lazy" /></div>
              <h3>Daniel Wentworth</h3>
              <em>Technical Creative Director | Systems Architect</em>
              <p>Converts ambition into coherent strategic structures with decision boundaries that hold over time.</p>
            </article>
            <article class="vv-member">
              <div class="vv-member-photo"><img src="/images/DanielMiller.jpg" alt="Daniel Miller" loading="lazy" /></div>
              <h3>Daniel Miller</h3>
              <em>Ecosystem Architect &amp; Systems Designer</em>
              <p>Builds execution frameworks where accountability, escalation, and delivery rhythm are structurally explicit.</p>
            </article>
            <article class="vv-member">
              <div class="vv-member-photo"><img src="/images/tylerborbon.png" alt="Tyler Borbon" loading="lazy" /></div>
              <h3>Tyler Borbon</h3>
              <em>Marketing &amp; Media Director</em>
              <p>Aligns expression and operation so what you communicate and what you deliver stop contradicting each other.</p>
            </article>
            <article class="vv-member">
              <div class="vv-member-photo"><img src="/images/arronrodecker.jpeg" alt="Aaron Rodecker" loading="lazy" /></div>
              <h3>Aaron Rodecker</h3>
              <em>Database Engineer</em>
              <p>Translates strategy into practical execution milestones so initiatives move from concept into measurable progress.</p>
            </article>
          </div>
        </div>
        <div class="vv-team-controls">
          <button class="vv-team-btn vv-team-prev" type="button" aria-label="Previous team member">&#8592;</button>
          <div class="vv-team-dots" aria-label="Carousel pagination"></div>
          <button class="vv-team-btn vv-team-next" type="button" aria-label="Next team member">&#8594;</button>
        </div>
      </div>
    </section>

    <section class="vv-block" aria-label="About call to action">
      <h2>If This Philosophy Matches How You Want to Build</h2>
      <p style="margin-top:10px; max-width: 58ch;">Start intake. We will map the right lane, clarify scope, and outline the first structural moves for your next phase.</p>
      <div class="vv-cta-row">
        <a href="/contact" class="vv-cta vv-cta-primary">Build the Blueprint -></a>
        <a href="/services" class="vv-cta vv-cta-ghost">Review Service Lanes -></a>
      </div>
    </section>
  </div>
</section>
`;

export const ABOUT_TEAM_SCRIPT = `(function(){
  const root = document.getElementById("vv-about");
  if (!root) return;

  const carousel = root.querySelector(".vv-team-carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".vv-team-track");
  const slides = Array.from(carousel.querySelectorAll(".vv-member"));
  const prev = carousel.querySelector(".vv-team-prev");
  const next = carousel.querySelector(".vv-team-next");
  const dotsWrap = carousel.querySelector(".vv-team-dots");

  if (!track || slides.length === 0 || !prev || !next || !dotsWrap) return;

  const visible = window.matchMedia("(max-width: 980px)").matches ? 1 : 3;
  const totalPages = Math.max(1, slides.length - visible + 1);
  for (let i = 0; i < totalPages; i += 1) {
    const dot = document.createElement("button");
    dot.className = "vv-team-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", "Go to team view " + (i + 1));
    dot.setAttribute("aria-selected", "false");
    dotsWrap.appendChild(dot);
  }

  const dots = Array.from(dotsWrap.querySelectorAll(".vv-team-dot"));

  let index = 0;
  const total = slides.length;
  const maxIndex = Math.max(0, total - visible);
  const shift = 100 / visible;

  const setIndex = (newIndex) => {
    index = Math.min(maxIndex, Math.max(0, newIndex));
    track.style.transform = "translateX(-" + (index * shift) + "%)";

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });
  };

  prev.addEventListener("click", () => setIndex(index - 1));
  next.addEventListener("click", () => setIndex(index + 1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => setIndex(dotIndex));
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setIndex(index - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setIndex(index + 1);
    }
  });

  setIndex(0);
})();`;
export const FOOTER_SCRIPT = `(function(){})();`;
