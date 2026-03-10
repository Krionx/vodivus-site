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
      padding: clamp(28px, 4vw, 46px) 0 60px;
    }
    #vv-contact *{ box-sizing: border-box; }
    #vv-contact .vv-shell{ width: var(--vv-shell); margin: 0 auto; }
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

    #vv-contact .vv-grid{ display: grid; grid-template-columns: 1.35fr .65fr; gap: 14px; }
    #vv-contact .vv-form-card,
    #vv-contact .vv-support-card{ border-radius: 20px; border: 1px solid rgba(120,170,220,.4); background: rgba(255,255,255,.04); padding: 16px; }

    #vv-contact .vv-trust{ display: grid; gap: 8px; margin-top: 12px; color: rgba(204,228,250,.86); }
    #vv-contact .vv-trust span{ display: block; }

    #vv-contact .vv-form{ display: grid; gap: 12px; margin-top: 14px; }
    #vv-contact .vv-field{ display: grid; gap: 6px; }
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
    }

    @media (max-width: 360px){
      #vv-contact{ --vv-shell: min(var(--vv-max), calc(100vw - 10px)); }
    }
  </style>

  <div class="vv-shell">
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
      <div class="vv-grid">
        <article class="vv-form-card">
          <h2>Intake Form</h2>
          <form id="vv-contact-form" class="vv-form" novalidate>
            <div class="vv-field">
              <label for="vv-name">Name</label>
              <input id="vv-name" name="name" type="text" autocomplete="name" required />
            </div>
            <div class="vv-field">
              <label for="vv-email">Email</label>
              <input id="vv-email" name="email" type="email" autocomplete="email" required />
            </div>
            <div class="vv-field">
              <label for="vv-lane">Primary lane</label>
              <select id="vv-lane" name="lane" required>
                <option value="">Select a lane</option>
                <option value="signal">Signal: positioning and market clarity</option>
                <option value="system">System: operational architecture</option>
                <option value="signature">Signature: identity and experience</option>
                <option value="unsure">Unsure: need recommendation</option>
              </select>
            </div>
            <div class="vv-field">
              <label for="vv-context">What are you building right now?</label>
              <textarea id="vv-context" name="context" required></textarea>
            </div>
            <div class="vv-field">
              <label for="vv-pressure">Where is execution currently breaking down?</label>
              <textarea id="vv-pressure" name="pressure" required></textarea>
            </div>
            <button class="vv-submit" type="submit">Submit Intake -></button>
            <div id="vv-contact-status" class="vv-status" role="status" aria-live="polite"></div>
          </form>
        </article>

        <aside class="vv-support-card" aria-label="Support details">
          <h3>What You Receive</h3>
          <ul>
            <li>Recommended starting lane</li>
            <li>Scope boundaries for the first build cycle</li>
            <li>Immediate next actions in practical order</li>
          </ul>
          <p class="vv-note">If it is not a fit, we still point you to the cleanest next step.</p>
          <p class="vv-note">Prefer direct email? contact@vodivus.com</p>
        </aside>
      </div>
    </section>
  </div>
</section>
`;

export const CONTACT_SCRIPT = `(function(){
  const form = document.getElementById("vv-contact-form");
  const status = document.getElementById("vv-contact-status");
  if (!form || !status) return;

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("vv-name");
    const email = document.getElementById("vv-email");
    const lane = document.getElementById("vv-lane");
    const context = document.getElementById("vv-context");
    const pressure = document.getElementById("vv-pressure");

    if (!name || !email || !lane || !context || !pressure) return;

    if (!name.value.trim() || !email.value.trim() || !lane.value.trim() || !context.value.trim() || !pressure.value.trim()) {
      status.style.display = "block";
      status.textContent = "Please complete all required fields before submitting.";
      return;
    }

    const button = form.querySelector("button[type='submit']");
    const originalText = button ? button.textContent : "Submit Intake ->";
    if (button) {
      button.disabled = true;
      button.textContent = "Sending...";
    }

    status.style.display = "block";
    status.textContent = "Intake received. We will respond within 24-72 hours with lane recommendation and next actions.";

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
