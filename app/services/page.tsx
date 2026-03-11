import "./services.css";

export default function ServicesPage() {
  return (
    <section id="vv-services" aria-label="Vodivus services">
      <div className="vv-shell">
          <section className="vv-block" aria-label="Services hero">
            <p className="vv-kicker">Structural Credibility</p>
            <h1 className="vv-hero-copy">Services Designed to Hold Under Operational Load.</h1>
            <p className="vv-hero-sub">Vodivus does not deliver vague strategy decks. We design executable operating structures: role logic, decision pathways, escalation mechanics, and handoff systems teams can run without heroics.</p>
            <div className="vv-cta-row">
              <a href="/contact" className="vv-cta vv-cta-primary">Start Intake -&gt;</a>
              <a href="#vv-service-lanes" className="vv-cta vv-cta-ghost">View Service Lanes -&gt;</a>
            </div>
          </section>

          <section id="vv-service-lanes" className="vv-block" aria-label="Three services">
            <h2>Three Service Lanes</h2>
            <div className="vv-lane-grid">
              <article className="vv-lane">
                <h3>Market and Positioning Architecture</h3>
                <p><em>The Signal</em></p>
                <p>Clarifies strategic language, offer edges, and decision criteria so positioning becomes operational, not ornamental.</p>
                <ul>
                  <li>Positioning map and narrative spine</li>
                  <li>Offer architecture and scope thresholds</li>
                  <li>Decision filters for channel and message choices</li>
                </ul>
              </article>

              <article className="vv-lane">
                <h3>Operational and Execution Architecture</h3>
                <p><em>The System</em></p>
                <p>Builds the mechanical core of delivery: workflow shape, role ownership, and response logic across high-pressure environments.</p>
                <ul>
                  <li>Workflow design and operational cadence</li>
                  <li>RACI-lite ownership and escalation tree</li>
                  <li>SOP format, runbook structure, and handoff rules</li>
                </ul>
              </article>

              <article className="vv-lane">
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

          <section className="vv-block" aria-label="Credibility mechanics">
            <h2>What Creates Structural Credibility</h2>
            <div className="vv-cred-grid">
              <article className="vv-cred">
                <h3>Role Clarity</h3>
                <p>Ambiguity is replaced with explicit ownership, authority boundaries, and escalation conditions.</p>
              </article>
              <article className="vv-cred">
                <h3>Decision Logic</h3>
                <p>Teams get threshold rules that reduce bottlenecks and prevent reactive drift during live execution.</p>
              </article>
              <article className="vv-cred">
                <h3>Handoff Integrity</h3>
                <p>Outputs are designed for continuity, so knowledge survives people, shifts, and growth phases.</p>
              </article>
            </div>
          </section>

          <section className="vv-block" aria-label="Delivery artifacts">
            <h2>Typical Delivery Artifacts</h2>
            <div className="vv-artifacts-grid">
              <article className="vv-artifact">
                <h3>Operating Blueprint</h3>
                <p>System map, scope boundaries, role model, and sequencing logic.</p>
              </article>
              <article className="vv-artifact">
                <h3>Execution Pack</h3>
                <p>SOP set, escalation pathways, checklist framework, and briefing format.</p>
              </article>
              <article className="vv-artifact">
                <h3>Leadership Notes</h3>
                <p>Risk watchpoints, decision triggers, and next-phase priorities.</p>
              </article>
            </div>
          </section>

          <section className="vv-block vv-process" aria-label="Service process">
            <h2>Engagement Model</h2>
            <div className="vv-steps">
              <article className="vv-step">
                <b>Step 01: Intake and pressure mapping</b>
                <span>We identify constraint patterns, recurring failure points, and practical scope for the first build cycle.</span>
              </article>
              <article className="vv-step">
                <b>Step 02: Architecture and validation</b>
                <span>We define the model, then pressure-test it against real staffing, timing, and operational conditions.</span>
              </article>
              <article className="vv-step">
                <b>Step 03: Deployment and handoff</b>
                <span>You receive implementation-ready assets and leadership guidance to run the system with stability.</span>
              </article>
            </div>
          </section>

          <section className="vv-block vv-final-cta" aria-label="Services call to action">
            <h2>Start With the Right Structural Move</h2>
            <p>Submit intake and we will recommend the correct lane, define immediate priorities, and outline a build path grounded in operational reality.</p>
            <div className="vv-cta-row">
              <a href="/contact" className="vv-cta vv-cta-primary">Submit Intake -&gt;</a>
              <a href="/about" className="vv-cta vv-cta-ghost">See Studio Philosophy -&gt;</a>
            </div>
          </section>
      </div>
    </section>
  );
}