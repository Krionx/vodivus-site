export const CONTACT_HTML = String.raw`
<style>
body .vv-header { display: none !important; }
body .vv-footer { display: none !important; }
#vv-header, #vv-mobile, #vv-overlay { display: none !important; }
</style>

<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>

<div class="vv-header-bg" aria-hidden="true"></div>
<style>
html,
body{
  overflow-x:hidden;
}

#vv-header,
#vv-header *,
#vv-sec-contact-hero,
#vv-sec-contact-hero *,
#vv-sec-contact-intake,
#vv-sec-contact-intake *,
#vv-sec-contact-nextsteps,
#vv-sec-contact-nextsteps *,
#vv-footer-contact,
#vv-footer-contact *{
  box-sizing:border-box;
}

#vv-sec-contact-hero{
  margin-top:0;
}

#vv-sec-contact-hero,
#vv-sec-contact-intake,
#vv-sec-contact-nextsteps{
  --vv-font-title:"Cinzel Decorative", serif;
  --vv-font-subtitle:"Cinzel Decorative", serif;
  --vv-font-body:"Cormorant Garamond", serif;

  --vv-title:66px;
  --vv-subtitle:30px;
  --vv-body:24px;

  --vv-title-shadow:
    0 0 2px rgba(100, 155, 255, .55),
    0 0 12px rgba(100, 155, 255, .55),
    0 0 12px rgba(100, 155, 255, .55);
}

.vv-fontload{
  position:absolute;
  width:1px;
  height:1px;
  overflow:hidden;
  clip:rect(0 0 0 0);
  white-space:nowrap;
  clip-path:inset(50%);
}

span.vv-fontload{
  display:block;
}

#vv-sec-contact-hero h1,
#vv-sec-contact-intake h2,
#vv-sec-contact-nextsteps h2,
#vv-sec-contact-hero h3,
#vv-sec-contact-intake h3,
#vv-sec-contact-nextsteps h3{
  overflow-wrap:anywhere;
  word-break:normal;
}

#vv-sec-contact-nextsteps[data-pop="true"]{
  overflow-y:auto !important;
  padding-bottom:max(32px, env(safe-area-inset-bottom)) !important;
}

#vv-sec-contact-nextsteps[data-pop="true"] .vv-pop-panel{
  margin-bottom:max(32px, env(safe-area-inset-bottom)) !important;
}
</style>

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
        Build the Blueprint →
      </a>

      <button
        class="vv-burger"
        id="vv-burger"
        type="button"
        aria-label="Open menu"
        aria-controls="vv-mobile"
        aria-expanded="false"
      >
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
#vv-header{
  position:relative;
  top:18px !important;
  left:50% !important;
  margin-top:-120px;
  transform:translateX(-50%) !important;
  width:min(1200px, calc(100% - 40px)) !important;
  z-index:999999 !important;
}

.vv-header-inner{
  position:relative;
  z-index:3;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:14px 20px;
  min-height:74px;
  border-radius:22px;
  background:
    radial-gradient(circle at 20% 0%, rgba(100, 155, 255,.08), transparent 65%),
    radial-gradient(circle at 80% 0%, rgba(198,169,107,.08), transparent 65%),
    linear-gradient(rgba(100,155,255,.55) 5%, rgba(0,0,0,1)45%);
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);
  border:1px solid rgba(69,94,130,1);
  box-shadow:
    0 18px 60px rgba(0,0,0,.55),
    inset 0 1px 0 rgba(255,255,255,.06);
}

.vv-logo{
  height:56px;
  width:auto;
  display:block;
  filter:
    drop-shadow(0 0 10px rgba(100, 155, 255,.15))
    drop-shadow(0 0 18px rgba(198,169,107,.10));
}

.vv-right{ display:flex; align-items:center; gap:18px; }
.vv-nav{ display:flex; gap:20px; }
.vv-nav a{
  font-family:"Cinzel", serif;
  font-size:24px;
  letter-spacing:.02em;
  color:rgba(255,255,255,.72);
  text-decoration:none;
  padding:10px 14px;
  border-radius:12px;
  transition:transform .25s cubic-bezier(.2,.8,.2,1), background-color .25s cubic-bezier(.2,.8,.2,1), color .25s cubic-bezier(.2,.8,.2,1);
}
.vv-nav a:hover{ color:rgba(255,255,255,.94); background:rgba(255,255,255,.06); transform:translateY(-1px); }

.vv-cta{
  font-family:"Cormorant Garamond", serif;
  font-size:20px;
  font-weight:600;
  padding:12px 18px;
  border-radius:14px;
  border:1px solid rgba(100, 155, 255,.28);
  color:rgba(255,255,255,.94);
  text-decoration:none;
  background: radial-gradient(circle at 30% 0%, rgba(100, 155, 255,.16), transparent 70%), linear-gradient(rgba(255,255,255,.10), rgba(255,255,255,.02));
  box-shadow: 0 12px 34px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06);
}
.vv-cta:hover{ transform:translateY(-1px); border-color:rgba(100,155,255,1); background:rgba(235, 193, 118, .5); }

.vv-burger{ display:none; width:44px; height:44px; align-items:center; justify-content:center; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.10); border-radius:12px; cursor:pointer; }
.vv-burger-lines{ width:22px; height:2px; background:rgba(255,255,255,.94); display:block; position:relative; border-radius:999px; transition:transform .25s cubic-bezier(.2,.8,.2,1), background-color .25s; }
.vv-burger-lines::before,
.vv-burger-lines::after{ content:""; position:absolute; width:22px; height:2px; background:rgba(255,255,255,.94); left:0; border-radius:999px; transition:transform .25s cubic-bezier(.2,.8,.2,1), top .25s, opacity .25s; }
.vv-burger-lines::before{ top:-7px; }
.vv-burger-lines::after{ top:7px; }
#vv-header.open .vv-burger-lines{ background:transparent; }
#vv-header.open .vv-burger-lines::before{ top:0; transform:rotate(45deg); }
#vv-header.open .vv-burger-lines::after{ top:0; transform:rotate(-45deg); }

.vv-mobile-overlay{ position:fixed; inset:0; z-index:999998; background:rgba(0,0,0,.55); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); opacity:0; pointer-events:none; transition:opacity .25s cubic-bezier(.2,.8,.2,1); }
.vv-mobile{ position:fixed; z-index:999999; top:calc(10px + env(safe-area-inset-top)); right:calc(10px + env(safe-area-inset-right)); width:min(360px, calc(100vw - 20px)); max-height:calc(100vh - 20px - env(safe-area-inset-top) - env(safe-area-inset-bottom)); overflow:auto; display:flex; flex-direction:column; gap:10px; padding:14px; border-radius:18px; background: radial-gradient(circle at 20% 0%, rgba(100, 155, 255,.08), transparent 60%), radial-gradient(circle at 90% 20%, rgba(198,169,107,.08), transparent 60%), rgba(10,14,20,.90); border:1px solid rgba(255,255,255,.10); box-shadow:0 24px 80px rgba(0,0,0,.65); transform:translateY(-8px) scale(.98); opacity:0; pointer-events:none; transition:transform .25s cubic-bezier(.2,.8,.2,1), opacity .25s cubic-bezier(.2,.8,.2,1); }
.vv-mobile-head{ display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom:6px; border-bottom:1px solid rgba(255,255,255,.08); margin-bottom:4px; }
.vv-mobile-title{ font-family:"Cinzel", serif; font-size:18px; letter-spacing:.06em; color:rgba(255,255,255,.85); }
.vv-mobile-close{ width:44px; height:44px; border-radius:12px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.04); color:rgba(255,255,255,.92); font-size:26px; line-height:1; cursor:pointer; }
.vv-mobile a{ font-family:"Cormorant Garamond", serif; font-size:18px; font-weight:600; color:rgba(255,255,255,.92); text-decoration:none; padding:14px 12px; border-radius:14px; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); }
.vv-mobile a.is-primary{ border-color:rgba(100, 155, 255,.28); background: radial-gradient(circle at 30% 0%, rgba(100, 155, 255,.14), transparent 70%), rgba(255,255,255,.03); }
#vv-header.open .vv-mobile-overlay{ opacity:1; pointer-events:auto; }
#vv-header.open .vv-mobile{ opacity:1; pointer-events:auto; transform:translateY(0) scale(1); }

#vv-sec-contact-hero.vv-sec{
  --vv-max:1200px;
  --vv-pad:clamp(28px, 5vw, 58px);
  --vv-gap:18px;
  --vv-stack:20px;
  --vv-radius:28px;
  --vv-gold-size:clamp(260px, 42vw, 700px);
  --vv-gold-alpha:clamp(.38, .62, .88);
  width:min(var(--vv-max), calc(100% - 40px));
  margin-left:auto;
  margin-right:auto;
  border:1px solid rgba(69,94,130,1);
  padding:var(--vv-pad);
  border-radius:var(--vv-radius);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  overflow:hidden;
  isolation:isolate;
  color:rgba(255, 255, 255, 0.92);
  background:
    radial-gradient(700px 500px at -10% 90%, rgba(13, 36, 64, 1), transparent 60%),
    radial-gradient(circle at 100% 0%, rgba(235, 193, 118, var(--vv-gold-alpha)) 0, rgba(235, 193, 118, calc(var(--vv-gold-alpha) * .72)) 24%, rgba(235, 193, 118, calc(var(--vv-gold-alpha) * .28)) 45%, transparent 68%),
    radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%);
  background-size:auto, var(--vv-gold-size) var(--vv-gold-size), auto;
  background-repeat:no-repeat;
  background-position:0 0, 100% 0, 0 0;
}
#vv-sec-contact-hero::before{
  content:"";
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(circle at 12% 24%, rgba(255, 255, 255, 0.10) 0 1px, transparent 2px),
    radial-gradient(circle at 52% 16%, rgba(255, 255, 255, 0.08) 0 1px, transparent 2px),
    radial-gradient(circle at 86% 42%, rgba(255, 255, 255, 0.06) 0 1px, transparent 2px),
    radial-gradient(circle at 34% 72%, rgba(255, 255, 255, 0.06) 0 1px, transparent 2px),
    radial-gradient(circle at 78% 88%, rgba(255, 255, 255, 0.07) 0 1px, transparent 2px);
  opacity:.68;
  pointer-events:none;
  z-index:0;
}
#vv-sec-contact-hero .vv-stack{ position:relative; z-index:1; display:grid; gap:var(--vv-stack); }
#vv-sec-contact-hero .vv-grid{ display:grid; grid-template-columns:1.15fr 0.85fr; gap:var(--vv-gap); align-items:start; }
#vv-sec-contact-hero h1{ margin:0; font-size:var(--vv-title); line-height:1.03; letter-spacing:.02em; color:rgba(255,255,255,0.96); text-shadow:var(--vv-title-shadow); font-family:var(--vv-font-title); font-weight:900; }
#vv-sec-contact-hero .vv-sub, #vv-sec-contact-hero .vv-micro{ margin:0; font-size:var(--vv-body); line-height:1.25; letter-spacing:.02em; color:rgba(255,255,255,0.80); max-width:70ch; font-family:var(--vv-font-body); }
#vv-sec-contact-hero .vv-micro{ color:rgba(255,255,255,0.72); max-width:80ch; }
#vv-sec-contact-hero .vv-note{ margin:0; font-size:var(--vv-body); line-height:1.25; letter-spacing:.02em; color:rgba(255,255,255,0.76); max-width:70ch; font-family:var(--vv-font-body); padding-left:14px; border-left:2px solid rgba(100,155,255,0.65); text-shadow:0 0 14px rgba(100,155,255,0.10); }
#vv-sec-contact-hero .vv-ctas{ display:flex; flex-wrap:wrap; gap:12px; align-items:center; margin-top:4px; }
#vv-sec-contact-hero .vv-btn{ display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:12px 16px; border-radius:14px; letter-spacing:.02em; border:1px solid rgba(69,94,130,1); background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.92); box-shadow: 0 10px 24px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.10); white-space:nowrap; text-decoration:none; font-size:var(--vv-body); font-family:var(--vv-font-title); font-weight:700; }
#vv-sec-contact-hero .vv-btn:hover{ transform:translateY(-1px); background:rgba(235, 193, 118, .5); border-color:rgba(100,155,255,1); }
#vv-sec-contact-hero .vv-btn.is-primary{ background:linear-gradient(rgba(0, 0, 0,1), rgba(100,155,255,1)); border-color:rgba(100, 155, 255,1); }
#vv-sec-contact-hero .vv-card{ border-radius:22px; border:1px solid rgba(255,255,255,0.12); background: radial-gradient(700px 500px at -10% 90%, rgba(13, 36, 64, 1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%); box-shadow: 0 16px 44px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.08); padding:18px; }
#vv-sec-contact-hero .vv-card h3{ margin:0 0 10px 0; font-size:var(--vv-subtitle); letter-spacing:.02em; color:rgba(255,255,255,0.90); font-family:var(--vv-font-subtitle); font-weight:400; }
#vv-sec-contact-hero .vv-list{ margin:0; padding:0; list-style:none; display:grid; gap:10px; }
#vv-sec-contact-hero .vv-list li{ display:flex; gap:10px; align-items:flex-start; color:rgba(255,255,255,0.78); line-height:1.25; font-size:var(--vv-body); letter-spacing:.02em; font-family:var(--vv-font-body); }
#vv-sec-contact-hero .vv-check{ width:18px; height:18px; border-radius:6px; background:rgba(100, 155, 255,0.14); border:1px solid rgba(69,94,130,1); box-shadow:0 0 18px rgba(100, 155, 255,0.18); flex:0 0 auto; margin-top:3px; position:relative; }
#vv-sec-contact-hero .vv-check::after{ content:""; position:absolute; left:5px; top:4px; width:6px; height:9px; border-right:2px solid rgba(255,255,255,0.85); border-bottom:2px solid rgba(255,255,255,0.85); transform:rotate(40deg); opacity:.9; }

#vv-sec-contact-intake{
  --vv-max:1200px;
  --vv-pad:clamp(26px, 4.5vw, 56px);
  --vv-gap:18px;
  --vv-stack:20px;
  --vv-radius:28px;
  width:min(var(--vv-max), calc(100% - 40px));
  margin:22px auto 0;
  padding:var(--vv-pad);
  border-radius:var(--vv-radius);
  border:1px solid rgba(69,94,130,1);
  background: radial-gradient(700px 500px at -10% 90%, rgba(13, 36, 64, 1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  color:rgba(255, 255, 255, 0.92);
  overflow:hidden;
  isolation:isolate;
  overflow-x:hidden;
}
#vv-sec-contact-intake .vv-stack{ display:grid; gap:var(--vv-stack); }
#vv-sec-contact-intake h2{ margin:0; font-size:var(--vv-title); line-height:1.03; letter-spacing:.02em; color:rgba(255,255,255,0.96); text-shadow:var(--vv-title-shadow); font-family:var(--vv-font-title); font-weight:900; }
#vv-sec-contact-intake .vv-sub{ margin:0; color:rgba(255,255,255,0.78); line-height:1.25; font-size:var(--vv-body); max-width:90ch; font-family:var(--vv-font-body); }
#vv-sec-contact-intake .vv-grid{ display:grid; grid-template-columns:1fr; gap:var(--vv-gap); align-items:start; }
#vv-sec-contact-intake form{ border-radius:22px; border:1px solid rgba(69,94,130,1); background:rgba(255,255,255,0.06); box-shadow: 0 16px 44px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.08); padding:18px; display:grid; gap:14px; }
#vv-sec-contact-intake .vv-form-title{ display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; margin-bottom:5px; }
#vv-sec-contact-intake .vv-form-title h3{ margin:0; font-size:var(--vv-subtitle); letter-spacing:.02em; color:rgba(255,255,255,0.90); text-shadow:0 0 10px rgba(100, 155, 255,0.10); font-family:var(--vv-font-subtitle); font-weight:400; }
#vv-sec-contact-intake .vv-chip{ font-size:12px; color:rgba(255,255,255,0.74); border:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.04); padding:7px 10px; border-radius:999px; white-space:nowrap; letter-spacing:.14em; text-transform:uppercase; font-family:var(--vv-font-body); }
#vv-sec-contact-intake .vv-row{ display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:10px; }
#vv-sec-contact-intake .vv-help{ margin-top:6px; font-size:var(--vv-body); color:rgba(255,255,255,0.72); line-height:1.25; margin-bottom:5px; font-family:var(--vv-font-body); }
#vv-form-status{ display:none; margin-top:10px; padding:12px 14px; border-radius:16px; border:1px solid rgba(255,255,255,0.12); background:rgba(0,0,0,0.18); color:rgba(255,255,255,0.82); font-size:var(--vv-body); line-height:1.25; font-family:var(--vv-font-body); }
#vv-sec-contact-intake .vv-step1-actions{ display:flex; gap:12px; flex-wrap:wrap; align-items:center; justify-content:space-between; border-top:1px solid rgba(255,255,255,0.10); padding-top:10px; margin-top:8px; }
#vv-sec-contact-intake .vv-stepHint{ font-size:var(--vv-body); color:rgba(255,255,255,0.70); line-height:1.25; max-width:70ch; font-family:var(--vv-font-body); }
#vv-sec-contact-intake .vv-stepBtnRow{ display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
#vv-sec-contact-intake .vv-btnGhost{ padding:12px 16px; border-radius:16px; border:1px solid rgba(100,155,255,1); background:linear-gradient(rgba(0, 0, 0,1), rgba(100,155,255,1)); color:rgba(255,255,255,0.92); font-weight:700; cursor:pointer; box-shadow:inset 0 1px 0 rgba(255,255,255,0.10); white-space:nowrap; }
#vv-sec-contact-intake .vv-step2-actions button[type="submit"],
#vv-sec-contact-intake form button[type="submit"]{ padding:14px 18px; border-radius:16px; border:1px solid rgba(100, 155, 255,0.25); background:linear-gradient(rgba(0, 0, 0,1), rgba(100,155,255,1)); color:rgba(255,255,255,0.94); font-weight:700; cursor:pointer; box-shadow: 0 12px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.10); white-space:nowrap; }
#vv-sec-contact-intake .vv-legal{ font-size:var(--vv-body); color:rgba(255,255,255,0.64); line-height:1.25; max-width:80ch; font-family:var(--vv-font-body); }

#vv-sec-contact-intake label.vv-label{ display:block; font-size:var(--vv-subtitle); letter-spacing:.02em; color:rgba(255,255,255,0.82); margin-bottom:12px; line-height:1.1; font-family:var(--vv-font-subtitle); font-weight:400; }
#vv-sec-contact-intake input[type="text"],
#vv-sec-contact-intake input[type="email"],
#vv-sec-contact-intake textarea{ width:100%; padding:12px 14px; border-radius:14px; border:1px solid rgba(255,255,255,0.14); background:rgba(0,0,0,0.25); color:rgba(255,255,255,0.92); box-shadow:inset 0 1px 0 rgba(255,255,255,0.06); font-size:var(--vv-body); outline:none; margin-bottom:10px; font-family:var(--vv-font-body); }
#vv-sec-contact-intake textarea{ min-height:120px; resize:vertical; }
#vv-sec-contact-intake input::placeholder, #vv-sec-contact-intake textarea::placeholder{ color:rgba(255,255,255,0.55); }
#vv-sec-contact-intake input:focus, #vv-sec-contact-intake textarea:focus{ border-color:rgba(100, 155, 255,0.28); box-shadow: 0 0 0 3px rgba(100, 155, 255,0.10), inset 0 1px 0 rgba(255,255,255,0.06); }
#vv-sec-contact-intake fieldset{ border:1px solid rgba(255,255,255,0.10); border-radius:18px; background:rgba(255,255,255,0.04); padding:14px; margin:0; }
#vv-sec-contact-intake legend{ padding:0 8px; font-size:var(--vv-subtitle); letter-spacing:.02em; color:rgba(255,255,255,0.88); margin-bottom:5px; line-height:1.1; font-family:var(--vv-font-subtitle); font-weight:400; }
#vv-sec-contact-intake .vv-checkgrid{ display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:10px 12px; margin-top:10px; }
#vv-sec-contact-intake .vv-checkgrid.is-5{ grid-template-columns:repeat(5, minmax(0, 1fr)); }
#vv-sec-contact-intake .vv-checkgrid.is-6{ grid-template-columns:repeat(6, minmax(0, 1fr)); }
#vv-sec-contact-intake .vv-option{ display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:14px; border:1px solid rgba(255,255,255,0.12); background:rgba(0,0,0,0.18); color:rgba(255,255,255,0.84); font-size:var(--vv-body); line-height:1.2; user-select:none; font-family:var(--vv-font-body); }
#vv-sec-contact-intake .vv-option input[type="checkbox"]{ appearance:none; -webkit-appearance:none; width:18px; height:18px; border-radius:6px; border:1px solid rgba(255,255,255,0.22); background:rgba(255,255,255,0.06); box-shadow:inset 0 1px 0 rgba(255,255,255,0.08); display:inline-grid; place-items:center; flex:0 0 auto; margin:0; }
#vv-sec-contact-intake .vv-option input[type="checkbox"]:checked{ border-color:rgba(100, 155, 255,0.30); background:rgba(100, 155, 255,0.16); box-shadow:0 0 0 3px rgba(100, 155, 255,0.10); }
#vv-sec-contact-intake .vv-option input[type="checkbox"]:checked::after{ content:""; width:6px; height:10px; border-right:2px solid rgba(255,255,255,0.90); border-bottom:2px solid rgba(255,255,255,0.90); transform:rotate(40deg); margin-top:-1px; }

#vv-sec-contact-intake .vv-reveal{ border-radius:18px; border:1px dashed rgba(255,255,255,0.14); background:rgba(0,0,0,0.18); overflow:hidden; }
#vv-sec-contact-intake .vv-reveal-inner{ padding:12px; display:grid; gap:12px; }
#vv-sec-contact-intake .vv-reveal[data-open="false"]{ max-height:0; opacity:0; border-color:transparent; margin-top:0; transition:max-height .22s ease, opacity .18s ease, border-color .18s ease, margin-top .18s ease; }
#vv-sec-contact-intake .vv-reveal[data-open="true"]{ max-height:560px; opacity:1; border-color:rgba(255,255,255,0.14); margin-top:10px; transition:max-height .26s ease, opacity .18s ease, border-color .18s ease, margin-top .18s ease; }

@keyframes vvShardBreathe{ 0%,100%{ filter:drop-shadow(0 18px 55px rgba(0,0,0,0.65)); } 50%{ filter:drop-shadow(0 22px 70px rgba(0,0,0,0.72)); } }
@keyframes vvShardGlintSweep{ 0%{ transform:translateX(-40%) translateY(-10%) rotate(18deg); opacity:0; } 25%{ opacity:.35; } 60%{ opacity:.12; } 100%{ transform:translateX(140%) translateY(20%) rotate(18deg); opacity:0; } }

#vv-sec-contact-intake .vv-step2-overlay{ position:fixed; inset:0; z-index:900000; display:none; align-items:center; justify-content:center; padding:18px; background:rgba(0,0,0,0.62); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); }
#vv-sec-contact-intake[data-step2="true"] .vv-step2-overlay{ display:flex; }
#vv-sec-contact-intake .vv-step2-panel{ width:min(1180px, 96vw); max-height:min(82vh, 900px); border-radius:30px; border:1px solid rgba(255,255,255,0.18); background: radial-gradient(1200px 620px at 18% 10%, rgba(100, 155, 255,0.16), transparent 60%), radial-gradient(900px 520px at 82% 22%, rgba(198,169,107,0.14), transparent 62%), radial-gradient(900px 520px at 55% 92%, rgba(120,140,255,0.12), transparent 66%), linear-gradient(180deg, rgba(20,24,44,0.74), rgba(8,10,18,0.92)); box-shadow: 0 30px 120px rgba(0,0,0,0.78), inset 0 1px 0 rgba(255,255,255,0.14); overflow:hidden; isolation:isolate; outline:none; transform-origin:center; transform:translate3d(var(--vv-step2-from-x, 0px), var(--vv-step2-from-y, 0px), 0) scale(var(--vv-step2-from-s, 0.92)); opacity:0; transition:transform .46s cubic-bezier(.2,.95,.2,1), opacity .26s ease; animation:vvShardBreathe 2.8s ease-in-out infinite; will-change:transform, opacity, filter; }
#vv-sec-contact-intake[data-step2="true"] .vv-step2-panel{ transform:translate3d(0,0,0) scale(1); opacity:1; }
#vv-sec-contact-intake .vv-step2-panel.vv-step2-exiting{ opacity:0; }
#vv-sec-contact-intake .vv-step2-top{ position:relative; z-index:1; display:flex; align-items:flex-start; justify-content:space-between; gap:12px; padding:16px 16px 12px; border-bottom:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.03); }
#vv-sec-contact-intake .vv-step2-title{ display:grid; gap:6px; padding-right:10px; }
#vv-sec-contact-intake .vv-step2-title b{ font-size:var(--vv-subtitle); letter-spacing:.02em; text-shadow:var(--vv-title-shadow); font-family:var(--vv-font-subtitle); font-weight:400; color:rgba(255,255,255,0.92); }
#vv-sec-contact-intake .vv-step2-title span{ font-size:var(--vv-body); color:rgba(255,255,255,0.74); line-height:1.2; font-family:var(--vv-font-body); }
#vv-sec-contact-intake .vv-step2-close{ width:46px; height:46px; border-radius:16px; border:1px solid rgba(255,255,255,0.14); background: radial-gradient(140px 80px at 35% 30%, rgba(100, 155, 255,0.10), transparent 62%), rgba(255,255,255,0.06); color:rgba(255,255,255,0.90); cursor:pointer; display:inline-flex; align-items:center; justify-content:center; }
#vv-sec-contact-intake .vv-step2-body{ position:relative; z-index:1; padding:16px; overflow:auto; max-height:calc(min(82vh, 900px) - 74px); scrollbar-width:none; }
#vv-sec-contact-intake .vv-step2-body::-webkit-scrollbar{ width:0; height:0; }
#vv-sec-contact-intake .vv-step2-body .vv-stepH{ margin:0 0 10px 0; font-size:var(--vv-subtitle); letter-spacing:.02em; color:rgba(255,255,255,0.92); text-shadow:var(--vv-title-shadow); font-family:var(--vv-font-subtitle); font-weight:400; }
#vv-sec-contact-intake .vv-step2-actions{ display:flex; flex-wrap:wrap; gap:12px; align-items:center; justify-content:space-between; padding-top:10px; border-top:1px solid rgba(255,255,255,0.10); margin-top:12px; }

#vv-vcal{ color:rgba(255,255,255,0.92); }
#vv-vcal .vv-vcal-field{ position:relative; display:flex; align-items:center; }
#vv-vcal .vv-vcal-input{ width:100%; padding:12px 54px 12px 14px; border-radius:14px; border:1px solid rgba(255,255,255,0.14); background:rgba(0,0,0,0.25); color:rgba(255,255,255,0.92); box-shadow:inset 0 1px 0 rgba(255,255,255,0.06); font-size:var(--vv-body); outline:none; margin-bottom:10px; cursor:pointer; font-family:var(--vv-font-body); }
#vv-vcal .vv-vcal-iconBtn{ position:absolute; right:10px; top:50%; transform:translateY(-50%); width:40px; height:40px; border-radius:12px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.85); display:flex; align-items:center; justify-content:center; cursor:pointer; }
#vv-vcal .vv-vcal-overlay{ position:fixed; inset:0; z-index:910000; display:none; align-items:center; justify-content:center; padding:18px; background:rgba(0,0,0,0.55); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); }
#vv-vcal.vv-open .vv-vcal-overlay{ display:flex; }
#vv-vcal .vv-vcal-shard{ width:min(520px, 92vw); border-radius:22px; border:1px solid rgba(255,255,255,0.16); background: radial-gradient(900px 520px at 15% 10%, rgba(100, 155, 255,0.14), transparent 60%), radial-gradient(800px 480px at 85% 25%, rgba(198,169,107,0.12), transparent 62%), linear-gradient(180deg, rgba(20,24,44,0.72), rgba(8,10,18,0.88)); box-shadow: 0 30px 120px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.12); position:relative; overflow:hidden; transform-origin:center; outline:none; transform:translate3d(var(--vv-from-x, 0px), var(--vv-from-y, 0px), 0) scale(var(--vv-from-s, 0.92)); opacity:0; transition:transform .42s cubic-bezier(.2,.95,.2,1), opacity .26s ease; }
#vv-vcal.vv-open .vv-vcal-shard{ transform:translate3d(0,0,0) scale(1); opacity:1; }
#vv-vcal .vv-vcal-shardTop{ display:flex; justify-content:space-between; gap:14px; padding:18px 18px 10px; border-bottom:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.03); }
#vv-vcal .vv-vcal-title{ font-size:var(--vv-subtitle); letter-spacing:.02em; text-shadow:var(--vv-title-shadow); line-height:1.1; font-family:var(--vv-font-subtitle); font-weight:400; }
#vv-vcal .vv-vcal-sub{ margin-top:6px; font-size:var(--vv-body); color:rgba(255,255,255,0.72); line-height:1.25; font-family:var(--vv-font-body); }
#vv-vcal .vv-vcal-close{ width:46px; height:46px; border-radius:16px; border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.90); cursor:pointer; display:inline-flex; align-items:center; justify-content:center; }
#vv-vcal .vv-vcal-controls{ display:grid; grid-template-columns:52px minmax(0, 1fr) 52px; align-items:center; gap:10px; padding:14px 16px 10px; }
#vv-vcal .vv-vcal-nav{ height:44px; border-radius:14px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.92); font-size:22px; cursor:pointer; }
#vv-vcal .vv-vcal-month{ display:flex; align-items:center; justify-content:space-between; gap:10px; padding:10px 12px; border-radius:16px; border:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.04); min-width:0; }
#vv-vcal .vv-vcal-monthName{ font-size:var(--vv-body); letter-spacing:.06em; text-transform:uppercase; color:rgba(255,255,255,0.88); font-family:var(--vv-font-body); min-width:0; }
#vv-vcal .vv-vcal-monthMeta{ display:flex; gap:8px; min-width:0; }
#vv-vcal .vv-vcal-mini{ height:32px; padding:0 10px; border-radius:12px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.05); color:rgba(255,255,255,.86); cursor:pointer; font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-family:var(--vv-font-body); white-space:nowrap; }
#vv-vcal .vv-vcal-dow{ display:grid; grid-template-columns:repeat(7, 1fr); gap:8px; padding:0 16px 8px; color:rgba(255,255,255,0.62); font-size:12px; letter-spacing:.14em; text-transform:uppercase; font-family:var(--vv-font-body); }
#vv-vcal .vv-vcal-grid{ display:grid; grid-template-columns:repeat(7, 1fr); gap:8px; padding:0 16px 14px; }
#vv-vcal .vv-vcal-day{ height:44px; border-radius:14px; border:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.04); color:rgba(255,255,255,0.88); cursor:pointer; display:flex; align-items:center; justify-content:center; user-select:none; font-size:var(--vv-body); }
#vv-vcal .vv-vcal-day.is-out{ opacity:.45; }
#vv-vcal .vv-vcal-day.is-today{ border-color:rgba(198,169,107,0.38); background:rgba(198,169,107,0.12); }
#vv-vcal .vv-vcal-day.is-selected{ border-color:rgba(100, 155, 255,0.60); background:rgba(100, 155, 255,0.10); box-shadow:0 0 0 3px rgba(100, 155, 255,0.14), 0 0 18px rgba(100, 155, 255,0.18); }
#vv-vcal .vv-vcal-footer{ display:flex; align-items:center; justify-content:space-between; gap:12px; padding:14px 16px 18px; border-top:1px solid rgba(255,255,255,0.10); }
#vv-vcal .vv-vcal-pickedLabel{ color:rgba(255,255,255,0.65); font-size:12px; letter-spacing:.14em; text-transform:uppercase; font-family:var(--vv-font-body); }
#vv-vcal .vv-vcal-pickedValue{ font-size:var(--vv-body); color:rgba(255,255,255,0.92); font-family:var(--vv-font-body); }
#vv-vcal .vv-vcal-apply{ height:44px; padding:0 16px; border-radius:14px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.92); cursor:pointer; font-size:var(--vv-body); font-family:var(--vv-font-title); font-weight:700; }

#vv-sec-contact-nextsteps[data-pop="false"]{ display:none !important; }
#vv-sec-contact-nextsteps[data-pop="true"]{ display:block !important; position:fixed; inset:0; z-index:920000; padding:22px; overflow:hidden; background:rgba(0,0,0,0.62); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); }
#vv-sec-contact-nextsteps .vv-pop-panel{ --vv-max:1200px; --vv-pad:clamp(26px, 4.5vw, 56px); --vv-gap:18px; --vv-stack:20px; --vv-radius:28px; margin:0 auto; max-width:var(--vv-max); border-radius:var(--vv-radius); background: radial-gradient(700px 500px at -10% 90%, rgba(13, 36, 64, 1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%); box-shadow: 0 30px 120px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.08); overflow:hidden; isolation:isolate; color:rgba(255,255,255,0.92); }
#vv-sec-contact-nextsteps .vv-pop-topbar{ display:flex; align-items:center; justify-content:space-between; gap:12px; padding:14px 14px 12px; border-bottom:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.03); }
#vv-sec-contact-nextsteps .vv-pop-close{ display:inline-flex; align-items:center; justify-content:center; padding:10px 12px; border-radius:14px; border:1px solid rgba(255,255,255,0.14); background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.92); cursor:pointer; font-weight:700; font-size:var(--vv-body); font-family:var(--vv-font-title); }
#vv-sec-contact-nextsteps .vv-stack{ padding:var(--vv-pad); display:grid; gap:var(--vv-stack); }
#vv-sec-contact-nextsteps h2{ margin:0; font-size:var(--vv-title); line-height:1.03; letter-spacing:.02em; color:rgba(255,255,255,0.96); text-shadow:var(--vv-title-shadow); font-family:var(--vv-font-title); font-weight:900; }
#vv-sec-contact-nextsteps .vv-sub{ margin:0; color:rgba(255,255,255,0.76); line-height:1.25; font-size:var(--vv-body); max-width:90ch; font-family:var(--vv-font-body); }
#vv-sec-contact-nextsteps .vv-timeline{ display:grid; grid-template-columns:repeat(3, 1fr); gap:var(--vv-gap); align-items:stretch; margin-top:6px; }
#vv-sec-contact-nextsteps .vv-step{ border-radius:22px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.06); box-shadow: 0 16px 44px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.08); padding:18px; display:grid; gap:12px; min-height:260px; position:relative; overflow:hidden; }
#vv-sec-contact-nextsteps .vv-topline{ display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; position:relative; z-index:1; }
#vv-sec-contact-nextsteps .vv-num{ display:inline-flex; padding:7px 10px; border-radius:999px; font-size:var(--vv-body); letter-spacing:.02em; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.82); font-family:var(--vv-font-body); }
#vv-sec-contact-nextsteps .vv-eta{ font-size:var(--vv-body); letter-spacing:-0.02em; color:rgba(255,255,255,0.70); border:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.04); padding:7px 10px; border-radius:999px; white-space:nowrap; font-family:var(--vv-font-body); }
#vv-sec-contact-nextsteps h3{ margin:0; font-size:var(--vv-subtitle); letter-spacing:.02em; line-height:1.15; color:rgba(255,255,255,0.92); position:relative; z-index:1; text-shadow:0 0 10px rgba(100, 155, 255,0.10); font-family:var(--vv-font-subtitle); font-weight:400; }
#vv-sec-contact-nextsteps p{ margin:0; color:rgba(255,255,255,0.74); line-height:1.25; font-size:var(--vv-body); position:relative; z-index:1; font-family:var(--vv-font-body); }
#vv-sec-contact-nextsteps .vv-bullets{ margin:0; padding:0; list-style:none; display:grid; gap:10px; position:relative; z-index:1; font-size:var(--vv-body); font-family:var(--vv-font-body); }
#vv-sec-contact-nextsteps .vv-bullets li{ display:flex; gap:10px; align-items:flex-start; color:rgba(255,255,255,0.78); line-height:1.25; font-size:var(--vv-body); font-family:var(--vv-font-body); }
#vv-sec-contact-nextsteps .vv-check{ width:18px; height:18px; border-radius:6px; background:rgba(100, 155, 255,0.14); border:1px solid rgba(100, 155, 255,0.25); box-shadow:0 0 18px rgba(100, 155, 255,0.18); flex:0 0 auto; margin-top:3px; position:relative; }
#vv-sec-contact-nextsteps .vv-check::after{ content:""; position:absolute; left:5px; top:4px; width:6px; height:9px; border-right:2px solid rgba(255,255,255,0.85); border-bottom:2px solid rgba(255,255,255,0.85); transform:rotate(40deg); opacity:.9; }
#vv-sec-contact-nextsteps .vv-expect{ border-radius:22px; border:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.04); box-shadow:inset 0 1px 0 rgba(255,255,255,0.08); padding:16px; color:rgba(255,255,255,0.74); line-height:1.25; font-size:var(--vv-body); font-family:var(--vv-font-body); }
#vv-sec-contact-nextsteps .vv-expect b{ color:rgba(255,215,0,0.92); font-weight:700; font-family:var(--vv-font-subtitle); }

#vv-footer-contact{ --vv-font-title:"Cinzel Decorative", serif; --vv-font-subtitle:"Cinzel", serif; --vv-font-body:"Cormorant Garamond", serif; --vv-title-shadow: 0 0 2px rgba(100,155,255,.45), 0 0 10px rgba(100,155,255,.24); width:min(1200px, calc(100% - 40px)); margin:18px auto 36px; padding:18px; border-radius:24px; border:1px solid rgba(69,94,130,1); color:rgba(255,255,255,.92); overflow:hidden; isolation:isolate; position:relative; background: radial-gradient(700px 500px at -10% 90%, rgba(13,36,64,1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.30) 100%); box-shadow: 0 18px 60px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06); }
#vv-footer-contact .vv-footer-inner{ position:relative; z-index:1; display:grid; gap:12px; }
#vv-footer-contact .vv-footer-top{ display:flex; align-items:flex-start; justify-content:space-between; gap:16px; padding:2px 2px 6px; }
#vv-footer-contact .vv-footer-brand h2{ margin:0 0 4px; font-family:var(--vv-font-title); font-size:clamp(26px, 4vw, 40px); line-height:1.02; letter-spacing:.02em; color:rgba(255,255,255,.96); text-shadow:var(--vv-title-shadow); font-weight:900; }
#vv-footer-contact .vv-footer-brand p{ margin:0; max-width:28ch; font-family:var(--vv-font-body); font-size:20px; line-height:1.15; color:rgba(255,255,255,.72); }
#vv-footer-contact .vv-footer-note{ max-width:360px; font-family:var(--vv-font-body); font-size:18px; line-height:1.15; color:rgba(255,255,255,.62); text-align:right; padding-top:6px; }
#vv-footer-contact .vv-footer-stack{ display:grid; gap:10px; }
#vv-footer-contact .vv-footer-col{ border-radius:18px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.05); box-shadow: 0 10px 28px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.06); overflow:hidden; position:relative; }
#vv-footer-contact .vv-footer-toggle{ width:100%; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 14px; background:transparent; border:0; color:inherit; cursor:pointer; text-align:left; }
#vv-footer-contact .vv-footer-label{ display:grid; gap:2px; }
#vv-footer-contact .vv-footer-kicker{ font-family:var(--vv-font-body); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.56); }
#vv-footer-contact .vv-footer-title{ font-family:var(--vv-font-subtitle); font-size:24px; line-height:1; color:rgba(255,255,255,.92); }
#vv-footer-contact .vv-footer-icon{ width:32px; height:32px; border-radius:10px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.04); display:inline-flex; align-items:center; justify-content:center; color:rgba(255,255,255,.84); flex:0 0 auto; font-size:15px; }
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
#vv-footer-contact .vv-footer-form button{ padding:11px 14px; border-radius:13px; border:1px solid rgba(100,155,255,.25); background:linear-gradient(rgba(0,0,0,1), rgba(100,155,255,1)); color:rgba(255,255,255,.94); font-weight:700; cursor:pointer; font-size:18px; font-family:var(--vv-font-title); }
#vv-footer-contact .vv-footer-status{ display:none; padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.10); background:rgba(0,0,0,.18); color:rgba(255,255,255,.80); font-size:18px; line-height:1.15; font-family:var(--vv-font-body); }
#vv-footer-contact .vv-footer-bottom{ display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; padding-top:10px; border-top:1px solid rgba(255,255,255,.08); }
#vv-footer-contact .vv-footer-copy{ font-family:var(--vv-font-body); font-size:18px; line-height:1.1; color:rgba(255,255,255,.64); }
#vv-footer-contact .vv-footer-legal{ display:flex; gap:8px; flex-wrap:wrap; }
#vv-footer-contact .vv-footer-legal a{ text-decoration:none; padding:8px 10px; border-radius:12px; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.03); color:rgba(255,255,255,.76); font-family:var(--vv-font-body); font-size:17px; line-height:1.1; }

@media (max-width:900px){
  #vv-sec-contact-hero, #vv-sec-contact-intake, #vv-sec-contact-nextsteps{ --vv-title:clamp(38px, 7.2vw, 72px); --vv-subtitle:clamp(22px, 3.8vw, 36px); --vv-body:clamp(16px, 2.6vw, 24px); }
  #vv-sec-contact-hero.vv-sec, #vv-sec-contact-intake, #vv-sec-contact-nextsteps[data-pop="true"]{ padding-left:18px !important; padding-right:18px !important; }
  #vv-header{ left:50% !important; right:auto !important; width:calc(100% - 24px) !important; transform:translateX(-50%) !important; top:calc(12px + env(safe-area-inset-top)) !important; }
  .vv-nav, .vv-cta{ display:none; }
  .vv-burger{ display:inline-flex; }
  .vv-logo{ height:44px; }
  .vv-header-inner{ padding:12px 14px; min-height:64px; }
  #vv-sec-contact-hero.vv-sec{ width:min(100%, calc(100% - 24px)); border-radius:22px; padding:22px; }
  #vv-sec-contact-hero .vv-grid{ grid-template-columns:1fr; }
  #vv-sec-contact-intake{ width:min(100%, calc(100% - 24px)); border-radius:22px; padding:22px; }
  #vv-sec-contact-intake .vv-row{ grid-template-columns:1fr; }
  #vv-sec-contact-intake .vv-checkgrid, #vv-sec-contact-intake .vv-checkgrid.is-5, #vv-sec-contact-intake .vv-checkgrid.is-6{ grid-template-columns:1fr; }
  #vv-sec-contact-intake .vv-step2-panel{ max-height:88vh; }
  #vv-sec-contact-intake .vv-step2-body{ max-height:calc(88vh - 74px); }
  #vv-sec-contact-nextsteps[data-pop="true"]{ padding:12px; }
  #vv-sec-contact-nextsteps .vv-timeline{ grid-template-columns:1fr; }
  #vv-sec-contact-nextsteps .vv-step{ min-height:unset; }
  #vv-footer-contact{ width:min(100%, calc(100% - 24px)); padding:16px; border-radius:20px; margin:18px auto 24px; }
  #vv-footer-contact .vv-footer-top{ flex-direction:column; gap:8px; }
  #vv-footer-contact .vv-footer-note{ max-width:none; text-align:left; padding-top:0; }
  #vv-footer-contact .vv-footer-linksInner{ grid-template-columns:repeat(2, minmax(0, 1fr)); }
  #vv-footer-contact .vv-footer-signal{ grid-template-columns:1fr; align-items:start; }
  #vv-footer-contact .vv-footer-form{ flex-direction:column; align-items:stretch; }
  #vv-footer-contact .vv-footer-form input[type="email"], #vv-footer-contact .vv-footer-form button{ width:100%; }
  #vv-footer-contact .vv-footer-bottom{ flex-direction:column; align-items:flex-start; }
}

@media (max-width:420px){
  #vv-header{ width:calc(100% - 16px); }
  .vv-header-inner{ padding:10px 12px; }
  .vv-burger{ width:42px; height:42px; }
  .vv-mobile a{ font-size:17px; padding:14px 10px; }
  #vv-footer-contact{ width:calc(100% - 16px); padding:14px; }
}

@media (prefers-reduced-motion: reduce){
  .vv-nav a, .vv-cta, .vv-burger-lines, .vv-burger-lines::before, .vv-burger-lines::after, .vv-mobile-overlay, .vv-mobile{ transition:none !important; }
  #vv-sec-contact-intake .vv-step2-panel{ animation:none !important; }
}
</style>

<section class="vv-sec vv-contact-hero" id="vv-sec-contact-hero">
  <div class="vv-auras" aria-hidden="true"></div>
  <div class="vv-stack">
    <div class="vv-grid">
      <div class="vv-stack">
        <h1>Blueprint Intake</h1>
        <p class="vv-sub">Give us real context — goal, constraints, links, and what’s stuck. We diagnose first, then design the cleanest build path.</p>
        <p class="vv-note">This isn’t “tell us your idea.” It’s “hand us the variables.”</p>
        <div class="vv-ctas">
          <a class="vv-btn is-primary" href="#intake">Start the intake →</a>
          <a class="vv-btn" href="/services">View service paths →</a>
        </div>
        <div class="vv-micro">The clearer the intake, the faster the recommendation (and the less back-and-forth).</div>
      </div>
      <aside class="vv-card" aria-label="What you’ll receive">
        <h3>What you’ll receive</h3>
        <ul class="vv-list">
          <li><span class="vv-check"></span><span><b>A recommended path</b> (what we’d do first, and why).</span></li>
          <li><span class="vv-check"></span><span><b>Scope boundaries</b> (what to ignore so you don’t waste money).</span></li>
          <li><span class="vv-check"></span><span><b>Next actions</b> you can execute — with or without us.</span></li>
        </ul>
        <div style="margin-top:14px; opacity:.9;">
          <div style="font-family: var(--vv-font-body); font-size: var(--vv-body); color: rgba(255,255,255,0.72); line-height:1.25;">Typical turnaround: <b style="color: rgba(255,255,255,0.90); font-weight:700;">24–72 hours</b> after submission.</div>
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="vv-sec vv-contact-intake" id="vv-sec-contact-intake" data-step2="false">
  <div id="intake"></div>
  <div class="vv-stack">
    <h2 style="text-align:center;">Take the first step</h2>
    <p class="vv-sub" style="text-align:center; font-style:italic;">Our goal is speed through structure — not extra meetings.</p>
    <div class="vv-grid">
      <form id="vv-contact-form" data-endpoint="https://vodivus.app.n8n.cloud/webhook/vodivus-contact">
        <div class="vv-form-title">
          <h3></h3>
          <div class="vv-chip">Two-step</div>
        </div>

        <div class="vv-row">
          <div>
            <label class="vv-label" for="vv-name">Name</label>
            <input id="vv-name" name="name" type="text" autocomplete="name" required />
          </div>
          <div>
            <label class="vv-label" for="vv-email">Email</label>
            <input id="vv-email" name="email" type="email" autocomplete="email" required />
          </div>
        </div>

        <div>
          <label class="vv-label" for="vv-links">Links (site / docs / references)</label>
          <input id="vv-links" name="links" type="text" placeholder="Website, deck, doc links, examples, inspiration references…" />
        </div>

        <div>
          <label class="vv-label" for="vv-building">What are you building?</label>
          <textarea id="vv-building" name="building" placeholder="What is it? Who is it for? What does ‘done’ look like? (Links help.)"></textarea>
        </div>

        <div>
          <label class="vv-label" for="vv-blocker">Current bottleneck</label>
          <textarea id="vv-blocker" name="blocker" placeholder="What’s stuck right now? (Offer clarity, conversion, UX, automation, architecture, build plan, etc.)"></textarea>
        </div>

        <div class="vv-step1-actions">
          <div class="vv-stepHint">Next: choose path + budget + start date so we route you correctly.</div>
          <div class="vv-stepBtnRow">
            <button type="button" class="vv-btnGhost" data-vv-open-step2>Continue to Step 2 →</button>
          </div>
        </div>

        <div class="vv-step2-overlay" aria-hidden="true">
          <div class="vv-step2-panel" role="dialog" aria-modal="true" aria-label="Step 2: Path + budget + start date" tabindex="-1">
            <div class="vv-shard-fractures" aria-hidden="true"></div>
            <div class="vv-step2-top">
              <div class="vv-step2-title">
                <b>Step 2 — Choose your path</b>
                <span>These options help us route your intake correctly.</span>
              </div>
              <button class="vv-step2-close" type="button" aria-label="Close">
                <svg class="vv-step2-x" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" /></svg>
              </button>
            </div>

            <div class="vv-step2-body">
              <div class="vv-stepH" style="margin-top:60px;">What services are you interested in?</div>

              <div class="vv-checkgrid">
                <label class="vv-option"><input type="checkbox" data-toggle="#vv-reveal-b2b" aria-controls="vv-reveal-b2b" aria-expanded="false" name="interest_services[]" value="Business to Business" /><span>Business to Business</span></label>
                <label class="vv-option"><input type="checkbox" data-toggle="#vv-reveal-individual" aria-controls="vv-reveal-individual" aria-expanded="false" name="interest_services[]" value="Individual Services" /><span>Individual Services</span></label>
                <label class="vv-option"><input type="checkbox" data-toggle="#vv-reveal-products" aria-controls="vv-reveal-products" aria-expanded="false" name="interest_services[]" value="Our Products" /><span>Our Products</span></label>
              </div>

              <div class="vv-reveal" id="vv-reveal-b2b" data-open="false">
                <div class="vv-reveal-inner">
                  <div style="font-size: var(--vv-subtitle); line-height: 1.1; letter-spacing: 0.08em; color: rgba(255, 255, 255, 0.86); text-shadow: var(--vv-title-shadow); font-family: var(--vv-font-subtitle); font-weight: 400;">Business to Business</div>
                  <div class="vv-checkgrid">
                    <label class="vv-option"><input type="checkbox" name="service_interest_b2b[]" value="Workflow Automation" /><span>Workflow Automation</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_b2b[]" value="Asset Management" /><span>Asset Management</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_b2b[]" value="Project Management" /><span>Project Management</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_b2b[]" value="AI Implementation" /><span>AI Implementation</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_b2b[]" value="Database" /><span>Database Engineering</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_b2b[]" value="Custom Solution" /><span>Custom Solutions</span></label>
                  </div>
                </div>
              </div>

              <div class="vv-reveal" id="vv-reveal-individual" data-open="false">
                <div class="vv-reveal-inner">
                  <div style="font-size: var(--vv-subtitle); line-height: 1.1; letter-spacing: 0.08em; color: rgba(255, 255, 255, 0.86); text-shadow: var(--vv-title-shadow); font-family: var(--vv-font-subtitle); font-weight: 400;">Individual Services</div>
                  <div class="vv-checkgrid is-5">
                    <label class="vv-option"><input type="checkbox" name="service_interest_individual[]" value="Venture Consultation" /><span>Venture Consultation</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_individual[]" value="Venture Support" /><span>Venture Support</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_individual[]" value="Artist Consultation" /><span>Artist Consultation</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_individual[]" value="Business Maturity" /><span>Business Maturity</span></label>
                    <label class="vv-option"><input type="checkbox" name="service_interest_individual[]" value="Master Class" /><span>Master Class</span></label>
                  </div>
                </div>
              </div>

              <div class="vv-reveal" id="vv-reveal-products" data-open="false">
                <div class="vv-reveal-inner">
                  <div style="font-size: var(--vv-subtitle); line-height: 1.1; letter-spacing: 0.08em; color: rgba(255, 255, 255, 0.86); text-shadow: var(--vv-title-shadow); font-family: var(--vv-font-subtitle); font-weight: 400;">What interests you?</div>
                  <div class="vv-checkgrid is-6">
                    <label class="vv-option"><input type="checkbox" name="interests[]" value="The Game" /><span>The<br> Game</span></label>
                    <label class="vv-option"><input type="checkbox" name="interests[]" value="The Experience" /><span>The<br> Experience</span></label>
                    <label class="vv-option"><input type="checkbox" name="interests[]" value="The Mission Post" /><span>The<br> Mission Post</span></label>
                    <label class="vv-option"><input type="checkbox" name="interests[]" value="The Pantheon" /><span>The<br> Pantheon</span></label>
                    <label class="vv-option"><input type="checkbox" name="interests[]" value="The Codex Items" /><span>The<br> Codex Items</span></label>
                    <label class="vv-option"><input type="checkbox" name="interests[]" value="The Dungeon" /><span>The<br> Dungeon</span></label>
                  </div>
                </div>
              </div>

              <div class="vv-help">Each selection reveals the matching options below.</div>

              <div class="vv-stepH" style="margin-top:60px;">Budget</div>
              <div class="vv-checkgrid is-5">
                <label class="vv-option"><input type="checkbox" name="budget[]" value="<500" /><span>&lt; $ 500</span></label>
                <label class="vv-option"><input type="checkbox" name="budget[]" value="500-1000" /><span>$ 500 - $ 1,000</span></label>
                <label class="vv-option"><input type="checkbox" name="budget[]" value=">2500" /><span>$ 2,500 +</span></label>
                <label class="vv-option"><input type="checkbox" name="budget[]" value="25/mo" /><span>$ 25/mo</span></label>
                <label class="vv-option"><input type="checkbox" name="budget[]" value="200/mo" /><span>$ 200/mo</span></label>
              </div>

              <div class="vv-stepH" style="margin-top:60px;">Project start date</div>

              <div id="vv-vcal" class="vv-vcal">
                <div class="vv-vcal-field">
                  <input id="vv-vcal-display" class="vv-vcal-input" type="text" inputmode="none" autocomplete="off" placeholder="Select a date" aria-haspopup="dialog" aria-expanded="false" readonly />
                  <button class="vv-vcal-iconBtn" type="button" aria-label="Open calendar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 2v3M17 2v3M3.5 9h17M5 6h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg></button>
                  <input id="vv-startdate" name="project_start_date" type="hidden" value="" />
                </div>

                <div class="vv-vcal-overlay" aria-hidden="true">
                  <div class="vv-vcal-shard" role="dialog" aria-modal="true" aria-label="Select a date" tabindex="-1">
                    <div class="vv-vcal-shardTop">
                      <div class="vv-vcal-titleWrap">
                        <div class="vv-vcal-title">Select start date</div>
                        <div class="vv-vcal-sub">Stored clean for automation (YYYY-MM-DD).</div>
                      </div>
                      <button class="vv-vcal-close" type="button" aria-label="Close calendar"><svg class="vv-vcal-x" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" /></svg></button>
                    </div>

                    <div class="vv-vcal-controls">
                      <button class="vv-vcal-nav" type="button" data-nav="prev" aria-label="Previous month">‹</button>
                      <div class="vv-vcal-month">
                        <div class="vv-vcal-monthName" aria-live="polite">Month YYYY</div>
                        <div class="vv-vcal-monthMeta">
                          <button class="vv-vcal-mini" type="button" data-nav="today">Today</button>
                          <button class="vv-vcal-mini" type="button" data-nav="clear">Clear</button>
                        </div>
                      </div>
                      <button class="vv-vcal-nav" type="button" data-nav="next" aria-label="Next month">›</button>
                    </div>

                    <div class="vv-vcal-dow" aria-hidden="true"><div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div></div>
                    <div class="vv-vcal-grid" role="grid" aria-label="Calendar days"></div>
                    <div class="vv-vcal-footer">
                      <div class="vv-vcal-picked"><span class="vv-vcal-pickedLabel">Selected:</span><span class="vv-vcal-pickedValue">—</span></div>
                      <button class="vv-vcal-apply" type="button">Apply</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="vv-step2-actions">
                <button type="button" class="vv-btnGhost" data-vv-close-step2>Back</button>
                <div class="vv-stepHint">When ready, submit your intake for review.</div>
                <button type="submit">Submit intake</button>
              </div>

              <div class="vv-legal" style="margin-top:8px;">
                <div id="vv-form-status" aria-live="polite"></div>
                <br>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

<section class="vv-sec vv-contact-nextsteps" id="vv-sec-contact-nextsteps" data-pop="false">
  <div style="text-align:center;" class="vv-pop-panel" role="dialog" aria-modal="true" aria-label="What happens next" tabindex="-1">
    <div class="vv-pop-topbar"><button class="vv-pop-close" type="button" data-vv-next-close>Close ✕</button></div>
    <div class="vv-stack">
      <h2>What happens next</h2>
      <p class="vv-sub">No black box. No “we’ll circle back.” Here’s the actual flow after your Blueprint Intake lands.</p>
      <div class="vv-timeline" aria-label="Next steps timeline">
        <article class="vv-step"><div class="vv-topline"><div class="vv-num">Step 01</div><div class="vv-eta">Usually: within 24–72 hrs</div></div><h3>We review your context</h3><p>We read what you sent, scan links, and identify the real bottleneck (offer clarity, platform flow, or brand coherence).</p><ul class="vv-bullets"><li><span class="vv-check"></span><span>We identify what matters most right now</span></li><li><span class="vv-check"></span><span>We flag missing info (if needed)</span></li><li><span class="vv-check"></span><span>We prep a recommended path + scope</span></li></ul></article>
        <article class="vv-step"><div class="vv-topline"><div class="vv-num">Step 02</div><div class="vv-eta">Then: a short call</div></div><h3>Venture Conversation</h3><p>We align on the target, constraints, and the next phase. This is diagnosis + design — not a sales monologue.</p><ul class="vv-bullets"><li><span class="vv-check"></span><span>We agree on “done” and success criteria</span></li><li><span class="vv-check"></span><span>We define scope boundaries (what’s in / out)</span></li><li><span class="vv-check"></span><span>You leave with a clear plan either way</span></li></ul></article>
        <article class="vv-step"><div class="vv-topline"><div class="vv-num">Step 03</div><div class="vv-eta">If it’s a fit: we ship</div></div><h3>Plan → build → handoff</h3><p>We execute in slices. You get real deliverables and documentation so the system stays maintainable as you grow.</p><ul class="vv-bullets"><li><span class="vv-check"></span><span>Build artifacts (pages, copy, systems, docs)</span></li><li><span class="vv-check"></span><span>Review + refine (based on real constraints)</span></li><li><span class="vv-check"></span><span>Handoff notes + next-phase roadmap</span></li></ul></article>
      </div>
      <div class="vv-expect"><b>Expectations:</b> If you submit a vague intake (“I want a website”), we’ll ask clarifying questions. If you submit a clear intake (goal, constraints, links), we can usually recommend a path and scope fast. Either way, we aim for clarity — not complexity theatre.</div>
    </div>
  </div>
</section>

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

<span class="vv-fontload">Cinzel Decorative Cormorant Garamond Inter</span>
`;

export const HEADER_SCRIPT = `(function(){
  var header = document.getElementById("vv-header");
  var burger = document.getElementById("vv-burger");
  var overlay = document.getElementById("vv-overlay");
  var panel = document.getElementById("vv-mobile");
  var closeBtn = document.getElementById("vv-close");
  if(!header || !burger || !overlay || !panel) return;
  var lockedScrollY = 0;
  function lockScroll(){ lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0; document.body.style.position = "fixed"; document.body.style.top = "-" + lockedScrollY + "px"; document.body.style.left = "0"; document.body.style.right = "0"; document.body.style.width = "100%"; }
  function unlockScroll(){ document.body.style.position = ""; document.body.style.top = ""; document.body.style.left = ""; document.body.style.right = ""; document.body.style.width = ""; window.scrollTo(0, lockedScrollY); }
  function setExpanded(isOpen){ burger.setAttribute("aria-expanded", String(isOpen)); overlay.setAttribute("aria-hidden", String(!isOpen)); }
  function openMenu(){ if(header.classList.contains("open")) return; header.classList.add("open"); setExpanded(true); lockScroll(); }
  function closeMenu(){ if(!header.classList.contains("open")) return; header.classList.remove("open"); setExpanded(false); unlockScroll(); }
  burger.addEventListener("click", function(){ header.classList.contains("open") ? closeMenu() : openMenu(); });
  overlay.addEventListener("click", closeMenu);
  if(closeBtn) closeBtn.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") closeMenu(); });
  panel.addEventListener("click", function(e){ var a = e.target && e.target.closest ? e.target.closest("a") : null; if(a) closeMenu(); });
})();`;

export const CONTACT_SCRIPT = `(function () {
  const onReady = (fn) => { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn, { once: true }); else fn(); };
  onReady(() => {
    const root = document.getElementById("vv-sec-contact-intake");
    if (!root) return;
    const form = root.querySelector("#vv-contact-form");
    if (!form) return;
    let vvScrollTop = 0;
    let vvPrevBody = null;
    function vvLockScroll() {
      const body = document.body;
      vvScrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      vvPrevBody = { position: body.style.position, top: body.style.top, left: body.style.left, right: body.style.right, width: body.style.width, paddingRight: body.style.paddingRight };
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarW > 0) body.style.paddingRight = scrollbarW + "px";
      body.style.position = "fixed"; body.style.top = -vvScrollTop + "px"; body.style.left = "0"; body.style.right = "0"; body.style.width = "100%";
    }
    function vvUnlockScroll() {
      const body = document.body;
      if (vvPrevBody) {
        body.style.position = vvPrevBody.position || "";
        body.style.top = vvPrevBody.top || "";
        body.style.left = vvPrevBody.left || "";
        body.style.right = vvPrevBody.right || "";
        body.style.width = vvPrevBody.width || "";
        body.style.paddingRight = vvPrevBody.paddingRight || "";
      } else {
        body.style.position = ""; body.style.top = ""; body.style.left = ""; body.style.right = ""; body.style.width = ""; body.style.paddingRight = "";
      }
      window.scrollTo(0, vvScrollTop);
    }
    function vvGetFocusables(container) {
      return Array.from(container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')).filter((el) => el.offsetParent !== null);
    }
    function vvTrapTab(e, container) {
      if (e.key !== "Tab") return;
      const items = vvGetFocusables(container);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    const openStep2Btn = form.querySelector("[data-vv-open-step2]");
    const step2Overlay = root.querySelector(".vv-step2-overlay");
    const step2Panel = root.querySelector(".vv-step2-panel");
    const step2CloseX = root.querySelector(".vv-step2-close");
    const step2BackBtn = root.querySelector("[data-vv-close-step2]");
    let lastFocusStep2 = null;

    const setStep2FromClickOrigin = () => {
      const originEl = openStep2Btn || form.querySelector("[data-vv-open-step2]");
      if (!originEl) return;
      const rect = originEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const dx = cx - vw / 2;
      const dy = cy - vh / 2;
      root.style.setProperty("--vv-step2-from-x", dx.toFixed(2) + "px");
      root.style.setProperty("--vv-step2-from-y", dy.toFixed(2) + "px");
      root.style.setProperty("--vv-step2-from-s", "0.86");
    };

    const openStep2 = () => {
      const nameEl = form.querySelector("#vv-name");
      const emailEl = form.querySelector("#vv-email");
      if (nameEl && typeof nameEl.reportValidity === "function" && !nameEl.reportValidity()) return;
      if (emailEl && typeof emailEl.reportValidity === "function" && !emailEl.reportValidity()) return;
      lastFocusStep2 = document.activeElement;
      setStep2FromClickOrigin();
      root.setAttribute("data-step2", "true");
      if (step2Overlay) step2Overlay.setAttribute("aria-hidden", "false");
      vvLockScroll();
      setTimeout(() => { if (step2Panel) step2Panel.focus({ preventScroll: true }); }, 60);
    };

    const closeStep2 = () => {
      if (!step2Panel) {
        root.setAttribute("data-step2", "false");
        if (step2Overlay) step2Overlay.setAttribute("aria-hidden", "true");
        vvUnlockScroll();
        if (lastFocusStep2 && typeof lastFocusStep2.focus === "function") { lastFocusStep2.focus({ preventScroll: true }); }
        return;
      }
      setStep2FromClickOrigin();
      step2Panel.classList.add("vv-step2-exiting");
      window.setTimeout(() => {
        step2Panel.classList.remove("vv-step2-exiting");
        root.setAttribute("data-step2", "false");
        if (step2Overlay) step2Overlay.setAttribute("aria-hidden", "true");
        vvUnlockScroll();
        if (lastFocusStep2 && typeof lastFocusStep2.focus === "function") { lastFocusStep2.focus({ preventScroll: true }); }
      }, 260);
    };

    if (openStep2Btn) openStep2Btn.addEventListener("click", openStep2);
    if (step2CloseX) step2CloseX.addEventListener("click", closeStep2);
    if (step2BackBtn) step2BackBtn.addEventListener("click", closeStep2);
    if (step2Overlay) step2Overlay.addEventListener("click", (e) => { if (e.target === step2Overlay) closeStep2(); });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && root.getAttribute("data-step2") === "true") { e.preventDefault(); closeStep2(); return; }
      if (root.getAttribute("data-step2") === "true" && step2Panel) vvTrapTab(e, step2Panel);
    });

    window.addEventListener("resize", () => { if (root.getAttribute("data-step2") === "true") setStep2FromClickOrigin(); });

    const toggles = root.querySelectorAll('input[type="checkbox"][data-toggle]');
    const setOpen = (toggleEl, open) => {
      const targetSel = toggleEl.getAttribute("data-toggle");
      const panel = root.querySelector(targetSel);
      if (!panel) return;
      panel.setAttribute("data-open", open ? "true" : "false");
      toggleEl.setAttribute("aria-expanded", open ? "true" : "false");
      if (!open) panel.querySelectorAll('input[type="checkbox"]').forEach((cb) => { cb.checked = false; });
    };
    toggles.forEach((t) => { setOpen(t, t.checked); t.addEventListener("change", () => setOpen(t, t.checked)); });

    (function initVodivusCalendar() {
      const cal = root.querySelector("#vv-vcal");
      if (!cal) return;
      const inputDisplay = cal.querySelector("#vv-vcal-display");
      const inputIso = cal.querySelector("#vv-startdate");
      const overlay = cal.querySelector(".vv-vcal-overlay");
      const shard = cal.querySelector(".vv-vcal-shard");
      const grid = cal.querySelector(".vv-vcal-grid");
      const monthName = cal.querySelector(".vv-vcal-monthName");
      const pickedValue = cal.querySelector(".vv-vcal-pickedValue");
      const closeBtn = cal.querySelector(".vv-vcal-close");
      const iconBtn = cal.querySelector(".vv-vcal-iconBtn");
      const applyBtn = cal.querySelector(".vv-vcal-apply");
      const navBtns = cal.querySelectorAll("[data-nav]");

      let view = new Date(); view.setDate(1); view.setHours(12, 0, 0, 0);
      let selected = null; let tempSelected = null; let lastFocusEl = null;
      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const pad2 = (n) => (n < 10 ? "0" : "") + n;
      const toISO = (d) => d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
      const pretty = (d) => months[d.getMonth()].slice(0, 3) + " " + d.getDate() + ", " + d.getFullYear();
      const sameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
      const atNoon = (y, m, day) => new Date(y, m, day, 12, 0, 0, 0);

      function setFromClickOrigin() {
        const rect = inputDisplay.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const dx = cx - vw / 2;
        const dy = cy - vh / 2;
        cal.style.setProperty("--vv-from-x", dx.toFixed(2) + "px");
        cal.style.setProperty("--vv-from-y", dy.toFixed(2) + "px");
        cal.style.setProperty("--vv-from-s", "0.90");
      }

      function render() {
        monthName.textContent = months[view.getMonth()] + " " + view.getFullYear();
        pickedValue.textContent = tempSelected ? pretty(tempSelected) + "  •  " + toISO(tempSelected) : "—";
        grid.innerHTML = "";
        const year = view.getFullYear();
        const month = view.getMonth();
        const first = new Date(year, month, 1, 12, 0, 0, 0);
        const startDow = first.getDay();
        const daysInMonth = new Date(year, month + 1, 0, 12, 0, 0, 0).getDate();
        const prevDays = new Date(year, month, 0, 12, 0, 0, 0).getDate();
        const now = new Date();
        const today = atNoon(now.getFullYear(), now.getMonth(), now.getDate());

        for (let i = 0; i < 42; i++) {
          const dayNum = i - startDow + 1;
          let d;
          let isOut = false;
          if (dayNum < 1) { d = atNoon(year, month - 1, prevDays + dayNum); isOut = true; }
          else if (dayNum > daysInMonth) { d = atNoon(year, month + 1, dayNum - daysInMonth); isOut = true; }
          else { d = atNoon(year, month, dayNum); }
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "vv-vcal-day" + (isOut ? " is-out" : "");
          btn.textContent = d.getDate();
          if (sameDay(d, today)) btn.classList.add("is-today");
          if (tempSelected && sameDay(d, tempSelected)) btn.classList.add("is-selected");
          btn.addEventListener("click", () => { tempSelected = new Date(d.getTime()); render(); btn.focus(); });
          grid.appendChild(btn);
        }
      }

      function open() {
        lastFocusEl = document.activeElement;
        setFromClickOrigin();
        cal.classList.add("vv-open");
        inputDisplay.setAttribute("aria-expanded", "true");
        overlay.setAttribute("aria-hidden", "false");
        tempSelected = selected ? new Date(selected.getTime()) : null;
        if (tempSelected) { view = new Date(tempSelected.getTime()); view.setDate(1); view.setHours(12, 0, 0, 0); }
        render();
        setTimeout(() => shard.focus({ preventScroll: true }), 30);
      }

      function close() {
        cal.classList.remove("vv-open");
        inputDisplay.setAttribute("aria-expanded", "false");
        overlay.setAttribute("aria-hidden", "true");
        if (lastFocusEl && lastFocusEl.focus) lastFocusEl.focus({ preventScroll: true });
        else inputDisplay.focus({ preventScroll: true });
      }
      function shiftMonth(delta) { view = new Date(view.getFullYear(), view.getMonth() + delta, 1, 12, 0, 0, 0); render(); }
      function setToday() { const n = new Date(); tempSelected = atNoon(n.getFullYear(), n.getMonth(), n.getDate()); view = new Date(tempSelected.getFullYear(), tempSelected.getMonth(), 1, 12, 0, 0, 0); render(); }
      function clear() { tempSelected = null; render(); }
      function apply() {
        selected = tempSelected ? new Date(tempSelected.getTime()) : null;
        if (selected) { inputIso.value = toISO(selected); inputDisplay.value = pretty(selected); }
        else { inputIso.value = ""; inputDisplay.value = ""; }
        inputIso.dispatchEvent(new Event("input", { bubbles: true }));
        inputIso.dispatchEvent(new Event("change", { bubbles: true }));
        close();
      }

      inputDisplay.addEventListener("click", open);
      iconBtn.addEventListener("click", open);
      closeBtn.addEventListener("click", close);
      overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
      applyBtn.addEventListener("click", apply);
      navBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const nav = btn.getAttribute("data-nav");
          if (nav === "prev") shiftMonth(-1);
          if (nav === "next") shiftMonth(1);
          if (nav === "today") setToday();
          if (nav === "clear") clear();
        });
      });

      document.addEventListener("keydown", (e) => {
        if (!cal.classList.contains("vv-open")) return;
        if (e.key === "Escape") { e.preventDefault(); close(); return; }
        if (shard) vvTrapTab(e, shard);
      });

      window.addEventListener("resize", () => { if (cal.classList.contains("vv-open")) setFromClickOrigin(); });

      const iso = (inputIso.value || "").trim();
      const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (m) { selected = atNoon(+m[1], +m[2] - 1, +m[3]); inputDisplay.value = pretty(selected); }
    })();

    const endpoint = form.getAttribute("data-endpoint");
    const submitBtn = root.querySelector('.vv-step2-actions button[type="submit"]');
    const status = root.querySelector("#vv-form-status");
    const nextSteps = document.getElementById("vv-sec-contact-nextsteps");

    const setStatus = (msg, mode) => {
      if (!status) return;
      status.style.display = "block";
      status.textContent = msg;
      if (mode === "ok") { status.style.borderColor = "rgba(100, 155, 255,0.22)"; status.style.boxShadow = "0 0 0 3px rgba(100, 155, 255,0.08)"; }
      else if (mode === "err") { status.style.borderColor = "rgba(255,215,0,0.22)"; status.style.boxShadow = "0 0 0 3px rgba(255,215,0,0.08)"; }
      else { status.style.borderColor = "rgba(255,255,255,0.12)"; status.style.boxShadow = "none"; }
    };

    let lastFocusedEl = null;
    const openNextSteps = () => {
      if (!nextSteps) return;
      lastFocusedEl = document.activeElement;
      nextSteps.setAttribute("data-pop", "true");
      vvLockScroll();
      const closeBtn = nextSteps.querySelector("[data-vv-next-close]");
      if (closeBtn) closeBtn.focus({ preventScroll: true });
    };

    const closeNextSteps = () => {
      if (!nextSteps) return;
      nextSteps.setAttribute("data-pop", "false");
      vvUnlockScroll();
      if (lastFocusedEl && typeof lastFocusedEl.focus === "function") lastFocusedEl.focus({ preventScroll: true });
    };

    if (nextSteps && !nextSteps.dataset.vvBound) {
      nextSteps.dataset.vvBound = "true";
      const closeBtn = nextSteps.querySelector("[data-vv-next-close]");
      if (closeBtn) closeBtn.addEventListener("click", closeNextSteps);
      nextSteps.addEventListener("click", (e) => {
        const panel = nextSteps.querySelector(".vv-pop-panel");
        if (panel && !panel.contains(e.target)) closeNextSteps();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nextSteps.getAttribute("data-pop") === "true") { closeNextSteps(); return; }
        if (nextSteps.getAttribute("data-pop") === "true") {
          const panel = nextSteps.querySelector(".vv-pop-panel");
          if (panel) vvTrapTab(e, panel);
        }
      });
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (root.getAttribute("data-step2") !== "true") { openStep2(); return; }
      if (typeof form.reportValidity === "function" && !form.reportValidity()) { setStatus("Missing info — check required fields and submit again.", "err"); return; }
      if (!endpoint) { setStatus("Submission endpoint is missing. Please try again later.", "err"); return; }
      const originalBtn = submitBtn ? submitBtn.textContent : null;
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Submitting…"; }
      setStatus("Submitting your intake…", "info");

      try {
        const fd = new FormData(form);
        fd.append("submitted_at", new Date().toISOString());
        fd.append("page", window.location.href);
        const res = await fetch(endpoint, { method: "POST", body: fd });
        if (!res.ok) throw new Error("Server responded " + res.status);
        setStatus("Submitted. We’ll review your context and follow up by email with the best path + next actions.", "ok");
        form.reset();
        root.querySelectorAll(".vv-reveal").forEach((el) => el.setAttribute("data-open", "false"));
        root.querySelectorAll("input[data-toggle]").forEach((t) => t.setAttribute("aria-expanded", "false"));
        const calDisplay = root.querySelector("#vv-vcal-display");
        const calIso = root.querySelector("#vv-startdate");
        if (calDisplay) calDisplay.value = "";
        if (calIso) calIso.value = "";
        closeStep2();
        setTimeout(openNextSteps, 300);
      } catch (err) {
        console.error("[Vodivus] Submit failed:", err);
        setStatus("Transmission hiccup. Please try again — if it keeps failing, email us directly.", "err");
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalBtn || "Submit intake"; }
      }
    });
  });
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
