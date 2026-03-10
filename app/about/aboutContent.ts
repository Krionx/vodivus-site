export const ABOUT_HTML = String.raw`
<style>
body .vv-header { display: none !important; }
body .vv-footer { display: none !important; }
#vv-header, #vv-mobile, #vv-overlay { display: none !important; }
</style>

<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<header class="vv-header" id="vv-header" role="banner" aria-label="Vodivus header">
  <div class="vv-header-inner">
    <a href="/" class="vv-brand" aria-label="Vodivus Home">
      <img src="https://images.squarespace-cdn.com/content/691e9533ddf92169a657d827/fbc0dbf2-0595-4154-899d-24c0c8a48ac0/USE+Vodivus+Large+White.png?content-type=image%2Fpng" class="vv-logo" alt="Vodivus Venture Studios" loading="eager" />
    </a>
    <div class="vv-right">
      <nav class="vv-nav" aria-label="Primary">
        <a href="/services">Services</a>
        <a href="/about">About</a>
      </nav>
      <a href="/contact" class="vv-cta">Build the Blueprint →</a>
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
    <a href="/contact" class="is-primary">Build the Blueprint →</a>
  </div>
</header>

<style>
html, body{ overflow-x: hidden; }
body{ background-color:#030814; }
#vv-header, #vv-header *{ box-sizing: border-box; }

:root{
  --vv-max: 1200px;
  --vv-gutter: 24px;
  --vv-container: min(var(--vv-max), calc(100vw - var(--vv-gutter)));
}

#vv-header{
  position: relative;
  top: 18px !important;
  left: 0 !important;
  right: 0 !important;
  margin: 0 auto !important;
  width: var(--vv-container) !important;
  z-index: 999999 !important;
}

@media (max-width:900px){
  .vv-header-spacer{ height: calc(86px + env(safe-area-inset-top)); }
}
@media (max-width:420px){
  .vv-header-spacer{ height: calc(80px + env(safe-area-inset-top)); }
}

.vv-header-inner{
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  min-height: 74px;
  border-radius: 22px;
  background:
    radial-gradient(circle at 20% 0%, rgba(100, 155,255,.08), transparent 65%),
    radial-gradient(circle at 80% 0%, rgba(217,169,107,.08), transparent 65%),
    linear-gradient(rgba(100,155,255,.6) 5% , rgba(0,0,0,1) 45%);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(69,94,130,1);
  box-shadow: 0 18px 60px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.06);
}

.vv-logo{ height: 56px; width: auto; display:block; filter: drop-shadow(0 0 10px rgba(100, 155,255,.15)) drop-shadow(0 0 18px rgba(198,169,107,.10)); }
.vv-right{ display: flex; align-items: center; gap: 18px; }
.vv-nav{ display: flex; gap: 20px; }
.vv-nav a{ font-family: "Cinzel", serif; font-size: 24px; letter-spacing: .02em; color: rgba(255,255,255,.72); text-decoration: none; padding: 10px 14px; border-radius: 12px; transition: transform .25s cubic-bezier(.2,.8,.2,1), background-color .25s cubic-bezier(.2,.8,.2,1), color .25s cubic-bezier(.2,.8,.2,1); }
.vv-nav a:hover{ color: rgba(255,255,255,.94); background: rgba(255,255,255,.06); transform: translateY(-1px); }
.vv-cta{ font-family: "Cormorant Garamond", serif; font-size: 20px; font-weight: 600; padding: 12px 18px; border-radius: 14px; border: 1px solid rgba(100, 155,255,.28); color: rgba(255,255,255,.94); text-decoration: none; background: radial-gradient(circle at 30% 0%, rgba(100, 155,255,.16), transparent 70%), linear-gradient(rgba(255,255,255,.10), rgba(255,255,255,.02)); box-shadow: 0 12px 34px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06); }
.vv-cta:hover{ transform: translateY(-1px); border-color: rgba(100, 155,255, 1); background: rgba(235, 193, 118, .5); }
.vv-burger{ display: none; width: 44px; height: 44px; align-items: center; justify-content: center; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.10); border-radius: 12px; cursor: pointer; }
.vv-burger-lines{ width: 22px; height: 2px; background: rgba(255,255,255,.94); display: block; position: relative; border-radius: 999px; transition: transform .25s cubic-bezier(.2,.8,.2,1), background-color .25s; }
.vv-burger-lines::before,.vv-burger-lines::after{ content: ""; position: absolute; width: 22px; height: 2px; background: rgba(255,255,255,.94); left: 0; border-radius: 999px; transition: transform .25s cubic-bezier(.2,.8,.2,1), top .25s, opacity .25s; }
.vv-burger-lines::before{ top: -7px; }
.vv-burger-lines::after{ top: 7px; }
#vv-header.open .vv-burger-lines{ background: transparent; }
#vv-header.open .vv-burger-lines::before{ top: 0; transform: rotate(45deg); }
#vv-header.open .vv-burger-lines::after{ top: 0; transform: rotate(-45deg); }
.vv-mobile-overlay{ position: fixed; inset: 0; z-index: 999998; background: rgba(0,0,0,.55); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); opacity: 0; pointer-events: none; transition: opacity .25s cubic-bezier(.2,.8,.2,1); }
.vv-mobile{ position: fixed; z-index: 999999; top: calc(10px + env(safe-area-inset-top)); right: calc(10px + env(safe-area-inset-right)); width: min(360px, calc(100vw - 20px)); max-height: calc(100vh - 20px - env(safe-area-inset-top) - env(safe-area-inset-bottom)); overflow: auto; display: flex; flex-direction: column; gap: 10px; padding: 14px; border-radius: 18px; background: radial-gradient(circle at 20% 0%, rgba(100, 155,255,.08), transparent 60%), radial-gradient(circle at 90% 20%, rgba(198,169,107,.08), transparent 60%), rgba(10,14,20,.90); border: 1px solid rgba(255,255,255,.10); box-shadow: 0 24px 80px rgba(0,0,0,.65); transform: translateY(-8px) scale(.98); opacity: 0; pointer-events: none; transition: transform .25s cubic-bezier(.2,.8,.2,1), opacity .25s cubic-bezier(.2,.8,.2,1); }
.vv-mobile-head{ display:flex; align-items:center; justify-content:space-between; gap: 10px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,.08); margin-bottom: 4px; }
.vv-mobile-title{ font-family: "Cinzel", serif; font-size: 18px; letter-spacing: .06em; color: rgba(255,255,255,.85); }
.vv-mobile-close{ width: 44px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,.10); background: rgba(255,255,255,.04); color: rgba(255,255,255,.92); font-size: 26px; line-height: 1; cursor: pointer; }
.vv-mobile a{ font-family: "Cormorant Garamond", serif; font-size: 18px; font-weight: 600; color: rgba(255,255,255,.92); text-decoration: none; padding: 14px 12px; border-radius: 14px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06); }
.vv-mobile a.is-primary{ border-color: rgba(100, 155,255,.28); background: radial-gradient(circle at 30% 0%, rgba(100, 155,255,.14), transparent 70%), rgba(255,255,255,.03); }
#vv-header.open .vv-mobile-overlay{ opacity: 1; pointer-events: auto; }
#vv-header.open .vv-mobile{ opacity: 1; pointer-events: auto; transform: translateY(0) scale(1); }

@media (max-width:900px){
  #vv-header{ top: calc(12px + env(safe-area-inset-top)) !important; left: 50% !important; transform: translateX(-50%) !important; width: var(--vv-container) !important; right: auto !important; }
  .vv-nav, .vv-cta{ display:none; }
  .vv-burger{ display:inline-flex; }
  .vv-logo{ height: 44px; }
  .vv-header-inner{ padding: 12px 14px; min-height: 64px; }
}
@media (max-width:600px){ .vv-mobile{ left: 8px !important; right: 8px !important; width: auto !important; } }
@media (max-width:420px){ .vv-header-inner{ padding: 10px 12px; } .vv-burger{ width: 42px; height: 42px; } .vv-mobile a{ font-size: 17px; padding: 14px 10px; } }

#vv-sec-about-team,
#vv-sec-about-cta,
#vv-sec-about-team-members{
  --vv-font-title: "Cinzel Decorative", serif;
  --vv-font-subtitle: "Cinzel Decorative", serif;
  --vv-font-body: "Cormorant Garamond", serif;
  --vv-title: 72px;
  --vv-subtitle: 36px;
  --vv-body: 24px;
  --vv-glow: 0 0 2px rgba(100, 155, 255, 1), 0 0 12px rgba(100, 155, 255, 1), 0 0 12px rgba(100, 155, 255, 1);
}

#vv-sec-about-team.vv-sec,
#vv-sec-about-cta.vv-sec,
#vv-sec-about-team-members{
  width: var(--vv-container);
  margin: 0 auto 22px;
  padding: 20px;
  border: 1px solid rgba(69,94,130,1);
  border-radius: 22px;
  box-sizing: border-box;
}

#vv-sec-about-team h2,
#vv-sec-about-cta h2,
#vv-sec-about-team-members h2{ margin: 0; font-family: var(--vv-font-title) !important; font-weight: 900; font-size: var(--vv-title); line-height: 1.05; letter-spacing: .02em; color: rgba(255,255,255,0.92); text-shadow: var(--vv-glow); }
#vv-sec-about-team .vv-sub,
#vv-sec-about-cta .vv-sub,
#vv-sec-about-team-members .vv-sub,
#vv-sec-about-team .vv-founder h3,
#vv-sec-about-team .vv-roles h3,
#vv-sec-about-team-members .vv-name{ margin: 0; font-family: var(--vv-font-body) !important; font-weight: 400; font-size: var(--vv-subtitle); line-height: 1.15; letter-spacing: .02em; color: rgba(255,255,255,0.78); }
#vv-sec-about-team p,
#vv-sec-about-team li,
#vv-sec-about-cta p,
#vv-sec-about-team-members p{ font-family: var(--vv-font-body) !important; font-weight: 500; font-size: var(--vv-body); line-height: 1.45; letter-spacing: .01em; }

#vv-sec-about-team.vv-sec{
  --vv-gap: clamp(14px, 2vw, 18px);
  --vv-radius: 22px;
  border-radius: var(--vv-radius);
  background: radial-gradient(700px 500px at -10% 90%, rgba(13, 36, 64, 1), transparent 60%), radial-gradient(700px 700px at 110% -10%, rgba(235, 193, 118, 1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.92);
}
#vv-sec-about-team .vv-top{ display: grid; gap: 10px; margin-bottom: 12px; }
#vv-sec-about-team .vv-sub{ color: rgba(255,255,255,0.76); max-width: 91ch; }
#vv-sec-about-team .vv-grid{ display: grid; grid-template-columns: 1fr 1fr; gap: var(--vv-gap); margin-top: 10px; }
#vv-sec-about-team .vv-founder,
#vv-sec-about-team .vv-roles{ border-radius: 22px; border: 1px solid rgba(69,94,130,1); background: rgba(255, 255, 255, 0.06); box-shadow: 0 16px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08); padding: 32px; position: relative; overflow: hidden; }
#vv-sec-about-team .vv-founder::before,
#vv-sec-about-team .vv-roles::before{ content: ""; position: absolute; inset: -40% -40% auto -40%; height: 220px; opacity: 0.7; filter: blur(14px); pointer-events: none; }
#vv-sec-about-team .vv-founder::before{ background: radial-gradient(closest-side at 50% 50%, rgba(100, 155, 255, 0.12), transparent 70%); }
#vv-sec-about-team .vv-roles::before{ background: radial-gradient(closest-side at 50% 50%, rgba(255, 215, 0, 0.12), transparent 70%); }
#vv-sec-about-team .vv-founder h3,
#vv-sec-about-team .vv-roles h3{ color: rgba(255,255,255,0.92); text-shadow: var(--vv-glow); }
#vv-sec-about-team .vv-bio{ margin-top: 10px; display: grid; gap: 10px; color: rgba(255,255,255,0.76); }
#vv-sec-about-team .vv-bio b{ color: rgba(255, 255, 255, 0.92); font-weight: 700; }
#vv-sec-about-team .vv-rolegrid{ position: relative; z-index: 1; display: grid; gap: 12px; }
#vv-sec-about-team .vv-roleitem{ border-radius: 18px; border: 1px solid rgba(69,94,130,.5); background: rgba(0, 0, 0, 0.22); padding: 14px; color: rgba(255, 255, 255, 0.78); }
#vv-sec-about-team .vv-roleitem b{ display: block; color: rgba(255, 255, 255, 0.92); font-weight: 800; margin-bottom: 6px; }
#vv-sec-about-team .vv-strip{ margin-top: 14px; border-radius: 22px; border: 1px solid rgba(69,94,130,1); background: rgba(255, 255, 255, 0.04); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08); padding: 16px; display: flex; gap: 12px; align-items: center; justify-content: space-between; flex-wrap: wrap; color: rgba(255, 255, 255, 0.74); }
#vv-sec-about-team .vv-btn,
#vv-sec-about-cta .vv-btn{ display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 16px; border-radius: 14px; text-decoration: none; font-weight: 700; border: 1px solid rgba(100, 155, 255, 1); background: linear-gradient(rgba(0, 0, 0, 1)20%, rgba(100, 155, 255, .6)80%); color: rgba(255, 255, 255, 0.92); white-space: nowrap; }
#vv-sec-about-team .vv-btn:hover,
#vv-sec-about-cta .vv-btn:hover{ background: rgba(235, 193, 118, .5); border-color: rgba(100,155,255,1); }

#vv-sec-about-cta.vv-sec{ background: radial-gradient(700px 500px at -10% 90%, rgba(13, 36, 64, 1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%); box-shadow: 0 22px 80px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08); overflow: hidden; isolation: isolate; color: rgba(255, 255, 255, 0.94); position: relative; }
#vv-sec-about-cta .vv-cosmos{ position: absolute; inset: -20%; background: conic-gradient(from 140deg at 50% 50%, transparent 0deg, rgba(100, 155, 255, 0.14) 70deg, transparent 140deg, rgba(255, 215, 0, 0.12) 210deg, transparent 280deg, rgba(120, 141, 155, 0.10) 340deg, transparent 360deg); opacity: 0.34; filter: blur(16px); animation: vvSpinCTA 26s linear infinite; pointer-events: none; z-index: 0; }
@keyframes vvSpinCTA{ from{ transform: rotate(0deg); } to{ transform: rotate(360deg); } }
#vv-sec-about-cta .vv-wrap{ position: relative; z-index: 1; display: grid; gap: 12px; text-align: center; justify-items: center; }
#vv-sec-about-cta .vv-sub{ color: rgba(255,255,255,0.78); max-width: 82ch; }
#vv-sec-about-cta .vv-ctas{ display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 6px; }
#vv-sec-about-cta .vv-note{ margin-top: 6px; color: rgba(255, 255, 255, 0.66); text-align: center; }

#vv-sec-about-team-members{ --vv-pad: clamp(28px, 5vw, 62px); --vv-gap: 18px; --vv-radius: 22px; padding: var(--vv-pad); border-radius: var(--vv-radius); background: radial-gradient(700px 500px at -10% 90%, rgba(13, 36, 64, 1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%); box-shadow: 0 20px 70px rgba(0, 0, 0, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.08); color: rgba(255, 255, 255, 0.92); overflow: hidden; position: relative; isolation: isolate; }
#vv-sec-about-team-members .vv-top{ display: grid; gap: 10px; margin-bottom: 14px; }
#vv-sec-about-team-members .vv-eyebrow{ display: inline-block; width: fit-content; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(255, 255, 255, 0.12); background: rgba(255, 255, 255, 0.05); color: rgba(255,255,255,0.84); }
#vv-sec-about-team-members .vv-controls{ display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 6px; }
#vv-sec-about-team-members .vv-pill{ display: inline-flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 999px; border: 1px solid rgba(69,94,130,.5); background: rgba(0, 0, 0, 0.22); color: rgba(255, 255, 255, 0.78); user-select: none; cursor: pointer; }
#vv-sec-about-team-members .vv-pill input{ appearance: none; -webkit-appearance: none; width: 14px; height: 14px; border-radius: 5px; border: 1px solid rgba(255, 255, 255, 0.22); background: rgba(255, 255, 255, 0.06); display: inline-grid; place-items: center; margin: 0; }
#vv-sec-about-team-members .vv-pill input:checked{ border-color: rgba(100, 155, 255, 0.30); background: rgba(100, 155, 255, 0.16); box-shadow: 0 0 0 3px rgba(100, 155, 255, 0.10); }
#vv-sec-about-team-members .vv-pill input:checked::after{ content: ""; width: 4px; height: 7px; border-right: 2px solid rgba(255, 255, 255, 0.90); border-bottom: 2px solid rgba(255, 255, 255, 0.90); transform: rotate(40deg); margin-top: -1px; }
#vv-sec-about-team-members .vv-rail-wrap{ margin-top: 12px; position: relative; }
#vv-sec-about-team-members .vv-rail{ display: grid; grid-auto-flow: column; grid-auto-columns: minmax(260px, 320px); gap: var(--vv-gap); overflow-x: auto; padding: 2px 2px 12px; scroll-snap-type: x mandatory; scrollbar-width: none; scroll-behavior: smooth; overscroll-behavior-x: contain; }
#vv-sec-about-team-members .vv-rail::-webkit-scrollbar{ display: none; }
#vv-sec-about-team-members .vv-arrow{ position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; width: 46px; height: 46px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.14); background: rgba(0, 0, 0, 0.28); color: rgba(255, 255, 255, 0.90); display: grid; place-items: center; cursor: pointer; opacity: 0.82; }
#vv-sec-about-team-members .vv-arrow.is-left{ left: 10px; }
#vv-sec-about-team-members .vv-arrow.is-right{ right: 10px; }
#vv-sec-about-team-members .vv-card{ scroll-snap-align: start; border-radius: 22px; border: 1px solid rgba(69,94,130,1); background: rgba(255, 255, 255, 0.06); display: flex; flex-direction: column; min-height: 365px; overflow: hidden; position: relative; }
#vv-sec-about-team-members .vv-media{ padding: 14px 14px 0; }
#vv-sec-about-team-members .vv-photo{ width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 18px; border: 1px solid rgba(69,94,130,.5); box-shadow: 0 14px 40px rgba(0, 0, 0, 0.55); background: rgba(0, 0, 0, 0.22); display: block; }
#vv-sec-about-team-members .vv-body{ padding: 14px 16px 16px; display: grid; gap: 10px; flex: 1; align-content: start; }
#vv-sec-about-team-members .vv-name{ color: rgba(255,255,255,0.92); text-shadow: var(--vv-glow); }
#vv-sec-about-team-members .vv-role{ color: rgba(255, 255, 255, 0.74); }
#vv-sec-about-team-members .vv-chips{ display: flex; flex-wrap: wrap; gap: 8px; }
#vv-sec-about-team-members .vv-chip{ color: rgba(255, 255, 255, 0.76); border: 1px solid rgba(255, 255, 255, 0.10); background: rgba(0, 0, 0, 0.22); padding: 7px 10px; border-radius: 999px; white-space: nowrap; }
#vv-sec-about-team-members .vv-bio{ display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; max-height: calc(1.45em * 2); }
#vv-sec-about-team-members .vv-note{ margin-top: 16px; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.10); color: rgba(255, 255, 255, 0.74); max-width: 92ch; }

@media (max-width: 900px){
  #vv-sec-about-team .vv-grid{ grid-template-columns: 1fr; }
  #vv-sec-about-team-members .vv-arrow{ display: none; }
}
@media (max-width: 520px){
  #vv-sec-about-team,
  #vv-sec-about-cta,
  #vv-sec-about-team-members{ --vv-title: 36px; --vv-subtitle: 22px; --vv-body: 15px; }
}
</style>

<section class="vv-sec vv-about-team" id="vv-sec-about-team">
  <div class="vv-top">
    <h2>A Small Studio With a Systems Brain</h2>
    <p class="vv-sub">Vodivus pairs strategic clarity with disciplined execution — designed to compound over time. You get a studio brain without hiring a full internal team.</p>
  </div>

  <div class="vv-grid">
    <article class="vv-founder" aria-label="Founder">
      <h3>Vodivus Venture Studio</h3>
      <div class="vv-bio">
        <p>Vision without structure fades. Structure without vision stagnates. The strongest ventures require both. Vodivus exists to close that gap.</p>
        <p>We don’t trade in strategy theater or motivation cycles. We build systems that survive contact with reality.</p>
        <p>If you’re building something real — a platform, a service, an ecosystem — we turn it into <b>clear, connected architecture</b> your team can run and evolve.</p>
      </div>
    </article>

    <aside class="vv-roles" aria-label="Core capabilities">
      <h3>Core roles we cover</h3>
      <div class="vv-rolegrid">
        <div class="vv-roleitem"><b>Systems Architect</b>Structure, flows, and decision logic that keep the venture coherent as it grows.</div>
        <div class="vv-roleitem"><b>Product &amp; Platform Builder</b>Pages, pipelines, and automation that reduce friction and increase conversion.</div>
        <div class="vv-roleitem"><b>Creative Director</b>Brand + experience that supports the system — not decoration pretending to be strategy.</div>
      </div>
    </aside>
  </div>

  <div class="vv-strip">
    <div>Start with a short intake. We’ll recommend the correct lane, scope boundaries (what to ignore right now), and clear next actions — whether we work together or not.</div>
    <a class="vv-btn" href="/contact">Build the Blueprint →</a>
  </div>
</section>

<section class="vv-sec vv-about-cta" id="vv-sec-about-cta">
  <div class="vv-cosmos" aria-hidden="true"></div>
  <div class="vv-wrap">
    <h2>If You’re Building for the Long Game —</h2>
    <p class="vv-sub">Begin the Blueprint Intake and receive a build path you can actually execute: the correct lane, defined scope, and next actions that move the system forward.</p>
    <div class="vv-ctas">
      <a class="vv-btn is-primary" href="/contact">Build the Blueprint →</a>
      <a class="vv-btn" href="/services">Explore Services →</a>
    </div>
    <div class="vv-note">No pitch deck ambush. No guru energy. Just a clean diagnosis and a plan.</div>
  </div>
</section>

<section class="vv-sec vv-about-team" id="vv-sec-about-team-members">
  <div class="vv-top">
    <div class="vv-eyebrow">Meet the team</div>
    <h2>The Humans Behind the Systems</h2>
    <p class="vv-sub">Small team. Clear roles. Documented work. Clean handoff.</p>

    <div class="vv-controls" id="vv-team-filters" aria-label="Team filters">
      <label class="vv-pill"><input type="checkbox" value="founder" checked> Founder</label>
      <label class="vv-pill"><input type="checkbox" value="systems" checked> Systems</label>
      <label class="vv-pill"><input type="checkbox" value="creative" checked> Creative</label>
    </div>
  </div>

  <div class="vv-rail-wrap">
    <button class="vv-arrow is-left" type="button" aria-label="Scroll team left">←</button>
    <button class="vv-arrow is-right" type="button" aria-label="Scroll team right">→</button>

    <div class="vv-rail" id="vv-team-rail" aria-label="Team members">
      <article class="vv-card" data-lanes="founder">
        <div class="vv-media">
          <img class="vv-photo" src="https://images.squarespace-cdn.com/content/691e9533ddf92169a657d827/38965e00-c7d5-423b-a947-4b007f02b54b/0518b9bf-ea9e-4439-8597-c171486a3312.jpg?content-type=image%2Fjpeg" alt="Daniel Wentworth">
        </div>
        <div class="vv-body">
          <div><h3 class="vv-name">Daniel Wentworth</h3><p class="vv-role">Founder</p></div>
          <div class="vv-chips"><span class="vv-chip">Venture Design</span><span class="vv-chip">Operations</span></div>
          <p class="vv-bio">Turns vision into executable structure: scope, sequencing, constraints, and what ships first. Builds clarity that survives growth.</p>
        </div>
      </article>

      <article class="vv-card" data-lanes="founder systems">
        <div class="vv-media">
          <img class="vv-photo" src="https://static1.squarespace.com/static/691e9533ddf92169a657d827/t/69688e642bb10c77a55439f9/1768459876367/Daniel+Marques-Miller+%28Co-Founder.jpg" alt="Daniel Marques-Miller">
        </div>
        <div class="vv-body">
          <div><h3 class="vv-name">Daniel Miller</h3><p class="vv-role">Co-Founder</p></div>
          <div class="vv-chips"><span class="vv-chip">Digital Systems</span><span class="vv-chip">Build Execution</span></div>
          <p class="vv-bio">Builds the infrastructure that keeps ideas alive: pages, flows, automations, and systems that don’t collapse under growth.</p>
        </div>
      </article>

      <article class="vv-card" data-lanes="creative">
        <div class="vv-media">
          <img class="vv-photo" src="https://static1.squarespace.com/static/691e9533ddf92169a657d827/t/69688e636c924b6a2909c7e2/1768459878161/Tyler+Borbon+%28Marketing+%26+Media+Director.png" alt="Tyler Borbon">
        </div>
        <div class="vv-body">
          <div><h3 class="vv-name">Tyler Borbon</h3><p class="vv-role">Marketing &amp; Media Director</p></div>
          <div class="vv-chips"><span class="vv-chip">Brand + Media</span><span class="vv-chip">Conversion</span></div>
          <p class="vv-bio">Makes the work legible and compelling: messaging, visual direction, and content that feels premium and converts.</p>
        </div>
      </article>

      <article class="vv-card" data-lanes="systems">
        <div class="vv-media">
          <img class="vv-photo" src="https://static1.squarespace.com/static/691e9533ddf92169a657d827/t/69688e6311081661b7db5257/1768459877917/Aaron+Rodecker+%28Database+Engineer.jpeg" alt="Aaron Rodecker">
        </div>
        <div class="vv-body">
          <div><h3 class="vv-name">Aaron Rodecker</h3><p class="vv-role">Database Engineer</p></div>
          <div class="vv-chips"><span class="vv-chip">Data Architecture</span><span class="vv-chip">Reliability</span></div>
          <p class="vv-bio">Designs data foundations that scale: schemas, structure, and integrity so the product doesn’t outgrow its own brain.</p>
        </div>
      </article>
    </div>

    <div class="vv-note">Tip: Use the filters to show/hide lanes. The rail scrolls with arrows on desktop and swipe on mobile.</div>
  </div>
</section>

<style>
#vv-footer-contact{
  --vv-font-title:"Cinzel Decorative", serif;
  --vv-font-subtitle:"Cinzel", serif;
  --vv-font-body:"Cormorant Garamond", serif;
  width:min(1200px, calc(100% - 40px));
  margin:18px auto 36px;
  padding:18px;
  border-radius:24px;
  border:1px solid rgba(69,94,130,1);
  color:rgba(255,255,255,.92);
  overflow:hidden;
  isolation:isolate;
  position:relative;
  background: radial-gradient(700px 500px at -10% 90%, rgba(13,36,64,1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.30) 100%);
}
#vv-footer-contact .vv-footer-inner{ position:relative; z-index:1; display:grid; gap:12px; }
#vv-footer-contact .vv-footer-top{ display:flex; align-items:flex-start; justify-content:space-between; gap:16px; padding:2px 2px 6px; }
#vv-footer-contact .vv-footer-brand h2{ margin:0 0 4px; font-family:var(--vv-font-title); font-size:clamp(26px, 4vw, 40px); line-height:1.02; letter-spacing:.02em; color:rgba(255,255,255,.96); font-weight:900; }
#vv-footer-contact .vv-footer-brand p{ margin:0; max-width:28ch; font-family:var(--vv-font-body); font-size:20px; line-height:1.15; color:rgba(255,255,255,.72); }
#vv-footer-contact .vv-footer-note{ max-width:360px; font-family:var(--vv-font-body); font-size:18px; line-height:1.15; color:rgba(255,255,255,.62); text-align:right; padding-top:6px; }
#vv-footer-contact .vv-footer-stack{ display:grid; gap:10px; }
#vv-footer-contact .vv-footer-col{ border-radius:18px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.05); overflow:hidden; }
#vv-footer-contact .vv-footer-toggle{ width:100%; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 14px; background:transparent; border:0; color:inherit; cursor:pointer; text-align:left; }
#vv-footer-contact .vv-footer-label{ display:grid; gap:2px; }
#vv-footer-contact .vv-footer-kicker{ font-family:var(--vv-font-body); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.56); }
#vv-footer-contact .vv-footer-title{ font-family:var(--vv-font-subtitle); font-size:24px; line-height:1; color:rgba(255,255,255,.92); }
#vv-footer-contact .vv-footer-icon{ width:32px; height:32px; border-radius:10px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.04); display:inline-flex; align-items:center; justify-content:center; color:rgba(255,255,255,.84); flex:0 0 auto; font-size:15px; }
#vv-footer-contact .vv-footer-col.is-open .vv-footer-icon{ transform:rotate(180deg); }
#vv-footer-contact .vv-footer-links{ max-height:0; overflow:hidden; transition:max-height .28s ease, padding .22s ease; padding:0 14px; }
#vv-footer-contact .vv-footer-col.is-open .vv-footer-links{ max-height:220px; padding:0 14px 14px; }
#vv-footer-contact .vv-footer-linksInner{ display:grid; grid-template-columns:repeat(4, minmax(0, 1fr)); gap:8px; }
#vv-footer-contact .vv-footer-links a{ display:block; text-decoration:none; padding:9px 10px; border-radius:12px; border:1px solid rgba(255,255,255,.08); background:rgba(0,0,0,.16); color:rgba(255,255,255,.82); font-family:var(--vv-font-body); font-size:19px; line-height:1.1; text-align:center; }
#vv-footer-contact .vv-footer-signal{ display:grid; grid-template-columns:1fr auto; gap:12px; align-items:end; padding-top:2px; }
#vv-footer-contact .vv-footer-signalText h3{ margin:0 0 4px; font-family:var(--vv-font-subtitle); font-size:24px; font-weight:500; line-height:1; color:rgba(255,255,255,.90); }
#vv-footer-contact .vv-footer-signalText p{ margin:0; font-family:var(--vv-font-body); font-size:18px; line-height:1.1; color:rgba(255,255,255,.66); }
#vv-footer-contact .vv-footer-form{ display:flex; gap:10px; align-items:center; }
#vv-footer-contact .vv-footer-form input[type="email"]{ width:min(320px, 42vw); padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.12); background:rgba(0,0,0,.22); color:rgba(255,255,255,.92); font-size:20px; outline:none; font-family:var(--vv-font-body); }
#vv-footer-contact .vv-footer-form button{ padding:11px 14px; border-radius:13px; border:1px solid rgba(100,155,255,.25); background:linear-gradient(rgba(0,0,0,1), rgba(100,155,255,1)); color:rgba(255,255,255,.94); font-weight:700; cursor:pointer; white-space:nowrap; font-size:18px; font-family:var(--vv-font-title); }
#vv-footer-contact .vv-footer-status{ display:none; padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.10); background:rgba(0,0,0,.18); color:rgba(255,255,255,.80); font-size:18px; line-height:1.15; font-family:var(--vv-font-body); }
#vv-footer-contact .vv-footer-bottom{ display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; padding-top:10px; border-top:1px solid rgba(255,255,255,.08); }
#vv-footer-contact .vv-footer-copy{ font-family:var(--vv-font-body); font-size:18px; line-height:1.1; color:rgba(255,255,255,.64); }
#vv-footer-contact .vv-footer-legal{ display:flex; gap:8px; flex-wrap:wrap; }
#vv-footer-contact .vv-footer-legal a{ text-decoration:none; padding:8px 10px; border-radius:12px; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.03); color:rgba(255,255,255,.76); font-family:var(--vv-font-body); font-size:17px; line-height:1.1; }

@media (max-width:900px){
  #vv-footer-contact{ width:min(100%, calc(100% - 24px)); padding:16px; border-radius:20px; margin:18px auto 24px; }
  #vv-footer-contact .vv-footer-top{ flex-direction:column; gap:8px; }
  #vv-footer-contact .vv-footer-note{ max-width:none; text-align:left; padding-top:0; }
  #vv-footer-contact .vv-footer-linksInner{ grid-template-columns:repeat(2, minmax(0, 1fr)); }
  #vv-footer-contact .vv-footer-signal{ grid-template-columns:1fr; align-items:start; }
  #vv-footer-contact .vv-footer-form{ flex-direction:column; align-items:stretch; }
  #vv-footer-contact .vv-footer-form input[type="email"],
  #vv-footer-contact .vv-footer-form button{ width:100%; }
  #vv-footer-contact .vv-footer-bottom{ flex-direction:column; align-items:flex-start; }
}
@media (max-width:420px){ #vv-footer-contact{ width:calc(100% - 16px); padding:14px; } }
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
  if(closeBtn) closeBtn.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") closeMenu(); });
  panel.addEventListener("click", function(e){ var a = e.target && e.target.closest ? e.target.closest("a") : null; if(a) closeMenu(); });
})();`;

export const ABOUT_TEAM_SCRIPT = `(function(){
  const root = document.getElementById("vv-sec-about-team-members");
  if(!root || root.dataset.vvInit === "1") return;
  root.dataset.vvInit = "1";
  const rail = root.querySelector("#vv-team-rail");
  const filtersWrap = root.querySelector("#vv-team-filters");
  const cards = Array.from(root.querySelectorAll(".vv-card"));
  const leftBtn = root.querySelector(".vv-arrow.is-left");
  const rightBtn = root.querySelector(".vv-arrow.is-right");

  function selectedLanes(){
    const checks = Array.from(filtersWrap.querySelectorAll('input[type="checkbox"]'));
    return checks.filter(c => c.checked).map(c => c.value);
  }

  function applyFilters(){
    const lanes = selectedLanes();
    cards.forEach(card => {
      const cardLanes = (card.getAttribute("data-lanes") || "").split(/\s+/).filter(Boolean);
      const show = lanes.length === 0 ? true : cardLanes.some(l => lanes.includes(l));
      card.style.display = show ? "" : "none";
    });
  }

  function scrollByCard(dir){
    if(!rail) return;
    const firstVisible = cards.find(c => c.style.display !== "none");
    const step = firstVisible ? (firstVisible.getBoundingClientRect().width + 18) : 320;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  if(filtersWrap) filtersWrap.addEventListener("change", applyFilters);
  if(leftBtn) leftBtn.addEventListener("click", () => scrollByCard(-1));
  if(rightBtn) rightBtn.addEventListener("click", () => scrollByCard(1));

  applyFilters();
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
