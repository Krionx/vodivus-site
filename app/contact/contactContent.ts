export const CONTACT_HTML = String.raw`
<section id="vv-contact" aria-label="Vodivus contact">
  <style>
    #vv-contact{
      --vv-max: 1200px;
      --vv-shell: min(var(--vv-max), calc(100vw - 32px));
      --vv-title: clamp(36px, 5.2vw, 64px);
      --vv-h2: clamp(28px, 3.5vw, 44px);
      --vv-h3: clamp(21px, 2.4vw, 30px);
      --vv-body: clamp(20px, 1.7vw, 24px);
      --vv-border: rgba(123,183,235,.44);
      --vv-glass: rgba(8, 14, 28, .62);
      color: rgba(242,248,255,.96);
      padding: clamp(28px, 4vw, 46px) 0 60px;
    }
    #vv-contact *{ box-sizing: border-box; }
    #vv-contact .vv-shell{ width: var(--vv-shell); margin: 0 auto; }
    #vv-contact h1,
    #vv-contact h2,
    #vv-contact h3{ margin: 0; color: rgba(250,253,255,.98); }
    #vv-contact h1{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-title); line-height: 1.06; text-shadow: 0 0 18px rgba(112,190,255,.2); }
    #vv-contact h2{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-h2); line-height: 1.1; }
    #vv-contact h3{ font-family: "Cinzel", serif; font-size: var(--vv-h3); line-height: 1.14; }
    #vv-contact p,
    #vv-contact label,
    #vv-contact input,
    #vv-contact textarea,
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

    #vv-contact .vv-hero-copy{ max-width: 22ch; }
    #vv-contact .vv-hero-sub{ max-width: 64ch; margin-top: 14px; }

    #vv-contact .vv-grid{ display: grid; grid-template-columns: 1.3fr .7fr; gap: 14px; }
    #vv-contact .vv-form-card,
    #vv-contact .vv-support-card{ border-radius: 20px; border: 1px solid rgba(120,170,220,.4); background: rgba(255,255,255,.04); padding: 16px; }

    #vv-contact .vv-form{ display: grid; gap: 12px; margin-top: 14px; }
    #vv-contact .vv-field{ display: grid; gap: 6px; }
    #vv-contact .vv-field label{ color: rgba(205,229,252,.88); font-size: clamp(18px, 1.7vw, 22px); }
    #vv-contact .vv-field input,
    #vv-contact .vv-field textarea{
      width: 100%;
      border-radius: 12px;
      border: 1px solid rgba(167,214,255,.26);
      background: rgba(7,12,24,.72);
      color: rgba(243,249,255,.95);
      padding: 10px 12px;
      outline: none;
    }
    #vv-contact .vv-field input:focus,
    #vv-contact .vv-field textarea:focus{
      border-color: rgba(155,209,255,.72);
      box-shadow: 0 0 0 2px rgba(155,209,255,.24);
    }
    #vv-contact .vv-field textarea{ min-height: 140px; resize: vertical; }

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
      font-size: clamp(18px, 1.6vw, 21px);
    }

    #vv-contact .vv-support-card ul{ margin: 10px 0 0 18px; padding: 0; color: rgba(219,236,255,.88); }
    #vv-contact .vv-support-card .vv-note{ margin-top: 10px; color: rgba(196,224,251,.8); }

    @media (max-width: 980px){
      #vv-contact .vv-grid{ grid-template-columns: 1fr; }
    }
  </style>

  <div class="vv-shell">
    <section class="vv-block" aria-label="Contact hero">
      <h1 class="vv-hero-copy">Start the Blueprint Intake.</h1>
      <p class="vv-hero-sub">Tell us what you are building, where execution is breaking, and what pressure is highest. We will reply with the clearest next move.</p>
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
              <label for="vv-context">What are you building right now?</label>
              <textarea id="vv-context" name="context" required></textarea>
            </div>
            <div class="vv-field">
              <label for="vv-pressure">Where is execution under pressure?</label>
              <textarea id="vv-pressure" name="pressure" required></textarea>
            </div>
            <button class="vv-submit" type="submit">Submit Intake -></button>
            <div id="vv-contact-status" class="vv-status" role="status" aria-live="polite"></div>
          </form>
        </article>

        <aside class="vv-support-card" aria-label="Support details">
          <h3>What Happens Next</h3>
          <ul>
            <li>We review your intake within 24-72 hours.</li>
            <li>You get a recommended lane and scope boundaries.</li>
            <li>You receive next actions with clear execution priorities.</li>
          </ul>
          <p class="vv-note">If it is not a fit, we still point you toward the cleanest next move.</p>
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
    const context = document.getElementById("vv-context");
    const pressure = document.getElementById("vv-pressure");

    if (!name || !email || !context || !pressure) return;

    if (!name.value.trim() || !email.value.trim() || !context.value.trim() || !pressure.value.trim()) {
      status.style.display = "block";
      status.textContent = "Please complete all fields before submitting.";
      return;
    }

    const button = form.querySelector("button[type='submit']");
    const originalText = button ? button.textContent : "Submit Intake ->";
    if (button) {
      button.disabled = true;
      button.textContent = "Sending...";
    }

    status.style.display = "block";
    status.textContent = "Intake received. We will respond with a recommended lane and next actions within 24-72 hours.";

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
