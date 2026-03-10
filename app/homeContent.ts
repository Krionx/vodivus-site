export const HOME_HTML = String.raw`
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@500;600&display=swap" rel="stylesheet">

<style>
#vv-home{
  --vv-max: 1200px;
  --vv-shell: min(var(--vv-max), calc(100vw - 36px));
  --vv-title: clamp(46px, 6.1vw, 82px);
  --vv-h2: clamp(30px, 3.6vw, 52px);
  --vv-h3: clamp(22px, 2.1vw, 32px);
  --vv-body: clamp(18px, 1.35vw, 23px);
  --vv-body-sm: clamp(15px, 1.05vw, 18px);
  --vv-muted: rgba(235,244,255,.76);
  --vv-border: rgba(120,170,220,.42);
  --vv-glass: rgba(7,12,24,.56);
  position: relative;
  isolation: isolate;
  padding: 118px 0 86px;
  color: rgba(245,250,255,.96);
  overflow-x: clip;
}

#vv-home *{ box-sizing: border-box; }
#vv-home .vv-shell{ width: var(--vv-shell); margin: 0 auto; position: relative; z-index: 2; }
#vv-home .vv-hero-spacer{ height: 118px; }
#vv-home p,
#vv-home li,
#vv-home h1,
#vv-home h2,
#vv-home h3{
  overflow-wrap: anywhere;
}
#vv-home h1,
#vv-home h2,
#vv-home h3{ margin: 0; color: rgba(250,253,255,.98); letter-spacing: .02em; }
#vv-home h1{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-title); line-height: 1.02; font-weight: 700; text-shadow: 0 0 24px rgba(112,190,255,.24); }
#vv-home h2{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-h2); line-height: 1.08; font-weight: 700; text-shadow: 0 0 18px rgba(112,190,255,.18); }
#vv-home h3{ font-family: "Cinzel", serif; font-size: var(--vv-h3); line-height: 1.12; font-weight: 600; }
#vv-home p,
#vv-home li,
#vv-home span,
#vv-home a{ font-family: "Cormorant Garamond", serif; font-size: var(--vv-body); line-height: 1.45; }
#vv-home p{ margin: 0; color: rgba(238,246,255,.9); }
#vv-home .vv-muted{ color: var(--vv-muted); }

#vv-home::before{
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -2;
  background:
    radial-gradient(720px 440px at 88% -10%, rgba(233,189,112,.24), transparent 62%),
    radial-gradient(900px 560px at -18% 88%, rgba(71,132,201,.28), transparent 64%),
    radial-gradient(2px 2px at 10% 22%, rgba(210,236,255,.56), transparent 70%),
    radial-gradient(2px 2px at 42% 12%, rgba(210,236,255,.50), transparent 70%),
    radial-gradient(2px 2px at 75% 34%, rgba(210,236,255,.58), transparent 70%),
    radial-gradient(2px 2px at 24% 66%, rgba(210,236,255,.46), transparent 70%),
    radial-gradient(2px 2px at 84% 72%, rgba(210,236,255,.54), transparent 70%);
  opacity: .62;
}
#vv-home::after{
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background:
    radial-gradient(1200px 760px at 50% 18%, rgba(6,14,30,.42), transparent 62%),
    linear-gradient(180deg, rgba(0,0,0,.20), rgba(0,0,0,.38));
}

#vv-home .vv-door{
  position: fixed;
  left: clamp(-120px, -4vw, -42px);
  top: 54%;
  transform: translateY(-50%);
  width: clamp(220px, 32vw, 560px);
  pointer-events: none;
  opacity: .9;
  z-index: 1;
  filter: drop-shadow(0 18px 40px rgba(0,0,0,.55));
}
#vv-home .vv-door img{ width: 100%; height: auto; display: block; }
#vv-home .vv-door::after{
  content: "";
  position: absolute;
  left: 38%;
  top: 12%;
  width: 38%;
  height: 72%;
  border-radius: 999px;
  background: radial-gradient(closest-side, rgba(123,197,255,.42), rgba(123,197,255,0));
  filter: blur(14px);
  animation: vv-door-haze 7s ease-in-out infinite;
}

#vv-home .vv-hero{
  border-radius: 26px;
  padding: clamp(26px, 4vw, 48px);
  border: 1px solid rgba(125,188,240,.42);
  display: grid;
  grid-template-columns: 1.15fr auto;
  gap: 18px;
  align-items: end;
  background:
    radial-gradient(720px 460px at -6% 96%, rgba(9,31,62,1), transparent 60%),
    radial-gradient(520px 360px at 100% 0%, rgba(235,193,118,.26), transparent 62%),
    linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01)),
    var(--vv-glass);
  box-shadow: 0 28px 84px rgba(0,0,0,.58), inset 0 1px 0 rgba(255,255,255,.12);
}
#vv-home .vv-hero-kicker{ text-transform: uppercase; letter-spacing: .14em; font-size: var(--vv-body-sm); color: rgba(196,227,255,.72); }
#vv-home .vv-hero-main{ min-width: 0; grid-column: 1 / -1; }
#vv-home .vv-hero-copy{ max-width: none; width: 100%; margin: 12px auto; text-align: center; }
#vv-home .vv-hero-sub{ max-width: 50ch; }
#vv-home .vv-hero-side{ display: grid; gap: 10px; justify-items: end; align-self: end; margin-top: -156px; }
#vv-home .vv-hero-note{ font-size: var(--vv-body-sm); color: rgba(198,226,251,.8); text-align: right; max-width: 50ch; }

#vv-home .vv-cta-row{ display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
#vv-home .vv-cta{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 11px 16px;
  border-radius: 14px;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
}
#vv-home .vv-cta-primary{
  border: 1px solid rgba(123,198,255,.52);
  background: linear-gradient(rgba(0,0,0,0) 8%, rgba(92,154,230,.68) 88%);
  color: rgba(255,255,255,.96);
  box-shadow: 0 14px 34px rgba(64,127,212,.4);
  min-width: 230px;
}
#vv-home .vv-cta-ghost{
  border: 1px solid rgba(240,246,255,.18);
  background: rgba(255,255,255,.05);
  color: rgba(233,244,255,.92);
}
#vv-home .vv-cta:hover{ transform: translateY(-2px); }
#vv-home .vv-cta-primary:hover{ box-shadow: 0 14px 34px rgba(64,127,212,.5); }

#vv-home .vv-section{ margin-top: 30px; }
#vv-home .vv-card{
  border-radius: 22px;
  border: 1px solid var(--vv-border);
  background:
    linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01)),
    rgba(10,16,28,.58);
  box-shadow: 0 20px 60px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.08);
}

#vv-lanes .vv-grid{ display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
#vv-lanes{ padding: 26px 24px; }
#vv-lanes .vv-lane{ padding: 20px 18px; cursor: pointer; transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
#vv-lanes .vv-lane:hover{ transform: translateY(-2px); border-color: rgba(147,210,255,.75); box-shadow: 0 22px 68px rgba(0,0,0,.66), 0 0 28px rgba(110,194,255,.2); }
#vv-lanes .vv-lane:focus-visible{ outline: none; border-color: rgba(173,222,255,.95); box-shadow: 0 0 0 2px rgba(173,222,255,.38), 0 0 34px rgba(110,194,255,.24); }
#vv-lanes .vv-lane p{ margin-top: 10px; }
#vv-lanes .vv-more{ display: block; max-height: 0; opacity: 0; overflow: hidden; transform: translateY(-6px); transition: max-height 320ms ease, opacity 220ms ease, transform 220ms ease; }
#vv-lanes .vv-lane::after{ content: "Click to expand"; display: table; margin: 12px auto 0; padding: 5px 12px; border-radius: 999px; border: 1px solid rgba(163,214,255,.42); background: rgba(8,16,34,.62); font-size: 16px; color: rgba(224,242,255,.9); }
#vv-lanes .vv-lane.is-open .vv-more{ max-height: 520px; opacity: 1; transform: translateY(0); }
#vv-lanes .vv-lane.is-open::after{ content: "Click to collapse"; }
#vv-lanes .vv-lane .vv-cta{ margin-top: 14px; }

#vv-pressure{ padding: 26px 24px; cursor: pointer; transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
#vv-pressure:hover{ transform: translateY(-2px); border-color: rgba(147,210,255,.75); box-shadow: 0 22px 68px rgba(0,0,0,.66), 0 0 28px rgba(110,194,255,.2); }
#vv-pressure .vv-more{ display: block; max-height: 0; overflow: hidden; opacity: 0; transform: translateY(-6px); transition: max-height 360ms ease, opacity 220ms ease, transform 220ms ease; margin-top: 0; }
#vv-pressure .vv-preview::after{ content: "Click to expand"; display: table; margin: 12px auto 0; padding: 5px 12px; border-radius: 999px; border: 1px solid rgba(163,214,255,.42); background: rgba(8,16,34,.62); font-size: 16px; color: rgba(224,242,255,.9); }
#vv-pressure.is-open .vv-more{ max-height: 460px; opacity: 1; transform: translateY(0); margin-top: 12px; }
#vv-pressure.is-open .vv-preview::after{ content: "Click to collapse"; }
#vv-pressure h2,
#vv-pressure .vv-preview > p,
#vv-pressure .vv-more > p{ text-align: center; }
#vv-pressure .vv-preview > p,
#vv-pressure .vv-more > p{ max-width: 60ch; margin-left: auto; margin-right: auto; }
#vv-pressure ul{
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
#vv-pressure li{
  border: 1px solid rgba(155,208,255,.34);
  border-radius: 14px;
  background: rgba(8,16,34,.58);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
  padding: 11px 12px;
  text-align: center;
}

#vv-soulcrest{ padding: 26px 24px; position: relative; padding-top: 76px; }
#vv-soulcrest h2{ position: absolute; top: 22px; right: 24px; text-align: right; }
#vv-soulcrest .vv-muted{ position: absolute; top: 28px; left: 24px; margin-top: 0 !important; }
#vv-soulcrest .vv-soul-btn{
  width: fit-content;
  max-width: 100%;
  margin: 16px auto 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid rgba(163,214,255,.42);
  border-radius: 14px;
  background: rgba(255,255,255,.08);
  color: rgba(240,248,255,.94);
  font-size: 24px;
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}
#vv-soulcrest .vv-soul-btn:hover{ transform: translateY(-2px); border-color: rgba(128,194,255,.75); box-shadow: 0 22px 68px rgba(0,0,0,.6), 0 0 32px rgba(110,194,255,.2); }
#vv-soulcrest .vv-soul-btn::after{ content: "Click to expand"; display: block; font-size: 15px; margin-left: 8px; padding: 4px 10px; border-radius: 999px; border: 1px solid rgba(163,214,255,.42); background: rgba(8,16,34,.6); }
#vv-soulcrest .vv-soul-panel{ display: block; max-height: 0; overflow: hidden; opacity: 0; transform: translateY(-6px); transition: max-height 360ms ease, opacity 240ms ease, transform 240ms ease; }
#vv-soulcrest .vv-soul-collapse{ display: none; margin: 12px auto 0; padding: 5px 12px; border-radius: 999px; border: 1px solid rgba(163,214,255,.42); background: rgba(8,16,34,.62); color: rgba(224,242,255,.9); font-size: 16px; cursor: pointer; }
#vv-soulcrest.is-open .vv-soul-btn{ display: none; }
#vv-soulcrest.is-open .vv-soul-panel{ max-height: 600px; opacity: 1; transform: translateY(0); margin-top: 16px; }
#vv-soulcrest.is-open .vv-soul-panel p{ text-align: center; max-width: 60ch; margin-left: auto; margin-right: auto; }
#vv-soulcrest.is-open .vv-soul-collapse{ display: block; }
#vv-soulcrest .vv-phase{ margin-top: 28px; margin-left: 10%; }
#vv-soulcrest .vv-cta-row{ width: 100%; justify-content: space-between; align-items: flex-end; margin-top: 20px; }
#vv-soulcrest .vv-cta-row .vv-cta:nth-child(1){ order: 2; margin-left: auto; }
#vv-soulcrest .vv-cta-row .vv-cta:nth-child(2){ order: 1; margin-right: auto; }

@keyframes vv-door-haze{
  0%,100%{ opacity: .44; transform: scale(1); }
  50%{ opacity: .8; transform: scale(1.08); }
}

@media (max-width: 1120px){
  #vv-home .vv-hero{ grid-template-columns: 1fr; }
  #vv-home .vv-hero-side{ justify-items: start; margin-top: 0; }
  #vv-home .vv-hero-note{ text-align: left; }
}

@media (max-width: 1280px){
  #vv-home{
    --vv-shell: min(var(--vv-max), calc(100vw - 28px));
  }
}

@media (max-width: 1024px){
  #vv-home{
    --vv-shell: min(var(--vv-max), calc(100vw - 22px));
    padding-bottom: 70px;
  }

  #vv-home .vv-hero{
    padding: clamp(22px, 3.5vw, 36px);
  }
}

@media (max-width: 960px){
  #vv-home .vv-door{ display: none; }
  #vv-lanes .vv-grid{ grid-template-columns: 1fr; }
}

@media (max-width: 768px){
  #vv-home{
    --vv-shell: min(var(--vv-max), calc(100vw - 18px));
    padding-bottom: 56px;
  }

  #vv-home .vv-section{
    margin-top: 16px;
  }

  #vv-home .vv-card,
  #vv-home .vv-hero{
    border-radius: 20px;
  }
}

@media (max-width: 900px){
  #vv-home{ padding-top: 118px; }
  #vv-home .vv-section{ margin-top: 20px; }
  #vv-home .vv-cta-row{ gap: 10px; }
  #vv-home .vv-cta{ width: 100%; }
  #vv-lanes .vv-lane::after{ content: "Tap to expand"; }
  #vv-lanes .vv-lane.is-open::after{ content: "Tap to collapse"; }
  #vv-pressure .vv-preview::after{ content: "Tap to expand"; }
  #vv-pressure.is-open .vv-preview::after{ content: "Tap to collapse"; }
  #vv-pressure ul{ grid-template-columns: 1fr; }
  #vv-soulcrest{ padding-top: 86px; }
  #vv-soulcrest h2{ top: 24px; right: 16px; }
  #vv-soulcrest .vv-muted{ top: 30px; left: 16px; }
  #vv-soulcrest .vv-soul-btn{ width: 100%; justify-content: space-between; font-size: 20px; }
  #vv-soulcrest .vv-soul-btn::after{ content: "Tap to expand"; }
  #vv-soulcrest .vv-soul-collapse{ font-size: 15px; }
  #vv-soulcrest .vv-phase{ margin-left: 0; text-align: center; }
  #vv-soulcrest .vv-cta-row .vv-cta:nth-child(1),
  #vv-soulcrest .vv-cta-row .vv-cta:nth-child(2){ order: initial; margin: 0; }
}

@media (max-width: 480px){
  #vv-home{
    --vv-shell: min(var(--vv-max), calc(100vw - 14px));
    padding-bottom: 46px;
  }

  #vv-home .vv-hero,
  #vv-home .vv-card{
    padding-left: 14px;
    padding-right: 14px;
  }

  #vv-home .vv-cta,
  #vv-home .vv-soul-btn,
  #vv-home .vv-soul-collapse{
    min-height: 44px;
  }
}

@media (max-width: 360px){
  #vv-home{
    --vv-shell: min(var(--vv-max), calc(100vw - 10px));
  }

  #vv-home .vv-hero,
  #vv-home .vv-card{
    border-radius: 16px;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>

<section id="vv-home" aria-label="Vodivus homepage">
  <div class="vv-door" aria-hidden="true">
    <img src="https://images.squarespace-cdn.com/content/691e9533ddf92169a657d827/3168636f-5707-4d0d-865b-1fbce8c19bb3/Portal+Door+Framed+8K+Glow+Enhanced+V3.png?content-type=image%2Fpng" alt="" loading="lazy" />
  </div>

  <div class="vv-shell">
    <div class="vv-hero-spacer" aria-hidden="true"></div>
    <section class="vv-hero" aria-label="Hero">
      <div class="vv-hero-main">
        <p class="vv-hero-kicker">Venture Architecture Studio</p>
        <h1 class="vv-hero-copy">Dream Boldly. Build Intentionally.</h1>
        <p class="vv-hero-sub">Vodivus turns ambitious ideas into executable systems through clear positioning, resilient operations, and identity architecture that survives reality.</p>
      </div>
      <div class="vv-hero-side">
        <div class="vv-cta-row" aria-label="Primary actions">
          <a href="/contact" class="vv-cta vv-cta-primary">Build the Blueprint -></a>
          <a href="/services" class="vv-cta vv-cta-ghost">Explore Service Paths -></a>
        </div>
        <p class="vv-hero-note">Reviewed within 24-72 hours • Scope-first guidance</p>
      </div>
    </section>

    <section id="vv-lanes" class="vv-section vv-card" aria-label="Structured build paths">
      <h2>Structured Build Paths</h2>
      <p class="vv-muted" style="margin-top:8px; margin-bottom:14px;">Choose the architecture lane that removes your current bottleneck.</p>
      <div class="vv-grid">
        <article class="vv-card vv-lane" aria-label="The Signal lane">
          <h3>Market and Positioning Architecture</h3>
          <p><em>The Signal</em></p>
          <p>Your idea needs definition before it can scale.</p>
          <div class="vv-more">
            <p><strong>Solves:</strong> fuzzy messaging, weak offers, and unclear market fit.</p>
            <p><strong>Builds:</strong> positioning clarity, offer architecture, and high-signal language.</p>
            <a class="vv-cta vv-cta-primary" href="/contact?lane=signal">Define the Signal -></a>
          </div>
        </article>

        <article class="vv-card vv-lane" aria-label="The System lane">
          <h3>Operational and Execution Architecture</h3>
          <p><em>The System</em></p>
          <p>Execution without structure burns time and talent.</p>
          <div class="vv-more">
            <p><strong>Solves:</strong> chaos, bottlenecks, and leadership drag.</p>
            <p><strong>Builds:</strong> workflows, accountability systems, and dependable delivery rhythm.</p>
            <a class="vv-cta vv-cta-primary" href="/contact?lane=system">Strengthen the System -></a>
          </div>
        </article>

        <article class="vv-card vv-lane" aria-label="The Signature lane">
          <h3>Identity and Experience Architecture</h3>
          <p><em>The Signature</em></p>
          <p>Who you are, expressed with precision.</p>
          <div class="vv-more">
            <p><strong>Solves:</strong> inconsistency and forgettable presence.</p>
            <p><strong>Builds:</strong> coherent identity across visuals, voice, and execution touchpoints.</p>
            <a class="vv-cta vv-cta-primary" href="/contact?lane=signature">Refine the Signature -></a>
          </div>
        </article>
      </div>
    </section>

    <section id="vv-pressure" class="vv-section vv-card" aria-label="Built under pressure">
      <h2>Built Under Pressure</h2>
      <div class="vv-preview">
        <p>Vodivus was forged in live environments where execution is public, timelines are unforgiving, and complexity is non-negotiable.</p>
        <div class="vv-more">
          <p>From multi-hundred-person productions to department-level command, the systems we design are tested where failure is visible.</p>
          <ul>
            <li>400+ person production coordination</li>
            <li>7,000-attendee live department leadership</li>
            <li>Infrastructure systems for large-scale operations</li>
            <li>Custom platform and ecosystem development (Soulcrest)</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="vv-soulcrest" class="vv-section vv-card" aria-label="Soulcrest in development">
      <h2>Soulcrest</h2>
      <p class="vv-muted" style="margin-top:6px;">In Development</p>
      <button class="vv-soul-btn" type="button" aria-expanded="false" aria-controls="vv-soul-panel"><span>SoulCrest is a next-generation ecosystem</span></button>
      <div id="vv-soul-panel" class="vv-soul-panel" hidden>
        <p>An architecture for identity, momentum, and meaningful connection. Soulcrest integrates digital systems with real-world participation.</p>
        <p style="margin-top:8px;">Built to create coherence where most platforms create fragmentation, it aligns growth, access, and community inside a deliberate framework.</p>
      </div>
      <button class="vv-soul-collapse" type="button" aria-controls="vv-soul-panel">Click to collapse</button>
      <p class="vv-phase"><strong>Phase I beta access</strong> is curated and released by application.</p>
      <div class="vv-cta-row">
        <a href="/soulcrest" class="vv-cta vv-cta-ghost">Explore Soulcrest -></a>
        <a href="/contact?lane=soulcrest" class="vv-cta vv-cta-primary">Request Phase I Access -></a>
      </div>
    </section>
  </div>
</section>
`;

export const HOME_SCRIPT = `(function () {
  const root = document.getElementById("vv-home");
  if (!root) return;

  const lanes = root.querySelectorAll("#vv-lanes .vv-lane");
  lanes.forEach((lane) => {
    lane.setAttribute("tabindex", "0");
    lane.setAttribute("role", "button");
    lane.setAttribute("aria-expanded", "false");

    const toggle = () => {
      const open = lane.classList.toggle("is-open");
      lane.setAttribute("aria-expanded", String(open));
    };

    lane.addEventListener("click", (e) => {
      if (e.target && e.target.closest("a, button")) return;
      toggle();
    });

    lane.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });

  const pressure = root.querySelector("#vv-pressure");
  if (pressure) {
    pressure.setAttribute("tabindex", "0");
    pressure.setAttribute("role", "button");
    pressure.setAttribute("aria-expanded", "false");

    const togglePressure = () => {
      const open = pressure.classList.toggle("is-open");
      pressure.setAttribute("aria-expanded", String(open));
    };

    pressure.addEventListener("click", (e) => {
      if (e.target && e.target.closest("a, button")) return;
      togglePressure();
    });

    pressure.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePressure();
      }
    });
  }

  const soul = root.querySelector("#vv-soulcrest");
  if (soul) {
    const openBtn = soul.querySelector(".vv-soul-btn");
    const collapseBtn = soul.querySelector(".vv-soul-collapse");
    const panel = soul.querySelector("#vv-soul-panel");

    if (openBtn && panel) {
      const setOpen = (open) => {
        soul.classList.toggle("is-open", open);
        openBtn.setAttribute("aria-expanded", String(open));
        panel.hidden = !open;
      };

      setOpen(false);

      openBtn.addEventListener("click", () => setOpen(true));
      openBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(true);
        }
      });

      if (collapseBtn) {
        collapseBtn.addEventListener("click", () => setOpen(false));
        collapseBtn.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(false);
          }
        });
      }
    }
  }
})();`;

export const FOOTER_SCRIPT = `(function(){})();`;
