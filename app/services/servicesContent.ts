export const SERVICES_HTML = String.raw`
<section id="vv-services" aria-label="Vodivus services">
  <style>
    #vv-services{
      --vv-max: 1200px;
      --vv-shell: min(var(--vv-max), calc(100vw - 32px));
      --vv-title: clamp(36px, 5.2vw, 66px);
      --vv-h2: clamp(28px, 3.4vw, 44px);
      --vv-h3: clamp(21px, 2.2vw, 30px);
      --vv-body: clamp(18px, 1.3vw, 23px);
      --vv-border: rgba(123,183,235,.44);
      --vv-glass: rgba(8,14,28,.62);
      color: rgba(242,248,255,.96);
      padding: clamp(28px, 4vw, 46px) 0 60px;
    }
    #vv-services *{ box-sizing: border-box; }
    #vv-services .vv-shell{ width: var(--vv-shell); margin: 0 auto; }
    #vv-services h1,
    #vv-services h2,
    #vv-services h3{ margin: 0; color: rgba(250,253,255,.98); }
    #vv-services h1{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-title); line-height: 1.05; text-shadow: 0 0 18px rgba(112,190,255,.2); }
    #vv-services h2{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-h2); line-height: 1.1; }
    #vv-services h3{ font-family: "Cinzel", serif; font-size: var(--vv-h3); line-height: 1.14; }
    #vv-services p,
    #vv-services li,
    #vv-services a,
    #vv-services span,
    #vv-services b{ font-family: "Cormorant Garamond", serif; font-size: var(--vv-body); line-height: 1.42; }
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

    #vv-services .vv-kicker{ text-transform: uppercase; letter-spacing: .14em; font-size: clamp(14px, .95vw, 16px); color: rgba(193,224,251,.78); }
    #vv-services .vv-hero-copy{ max-width: 21ch; margin-top: 10px; }
    #vv-services .vv-hero-sub{ max-width: 67ch; margin-top: 14px; }

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

    #vv-services .vv-lane-grid,
    #vv-services .vv-cred-grid,
    #vv-services .vv-artifacts-grid{ display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 16px; }

    #vv-services .vv-lane,
    #vv-services .vv-cred,
    #vv-services .vv-artifact{ border-radius: 20px; border: 1px solid rgba(120,170,220,.4); background: rgba(255,255,255,.04); padding: 16px; }
    #vv-services .vv-lane p,
    #vv-services .vv-cred p,
    #vv-services .vv-artifact p{ margin-top: 8px; }

    #vv-services .vv-process{ margin-top: 8px; }
    #vv-services .vv-steps{ display: grid; gap: 12px; margin-top: 14px; }
    #vv-services .vv-step{ border: 1px solid rgba(120,170,220,.36); border-radius: 16px; padding: 14px; background: rgba(255,255,255,.03); }
    #vv-services .vv-step b{ display: block; font-family: "Cinzel", serif; font-size: clamp(17px, 2vw, 20px); margin-bottom: 4px; }

    #vv-services .vv-final-cta p{ max-width: 58ch; margin-top: 10px; }

    @media (max-width: 980px){
      #vv-services .vv-lane-grid,
      #vv-services .vv-cred-grid,
      #vv-services .vv-artifacts-grid{ grid-template-columns: 1fr; }
    }
  </style>

  <div class="vv-shell">
    <section class="vv-block" aria-label="Services hero">
      <p class="vv-kicker">Structural Credibility</p>
      <h1 class="vv-hero-copy">Services Designed to Hold Under Operational Load.</h1>
      <p class="vv-hero-sub">Vodivus does not deliver vague strategy decks. We design executable operating structures: role logic, decision pathways, escalation mechanics, and handoff systems teams can run without heroics.</p>
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
          <p>Clarifies strategic language, offer edges, and decision criteria so positioning becomes operational, not ornamental.</p>
          <ul>
            <li>Positioning map and narrative spine</li>
            <li>Offer architecture and scope thresholds</li>
            <li>Decision filters for channel and message choices</li>
          </ul>
        </article>

        <article class="vv-lane">
          <h3>Operational and Execution Architecture</h3>
          <p><em>The System</em></p>
          <p>Builds the mechanical core of delivery: workflow shape, role ownership, and response logic across high-pressure environments.</p>
          <ul>
            <li>Workflow design and operational cadence</li>
            <li>RACI-lite ownership and escalation tree</li>
            <li>SOP format, runbook structure, and handoff rules</li>
          </ul>
        </article>

        <article class="vv-lane">
          <h3>Identity and Experience Architecture</h3>
          <p><em>The Signature</em></p>
          <p>Aligns brand expression with operational behavior so identity is reinforced by how the system actually performs.</p>
          <ul>
            <li>Identity standards across touchpoints</li>
            <li>Experience blueprint and quality cues</li>
            <li>Comms behavior under stress conditions</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="vv-block" aria-label="Credibility mechanics">
      <h2>What Creates Structural Credibility</h2>
      <div class="vv-cred-grid">
        <article class="vv-cred">
          <h3>Role Clarity</h3>
          <p>Ambiguity is replaced with explicit ownership, authority boundaries, and escalation conditions.</p>
        </article>
        <article class="vv-cred">
          <h3>Decision Logic</h3>
          <p>Teams get threshold rules that reduce bottlenecks and prevent reactive drift during live execution.</p>
        </article>
        <article class="vv-cred">
          <h3>Handoff Integrity</h3>
          <p>Outputs are designed for continuity, so knowledge survives people, shifts, and growth phases.</p>
        </article>
      </div>
    </section>

    <section class="vv-block" aria-label="Delivery artifacts">
      <h2>Typical Delivery Artifacts</h2>
      <div class="vv-artifacts-grid">
        <article class="vv-artifact">
          <h3>Operating Blueprint</h3>
          <p>System map, scope boundaries, role model, and sequencing logic.</p>
        </article>
        <article class="vv-artifact">
          <h3>Execution Pack</h3>
          <p>SOP set, escalation pathways, checklist framework, and briefing format.</p>
        </article>
        <article class="vv-artifact">
          <h3>Leadership Notes</h3>
          <p>Risk watchpoints, decision triggers, and next-phase priorities.</p>
        </article>
      </div>
    </section>

    <section class="vv-block vv-process" aria-label="Service process">
      <h2>Engagement Model</h2>
      <div class="vv-steps">
        <article class="vv-step">
          <b>Step 01: Intake and pressure mapping</b>
          <span>We identify constraint patterns, recurring failure points, and practical scope for the first build cycle.</span>
        </article>
        <article class="vv-step">
          <b>Step 02: Architecture and validation</b>
          <span>We define the model, then pressure-test it against real staffing, timing, and operational conditions.</span>
        </article>
        <article class="vv-step">
          <b>Step 03: Deployment and handoff</b>
          <span>You receive implementation-ready assets and leadership guidance to run the system with stability.</span>
        </article>
      </div>
    </section>

    <section class="vv-block vv-final-cta" aria-label="Services call to action">
      <h2>Start With the Right Structural Move</h2>
      <p>Submit intake and we will recommend the correct lane, define immediate priorities, and outline a build path grounded in operational reality.</p>
      <div class="vv-cta-row">
        <a href="/contact" class="vv-cta vv-cta-primary">Submit Intake -></a>
        <a href="/about" class="vv-cta vv-cta-ghost">See Studio Philosophy -></a>
      </div>
    </section>
  </div>
</section>
`;

export const SERVICES_MODAL_SCRIPT = `(function(){})();`;
export const FOOTER_SCRIPT = `(function(){})();`;
