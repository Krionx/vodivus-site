export const SERVICES_HTML = String.raw`
<style>
body .vv-header { display: none !important; }
body .vv-footer { display: none !important; }
#vv-header, #vv-mobile, #vv-overlay { display: none !important; }
</style>

<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@400;500;600&display=swap" rel="stylesheet">

<header class="vv-header" id="vv-header" role="banner" aria-label="Vodivus header">
  <div class="vv-header-inner">
    <a href="/" class="vv-brand" aria-label="Vodivus Home">
      <img
        src="https://images.squarespace-cdn.com/content/691e9533ddf92169a657d827/fbc0dbf2-0595-4154-899d-24c0c8a48ac0/USE+Vodivus+Large+White.png?content-type=image%2Fpng"
        class="vv-logo"
        alt="Vodivus Venture Studios"
        loading="eager"
      />
    </a>

    <div class="vv-right">
      <nav class="vv-nav" aria-label="Primary">
        <a href="/services">Services</a>
        <a href="/about">About</a>
      </nav>

      <a href="/contact" class="vv-cta">
        Submit Intake Form →
      </a>

      <button class="vv-burger" id="vv-burger" type="button" aria-label="Open menu" aria-controls="vv-mobile" aria-expanded="false">
        <span class="vv-burger-lines" aria-hidden="true"></span>
      </button>
    </div>
  </div>

  <div class="vv-mobile-overlay" id="vv-overlay" aria-hidden="true"></div>
  <div class="vv-mobile" id="vv-mobile" role="navigation" aria-label="Mobile">
    <div class="vv-mobile-head">
      <span class="vv-mobile-title">Menu</span>
      <button class="vv-mobile-close" id="vv-close" type="button" aria-label="Close menu">×</button>
    </div>
    <a href="/services">Services</a>
    <a href="/about">About</a>
    <a href="/contact" class="is-primary">Submit Intake Form →</a>
  </div>
</header>

<div id="vv-services-phase1" class="vodivus-services-wrap">
  <section class="vodivus-services-header" aria-label="Vodivus services introduction">
    <div class="vv-hero-shard vv-global-hero-shard">
      <h1 class="vodivus-services-title">Event departments built to run cleanly under pressure.</h1>
      <p class="vodivus-services-subtext">
        Vodivus helps festival owners, directors, and department heads stabilize operations, document execution, and put stronger systems in place for ADA, Guest Services, Site Ops, Vendor Ops, Access, and Transport.
      </p>
      <p class="vv-hero-micro">Clear scope • Operational calm • Documented handoff • Reviewed within 24–72 hours</p>
    </div>
  </section>

  <section id="vv-start-here" class="vv-services-helper" aria-label="Choose the right service path">
    <div class="vv-helper-shard">
      <h2 class="vv-helper-title">Start here if…</h2>
      <div class="vv-fit-grid">
        <button class="vv-fit-card js-fit-open" type="button" data-fit="blueprint" aria-haspopup="dialog" aria-controls="vv-fit-modal-panel">
          <h3>your department feels unstable</h3>
          <p>Choose <strong>Department Blueprint Sprint</strong> if you need structure, staffing clarity, process, and a run-ready handoff fast.</p>
          <span class="vv-fit-link">Preview details →</span>
        </button>
        <button class="vv-fit-card js-fit-open" type="button" data-fit="retainer" aria-haspopup="dialog" aria-controls="vv-fit-modal-panel">
          <h3>you need support month to month</h3>
          <p>Choose <strong>On-Call Ops Director</strong> if the team needs experienced operational leadership in the background.</p>
          <span class="vv-fit-link">Preview details →</span>
        </button>
        <button class="vv-fit-card js-fit-open" type="button" data-fit="command" aria-haspopup="dialog" aria-controls="vv-fit-modal-panel">
          <h3>you need real execution ownership on-site</h3>
          <p>Choose <strong>Event-Day Command &amp; Control</strong> if you want department leadership in the field, not more improvised fire juggling.</p>
          <span class="vv-fit-link">Preview details →</span>
        </button>
      </div>
      <p class="vv-helper-note">Not sure which path fits? Review the previews above, then use the intake form when you're ready.</p>
    </div>
  </section>

  <section class="vv-offers-wrap" aria-label="Primary services">
    <article class="vv-offer-card" id="offer-blueprint">
      <div class="vv-offer-top">
        <p class="vv-offer-eyebrow">Primary Offer 01</p>
        <h2 class="vv-offer-title">Department Blueprint Sprint</h2>
        <p class="vv-offer-subhead">A complete, ready-to-run department plan so your team can execute with confidence and consistency.</p>
      </div>
      <div class="vv-offer-grid">
        <div class="vv-offer-block">
          <h3>Best for</h3>
          <ul>
            <li>Festival owners, directors, and department heads who need a department stabilized fast</li>
            <li>ADA, Guest Services, Site Ops, Vendor Ops, Access, and Transport teams</li>
            <li>Projects where weak structure is creating day-of risk</li>
          </ul>
        </div>
        <div class="vv-offer-block">
          <h3>At a glance</h3>
          <ul>
            <li>Policies, procedures, and role clarity</li>
            <li>Staffing structure and escalation flow</li>
            <li>Site flow notes and risk checklist</li>
            <li>Run-ready handoff package</li>
          </ul>
        </div>
      </div>
      <div class="vv-offer-kv">
        <div><span>Timeline</span><strong>5–7 business days</strong><small>Rush option available</small></div>
        <div><span>Starting investment</span><strong>$1,500–$3,500</strong><small>Based on scope and attendance</small></div>
      </div>
    </article>

    <article class="vv-offer-card" id="offer-retainer">
      <div class="vv-offer-top">
        <p class="vv-offer-eyebrow">Primary Offer 02</p>
        <h2 class="vv-offer-title">On-Call Ops Director <span class="vv-inline-note">(Monthly Retainer)</span></h2>
        <p class="vv-offer-subhead">Calm, experienced leadership in the background so your event doesn’t rely on heroics.</p>
      </div>
      <div class="vv-offer-grid">
        <div class="vv-offer-block">
          <h3>Best for</h3>
          <ul>
            <li>Teams scaling up, rebuilding systems, or prepping for peak season</li>
            <li>Operators who need continuity between planning and execution</li>
            <li>Departments that need leadership support without internal chaos multiplying</li>
          </ul>
        </div>
        <div class="vv-offer-block">
          <h3>At a glance</h3>
          <ul>
            <li>Weekly ops call and action plan</li>
            <li>Vendor and crew coordination support</li>
            <li>SOPs, checklists, templates, and readiness review</li>
            <li>Rapid-response advisory for time-sensitive decisions</li>
          </ul>
        </div>
      </div>
      <div class="vv-offer-kv">
        <div><span>Cadence</span><strong>Month-to-month</strong><small>2–3 months recommended for real transformation</small></div>
        <div><span>Starting investment</span><strong>$1,500–$4,000 / month</strong><small>Based on scope and support level</small></div>
      </div>
    </article>

    <article class="vv-offer-card" id="offer-command">
      <div class="vv-offer-top">
        <p class="vv-offer-eyebrow">Primary Offer 03</p>
        <h2 class="vv-offer-title">Event-Day Command &amp; Control</h2>
        <p class="vv-offer-subhead">We take ownership of the department in the field — staffed, briefed, and managed.</p>
      </div>
      <div class="vv-offer-grid">
        <div class="vv-offer-block">
          <h3>Best for</h3>
          <ul>
            <li>Directors who want department leadership on-site without day-of improvisation</li>
            <li>Teams needing custom-scoped execution support</li>
            <li>Events where visible professionalism and low-friction oversight matter</li>
          </ul>
        </div>
        <div class="vv-offer-block">
          <h3>At a glance</h3>
          <ul>
            <li>On-site department leadership</li>
            <li>Crew onboarding, briefing, and standards enforcement</li>
            <li>Live issue triage and escalation handling</li>
            <li>End-of-day reporting and post-event debrief</li>
          </ul>
        </div>
      </div>
      <div class="vv-offer-kv">
        <div><span>Scope</span><strong>Custom scoped</strong><small>Primarily department leadership, with support based on event needs</small></div>
        <div><span>Pricing model</span><strong>Quoted after intake</strong><small>Day-rate + staffing + scope</small></div>
      </div>
    </article>
  </section>

  <section class="vodivus-how vv-proof-shell" aria-label="Trust and proof">
    <div class="vodivus-how-head">
      <h2 class="vodivus-how-title" style="text-align:center;">Trust is earned in the field</h2>
      <p class="vodivus-how-sub">A preview of the environments, departments, and outcomes Vodivus is built to support. Replace with approved public proof as confirmations come in.</p>
    </div>
    <div class="vv-proof-grid">
      <button class="vv-proof-card js-proof-open" type="button" data-proof="environments" aria-haspopup="dialog" aria-controls="vv-fit-modal-panel"><h3>Event environments</h3><p>Music festivals, camping festivals, multi-day builds, guest-facing operations, and high-pressure live execution.</p><span class="vv-fit-link">Preview details →</span></button>
      <button class="vv-proof-card js-proof-open" type="button" data-proof="departments" aria-haspopup="dialog" aria-controls="vv-fit-modal-panel"><h3>Departments supported</h3><p>ADA, Guest Services, Site Ops, Vendor Ops, Access, and Transport systems designed for cleaner execution.</p><span class="vv-fit-link">Preview details →</span></button>
      <button class="vv-proof-card js-proof-open" type="button" data-proof="quotes" aria-haspopup="dialog" aria-controls="vv-fit-modal-panel"><h3>Operator quotes</h3><p>Short placeholder endorsements focused on calm leadership, structure, professionalism, and reducing day-of chaos.</p><span class="vv-fit-link">Preview details →</span></button>
      <button class="vv-proof-card js-proof-open" type="button" data-proof="case" aria-haspopup="dialog" aria-controls="vv-fit-modal-panel"><h3>Case snapshot</h3><p>A sample situation → intervention → outcome story showing how department clarity improves execution under pressure.</p><span class="vv-fit-link">Preview details →</span></button>
    </div>
  </section>

  <section id="vv-how-we-work" class="vodivus-how" aria-label="How we work">
    <div class="vodivus-how-head">
      <h2 class="vodivus-how-title" style="text-align:center;">How we work</h2>
      <p class="vodivus-how-sub">Intake first. Diagnosis before calls. Defined scope. Documented handoff. We solve the highest-risk part first instead of feeding the chaos gremlin.</p>
    </div>
    <ol class="vodivus-how-steps">
      <li><strong>Submit intake</strong> — you send structured context through the intake form.</li>
      <li><strong>Review + recommendation</strong> — we assess the problem and recommend the right path.</li>
      <li><strong>Scope definition</strong> — outcomes, deliverables, responsibilities, and boundaries get defined clearly.</li>
      <li><strong>Build or deploy</strong> — we create the department plan, support the team, or lead execution in the field.</li>
      <li><strong>Handoff + next steps</strong> — you receive reusable documents, notes, and the next logical move.</li>
    </ol>
    <ul class="vodivus-how-rules">
      <li>Clarity over heroics.</li>
      <li>Every engagement produces something reusable: SOPs, plans, templates, checklists, or decision tools.</li>
      <li>We build for execution, not presentation theater.</li>
    </ul>
  </section>

  <section class="vodivus-how vv-advisory-shell" aria-label="Secondary advisory services">
    <div class="vodivus-how-head">
      <h2 class="vodivus-how-title" style="text-align:center;">Need strategy before a larger build?</h2>
      <p class="vodivus-how-sub">Consulting &amp; Blueprint Sessions are a lighter-weight path for founders and teams who need clarity, structure, and a plan that actually ships.</p>
    </div>
    <div class="vv-advisory-grid">
      <div class="vv-advisory-card"><h3>Clarity Call</h3><p>45 minutes focused on problem framing and next steps.</p><p class="vv-advisory-price">$150</p></div>
      <div class="vv-advisory-card"><h3>Blueprint Sprint</h3><p>90 minutes plus a written plan covering phases, priorities, risks, and tools.</p><p class="vv-advisory-price">$500</p></div>
      <div class="vv-advisory-card"><h3>Build Partner</h3><p>Ongoing advisory, systems, and accountability for teams that need execution support.</p><p class="vv-advisory-price">$1,500+ / month</p></div>
    </div>
  </section>

  <section id="vv-services-final" class="vodivus-how vv-final-cta" role="region" aria-label="Services final call to action">
    <h2 class="vodivus-how-title" style="margin-bottom: 8px; text-align:center;">Get the right path before time and budget drift sideways.</h2>
    <p class="vodivus-services-subtext" style="margin: 0 auto 12px; max-width: 68ch;">Start with the intake. We’ll review the situation, recommend the cleanest scope, and point you toward the fastest useful next move.</p>
    <div class="vodivus-services-hero-cta" style="margin-top: 10px;"><a class="vodivus-hero-btn is-primary" href="/contact">Submit Intake Form →</a></div>
    <p class="vv-hero-micro" style="margin-top: 10px;">Reviewed within 24–72 hours</p>
  </section>

  <div class="vv-fit-overlay" data-fit-close="true" aria-hidden="true"></div>
  <aside class="vv-fit-modal" id="vv-fit-modal-panel" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="vvFitModalTitle" aria-describedby="vvFitModalSub">
    <div class="vv-fit-modal-inner">
      <div class="vv-fit-modal-head">
        <div class="vv-fit-modal-titles">
          <h3 id="vvFitModalTitle">Service</h3>
          <p id="vvFitModalSub">Preview</p>
        </div>
        <button class="vv-fit-close" type="button" data-fit-close="true" aria-label="Close">✕</button>
      </div>
      <div class="vv-fit-modal-body" id="vvFitModalBody"></div>
    </div>
  </aside>

  <div hidden>
    <template id="vv-fit-blueprint"><div class="vv-fit-content"><div class="vv-fit-content-block"><h4>Department Blueprint Sprint</h4><p>A complete, ready-to-run department plan so your team can execute with confidence and consistency.</p></div><div class="vv-fit-content-block"><h4>What you get</h4><ul><li>Policies + procedures (guest-facing + staff-facing)</li><li>Staffing plan + role definitions + shift structure</li><li>Comms + escalation plan</li><li>Site flow notes and bottleneck review</li><li>Risk checklist + day-of decision tree</li><li>Handoff package your team can run without you</li></ul></div><div class="vv-fit-content-kv"><div><span>Timeline</span><strong>5–7 business days</strong></div><div><span>Starting investment</span><strong>$1,500–$3,500</strong></div></div></div></template>
    <template id="vv-fit-retainer"><div class="vv-fit-content"><div class="vv-fit-content-block"><h4>On-Call Ops Director</h4><p>Calm, experienced leadership in the background so your event doesn’t rely on heroics.</p></div><div class="vv-fit-content-block"><h4>Includes</h4><ul><li>Weekly ops call + action plan</li><li>Vendor and crew coordination support</li><li>Documentation buildout: SOPs, checklists, templates</li><li>Rapid-response advisory</li><li>Pre-event readiness review + post-event debrief</li></ul></div><div class="vv-fit-content-kv"><div><span>Cadence</span><strong>Month-to-month</strong></div><div><span>Starting investment</span><strong>$1,500–$4,000 / month</strong></div></div></div></template>
    <template id="vv-fit-command"><div class="vv-fit-content"><div class="vv-fit-content-block"><h4>Event-Day Command &amp; Control</h4><p>We take ownership of the department in the field — staffed, briefed, and managed.</p></div><div class="vv-fit-content-block"><h4>Includes</h4><ul><li>On-site department leadership</li><li>Crew onboarding + briefing + standards enforcement</li><li>Live issue triage + escalation handling</li><li>End-of-day reporting + wrap notes</li><li>Post-event debrief + improvement list</li></ul></div><div class="vv-fit-content-kv"><div><span>Scope</span><strong>Custom scoped</strong></div><div><span>Pricing</span><strong>Quoted after intake</strong></div></div></div></template>
    <template id="vv-proof-environments"><div class="vv-fit-content"><div class="vv-fit-content-block"><h4>Event environments</h4><p>Placeholder proof content for launch. Replace with approved public examples once confirmations are in.</p></div><div class="vv-fit-content-block"><h4>Example environments</h4><ul><li>Multi-day music festivals with layered guest movement and vendor coordination</li><li>Camping festivals where transport, ADA response, and staff communication need to stay synchronized</li><li>Live event environments where public-facing departments carry operational pressure in real time</li><li>Build, show, and strike conditions where leadership continuity matters more than improvisation</li></ul></div></div></template>
    <template id="vv-proof-departments"><div class="vv-fit-content"><div class="vv-fit-content-block"><h4>Departments supported</h4><p>These placeholders reflect the kinds of departments the services page is built to support publicly.</p></div><div class="vv-fit-content-block"><h4>Examples</h4><ul><li>ADA operations and escalation coverage</li><li>Guest Services staffing, SOPs, and issue routing</li><li>Site Ops communication flow and field coordination</li><li>Vendor Ops check-in, standards enforcement, and handoff process</li><li>Access and credential flow planning</li><li>Transport logistics and dispatch support structures</li></ul></div></div></template>
    <template id="vv-proof-quotes"><div class="vv-fit-content"><div class="vv-fit-content-block"><h4>Operator quotes</h4><p>Use short, concrete praise. No vague glitter language. Keep it operational.</p></div><div class="vv-fit-content-block"><h4>Sample quotes</h4><ul><li>“Vodivus brought calm and structure to a department that was drifting.”</li><li>“Communication improved fast, staff had clearer direction, and issues stopped bouncing in circles.”</li><li>“The difference was professionalism under pressure. We had a cleaner operation because expectations were finally defined.”</li></ul></div></div></template>
    <template id="vv-proof-case"><div class="vv-fit-content"><div class="vv-fit-content-block"><h4>Case snapshot</h4><p>A tight placeholder story format you can later replace with a real approved example.</p></div><div class="vv-fit-content-block"><h4>Situation</h4><p>A multi-day festival department was carrying inconsistent staffing direction, unclear escalation flow, and scattered guest-facing response standards.</p></div><div class="vv-fit-content-block"><h4>What changed</h4><p>Department structure was clarified, briefing flow was tightened, responsibilities were documented, and a cleaner chain of response was established for field issues.</p></div><div class="vv-fit-content-block"><h4>Outcome</h4><p>The team operated with stronger consistency, less confusion, faster issue routing, and a more professional guest-facing experience under pressure.</p></div></div></template>
  </div>
</div>

<style>
html, body { overflow-x: hidden; }
body{ background-color:#030814; }
#vv-header, #vv-header * { box-sizing: border-box; }
#vv-header{ position: relative; top: 18px !important; left: 0 !important; right: 0 !important; margin: 0 auto !important; width: min(1200px, calc(100% - 24px)); transform: none !important; z-index: 999999 !important; }
.vv-header-spacer{ height: 118px; }
.vv-header-inner{ position: relative; z-index: 3; display:flex; justify-content:space-between; align-items:center; padding:14px 20px; min-height:74px; border-radius:22px; background: radial-gradient(circle at 20% 0%, rgba(100, 155, 255, .08), transparent 65%), radial-gradient(circle at 80% 0%, rgba(217, 182, 100, .08), transparent 65%), linear-gradient(rgba(100, 155, 255, .55) 5%, rgba(0, 0, 0, 1) 45%); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid rgba(69, 94, 130, 1); box-shadow: 0 18px 60px rgba(0, 0, 0, .55), inset 0 1px 0 rgba(255, 255, 255, .06); }
.vv-logo{ height:56px; width:auto; display:block; filter: drop-shadow(0 0 10px rgba(100, 155, 255, .15)) drop-shadow(0 0 18px rgba(198, 169, 107, .10)); }
.vv-right{ display:flex; align-items:center; gap:18px; }
.vv-nav{ display:flex; gap:20px; }
.vv-nav a{ font-family:"Cinzel", serif; font-size:24px; letter-spacing:.02em; color:rgba(255, 255, 255, .72); text-decoration:none; padding:10px 14px; border-radius:12px; }
.vv-nav a:hover{ color: rgba(255, 255, 255, .94); background: rgba(255, 255, 255, .06); transform: translateY(-1px); }
.vv-cta{ font-family:"Cormorant Garamond", serif; font-size:20px; font-weight:600; padding:12px 18px; border-radius:14px; border:1px solid rgba(100, 155, 255, .28); color:rgba(255, 255, 255, .94); text-decoration:none; background: radial-gradient(circle at 30% 0%, rgba(100, 155, 255, .16), transparent 70%), linear-gradient(rgba(255, 255, 255, .10), rgba(255, 255, 255, .02)); }
.vv-burger{ display:none; width:44px; height:44px; align-items:center; justify-content:center; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.10); border-radius:12px; cursor:pointer; }
.vv-burger-lines{ width:22px; height:2px; background:rgba(255,255,255,.94); display:block; position:relative; border-radius:999px; }
.vv-burger-lines::before,.vv-burger-lines::after{ content:""; position:absolute; width:22px; height:2px; background:rgba(255,255,255,.94); left:0; border-radius:999px; }
.vv-burger-lines::before{ top:-7px; } .vv-burger-lines::after{ top:7px; }
#vv-header.open .vv-burger-lines{ background:transparent; }
#vv-header.open .vv-burger-lines::before{ top:0; transform:rotate(45deg); }
#vv-header.open .vv-burger-lines::after{ top:0; transform:rotate(-45deg); }
.vv-mobile-overlay{ position:fixed; inset:0; z-index:999998; background:rgba(0,0,0,.55); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); opacity:0; pointer-events:none; transition:opacity .25s cubic-bezier(.2,.8,.2,1); }
.vv-mobile{ position:fixed; z-index:999999; top:calc(10px + env(safe-area-inset-top)); right:calc(10px + env(safe-area-inset-right)); width:min(360px, calc(100vw - 20px)); max-height:calc(100vh - 20px - env(safe-area-inset-top) - env(safe-area-inset-bottom)); overflow:auto; display:flex; flex-direction:column; gap:10px; padding:14px; border-radius:18px; background: radial-gradient(circle at 20% 0%, rgba(100, 155, 255, .08), transparent 65%), radial-gradient(circle at 80% 0%, rgba(217, 182, 100, .08), transparent 65%), linear-gradient(rgba(100, 155, 255, .55) 5%, rgba(0, 0, 0, 1) 45%); border:1px solid rgba(255,255,255,.10); box-shadow:0 24px 80px rgba(0,0,0,.65); transform:translateY(-8px) scale(.98); opacity:0; pointer-events:none; transition:transform .25s cubic-bezier(.2,.8,.2,1), opacity .25s cubic-bezier(.2,.8,.2,1); }
.vv-mobile-head{ display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom:6px; border-bottom:1px solid rgba(255,255,255,.08); margin-bottom:4px; }
.vv-mobile-title{ font-family:"Cinzel", serif; font-size:18px; letter-spacing:.06em; color:rgba(255,255,255,.85); }
.vv-mobile-close{ width:44px; height:44px; border-radius:12px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.04); color:rgba(255,255,255,.92); font-size:26px; line-height:1; cursor:pointer; }
.vv-mobile a{ font-family:"Cormorant Garamond", serif; font-size:18px; font-weight:600; color:rgba(255,255,255,.92); text-decoration:none; padding:14px 12px; border-radius:14px; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); }
.vv-mobile a.is-primary{ border-color:rgba(100, 155, 255, .28); background: radial-gradient(circle at 30% 0%, rgba(100, 155, 255, .14), transparent 70%), rgba(255, 255, 255, .03); }
#vv-header.open .vv-mobile-overlay{ opacity:1; pointer-events:auto; }
#vv-header.open .vv-mobile{ opacity:1; pointer-events:auto; transform:translateY(0) scale(1); }

#vv-services-phase1.vodivus-services-wrap{ --vv-font-title:"Cinzel Decorative", serif; --vv-font-subtitle:"Cinzel Decorative", serif; --vv-font-body:"Cormorant Garamond", serif; --vv-font-ui:"Cinzel", serif; --vv-title:72px; --vv-subtitle:34px; --vv-body:22px; --vv-max:1200px; --vv-gutter:18px; --vv-gutter-mobile:10px; --vv-section-gap:24px; --vv-card-gap:16px; --vv-glow: 0 0 2px rgba(100, 155, 255, 1), 0 0 12px rgba(100, 155, 255, 1), 0 0 12px rgba(100, 155, 255, 1); width:100%; max-width:var(--vv-max); margin:0 auto; padding-left:var(--vv-gutter); padding-right:var(--vv-gutter); padding-bottom:34px; overflow-x:clip; position:relative; isolation:isolate; }
#vv-services-phase1.vodivus-services-wrap::before,
#vv-services-phase1.vodivus-services-wrap::after{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0; }
#vv-services-phase1.vodivus-services-wrap::before{ background-image:radial-gradient(2px 2px at 12% 18%, rgba(214,236,255,.72), transparent 65%),radial-gradient(1.5px 1.5px at 28% 72%, rgba(214,236,255,.64), transparent 65%),radial-gradient(2px 2px at 44% 35%, rgba(214,236,255,.68), transparent 65%),radial-gradient(1.5px 1.5px at 62% 20%, rgba(214,236,255,.60), transparent 65%),radial-gradient(2px 2px at 78% 62%, rgba(214,236,255,.70), transparent 65%),radial-gradient(1.5px 1.5px at 90% 30%, rgba(214,236,255,.58), transparent 65%); background-size:100% 100%; opacity:.58; animation:vv-services-stars-drift 36s linear infinite; }
#vv-services-phase1.vodivus-services-wrap::after{ background-image:radial-gradient(1px 1px at 18% 28%, rgba(140,205,255,.72), transparent 70%),radial-gradient(1px 1px at 36% 64%, rgba(140,205,255,.66), transparent 70%),radial-gradient(1px 1px at 52% 46%, rgba(140,205,255,.62), transparent 70%),radial-gradient(1px 1px at 70% 24%, rgba(140,205,255,.68), transparent 70%),radial-gradient(1px 1px at 86% 76%, rgba(140,205,255,.64), transparent 70%); background-size:100% 100%; opacity:.40; animation:vv-services-stars-twinkle 4.8s ease-in-out infinite alternate; }
#vv-services-phase1.vodivus-services-wrap > *{ position:relative; z-index:1; }
@keyframes vv-services-stars-drift{ 0%{ transform:translate3d(0,0,0); } 100%{ transform:translate3d(-18px,-28px,0); } }
@keyframes vv-services-stars-twinkle{ 0%{ opacity:.24; } 100%{ opacity:.52; } }
#vv-services-phase1, #vv-services-phase1 *{ box-sizing:border-box; max-width:100%; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
#vv-services-phase1 p, #vv-services-phase1 li{ overflow-wrap:anywhere; hyphens:auto; }
#vv-services-phase1 strong{ color:rgba(255, 255, 255, .92); font-weight:600; }
#vv-services-phase1 .vv-hero-shard, #vv-services-phase1 .vv-helper-shard, #vv-services-phase1 .vv-offer-card, #vv-services-phase1 .vodivus-how, #vv-services-phase1 .vv-fit-modal{ position:relative; border-radius:22px; border:1px solid rgba(69,94,130,1); background: radial-gradient(min(40vw,420px) min(30vw,300px) at -10% 90%, rgba(13,36,64,1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); box-shadow:0 28px 80px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.10); overflow:hidden; }
#vv-services-phase1 .vv-hero-shard{ background: radial-gradient(min(40vw,420px) min(30vw,300px) at -10% 90%, rgba(13,36,64,1), transparent 60%), radial-gradient(min(34vw,320px) min(34vw,320px) at 100% 0%, rgba(235,193,118,.72), transparent 62%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%); }
#vv-services-phase1 .vv-hero-shard, #vv-services-phase1 .vv-helper-shard{ padding:28px 32px; }
#vv-services-phase1 .vv-offer-card, #vv-services-phase1 .vodivus-how{ padding:24px; }
#vv-services-phase1 .vodivus-services-title, #vv-services-phase1 .vodivus-how-title{ font-family:var(--vv-font-title)!important; font-size:var(--vv-title); font-weight:700; line-height:1.04; letter-spacing:.02em; margin:0 0 12px; color:rgba(255,255,255,.92); text-shadow:var(--vv-glow); }
#vv-services-phase1 .vodivus-services-subtext, #vv-services-phase1 .vodivus-how-sub, #vv-services-phase1 .vv-hero-micro, #vv-services-phase1 .vv-helper-note, #vv-services-phase1 .vv-fit-card p, #vv-services-phase1 .vv-offer-subhead, #vv-services-phase1 .vv-offer-block li, #vv-services-phase1 .vodivus-how-steps, #vv-services-phase1 .vodivus-how-rules, #vv-services-phase1 .vv-proof-card p, #vv-services-phase1 .vv-advisory-card p, #vv-services-phase1 .vv-fit-content p, #vv-services-phase1 .vv-fit-content li{ font-family:var(--vv-font-body)!important; font-size:var(--vv-body); line-height:1.42; color:rgba(255,255,255,.78); }
#vv-services-phase1 .vv-fit-card h3, #vv-services-phase1 .vv-offer-block h3, #vv-services-phase1 .vv-proof-card h3, #vv-services-phase1 .vv-advisory-card h3, #vv-services-phase1 .vv-fit-content h4{ margin:0 0 8px; font-family:var(--vv-font-ui)!important; font-size:calc(var(--vv-body) * 0.90); font-weight:600; letter-spacing:.03em; text-transform:uppercase; color:rgba(255,255,255,.92); }
#vv-services-phase1 .vodivus-services-header{ text-align:center; margin:0 auto var(--vv-section-gap); }
#vv-services-phase1 .vodivus-services-subtext{ max-width:44ch; margin:0 auto; text-align:center; }
#vv-services-phase1 .vodivus-services-hero-cta{ margin-top:14px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
#vv-services-phase1 .vodivus-hero-btn{ display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:11px 16px; border-radius:14px; text-decoration:none; font-family:var(--vv-font-body)!important; font-size:calc(var(--vv-body)*0.90); font-weight:600; background:rgba(0,0,0,0.22); border:1px solid rgba(255,255,255,0.14); color:rgba(255,255,255,0.90); min-height:44px; text-align:center; }
#vv-services-phase1 .vodivus-hero-btn.is-primary{ background:linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(100, 155, 255, .6) 80%); border-color:rgba(100, 155, 255, 0.45); }
#vv-services-phase1 .vv-hero-micro{ margin:12px auto 0; max-width:70ch; text-align:center; opacity:.92; }
#vv-services-phase1 .vv-services-helper{ margin:0 auto; }
#vv-services-phase1 .vv-helper-title{ font-family:var(--vv-font-subtitle)!important; font-size:var(--vv-subtitle); font-weight:400; margin:0 0 14px; color:rgba(255,255,255,.92); }
#vv-services-phase1 .vv-fit-grid{ display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:var(--vv-card-gap); }
#vv-services-phase1 .vv-fit-card{ appearance:none; -webkit-appearance:none; width:100%; min-height:100%; text-align:left; padding:18px; border-radius:18px; border:1px solid rgba(255,255,255,.10); background:rgba(0,0,0,.18); box-shadow:0 14px 42px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.06); cursor:pointer; }
#vv-services-phase1 .vv-fit-link{ display:inline-block; margin-top:10px; font-family:var(--vv-font-body)!important; font-size:calc(var(--vv-body)*0.78); color:rgba(255,255,255,0.88); }
#vv-services-phase1 .vv-helper-note{ margin:14px 0 0; }
#vv-services-phase1 .vv-offers-wrap{ margin-top:var(--vv-section-gap); display:grid; gap:var(--vv-section-gap); }
#vv-services-phase1 .vv-offer-top{ margin-bottom:18px; position:relative; z-index:2; }
#vv-services-phase1 .vv-offer-eyebrow{ margin:0 0 6px; font-family:var(--vv-font-ui)!important; font-size:calc(var(--vv-body) * 0.68); letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.64); }
#vv-services-phase1 .vv-offer-title{ margin:0 0 8px; font-family:var(--vv-font-subtitle)!important; font-size:var(--vv-subtitle); line-height:1.1; color:rgba(255,255,255,.94); }
#vv-services-phase1 .vv-inline-note{ font-size:calc(var(--vv-body)*0.76); color:rgba(255,255,255,.74); white-space:nowrap; }
#vv-services-phase1 .vv-offer-grid{ display:grid; grid-template-columns:1fr 1fr; gap:var(--vv-card-gap); position:relative; z-index:2; }
#vv-services-phase1 .vv-offer-block, #vv-services-phase1 .vv-proof-card, #vv-services-phase1 .vv-advisory-card, #vv-services-phase1 .vv-fit-content-block{ padding:16px; border-radius:18px; border:1px solid rgba(255,255,255,.10); background:rgba(0,0,0,.20); min-height:100%; }
#vv-services-phase1 .vv-offer-block ul, #vv-services-phase1 .vv-fit-content ul{ margin:0; padding-left:22px; }
#vv-services-phase1 .vv-offer-block li, #vv-services-phase1 .vv-fit-content li{ margin-bottom:10px; }
#vv-services-phase1 .vv-offer-kv, #vv-services-phase1 .vv-fit-content-kv{ display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:16px; position:relative; z-index:2; }
#vv-services-phase1 .vv-offer-kv > div, #vv-services-phase1 .vv-fit-content-kv > div{ padding:14px 16px; border-radius:16px; border:1px solid rgba(255,255,255,.10); background:rgba(0,0,0,.18); }
#vv-services-phase1 .vv-offer-kv span, #vv-services-phase1 .vv-fit-content-kv span{ display:block; margin-bottom:6px; font-family:var(--vv-font-ui)!important; font-size:calc(var(--vv-body)*0.68); text-transform:uppercase; letter-spacing:.08em; color:rgba(255,255,255,.64); }
#vv-services-phase1 .vv-offer-kv strong, #vv-services-phase1 .vv-fit-content-kv strong{ display:block; font-family:var(--vv-font-body)!important; font-size:calc(var(--vv-body)*0.98); line-height:1.2; color:rgba(255,255,255,.94); }
#vv-services-phase1 .vv-offer-kv small{ display:block; margin-top:6px; font-family:var(--vv-font-body)!important; font-size:calc(var(--vv-body)*0.76); line-height:1.3; color:rgba(255,255,255,.72); }
#vv-services-phase1 .vodivus-how{ margin-top:var(--vv-section-gap); }
#vv-services-phase1 .vodivus-how-head{ margin-bottom:14px; position:relative; z-index:2; }
#vv-services-phase1 .vodivus-how-sub{ max-width:54ch; margin-left:auto; margin-right:auto; text-align:center; }
#vv-services-phase1 .vodivus-how-steps, #vv-services-phase1 .vodivus-how-rules{ margin-top:14px; position:relative; z-index:2; }
#vv-services-phase1 .vodivus-how-steps{ padding-top:12px; padding-left:1.25em; border-top:1px solid rgba(255,255,255,.10); }
#vv-services-phase1 .vodivus-how-rules{ padding-top:12px; padding-left:1.2em; border-top:1px solid rgba(255,255,255,.10); }
#vv-services-phase1 .vv-proof-grid, #vv-services-phase1 .vv-advisory-grid{ position:relative; z-index:2; display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:var(--vv-card-gap); }
#vv-services-phase1 .vv-proof-grid{ grid-template-columns:repeat(4, minmax(0,1fr)); }
#vv-services-phase1 .vv-proof-card{ appearance:none; -webkit-appearance:none; width:100%; text-align:left; cursor:pointer; }
#vv-services-phase1 .vv-advisory-price{ margin:10px 0 0 !important; font-size:calc(var(--vv-body) * 0.90) !important; font-weight:600; color:rgba(255,255,255,.92) !important; }
#vv-services-phase1 .vv-final-cta{ text-align:center; }
#vv-services-phase1 .vv-fit-overlay{ position:fixed; inset:0; z-index:1000000; background: radial-gradient(900px 600px at 20% 15%, rgba(100, 155, 255, .12), transparent 60%), radial-gradient(900px 600px at 80% 70%, rgba(198, 169, 107, .10), transparent 60%), rgba(0, 0, 0, 0.62); opacity:0; pointer-events:none; transition:opacity .18s ease; }
#vv-services-phase1 .vv-fit-modal{ position:fixed; z-index:1000001; left:50%; top:50%; width:min(760px, calc(100vw - 24px)); max-height:min(84vh, 760px); transform:translate(-50%, -50%) scale(.94); opacity:0; pointer-events:none; transition:transform .22s ease, opacity .22s ease; }
#vv-services-phase1.is-fit-open .vv-fit-overlay{ opacity:1; pointer-events:auto; }
#vv-services-phase1.is-fit-open .vv-fit-modal{ opacity:1; pointer-events:auto; transform:translate(-50%, -50%) scale(1); }
#vv-services-phase1 .vv-fit-modal-inner{ position:relative; z-index:2; display:flex; flex-direction:column; min-height:0; }
#vv-services-phase1 .vv-fit-modal-head{ padding:16px 16px 12px; border-bottom:1px solid rgba(255,255,255,.10); display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }
#vv-services-phase1 #vvFitModalTitle{ margin:0 0 6px; font-family:var(--vv-font-subtitle)!important; font-size:var(--vv-subtitle); line-height:1.1; color:rgba(255,255,255,.94); }
#vv-services-phase1 #vvFitModalSub{ margin:0; font-family:var(--vv-font-body)!important; font-size:calc(var(--vv-body)*0.88); color:rgba(255,255,255,.74); }
#vv-services-phase1 .vv-fit-close{ border:1px solid rgba(255,255,255,.14); background:rgba(0,0,0,.20); color:rgba(255,255,255,.88); width:44px; height:44px; border-radius:14px; cursor:pointer; line-height:1; flex:0 0 auto; }
#vv-services-phase1 .vv-fit-modal-body{ padding:16px; overflow:auto; -webkit-overflow-scrolling:touch; }
#vv-services-phase1 .vv-fit-content{ display:grid; gap:12px; }

#vv-footer-contact{ --vv-font-title:"Cinzel Decorative", serif; --vv-font-subtitle:"Cinzel", serif; --vv-font-body:"Cormorant Garamond", serif; width:min(1126px, calc(100% - 40px)); margin:18px auto 36px; padding:18px; border-radius:24px; border:1px solid rgba(69,94,130,1); color:rgba(255,255,255,.92); overflow:hidden; isolation:isolate; position:relative; background: radial-gradient(700px 500px at -10% 90%, rgba(13,36,64,1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.30) 100%); box-shadow:0 18px 60px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06); }
#vv-footer-contact .vv-footer-inner{ position:relative; z-index:1; display:grid; gap:12px; }
#vv-footer-contact .vv-footer-top{ display:flex; align-items:flex-start; justify-content:space-between; gap:16px; padding:2px 2px 6px; }
#vv-footer-contact .vv-footer-brand h2{ margin:0 0 4px; font-family:var(--vv-font-title); font-size:clamp(26px, 4vw, 40px); line-height:1.02; letter-spacing:.02em; color:rgba(255,255,255,.96); font-weight:900; }
#vv-footer-contact .vv-footer-brand p{ margin:0; max-width:28ch; font-family:var(--vv-font-body); font-size:20px; line-height:1.15; color:rgba(255,255,255,.72); }
#vv-footer-contact .vv-footer-note{ max-width:360px; font-family:var(--vv-font-body); font-size:18px; line-height:1.15; color:rgba(255,255,255,.62); text-align:right; padding-top:6px; }
#vv-footer-contact .vv-footer-stack{ display:grid; gap:10px; }
#vv-footer-contact .vv-footer-col{ border-radius:18px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.05); box-shadow:0 10px 28px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.06); overflow:hidden; position:relative; }
#vv-footer-contact .vv-footer-toggle{ width:100%; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 14px; background:transparent; border:0; color:inherit; cursor:pointer; text-align:left; }
#vv-footer-contact .vv-footer-label{ display:grid; gap:2px; }
#vv-footer-contact .vv-footer-kicker{ font-family:var(--vv-font-body); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.56); }
#vv-footer-contact .vv-footer-title{ font-family:var(--vv-font-subtitle); font-size:24px; line-height:1; color:rgba(255,255,255,.92); }
#vv-footer-contact .vv-footer-icon{ width:32px; height:32px; border-radius:10px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.04); display:inline-flex; align-items:center; justify-content:center; color:rgba(255,255,255,.84); transition:transform .22s ease, background .22s ease, border-color .22s ease; flex:0 0 auto; font-size:15px; }
#vv-footer-contact .vv-footer-col.is-open .vv-footer-icon{ transform:rotate(180deg); border-color:rgba(100,155,255,.26); background:rgba(100,155,255,.08); }
#vv-footer-contact .vv-footer-links{ max-height:0; overflow:hidden; transition:max-height .28s ease, padding .22s ease; padding:0 14px; }
#vv-footer-contact .vv-footer-col.is-open .vv-footer-links{ max-height:220px; padding:0 14px 14px; }
#vv-footer-contact .vv-footer-linksInner{ display:grid; grid-template-columns:repeat(4, minmax(0, 1fr)); gap:8px; }
#vv-footer-contact .vv-footer-links a{ display:block; text-decoration:none; padding:9px 10px; border-radius:12px; border:1px solid rgba(255,255,255,.08); background:rgba(0,0,0,.16); color:rgba(255,255,255,.82); font-family:var(--vv-font-body); font-size:19px; line-height:1.1; text-align:center; }
#vv-footer-contact .vv-footer-signal{ display:grid; grid-template-columns:1fr auto; gap:12px; align-items:end; padding-top:2px; }
#vv-footer-contact .vv-footer-signalText h3{ margin:0 0 4px; font-family:var(--vv-font-subtitle); font-size:24px; font-weight:500; line-height:1; color:rgba(255,255,255,.90); }
#vv-footer-contact .vv-footer-signalText p{ margin:0; font-family:var(--vv-font-body); font-size:18px; line-height:1.1; color:rgba(255,255,255,.66); }
#vv-footer-contact .vv-footer-form{ display:flex; gap:10px; align-items:center; }
#vv-footer-contact .vv-footer-form input[type="email"]{ width:min(320px, 42vw); padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.12); background:rgba(0,0,0,.22); color:rgba(255,255,255,.92); box-shadow:inset 0 1px 0 rgba(255,255,255,.05); font-size:20px; outline:none; font-family:var(--vv-font-body); }
#vv-footer-contact .vv-footer-form button{ padding:11px 14px; border-radius:13px; border:1px solid rgba(100,155,255,.25); background:linear-gradient(rgba(0,0,0,1), rgba(100,155,255,1)); color:rgba(255,255,255,.94); font-weight:700; cursor:pointer; box-shadow:0 10px 24px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.10); white-space:nowrap; font-size:18px; font-family:var(--vv-font-title); }
#vv-footer-contact .vv-footer-status{ display:none; padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.10); background:rgba(0,0,0,.18); color:rgba(255,255,255,.80); font-size:18px; line-height:1.15; font-family:var(--vv-font-body); }
#vv-footer-contact .vv-footer-bottom{ display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; padding-top:10px; border-top:1px solid rgba(255,255,255,.08); }
#vv-footer-contact .vv-footer-copy{ font-family:var(--vv-font-body); font-size:18px; line-height:1.1; color:rgba(255,255,255,.64); }
#vv-footer-contact .vv-footer-legal{ display:flex; gap:8px; flex-wrap:wrap; }
#vv-footer-contact .vv-footer-legal a{ text-decoration:none; padding:8px 10px; border-radius:12px; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.03); color:rgba(255,255,255,.76); font-family:var(--vv-font-body); font-size:17px; line-height:1.1; }

@media (max-width:1100px){ #vv-services-phase1 .vv-proof-grid{ grid-template-columns:repeat(2, minmax(0,1fr)); } }
@media (max-width:900px){ #vv-header{ width:calc(100% - 24px) !important; top:calc(12px + env(safe-area-inset-top)) !important; } .vv-nav,.vv-cta{ display:none; } .vv-burger{ display:inline-flex; } .vv-logo{ height:44px; } .vv-header-inner{ padding:12px 14px; min-height:64px; } .vv-header-spacer{ height:102px; } #vv-services-phase1.vodivus-services-wrap{ --vv-title:52px; --vv-subtitle:28px; --vv-body:20px; --vv-gutter:12px; } #vv-services-phase1 .vv-hero-shard, #vv-services-phase1 .vv-helper-shard, #vv-services-phase1 .vv-offer-card, #vv-services-phase1 .vodivus-how{ padding:18px 16px; } #vv-services-phase1 .vv-fit-grid, #vv-services-phase1 .vv-advisory-grid, #vv-services-phase1 .vv-offer-grid, #vv-services-phase1 .vv-offer-kv, #vv-services-phase1 .vv-fit-content-kv{ grid-template-columns:1fr; } #vv-services-phase1 .vv-proof-grid{ grid-template-columns:1fr; } #vv-services-phase1 .vv-offer-title{ max-width:18ch; } #vv-services-phase1 .vv-inline-note{ display:inline-block; margin-top:4px; white-space:normal; } #vv-footer-contact{ width:min(100%, calc(100% - 24px)); padding:16px; border-radius:20px; margin:18px auto 24px; } #vv-footer-contact .vv-footer-top{ flex-direction:column; gap:8px; } #vv-footer-contact .vv-footer-note{ max-width:none; text-align:left; padding-top:0; } #vv-footer-contact .vv-footer-linksInner{ grid-template-columns:repeat(2, minmax(0,1fr)); } #vv-footer-contact .vv-footer-signal{ grid-template-columns:1fr; align-items:start; } #vv-footer-contact .vv-footer-form{ flex-direction:column; align-items:stretch; } #vv-footer-contact .vv-footer-form input[type="email"], #vv-footer-contact .vv-footer-form button{ width:100%; } #vv-footer-contact .vv-footer-bottom{ flex-direction:column; align-items:flex-start; } }
@media (max-width:520px){ #vv-services-phase1.vodivus-services-wrap{ --vv-title:36px; --vv-subtitle:22px; --vv-body:18px; --vv-gutter:var(--vv-gutter-mobile); padding-top:10px; } #vv-services-phase1 .vodivus-services-subtext, #vv-services-phase1 .vodivus-how-sub{ max-width:100%; } #vv-services-phase1 .vv-hero-shard, #vv-services-phase1 .vv-helper-shard, #vv-services-phase1 .vv-offer-card, #vv-services-phase1 .vodivus-how{ border-radius:20px; } #vv-services-phase1 .vv-fit-card, #vv-services-phase1 .vv-proof-card{ padding:16px; } #vv-services-phase1 .vv-fit-modal{ width:calc(100vw - 20px); max-height:86vh; } #vv-services-phase1 .vv-fit-modal-head, #vv-services-phase1 .vv-fit-modal-body{ padding:14px; } }
@media (max-width:420px){ #vv-header{ width:calc(100% - 20px) !important; } .vv-header-inner{ padding:10px 12px; } .vv-burger{ width:42px; height:42px; } .vv-mobile{ left:10px !important; right:10px !important; width:auto !important; } #vv-footer-contact{ width:calc(100% - 16px); padding:14px; } }
@media (prefers-reduced-motion: reduce){ .vv-nav a,.vv-cta,.vv-burger-lines,.vv-burger-lines::before,.vv-burger-lines::after,.vv-mobile-overlay,.vv-mobile{ transition:none !important; } #vv-services-phase1 .vodivus-hero-btn,#vv-services-phase1 .vv-fit-card,#vv-services-phase1 .vv-proof-card,#vv-services-phase1 .vv-fit-overlay,#vv-services-phase1 .vv-fit-modal{ transition:none !important; } #vv-services-phase1.vodivus-services-wrap::before,#vv-services-phase1.vodivus-services-wrap::after{ animation:none !important; } body::before,body::after{ animation:none !important; } #vv-footer-contact .vv-footer-links,#vv-footer-contact .vv-footer-icon,#vv-footer-contact .vv-footer-form button,#vv-footer-contact .vv-footer-links a,#vv-footer-contact .vv-footer-legal a{ transition:none !important; } }
</style>

<footer id="vv-footer-contact" aria-label="Vodivus footer">
  <div class="vv-footer-inner">
    <div class="vv-footer-top">
      <div class="vv-footer-brand"><h2>Vodivus</h2><p>Structure first. Signal over noise.</p></div>
      <div class="vv-footer-note">Ventures, systems, and creative builds without the complexity cosplay.</div>
    </div>

    <div class="vv-footer-stack">
      <div class="vv-footer-col is-open">
        <button class="vv-footer-toggle" type="button" aria-expanded="true"><span class="vv-footer-label"><span class="vv-footer-kicker">Navigate</span><span class="vv-footer-title">Explore</span></span><span class="vv-footer-icon">⌄</span></button>
        <div class="vv-footer-links"><div class="vv-footer-linksInner"><a href="/">Home</a><a href="/services">Services</a><a href="/about">About</a><a href="/contact">Contact</a></div></div>
      </div>
      <div class="vv-footer-col">
        <button class="vv-footer-toggle" type="button" aria-expanded="false"><span class="vv-footer-label"><span class="vv-footer-kicker">Pathways</span><span class="vv-footer-title">Build Paths</span></span><span class="vv-footer-icon">⌄</span></button>
        <div class="vv-footer-links"><div class="vv-footer-linksInner"><a href="/services">Business Systems</a><a href="/services">Creative Builds</a><a href="/services">Automation</a><a href="/contact#intake">Blueprint Intake</a></div></div>
      </div>
      <div class="vv-footer-col">
        <button class="vv-footer-toggle" type="button" aria-expanded="false"><span class="vv-footer-label"><span class="vv-footer-kicker">Access</span><span class="vv-footer-title">Resources</span></span><span class="vv-footer-icon">⌄</span></button>
        <div class="vv-footer-links"><div class="vv-footer-linksInner"><a href="/contact">Start Here</a><a href="/about">About Vodivus</a><a href="/services">Service Paths</a><a href="/contact#intake">Submit Intake</a></div></div>
      </div>
    </div>

    <div class="vv-footer-signal">
      <div class="vv-footer-signalText"><h3>Join the signal</h3><p>Updates, releases, and build notes.</p></div>
      <form class="vv-footer-form" id="vv-footer-form"><input type="email" name="email" placeholder="Enter your email" required /><button type="submit">Join</button></form>
    </div>

    <div class="vv-footer-status" id="vv-footer-status" aria-live="polite"></div>

    <div class="vv-footer-bottom">
      <div class="vv-footer-copy">© 2026 Vodivus Venture Studios</div>
      <div class="vv-footer-legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
    </div>
  </div>
</footer>
`;

export const HEADER_SCRIPT = `(function(){
  var header = document.getElementById("vv-header");
  var burger = document.getElementById("vv-burger");
  var overlay = document.getElementById("vv-overlay");
  var panel = document.getElementById("vv-mobile");
  var closeBtn = document.getElementById("vv-close");
  if(!header || !burger || !overlay || !panel) return;
  var lockedScrollY = 0;
  function lockScroll(){
    lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + lockedScrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }
  function unlockScroll(){
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, lockedScrollY);
  }
  function setExpanded(isOpen){ burger.setAttribute("aria-expanded", String(isOpen)); overlay.setAttribute("aria-hidden", String(!isOpen)); }
  function openMenu(){ if(header.classList.contains("open")) return; header.classList.add("open"); setExpanded(true); lockScroll(); }
  function closeMenu(){ if(!header.classList.contains("open")) return; header.classList.remove("open"); setExpanded(false); unlockScroll(); }
  burger.addEventListener("click", function(){ header.classList.contains("open") ? closeMenu() : openMenu(); });
  overlay.addEventListener("click", closeMenu);
  if(closeBtn){ closeBtn.addEventListener("click", closeMenu); }
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") closeMenu(); });
  panel.addEventListener("click", function(e){ var a = e.target && e.target.closest ? e.target.closest("a") : null; if(a) closeMenu(); });
})();`;

export const SERVICES_MODAL_SCRIPT = `(function(){
  const container = document.getElementById('vv-services-phase1');
  if(!container || container.dataset.init === '1') return;
  container.dataset.init = '1';
  const fitButtons = container.querySelectorAll('.js-fit-open');
  const proofButtons = container.querySelectorAll('.js-proof-open');
  const overlay = container.querySelector('.vv-fit-overlay');
  const modal = container.querySelector('.vv-fit-modal');
  const closeButtons = container.querySelectorAll('[data-fit-close="true"]');
  const titleEl = container.querySelector('#vvFitModalTitle');
  const subEl = container.querySelector('#vvFitModalSub');
  const bodyEl = container.querySelector('#vvFitModalBody');
  let scrollY = 0;
  let lastFocus = null;
  const fitMap = {
    blueprint: { title: 'Department Blueprint Sprint', sub: 'For departments that need structure, clarity, and a run-ready handoff fast.', template: 'vv-fit-blueprint' },
    retainer: { title: 'On-Call Ops Director', sub: 'For teams that need calm operational support month to month.', template: 'vv-fit-retainer' },
    command: { title: 'Event-Day Command & Control', sub: 'For events that need real field ownership and custom-scoped department leadership.', template: 'vv-fit-command' }
  };
  const proofMap = {
    environments: { title: 'Event environments', sub: 'Placeholder examples of the live environments this offer structure is built around.', template: 'vv-proof-environments' },
    departments: { title: 'Departments supported', sub: 'Placeholder examples of the departments Vodivus is positioned to strengthen.', template: 'vv-proof-departments' },
    quotes: { title: 'Operator quotes', sub: 'Sample endorsement structure for future approved proof.', template: 'vv-proof-quotes' },
    case: { title: 'Case snapshot', sub: 'A compact placeholder story showing situation, intervention, and result.', template: 'vv-proof-case' }
  };
  function lockScroll(){
    scrollY = window.scrollY || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }
  function unlockScroll(){
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
  }
  function openModal(item){
    const template = item && document.getElementById(item.template);
    if(!item || !template) return;
    lastFocus = document.activeElement;
    titleEl.textContent = item.title;
    subEl.textContent = item.sub;
    bodyEl.innerHTML = '';
    bodyEl.appendChild(template.content.cloneNode(true));
    container.classList.add('is-fit-open');
    overlay.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'false');
    lockScroll();
    const closeBtn = container.querySelector('.vv-fit-close');
    if(closeBtn) closeBtn.focus();
  }
  function closeModal(){
    container.classList.remove('is-fit-open');
    overlay.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'true');
    unlockScroll();
    if(lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }
  fitButtons.forEach(btn => { btn.addEventListener('click', () => { openModal(fitMap[btn.dataset.fit]); }); });
  proofButtons.forEach(btn => { btn.addEventListener('click', () => { openModal(proofMap[btn.dataset.proof]); }); });
  closeButtons.forEach(btn => { btn.addEventListener('click', closeModal); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && container.classList.contains('is-fit-open')) closeModal(); });
})();`;

export const FOOTER_SCRIPT = `(function(){
  const footer = document.getElementById("vv-footer-contact");
  if(!footer) return;
  const toggles = footer.querySelectorAll(".vv-footer-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const col = toggle.closest(".vv-footer-col");
      const isOpen = col.classList.contains("is-open");
      col.classList.toggle("is-open", !isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  });
  const form = footer.querySelector("#vv-footer-form");
  const status = footer.querySelector("#vv-footer-status");
  if(form && status){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const button = form.querySelector("button");
      if(!button) return;
      const original = button.textContent;
      button.disabled = true;
      button.textContent = "Sending…";
      status.style.display = "block";
      status.textContent = "Signal received. Connect this form to your n8n endpoint when ready.";
      status.style.borderColor = "rgba(100,155,255,.22)";
      status.style.boxShadow = "0 0 0 3px rgba(100,155,255,.08)";
      window.setTimeout(() => {
        button.disabled = false;
        button.textContent = original;
        form.reset();
      }, 1200);
    });
  }
})();`;
