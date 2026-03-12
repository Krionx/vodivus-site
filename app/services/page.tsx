import "./services.css";

export default function ServicesPage() {
  return (
    <section id="vv-services" aria-label="Vodivus services">
      <div className="vv-shell">
          <section className="vv-block" aria-label="Services hero">
            <p className="vv-kicker">Structural Credibility</p>
            <h1 className="vv-hero-copy" style={{ fontSize: "72px", textAlign: "center" }}>Services Designed to Hold Under Pressure</h1>
            <p className="vv-hero-sub">Vodivus does not deliver vague strategy decks. We design executable operating structures: role logic, decision pathways, escalation mechanics, and handoff systems teams can run without heroics.</p>
            <div className="vv-cta-row">
              <a href="/contact" className="vv-cta vv-cta-primary">Start Intake -&gt;</a>
              <a href="#vv-service-lanes" className="vv-cta vv-cta-ghost">View Service Lanes -&gt;</a>
            </div>
          </section>

          <section id="vv-service-lanes" className="vv-block" aria-label="Three services">
            <h2>Three Service Paths</h2>
            <div className="vv-lane-grid">
              <article className="vv-lane">
                <input type="checkbox" id="vv-signal-expand" className="vv-expand-cb" />
                <span className="vv-screen-dim" aria-hidden="true"></span>
                <label htmlFor="vv-signal-expand" className="vv-lane-label">
                  <h3>Market and Positioning Architecture</h3>
                  <p><em>The Signal</em></p>
                  <div className="vv-expand-body">
                    <p>Clarifies strategic language, offer edges, and decision criteria so positioning becomes operational, not ornamental.</p>
                    <ul>
                      <li>Positioning map and narrative spine</li>
                      <li>Offer architecture and scope thresholds</li>
                      <li>Decision filters for channel and message choices</li>
                    </ul>
                  </div>
                  <span className="vv-expand-pill" aria-hidden="true"></span>
                </label>
              </article>

              <article className="vv-lane">
                <input type="checkbox" id="vv-system-expand" className="vv-expand-cb" />
                <span className="vv-screen-dim" aria-hidden="true"></span>
                <label htmlFor="vv-system-expand" className="vv-lane-label">
                  <h3>Operational and Execution Architecture</h3>
                  <p><em>The System</em></p>
                  <div className="vv-expand-body">
                    <p>Builds the mechanical core of delivery: workflow shape, role ownership, and response logic across high-pressure environments.</p>
                    <ul>
                      <li>Workflow design and operational cadence</li>
                      <li>RACI-lite ownership and escalation tree</li>
                      <li>SOP format, runbook structure, and handoff rules</li>
                    </ul>
                  </div>
                  <span className="vv-expand-pill" aria-hidden="true"></span>
                </label>
              </article>

              <article className="vv-lane">
                <input type="checkbox" id="vv-signature-expand" className="vv-expand-cb" />
                <span className="vv-screen-dim" aria-hidden="true"></span>
                <label htmlFor="vv-signature-expand" className="vv-lane-label">
                  <h3>Identity and Experience Architecture</h3>
                  <p><em>The Signature</em></p>
                  <div className="vv-expand-body">
                    <p>Aligns brand expression with operational behavior so identity is reinforced by how the system actually performs.</p>
                    <ul>
                      <li>Identity standards across touchpoints</li>
                      <li>Experience blueprint and quality cues</li>
                      <li>Comms behavior under stress conditions</li>
                    </ul>
                  </div>
                  <span className="vv-expand-pill" aria-hidden="true"></span>
                </label>
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

          <section className="vv-artifacts-shard" aria-label="Delivery artifacts">
            <input type="radio" name="vv-artifact-modal" id="vv-coin-none" className="vv-artifact-cb" defaultChecked />
            <div className="vv-artifacts-grid">
              <article className="vv-artifact">
                <input type="radio" name="vv-artifact-modal" id="vv-coin-ops" className="vv-artifact-cb" />
                <label htmlFor="vv-coin-ops" className="vv-artifact-label" aria-label="Open Operational Systems and Execution details">
                  <span className="vv-artifact-coin" aria-hidden="true">
                    <img className="vv-coin-img" src="/images/glassops1.png" alt="" />
                  </span>
                </label>
                <label htmlFor="vv-coin-none" className="vv-artifact-dim" aria-label="Close details"></label>
                <div className="vv-artifact-modal" role="dialog" aria-label="Operational Systems and Execution details">
                  <h3>Operational Systems &amp; Execution</h3>
                  <p>We build the internal machinery that allows the venture to run smoothly. Processes, automation pathways, and operational frameworks are designed so the business can execute consistently and scale.</p>
                  <h4>Services Included</h4>
                  <ul>
                    <li>SOP design and documentation</li>
                    <li>Workflow and process mapping</li>
                    <li>Automation strategy and implementation</li>
                    <li>CRM and lead management systems</li>
                    <li>Internal dashboards and reporting structures</li>
                    <li>Execution checklists and operational frameworks</li>
                  </ul>
                  <h4>Starting Price</h4>
                  <p><b>Starting at $2,500</b></p>
                  <label htmlFor="vv-coin-none" className="vv-artifact-close">Close</label>
                </div>
              </article>
              <article className="vv-artifact">
                <input type="radio" name="vv-artifact-modal" id="vv-coin-pack" className="vv-artifact-cb" />
                <label htmlFor="vv-coin-pack" className="vv-artifact-label" aria-label="Open Website and Digital Systems details">
                  <span className="vv-artifact-coin" aria-hidden="true">
                    <img className="vv-coin-img" src="/images/glassweb1.png" alt="" />
                  </span>
                </label>
                <label htmlFor="vv-coin-none" className="vv-artifact-dim" aria-label="Close details"></label>
                <div className="vv-artifact-modal" role="dialog" aria-label="Website and Digital Systems details">
                  <h3>Website &amp; Digital Systems</h3>
                  <p>We develop the digital infrastructure that powers the venture online. This includes websites, integrations, and automation systems that create a seamless digital experience for customers and operators.</p>
                  <h4>Services Included</h4>
                  <ul>
                    <li>Website design and development</li>
                    <li>Digital architecture planning</li>
                    <li>Lead capture and intake systems</li>
                    <li>Automation integrations</li>
                    <li>CRM connection and workflow triggers</li>
                    <li>Performance optimization and analytics</li>
                  </ul>
                  <h4>Starting Price</h4>
                  <p><b>Starting at $3,500</b></p>
                  <label htmlFor="vv-coin-none" className="vv-artifact-close">Close</label>
                </div>
              </article>
              <article className="vv-artifact">
                <input type="radio" name="vv-artifact-modal" id="vv-coin-notes" className="vv-artifact-cb" />
                <label htmlFor="vv-coin-notes" className="vv-artifact-label" aria-label="Open Venture and Brand Development details">
                  <span className="vv-artifact-coin" aria-hidden="true">
                    <img className="vv-coin-img" src="/images/glassvent1.png" alt="" />
                  </span>
                </label>
                <label htmlFor="vv-coin-none" className="vv-artifact-dim" aria-label="Close details"></label>
                <div className="vv-artifact-modal" role="dialog" aria-label="Venture and Brand Development details">
                  <h3>Venture &amp; Brand Development</h3>
                  <p>We design the strategic foundation of the venture. This phase defines positioning, identity architecture, and the structural blueprint that guides the business into the market with clarity and purpose.</p>
                  <h4>Services Included</h4>
                  <ul>
                    <li>Market positioning and competitive landscape</li>
                    <li>Brand identity architecture</li>
                    <li>Offer structure and service design</li>
                    <li>Venture roadmap and strategic direction</li>
                    <li>Messaging and narrative development</li>
                    <li>Brand system documentation</li>
                  </ul>
                  <h4>Starting Price</h4>
                  <p><b style={{ fontSize: "24px" }}>Starting at $1,500</b></p>
                  <label htmlFor="vv-coin-none" className="vv-artifact-close">Close</label>
                </div>
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