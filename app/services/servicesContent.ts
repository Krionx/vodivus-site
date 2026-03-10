export const SERVICES_HTML = String.raw`
<section id="vv-services" aria-label="Vodivus services">
  <style>
    #vv-services{
      --vv-max: 1200px;
      --vv-shell: min(var(--vv-max), calc(100vw - 32px));
      --vv-title: clamp(36px, 5.3vw, 66px);
      --vv-h2: clamp(28px, 3.6vw, 44px);
      --vv-h3: clamp(21px, 2.4vw, 30px);
      --vv-body: clamp(20px, 1.7vw, 24px);
      --vv-border: rgba(123,183,235,.44);
      --vv-glass: rgba(8, 14, 28, .62);
      color: rgba(242,248,255,.96);
      padding: clamp(28px, 4vw, 46px) 0 60px;
    }
    #vv-services *{ box-sizing: border-box; }
    #vv-services .vv-shell{ width: var(--vv-shell); margin: 0 auto; }
    #vv-services h1,
    #vv-services h2,
    #vv-services h3{ margin: 0; color: rgba(250,253,255,.98); }
    #vv-services h1{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-title); line-height: 1.06; text-shadow: 0 0 18px rgba(112,190,255,.2); }
    #vv-services h2{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-h2); line-height: 1.1; }
    #vv-services h3{ font-family: "Cinzel", serif; font-size: var(--vv-h3); line-height: 1.14; }
    #vv-services p,
    #vv-services li,
    #vv-services a,
    #vv-services span{ font-family: "Cormorant Garamond", serif; font-size: var(--vv-body); line-height: 1.45; }
    #vv-services p{ margin: 0; color: rgba(232,243,255,.9); }
    #vv-services ul{ margin: 10px 0 0 18px; padding: 0; color: rgba(221,235,252,.88); }

    #vv-services .vv-block{
      border-radius: 24px;
      border: 1px solid var(--vv-border);
      background:
        radial-gradient(680px 420px at -8% 96%, rgba(11,33,63,.96), transparent 64%),
        linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01)),
        var(--vv-glass);
      box-shadow: 0 24px 72px rgba(0,0,0,.52), inset 0 1px 0 rgba(255,255,255,.08);
      padding: clamp(22px, 3.2vw, 34px);
    }
    #vv-services .vv-block + .vv-block{ margin-top: 18px; }

    #vv-services .vv-hero-copy{ max-width: 22ch; }
    #vv-services .vv-hero-sub{ max-width: 68ch; margin-top: 14px; }

    #vv-services .vv-cta-row{ display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
    #vv-services .vv-cta{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 46px;
      padding: 10px 16px;
      border-radius: 14px;
      text-decoration: none;
      transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    #vv-services .vv-cta:hover{ transform: translateY(-2px); }
    #vv-services .vv-cta-primary{
      border: 1px solid rgba(123,198,255,.55);
      background: linear-gradient(rgba(0,0,0,0) 8%, rgba(92,154,230,.68) 88%);
      color: rgba(255,255,255,.96);
      box-shadow: 0 12px 30px rgba(65,126,209,.34);
    }
    #vv-services .vv-cta-ghost{
      border: 1px solid rgba(230,242,255,.2);
      background: rgba(255,255,255,.04);
      color: rgba(233,244,255,.92);
    }

    #vv-services .vv-lane-grid{ display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 16px; }
    #vv-services .vv-lane{ padding: 18px; border-radius: 20px; border: 1px solid rgba(120,170,220,.4); background: rgba(255,255,255,.04); }
    #vv-services .vv-lane p{ margin-top: 10px; }

    #vv-services .vv-process{ margin-top: 8px; }
    #vv-services .vv-steps{ display: grid; gap: 12px; margin-top: 14px; }
    #vv-services .vv-step{ border: 1px solid rgba(120,170,220,.36); border-radius: 16px; padding: 14px; background: rgba(255,255,255,.03); }
    #vv-services .vv-step b{ display: block; font-family: "Cinzel", serif; font-size: clamp(17px, 2vw, 20px); margin-bottom: 4px; }

    #vv-services .vv-final-cta p{ max-width: 56ch; margin-top: 10px; }

    @media (max-width: 980px){
      #vv-services .vv-lane-grid{ grid-template-columns: 1fr; }
    }
  </style>

  <div class="vv-shell">
    <section class="vv-block" aria-label="Services hero">
      <h1 class="vv-hero-copy">Services Built for Live Operational Reality.</h1>
      <p class="vv-hero-sub">Vodivus helps owners and operators stabilize departments, install execution systems, and hand teams a clear run model that performs under pressure.</p>
      <div class="vv-cta-row">
        <a href="/contact" class="vv-cta vv-cta-primary">Start Intake -></a>
        <a href="#vv-service-lanes" class="vv-cta vv-cta-ghost">View Service Lanes -></a>
      </div>
    </section>

    <section id="vv-service-lanes" class="vv-block" aria-label="Three services">
      <h2>Three Service Lanes</h2>
      <div class="vv-lane-grid">
        <article class="vv-lane">
          <h3>Market and Positioning Architecture</h3>
          <p><em>The Signal</em></p>
          <p>Define offer clarity, market language, and strategic differentiation so growth is coherent, not reactive.</p>
          <ul>
            <li>Positioning architecture</li>
            <li>Offer definition and packaging</li>
            <li>Narrative and messaging system</li>
          </ul>
        </article>

        <article class="vv-lane">
          <h3>Operational and Execution Architecture</h3>
          <p><em>The System</em></p>
          <p>Build execution frameworks that remove chaos and improve consistency across leadership, staff, and delivery.</p>
          <ul>
            <li>Workflow and handoff design</li>
            <li>SOPs and escalation logic</li>
            <li>Readiness and deployment planning</li>
          </ul>
        </article>

        <article class="vv-lane">
          <h3>Identity and Experience Architecture</h3>
          <p><em>The Signature</em></p>
          <p>Align brand presence, communication behavior, and experience signals so identity matches operational quality.</p>
          <ul>
            <li>Identity consistency system</li>
            <li>Experience blueprinting</li>
            <li>Cross-touchpoint quality standards</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="vv-block vv-process" aria-label="Service process">
      <h2>How We Engage</h2>
      <div class="vv-steps">
        <article class="vv-step">
          <b>Step 01: Intake and fit</b>
          <span>We assess the pressure points, current constraints, and desired outcomes to scope the right lane.</span>
        </article>
        <article class="vv-step">
          <b>Step 02: Architecture and plan</b>
          <span>We design the model, define responsibilities, and sequence delivery in practical build phases.</span>
        </article>
        <article class="vv-step">
          <b>Step 03: Build and handoff</b>
          <span>You get implementable outputs, operating logic, and clarity your team can run without drift.</span>
        </article>
      </div>
    </section>

    <section class="vv-block vv-final-cta" aria-label="Services call to action">
      <h2>Ready to Build the Correct Lane?</h2>
      <p>Start with intake and get a precise recommendation on where to begin, what to prioritize, and what to ignore right now.</p>
      <div class="vv-cta-row">
        <a href="/contact" class="vv-cta vv-cta-primary">Submit Intake -></a>
        <a href="/about" class="vv-cta vv-cta-ghost">Meet the Studio -></a>
      </div>
    </section>
  </div>
</section>
`;

export const SERVICES_MODAL_SCRIPT = `(function(){})();`;
export const FOOTER_SCRIPT = `(function(){})();`;
