export const CONTACT_HTML = String.raw`
<section id="vv-contact" aria-label="Vodivus contact">
  <style>
    #vv-contact{
      --vv-max: 1200px;
      --vv-shell: min(var(--vv-max), calc(100vw - 32px));
      --vv-title: 36px;
      --vv-h2: 36px;
      --vv-h3: 36px;
      --vv-content: 36px;
      --vv-rest: 18px;
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
    #vv-contact p{ font-family: "Cormorant Garamond", serif; font-size: var(--vv-content); line-height: 1.4; }
    #vv-contact label,
    #vv-contact input,
    #vv-contact textarea,
    #vv-contact select,
    #vv-contact button,
    #vv-contact a,
    #vv-contact span{ font-family: "Cormorant Garamond", serif; font-size: var(--vv-rest); line-height: 1.4; }
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

    #vv-contact .vv-kicker{ text-transform: uppercase; letter-spacing: .14em; font-size: var(--vv-rest); color: rgba(193,224,251,.78); }
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
      font-size: var(--vv-rest);
    }
    #vv-contact .vv-field label{ color: rgba(205,229,252,.88); font-size: var(--vv-rest); }
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
      font-size: 36px;
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
      font-size: var(--vv-rest);
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
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
    }

    #vv-contact .vv-step2-action{
      margin-top: 12px;
      font-size: 36px;
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
    #vv-contact .vv-step2-action:hover{ transform: translateY(-2px); }

    #vv-contact .vv-step2-nav{
      margin-top: 12px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 12px;
    }

    #vv-contact .vv-step2-back,
    #vv-contact .vv-step2-submit{
      font-size: 36px;
      min-height: 46px;
      padding: 10px 16px;
      border-radius: 14px;
      cursor: pointer;
      transition: transform .18s ease, box-shadow .18s ease;
    }

    #vv-contact .vv-step2-back{
      justify-self: start;
      border: 1px solid rgba(140,204,255,.42);
      background: rgba(255,255,255,.06);
      color: rgba(236,247,255,.94);
    }

    #vv-contact .vv-step2-submit{
      justify-self: end;
      border: 1px solid rgba(123,198,255,.55);
      background: linear-gradient(rgba(0,0,0,0) 8%, rgba(92,154,230,.68) 88%);
      color: rgba(255,255,255,.96);
      box-shadow: 0 12px 30px rgba(65,126,209,.34);
    }

    #vv-contact .vv-step2-back:hover,
    #vv-contact .vv-step2-submit:hover{ transform: translateY(-2px); }

    #vv-contact .vv-calendar-dim{
      position: fixed;
      inset: 0;
      z-index: 1000001;
      opacity: 0;
      pointer-events: none;
      background: rgba(0, 2, 8, .42);
      -webkit-backdrop-filter: blur(10px) saturate(.74) brightness(.7);
      backdrop-filter: blur(10px) saturate(.74) brightness(.7);
      transition: opacity .24s ease;
    }

    #vv-contact .vv-calendar-shard{
      position: fixed;
      left: 50vw;
      top: 50dvh;
      width: min(460px, calc(100vw - 34px));
      z-index: 1000002;
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(.94);
      border-radius: 20px;
      border: 1px solid rgba(123,183,235,.44);
      background:
        linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02)),
        rgba(8,14,28,.94);
      box-shadow: 0 28px 70px rgba(0,0,0,.64), inset 0 1px 0 rgba(255,255,255,.08);
      padding: 16px;
      overflow: hidden;
      transition: opacity .3s ease, transform .34s cubic-bezier(.2,.72,.08,1);
    }

    #vv-contact .vv-calendar-head{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 10px;
    }

    #vv-contact .vv-calendar-title-wrap{ min-width: 0; }
    #vv-contact .vv-calendar-title{
      margin: 0;
      font-family: "Cinzel Decorative", serif;
      font-size: 36px;
      line-height: 1.04;
      letter-spacing: .02em;
      text-transform: uppercase;
    }
    #vv-contact .vv-calendar-sub{
      margin: 6px 0 0;
      color: rgba(209,229,250,.86);
      font-size: 18px;
    }

    #vv-contact .vv-calendar-close{
      min-height: 36px;
      min-width: 36px;
      border-radius: 10px;
      border: 1px solid rgba(140,204,255,.46);
      background: rgba(255,255,255,.06);
      color: rgba(238,248,255,.96);
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
    }

    #vv-contact .vv-cal-toolbar{
      display: grid;
      grid-template-columns: 40px minmax(0, 1fr) 40px;
      align-items: center;
      gap: 8px;
      margin-top: 6px;
      margin-bottom: 10px;
    }
    #vv-contact .vv-cal-nav-btn{
      min-height: 40px;
      min-width: 40px;
      border-radius: 12px;
      border: 1px solid rgba(140,204,255,.36);
      background: rgba(255,255,255,.05);
      color: rgba(238,248,255,.96);
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
    }
    #vv-contact .vv-cal-month-chip{
      min-height: 42px;
      min-width: 0;
      border-radius: 14px;
      border: 1px solid rgba(140,204,255,.3);
      background: rgba(255,255,255,.04);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 6px 10px;
      overflow: hidden;
    }
    #vv-contact .vv-cal-month-label{
      font-family: "Cinzel", serif;
      font-size: 24px;
      line-height: 1;
      text-transform: uppercase;
      color: rgba(232,244,255,.98);
      white-space: nowrap;
      min-width: 0;
      overflow: visible;
      text-overflow: clip;
    }
    #vv-contact .vv-cal-chip-row{
      display: inline-flex;
      gap: 6px;
      flex-shrink: 0;
    }
    #vv-contact .vv-cal-chip{
      min-height: 30px;
      padding: 3px 10px;
      border-radius: 999px;
      border: 1px solid rgba(140,204,255,.34);
      background: rgba(255,255,255,.06);
      color: rgba(228,242,255,.95);
      font-size: 18px;
      cursor: pointer;
    }

    #vv-contact .vv-cal-weekdays,
    #vv-contact .vv-cal-grid{
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr));
      gap: 7px;
    }
    #vv-contact .vv-cal-weekdays{
      margin-top: 8px;
      margin-bottom: 6px;
    }
    #vv-contact .vv-cal-weekday{
      text-align: center;
      color: rgba(182,212,241,.64);
      font-size: 18px;
      letter-spacing: .08em;
      text-transform: uppercase;
      font-family: "Cinzel", serif;
    }
    #vv-contact .vv-cal-day{
      min-height: 48px;
      border-radius: 14px;
      border: 1px solid rgba(140,204,255,.26);
      background: rgba(255,255,255,.03);
      color: rgba(233,245,255,.95);
      font-family: "Cinzel", serif;
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
      transition: border-color .16s ease, background .16s ease, box-shadow .16s ease;
    }
    #vv-contact .vv-cal-day:hover{ border-color: rgba(155,209,255,.62); box-shadow: 0 0 0 1px rgba(155,209,255,.22) inset; }
    #vv-contact .vv-cal-day.is-muted{
      color: rgba(159,186,214,.42);
      background: rgba(0,0,0,.16);
      border-color: rgba(110,148,186,.2);
    }
    #vv-contact .vv-cal-day.is-today{ border-color: rgba(204,173,109,.62); }
    #vv-contact .vv-cal-day.is-selected{
      border-color: rgba(204,173,109,.9);
      background: rgba(204,173,109,.16);
      color: rgba(251,247,239,.98);
    }

    #vv-contact .vv-cal-footer{
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px solid rgba(142,198,243,.2);
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 12px;
    }
    #vv-contact .vv-cal-selected{
      color: rgba(204,228,250,.86);
      font-size: 18px;
      letter-spacing: .08em;
      text-transform: uppercase;
      font-family: "Cinzel", serif;
    }
    #vv-contact .vv-cal-apply{
      min-height: 46px;
      padding: 8px 16px;
      border-radius: 14px;
      border: 1px solid rgba(123,198,255,.5);
      background: linear-gradient(rgba(0,0,0,0) 8%, rgba(92,154,230,.66) 88%);
      color: rgba(255,255,255,.96);
      font-family: "Cinzel Decorative", serif;
      font-size: 18px;
      cursor: pointer;
    }

    #vv-contact.is-calendar-open .vv-calendar-dim{
      opacity: 1;
      pointer-events: auto;
    }

    #vv-contact.is-calendar-open .vv-calendar-shard{
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, -50%) scale(1);
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
      #vv-contact .vv-field textarea{ font-size: max(16px, var(--vv-rest)); }
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
      #vv-contact .vv-step2-nav{ grid-template-columns: 1fr; }
      #vv-contact .vv-step2-back,
      #vv-contact .vv-step2-submit{ justify-self: stretch; }
    }
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
      <div class="vv-field">
        <label for="vv-step2-service">What services are you interested in?</label>
        <select id="vv-step2-service" name="step2_service" required>
          <option value="">Select a service path</option>
          <option value="venture-brand">Venture &amp; Brand Development</option>
          <option value="website-digital">Website &amp; Digital Systems</option>
          <option value="operational-systems">Operational Systems &amp; Execution</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>
      <div class="vv-field">
        <label for="vv-step2-budget">Budget</label>
        <select id="vv-step2-budget" name="step2_budget" required>
          <option value="">Select a budget range</option>
          <option value="lt-500">&lt;500</option>
          <option value="500-1000">500 -1000</option>
          <option value="2500-plus">2500+</option>
          <option value="25-month">25/m</option>
          <option value="200-month">200/m</option>
        </select>
      </div>
      <button id="vv-step2-start-date" class="vv-step2-action" type="button">Project start date</button>
      <div class="vv-step2-nav">
        <button id="vv-step2-back" class="vv-step2-back" type="button">Back</button>
        <button id="vv-step2-submit" class="vv-step2-submit" type="button">Submit</button>
      </div>
    </section>

    <button class="vv-calendar-dim" id="vv-calendar-dim" type="button" aria-label="Close calendar"></button>
    <section id="vv-calendar-shard" class="vv-calendar-shard" role="dialog" aria-label="Project start date" aria-modal="true">
      <div class="vv-calendar-head">
        <div class="vv-calendar-title-wrap">
          <h3 class="vv-calendar-title">Select start date</h3>
          <p class="vv-calendar-sub">Stored clean for automation (YYYY-MM-DD).</p>
        </div>
        <button id="vv-calendar-close" class="vv-calendar-close" type="button" aria-label="Close calendar">&times;</button>
      </div>
      <div class="vv-cal-toolbar">
        <button id="vv-cal-prev" class="vv-cal-nav-btn" type="button" aria-label="Previous month">&#8249;</button>
        <div class="vv-cal-month-chip">
          <span id="vv-cal-month-label" class="vv-cal-month-label">MONTH YYYY</span>
          <span class="vv-cal-chip-row">
            <button id="vv-cal-today" class="vv-cal-chip" type="button">TODAY</button>
            <button id="vv-cal-clear" class="vv-cal-chip" type="button">CLEAR</button>
          </span>
        </div>
        <button id="vv-cal-next" class="vv-cal-nav-btn" type="button" aria-label="Next month">&#8250;</button>
      </div>

      <div class="vv-cal-weekdays" aria-hidden="true">
        <span class="vv-cal-weekday">SU</span>
        <span class="vv-cal-weekday">MO</span>
        <span class="vv-cal-weekday">TU</span>
        <span class="vv-cal-weekday">WE</span>
        <span class="vv-cal-weekday">TH</span>
        <span class="vv-cal-weekday">FR</span>
        <span class="vv-cal-weekday">SA</span>
      </div>

      <div id="vv-cal-grid" class="vv-cal-grid" role="grid" aria-label="Calendar dates"></div>

      <div class="vv-cal-footer">
        <p id="vv-cal-selected" class="vv-cal-selected">Selected: --</p>
        <button id="vv-cal-apply" class="vv-cal-apply" type="button">APPLY</button>
      </div>

      <input id="vv-project-start-date" type="hidden" />
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
  const startDateBtn = document.getElementById("vv-step2-start-date");
  const calendarDim = document.getElementById("vv-calendar-dim");
  const calendarClose = document.getElementById("vv-calendar-close");
  const calendarPrev = document.getElementById("vv-cal-prev");
  const calendarNext = document.getElementById("vv-cal-next");
  const calendarToday = document.getElementById("vv-cal-today");
  const calendarClear = document.getElementById("vv-cal-clear");
  const calendarApply = document.getElementById("vv-cal-apply");
  const step2Back = document.getElementById("vv-step2-back");
  const step2Submit = document.getElementById("vv-step2-submit");
  const calendarGrid = document.getElementById("vv-cal-grid");
  const calendarMonthLabel = document.getElementById("vv-cal-month-label");
  const calendarSelected = document.getElementById("vv-cal-selected");
  const projectStartDate = document.getElementById("vv-project-start-date");

  if (!root || !form || !status || !closeBtn || !dim || !startDateBtn || !calendarDim || !calendarClose || !calendarPrev || !calendarNext || !calendarToday || !calendarClear || !calendarApply || !step2Back || !step2Submit || !calendarGrid || !calendarMonthLabel || !calendarSelected || !projectStartDate) return;

  const today = new Date();
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let viewDate = new Date(todayOnly.getFullYear(), todayOnly.getMonth(), 1);
  let selectedDate = null;

  const toIsoDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  };

  const sameDay = (a, b) => {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  };

  const renderSelectedText = () => {
    if (!selectedDate) {
      calendarSelected.textContent = "Selected: --";
      return;
    }
    calendarSelected.textContent = "Selected: " + toIsoDate(selectedDate);
  };

  const renderCalendar = () => {
    const monthText = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(viewDate).toUpperCase();
    calendarMonthLabel.textContent = monthText;

    calendarGrid.innerHTML = "";

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    const startOffset = firstOfMonth.getDay();
    const gridStart = new Date(year, month, 1 - startOffset);

    for (let i = 0; i < 42; i += 1) {
      const d = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "vv-cal-day";
      btn.textContent = String(d.getDate());

      if (d.getMonth() !== month) btn.classList.add("is-muted");
      if (sameDay(d, todayOnly)) btn.classList.add("is-today");
      if (selectedDate && sameDay(d, selectedDate)) btn.classList.add("is-selected");

      btn.addEventListener("click", () => {
        selectedDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        projectStartDate.value = toIsoDate(selectedDate);
        renderSelectedText();
        renderCalendar();
      });

      calendarGrid.appendChild(btn);
    }
  };

  const openStep2 = function(){
    root.classList.add("is-step2-open");
  };

  const closeStep2 = function(){
    root.classList.remove("is-step2-open");
    root.classList.remove("is-calendar-open");
  };

  const openCalendar = function(){
    root.classList.add("is-calendar-open");
    renderCalendar();
  };

  const closeCalendar = function(){
    root.classList.remove("is-calendar-open");
  };

  closeBtn.addEventListener("click", closeStep2);
  dim.addEventListener("click", closeStep2);
  startDateBtn.addEventListener("click", openCalendar);
  calendarClose.addEventListener("click", closeCalendar);
  calendarDim.addEventListener("click", closeCalendar);

  calendarPrev.addEventListener("click", () => {
    viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
    renderCalendar();
  });

  calendarNext.addEventListener("click", () => {
    viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
    renderCalendar();
  });

  calendarToday.addEventListener("click", () => {
    viewDate = new Date(todayOnly.getFullYear(), todayOnly.getMonth(), 1);
    selectedDate = new Date(todayOnly.getFullYear(), todayOnly.getMonth(), todayOnly.getDate());
    projectStartDate.value = toIsoDate(selectedDate);
    renderSelectedText();
    renderCalendar();
  });

  calendarClear.addEventListener("click", () => {
    selectedDate = null;
    projectStartDate.value = "";
    renderSelectedText();
    renderCalendar();
  });

  calendarApply.addEventListener("click", closeCalendar);
  step2Back.addEventListener("click", closeStep2);
  step2Submit.addEventListener("click", function(){
    closeStep2();
    status.style.display = "block";
    status.textContent = "Step 2 submitted. We'll route your intake and follow up with next actions.";
  });

  renderSelectedText();
  renderCalendar();

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
