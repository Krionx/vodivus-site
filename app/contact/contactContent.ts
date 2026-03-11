export const CONTACT_HTML = String.raw`
<section id="vv-contact" aria-label="Vodivus contact">
  <style>
    #vv-contact{
      --vv-max: 1200px;
      --vv-shell: min(var(--vv-max), calc(100vw - 32px));
      --vv-title: clamp(36px, 5.2vw, 64px);
      --vv-h2: clamp(28px, 3.5vw, 44px);
      --vv-h3: clamp(21px, 2.2vw, 30px);
      --vv-body: clamp(18px, 1.3vw, 23px);
      --vv-border: rgba(123,183,235,.44);
      --vv-glass: rgba(8,14,28,.62);
      color: rgba(242,248,255,.96);
      padding: 0 0 60px;
    }
    #vv-contact *{ box-sizing: border-box; }
    #vv-contact .vv-shell{ width: var(--vv-shell); margin: 0 auto; }
    #vv-contact .vv-hero-spacer{
      height: 118px;
      margin-top: 118px;
    }
    #vv-contact p,
    #vv-contact li,
    #vv-contact h1,
    #vv-contact h2,
    #vv-contact h3,
    #vv-contact label{
      overflow-wrap: anywhere;
    }
    #vv-contact h1,
    #vv-contact h2,
    #vv-contact h3{ margin: 0; color: rgba(250,253,255,.98); }
    #vv-contact h1{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-title); line-height: 1.05; text-shadow: 0 0 18px rgba(112,190,255,.2); }
    #vv-contact h2{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-h2); line-height: 1.1; }
    #vv-contact h3{ font-family: "Cinzel", serif; font-size: var(--vv-h3); line-height: 1.14; }
    #vv-contact p,
    #vv-contact label,
    #vv-contact input,
    #vv-contact textarea,
    #vv-contact select,
    #vv-contact button,
    #vv-contact a,
    #vv-contact span{ font-family: "Cormorant Garamond", serif; font-size: var(--vv-body); line-height: 1.4; }
    #vv-contact p{ margin: 0; color: rgba(232,243,255,.9); }

    #vv-contact .vv-block{
      border-radius: 24px;
      border: 1px solid var(--vv-border);
      background:
        radial-gradient(680px 420px at -8% 96%, rgba(11,33,63,.96), transparent 64%),
        linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01)),
        var(--vv-glass);
      box-shadow: 0 24px 72px rgba(0,0,0,.52), inset 0 1px 0 rgba(255,255,255,.08);
      padding: clamp(22px, 3.2vw, 34px);
    }
    #vv-contact .vv-block + .vv-block{ margin-top: 18px; }

    #vv-contact .vv-kicker{ text-transform: uppercase; letter-spacing: .14em; font-size: clamp(14px, .95vw, 16px); color: rgba(193,224,251,.78); }
    #vv-contact .vv-hero-copy{ max-width: 21ch; margin-top: 10px; }
    #vv-contact .vv-hero-sub{ max-width: 66ch; margin-top: 14px; }

    #vv-contact .vv-grid{ display: grid; grid-template-columns: 1fr; gap: 14px; }
    #vv-contact .vv-form-card,
    #vv-contact .vv-support-card{ border-radius: 20px; border: 1px solid rgba(120,170,220,.4); background: rgba(255,255,255,.04); padding: 16px; }
    #vv-contact .vv-form-card{ padding: 16px; }

    #vv-contact .vv-trust{ display: grid; gap: 8px; margin-top: 12px; color: rgba(204,228,250,.86); }
    #vv-contact .vv-trust span{ display: block; }

    #vv-contact .vv-form{ display: grid; gap: 12px; margin-top: 14px; }
    #vv-contact .vv-field-row{ display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    #vv-contact .vv-field{ display: grid; gap: 6px; }
    #vv-contact .vv-submit-row{
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 12px;
    }
    #vv-contact .vv-next-note{
      color: rgba(200,226,250,.88);
      font-size: clamp(16px, 1.15vw, 20px);
    }
    #vv-contact .vv-field label{ color: rgba(205,229,252,.88); font-size: clamp(17px, 1.45vw, 21px); }
    #vv-contact .vv-field input,
    #vv-contact .vv-field textarea,
    #vv-contact .vv-field select{
      width: 100%;
      border-radius: 12px;
      border: 1px solid rgba(167,214,255,.26);
      background: rgba(7,12,24,.72);
      color: rgba(243,249,255,.95);
      padding: 10px 12px;
      outline: none;
    }
    #vv-contact .vv-field input:focus,
    #vv-contact .vv-field textarea:focus,
    #vv-contact .vv-field select:focus{
      border-color: rgba(155,209,255,.72);
      box-shadow: 0 0 0 2px rgba(155,209,255,.24);
    }
    #vv-contact .vv-field textarea{ min-height: 120px; resize: vertical; }

    #vv-contact .vv-submit{
      border: 1px solid rgba(123,198,255,.55);
      border-radius: 14px;
      min-height: 46px;
      padding: 10px 16px;
      width: fit-content;
      justify-self: end;
      background: linear-gradient(rgba(0,0,0,0) 8%, rgba(92,154,230,.68) 88%);
      color: rgba(255,255,255,.96);
      box-shadow: 0 12px 30px rgba(65,126,209,.34);
      cursor: pointer;
      transition: transform .18s ease, box-shadow .18s ease;
    }
    #vv-contact .vv-submit:hover{ transform: translateY(-2px); }

    #vv-contact .vv-status{
      display: none;
      margin-top: 8px;
      border-radius: 12px;
      border: 1px solid rgba(155,209,255,.32);
      background: rgba(8,16,34,.58);
      color: rgba(228,242,255,.92);
      padding: 9px 11px;
      font-size: clamp(17px, 1.4vw, 20px);
    }

    #vv-contact .vv-step2-dim{
      position: fixed;
      inset: 0;
      z-index: 999999;
      opacity: 0;
      pointer-events: none;
      background: rgba(0, 2, 8, .36);
      -webkit-backdrop-filter: blur(8px) saturate(.76) brightness(.74);
      backdrop-filter: blur(8px) saturate(.76) brightness(.74);
      transition: opacity .28s ease;
    }

    #vv-contact .vv-step2-shard{
      position: fixed;
      left: 50vw;
      top: 50dvh;
      width: min(760px, calc(100vw - 34px));
      max-height: min(82vh, 700px);
      z-index: 1000000;
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(.94);
      border-radius: 22px;
      border: 1px solid rgba(123,183,235,.44);
      background:
        radial-gradient(700px 440px at -8% 96%, rgba(11,33,63,.96), transparent 64%),
        linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02)),
        rgba(8,14,28,.92);
      box-shadow: 0 32px 80px rgba(0,0,0,.68), inset 0 1px 0 rgba(255,255,255,.08);
      padding: clamp(18px, 2.6vw, 26px);
      overflow: auto;
      transition: opacity .28s ease, transform .3s ease;
    }

    #vv-contact .vv-step2-head{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
    }

    #vv-contact .vv-step2-sub{
      margin: 0 0 12px;
      text-align: left;
      color: rgba(206,229,251,.88);
    }

    #vv-contact .vv-step2-close{
      min-height: 40px;
      min-width: 40px;
      border-radius: 12px;
      border: 1px solid rgba(140,204,255,.46);
      background: rgba(255,255,255,.06);
      color: rgba(238,248,255,.96);
      font-size: 24px;
      line-height: 1;
      cursor: pointer;
    }

    #vv-contact.is-step2-open .vv-step2-dim{
      opacity: 1;
      pointer-events: auto;
    }

    #vv-contact.is-step2-open .vv-step2-shard{
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, -50%) scale(1);
    }

    #vv-contact .vv-support-card ul{ margin: 10px 0 0 18px; padding: 0; color: rgba(219,236,255,.88); }
    #vv-contact .vv-support-card .vv-note{ margin-top: 10px; color: rgba(196,224,251,.8); }

    @media (max-width: 980px){
      #vv-contact .vv-grid{ grid-template-columns: 1fr; }
    }

    @media (max-width: 1280px){
      #vv-contact{ --vv-shell: min(var(--vv-max), calc(100vw - 28px)); }
    }

    @media (max-width: 1024px){
      #vv-contact{ --vv-shell: min(var(--vv-max), calc(100vw - 22px)); padding-bottom: 52px; }
      #vv-contact .vv-block{ padding: clamp(18px, 2.8vw, 26px); }
    }

    @media (max-width: 768px){
      #vv-contact{ --vv-shell: min(var(--vv-max), calc(100vw - 18px)); }
      #vv-contact .vv-field-row{ grid-template-columns: 1fr; }
      #vv-contact .vv-submit{ width: 100%; min-height: 44px; }
      #vv-contact .vv-field input,
      #vv-contact .vv-field select,
      #vv-contact .vv-field textarea{ font-size: max(16px, var(--vv-body)); }
    }

    @media (max-width: 480px){
      #vv-contact{ --vv-shell: min(var(--vv-max), calc(100vw - 14px)); }
      #vv-contact .vv-block,
      #vv-contact .vv-form-card,
      #vv-contact .vv-support-card{ border-radius: 16px; }
      #vv-contact .vv-block,
      #vv-contact .vv-form-card,
      #vv-contact .vv-support-card{ padding: 14px; }
      #vv-contact .vv-form-card{ padding: 14px; }
    }

    @media (max-width: 360px){
      #vv-contact{ --vv-shell: min(var(--vv-max), calc(100vw - 10px)); }
      #vv-contact .vv-submit-row{ grid-template-columns: 1fr; }
      #vv-contact .vv-submit{ min-height: 44px; }
  </style>

  <div class="vv-shell">
    <div class="vv-hero-spacer" aria-hidden="true"></div>
    <section class="vv-block" aria-label="Contact hero">
      <p class="vv-kicker">Conversion and Intake</p>
      <h1 class="vv-hero-copy">Start the Blueprint Intake.</h1>
      <p class="vv-hero-sub">Share the build context and pressure points. We will return a lane recommendation, scope boundaries, and immediate priorities you can act on.</p>
      <div class="vv-trust">
        <span>Response window: 24-72 hours</span>
        <span>No obligation call required to receive initial direction</span>
      </div>
    </section>

    <section class="vv-block" aria-label="Contact intake">
      <h2>Take the first step</h2>
      <div class="vv-grid">
        <article class="vv-form-card">
          <form id="vv-contact-form" class="vv-form" novalidate>
            <div class="vv-field-row">
              <div class="vv-field">
                <label for="vv-name">Name</label>
                <input id="vv-name" name="name" type="text" autocomplete="name" placeholder="John Doe" required />
              </div>
              <div class="vv-field">
                <label for="vv-email">Email</label>
                <input id="vv-email" name="email" type="email" autocomplete="email" placeholder="example@domain.com" required />
              </div>
            </div>
            <div class="vv-field">
              <label for="vv-links">Links (site / docs / references)</label>
              <textarea id="vv-links" name="links" placeholder="Website, deck, doc links, examples, inspiration references..." required></textarea>
            </div>
            <div class="vv-field">
              <label for="vv-context">What are you building</label>
              <textarea id="vv-context" name="building" placeholder="What is it? Who is it for? What does 'done' look like? (Links help.)" required></textarea>
            </div>
            <div class="vv-field">
              <label for="vv-pressure">Current bottleneck</label>
              <textarea id="vv-pressure" name="bottleneck" placeholder="What's stuck right now? (Offer clarity, conversion, UX, automation, architecture, build plan, etc.)" required></textarea>
            </div>
            <div class="vv-submit-row">
              <p class="vv-next-note">Next: choose path + budget + start date so we route you correctly.</p>
              <button class="vv-submit" type="submit">Continue to Step 2</button>
            </div>
            <div id="vv-contact-status" class="vv-status" role="status" aria-live="polite"></div>
          </form>
        </article>

      </div>
    </section>

    <button class="vv-step2-dim" id="vv-step2-dim" type="button" aria-label="Close step 2"></button>
    <section id="vv-step2-shard" class="vv-step2-shard" role="dialog" aria-label="Step 2 - Choose your path" aria-modal="true">
      <div class="vv-step2-head">
        <h2>Step 2 — Choose your path</h2>
        <button id="vv-step2-close" class="vv-step2-close" type="button" aria-label="Close step 2">&times;</button>
      </div>
      <p class="vv-step2-sub">These options help us route your intake correctly.</p>
      <p>Step 2 content goes here.</p>
    </section>
  </div>
</section>
`;

export const CONTACT_SCRIPT = `(function(){
  const root = document.getElementById("vv-contact");
  const form = document.getElementById("vv-contact-form");
  const status = document.getElementById("vv-contact-status");
  const closeBtn = document.getElementById("vv-step2-close");
  const dim = document.getElementById("vv-step2-dim");
  if (!root || !form || !status || !closeBtn || !dim) return;

  const openStep2 = function(){
    root.classList.add("is-step2-open");
  };

  const closeStep2 = function(){
    root.classList.remove("is-step2-open");
  };

  closeBtn.addEventListener("click", closeStep2);
  dim.addEventListener("click", closeStep2);

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("vv-name");
    const email = document.getElementById("vv-email");
    const links = document.getElementById("vv-links");
    const context = document.getElementById("vv-context");
    const pressure = document.getElementById("vv-pressure");

    if (!name || !email || !links || !context || !pressure) return;

    if (!name.value.trim() || !email.value.trim() || !links.value.trim() || !context.value.trim() || !pressure.value.trim()) {
      status.style.display = "block";
      status.textContent = "Please complete all required fields before submitting.";
      return;
    }

    const button = form.querySelector("button[type='submit']");
    const originalText = button ? button.textContent : "Continue to Step 2";
    if (button) {
      button.disabled = true;
      button.textContent = "Sending...";
    }

    status.style.display = "block";
    status.textContent = "Intake received. We will respond within 24-72 hours with lane recommendation and next actions.";
    openStep2();

    window.setTimeout(function(){
      form.reset();
      if (button) {
        button.disabled = false;
        button.textContent = originalText;
      }
    }, 900);
  });
})();`;

export const FOOTER_SCRIPT = `(function(){})();`;
