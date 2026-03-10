export const ABOUT_HTML = String.raw`
<section id="vv-about" aria-label="About Vodivus">
  <style>
    #vv-about{
      --vv-max: 1200px;
      --vv-shell: min(var(--vv-max), calc(100vw - 32px));
      --vv-title: clamp(36px, 5.1vw, 64px);
      --vv-h2: clamp(28px, 3.5vw, 44px);
      --vv-h3: clamp(21px, 2.4vw, 30px);
      --vv-body: clamp(20px, 1.7vw, 24px);
      --vv-border: rgba(123,183,235,.44);
      --vv-glass: rgba(8, 14, 28, .62);
      color: rgba(242,248,255,.96);
      padding: clamp(28px, 4vw, 46px) 0 60px;
    }
    #vv-about *{ box-sizing: border-box; }
    #vv-about .vv-shell{ width: var(--vv-shell); margin: 0 auto; }
    #vv-about h1,
    #vv-about h2,
    #vv-about h3{ margin: 0; color: rgba(250,253,255,.98); }
    #vv-about h1{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-title); line-height: 1.06; text-shadow: 0 0 18px rgba(112,190,255,.2); }
    #vv-about h2{ font-family: "Cinzel Decorative", serif; font-size: var(--vv-h2); line-height: 1.1; }
    #vv-about h3{ font-family: "Cinzel", serif; font-size: var(--vv-h3); line-height: 1.14; }
    #vv-about p,
    #vv-about li,
    #vv-about a,
    #vv-about span{ font-family: "Cormorant Garamond", serif; font-size: var(--vv-body); line-height: 1.45; }
    #vv-about p{ margin: 0; color: rgba(232,243,255,.9); }

    #vv-about .vv-block{
      border-radius: 24px;
      border: 1px solid var(--vv-border);
      background:
        radial-gradient(680px 420px at -8% 96%, rgba(11,33,63,.96), transparent 64%),
        linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.01)),
        var(--vv-glass);
      box-shadow: 0 24px 72px rgba(0,0,0,.52), inset 0 1px 0 rgba(255,255,255,.08);
      padding: clamp(22px, 3.2vw, 34px);
    }
    #vv-about .vv-block + .vv-block{ margin-top: 18px; }

    #vv-about .vv-hero-copy{ max-width: 24ch; }
    #vv-about .vv-hero-sub{ max-width: 66ch; margin-top: 14px; }

    #vv-about .vv-grid{ display: grid; gap: 14px; }
    #vv-about .vv-principles{ grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 16px; }
    #vv-about .vv-principle{ border-radius: 18px; border: 1px solid rgba(120,170,220,.38); background: rgba(255,255,255,.04); padding: 14px; }

    #vv-about .vv-team{ grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 16px; }
    #vv-about .vv-member{ border-radius: 18px; border: 1px solid rgba(120,170,220,.38); background: rgba(255,255,255,.04); padding: 14px; }
    #vv-about .vv-member em{ display: block; font-size: clamp(17px, 1.8vw, 20px); color: rgba(197,228,255,.86); margin-bottom: 4px; }

    #vv-about .vv-cta-row{ display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
    #vv-about .vv-cta{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 46px;
      padding: 10px 16px;
      border-radius: 14px;
      text-decoration: none;
      transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    #vv-about .vv-cta:hover{ transform: translateY(-2px); }
    #vv-about .vv-cta-primary{
      border: 1px solid rgba(123,198,255,.55);
      background: linear-gradient(rgba(0,0,0,0) 8%, rgba(92,154,230,.68) 88%);
      color: rgba(255,255,255,.96);
      box-shadow: 0 12px 30px rgba(65,126,209,.34);
    }
    #vv-about .vv-cta-ghost{
      border: 1px solid rgba(230,242,255,.2);
      background: rgba(255,255,255,.04);
      color: rgba(233,244,255,.92);
    }

    @media (max-width: 980px){
      #vv-about .vv-principles,
      #vv-about .vv-team{ grid-template-columns: 1fr; }
    }
  </style>

  <div class="vv-shell">
    <section class="vv-block" aria-label="About hero">
      <h1 class="vv-hero-copy">We Build Venture Architecture That Holds Under Pressure.</h1>
      <p class="vv-hero-sub">Vodivus exists for founders and operators who need strategic clarity, operational integrity, and identity coherence, not abstract advice disconnected from execution.</p>
    </section>

    <section class="vv-block" aria-label="Mission">
      <h2>Mission</h2>
      <p style="margin-top: 10px;">Our mission is to convert ambitious vision into structured systems that teams can actually run. We focus on momentum that compounds through clarity, discipline, and precision.</p>
    </section>

    <section class="vv-block" aria-label="Principles">
      <h2>Operating Principles</h2>
      <div class="vv-grid vv-principles">
        <article class="vv-principle">
          <h3>Reality First</h3>
          <p>Strategy is only valid when it survives constraints, pressure, and real-world complexity.</p>
        </article>
        <article class="vv-principle">
          <h3>Systems Over Noise</h3>
          <p>We replace improvisation with intentional systems that scale with less friction and less waste.</p>
        </article>
        <article class="vv-principle">
          <h3>Identity With Precision</h3>
          <p>Brand and operations should signal the same standard. Your presence must match your execution quality.</p>
        </article>
      </div>
    </section>

    <section class="vv-block" aria-label="Team">
      <h2>The Studio Team</h2>
      <div class="vv-grid vv-team">
        <article class="vv-member">
          <em>Strategic Architecture Lead</em>
          <p>Translates raw ambition into structured positioning and executable growth pathways.</p>
        </article>
        <article class="vv-member">
          <em>Operations Design Lead</em>
          <p>Builds the systems, workflows, and decision logic that keep execution calm and consistent.</p>
        </article>
        <article class="vv-member">
          <em>Identity and Experience Lead</em>
          <p>Aligns visual language, communication behavior, and experiential standards into one coherent signature.</p>
        </article>
      </div>
    </section>

    <section class="vv-block" aria-label="About call to action">
      <h2>If You Are Ready for a Clear Build Path</h2>
      <p style="margin-top:10px; max-width: 58ch;">Start with intake and we will map the correct lane, define scope boundaries, and outline immediate next actions.</p>
      <div class="vv-cta-row">
        <a href="/contact" class="vv-cta vv-cta-primary">Build the Blueprint -></a>
        <a href="/services" class="vv-cta vv-cta-ghost">Review Service Lanes -></a>
      </div>
    </section>
  </div>
</section>
`;

export const ABOUT_TEAM_SCRIPT = `(function(){})();`;
export const FOOTER_SCRIPT = `(function(){})();`;
