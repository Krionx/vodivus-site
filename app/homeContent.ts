export const HOME_HTML = String.raw`
<style>
body .vv-header { display: none !important; }
body .vv-footer { display: none !important; }
#vv-header { display: block !important; }
</style>

<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@400;500;600&display=swap" rel="stylesheet">

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

      <a href="/contact" class="vv-cta">Book your Consultation →</a>

      <button class="vv-burger" id="vv-burger" type="button" aria-label="Open menu" aria-controls="vv-mobile" aria-expanded="false">
        <span class="vv-burger-lines" aria-hidden="true"></span>
      </button>
    </div>
  </div>

  <div class="vv-mobile-overlay" id="vv-overlay" aria-hidden="true"></div>

  <div class="vv-mobile" id="vv-mobile" role="navigation" aria-label="Mobile" aria-hidden="true">
    <div class="vv-mobile-head">
      <span class="vv-mobile-title">Menu</span>
      <button class="vv-mobile-close" id="vv-close" type="button" aria-label="Close menu">×</button>
    </div>

    <a href="/services">Services</a>
    <a href="/about">About</a>
    <a href="/contact" class="is-primary">Start a venture conversation →</a>
  </div>
</header>

<style>
:root{
  --vv-gold-rgb: 235, 193, 118;
  --vv-gold-a: 1;
  --vv-gold-stop: 60%;
  --vv-gold-size: 700px 700px;
  --vv-gold-pos: 110% -10%;
}
:root{
  --vv-gold-radial: radial-gradient(var(--vv-gold-size) at var(--vv-gold-pos), rgba(var(--vv-gold-rgb), var(--vv-gold-a)) 0%, transparent var(--vv-gold-stop));
}

html, body{ overflow-x: hidden; }
#vv-header, #vv-header *{ box-sizing: border-box; }

#vv-header{
  position: absolute;
  top: calc(18px + env(safe-area-inset-top));
  left: 0;
  right: 0;
  margin: 0 auto;
  --vv-max: 1200px;
  --vv-edge: 32px;
  width: min(var(--vv-max), calc(100vw - (var(--vv-edge) * 2)));
  z-index: 999999 !important;
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
  background: radial-gradient(circle at 20% 0%, rgba(100, 155, 255,.08), transparent 65%), linear-gradient(rgba(100, 155, 255,.55) 5%, rgba(0, 0, 0,1) 45%);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(69,94,130,1);
  box-shadow: 0 18px 60px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.06);
}

.vv-logo{ height: 56px; width: auto; display: block; filter: drop-shadow(0 0 10px rgba(100, 155, 255,.15)) drop-shadow(0 0 18px rgba(217, 182, 100,.10)); }
.vv-right{ display: flex; align-items: center; gap: 18px; }
.vv-nav{ display: flex; gap: 20px; }
.vv-nav a{ font-family: "Cinzel", serif; font-size: 24px; letter-spacing: .02em; color: rgba(255,255,255,.72); text-decoration: none; padding: 10px 14px; border-radius: 12px; }
.vv-nav a:hover{ color: rgba(255,255,255,.94); background: rgba(255,255,255,.06); transform: translateY(-1px); }

.vv-cta{ font-family: "Cormorant Garamond", serif; font-size: 20px; font-weight: 600; padding: 12px 18px; border-radius: 14px; border: 1px solid rgba(100, 155, 255,.28); color: rgba(255,255,255,.94); text-decoration: none; background: linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(100,155,255,0.6) 80%); }
.vv-cta:hover{ background: rgba(235, 193, 118, 0.5); }

.vv-burger{ display: none; width: 44px; height: 44px; align-items: center; justify-content: center; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.10); border-radius: 12px; cursor: pointer; }
.vv-burger-lines{ width: 22px; height: 2px; background: rgba(255,255,255,.94); display: block; position: relative; border-radius: 999px; }
.vv-burger-lines::before,.vv-burger-lines::after{ content: ""; position: absolute; width: 22px; height: 2px; background: rgba(255,255,255,.94); left: 0; border-radius: 999px; }
.vv-burger-lines::before{ top: -7px; }
.vv-burger-lines::after{ top: 7px; }
#vv-header.open .vv-burger-lines{ background: transparent; }
#vv-header.open .vv-burger-lines::before{ top: 0; transform: rotate(45deg); }
#vv-header.open .vv-burger-lines::after{ top: 0; transform: rotate(-45deg); }

.vv-mobile-overlay{ position: fixed; inset: 0; z-index: 999998; background: rgba(0,0,0,.55); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); opacity: 0; pointer-events: none; transition: opacity .25s cubic-bezier(.2,.8,.2,1); }
.vv-mobile{ position: fixed; z-index: 999999; top: calc(20px + env(safe-area-inset-top)); right: 0; width: 100%; max-height: calc(100vh - 20px - env(safe-area-inset-top) - env(safe-area-inset-bottom)); overflow: auto; display: flex; flex-direction: column; gap: 10px; padding: 14px; border-radius: 18px; background: radial-gradient(circle at 20% 0%, rgba(100, 155, 255,.08), transparent 60%), var(--vv-gold-radial), rgba(10,14,20,.90); border: 1px solid rgba(255,255,255,.10); box-shadow: 0 24px 80px rgba(0,0,0,.65); transform: translateY(-8px) scale(.98); opacity: 0; pointer-events: none; }
.vv-mobile-head{ display: flex; align-items: center; justify-content: space-between; gap: 10px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,.08); margin-bottom: 4px; }
.vv-mobile-title{ font-family: "Cinzel", serif; font-size: 18px; letter-spacing: .06em; color: rgba(255,255,255,.85); }
.vv-mobile-close{ width: 44px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,.10); background: rgba(255,255,255,.04); color: rgba(255,255,255,.92); font-size: 26px; line-height: 1; cursor: pointer; }
.vv-mobile a{ font-family: "Cormorant Garamond", serif; font-size: 18px; font-weight: 600; color: rgba(255,255,255,.92); text-decoration: none; padding: 14px 12px; border-radius: 14px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06); }
.vv-mobile a.is-primary{ border-color: rgba(100, 155, 255,.28); background: radial-gradient(circle at 30% 0%, rgba(100, 155, 255,.14), transparent 70%), rgba(255,255,255,.03); }
#vv-header.open .vv-mobile-overlay{ opacity: 1; pointer-events: auto; }
#vv-header.open .vv-mobile{ opacity: 1; pointer-events: auto; transform: translateY(0) scale(1); }

#vv-home{
  --vv-max: 1200px;
  --vv-frame: min(var(--vv-max), calc(100vw - 48px));
  --vv-pad: clamp(12px, 2vw, 20px);
  --vv-gap: clamp(14px, 2vw, 20px);
  --vv-radius: 22px;
  --vv-border: rgba(255, 255, 255, 0.16);
  --vv-text-primary: rgba(255, 255, 255, 0.96);
  --vv-text-secondary: rgba(255, 255, 255, 0.9);
  --vv-text-muted: rgba(255, 255, 255, 0.86);
  --vv-title: 64px;
  --vv-subtitle: 36px;
  --vv-body: 24px;
  --vv-title-glow: 0 0 2px rgba(100, 155, 255, .55), 0 0 12px rgba(100, 155, 255, .55), 0 0 12px rgba(100, 155, 255, .55);
  --vv-font-title: "Cinzel Decorative", serif;
  --vv-font-subtitle: "Cinzel Decorative", serif;
  --vv-font-body: "Cormorant Garamond", serif;
  --vvLogoOpacity: 1;
  --vvHeaderBottom: 200px;
  --vvHeroTop: 200px;
  --vvHeroLeft: 120px;
  --vvTopPocketH: 0px;
  --vv-home-top: clamp(100px, 16vw, 120px);
  --vv-hero-pocket: 300px;
  --vv-logo-max-w: 1400px;
  --vv-logo-shrink-w: 88%;
  --vv-logo-y-offset: 26px;
  --vvDoorW: clamp(200px, 36vw, 680px);
  --vvDoorKiss: -8px;
  font-family: var(--vv-font-body);
  overflow-x: clip;
  position: relative;
  z-index: 0;
  isolation: isolate;
  padding-top: var(--vv-home-top);
}

#vv-home, #vv-home *{ color: var(--vv-text-primary); box-sizing: border-box; max-width: 100%; }
#vv-home h1,#vv-home h2{ font-family: var(--vv-font-title); font-size: var(--vv-title); line-height: 1.06; color: rgba(255,255,255,1); text-shadow: var(--vv-title-glow); margin: 0 0 14px 0; font-weight: 600; }
#vv-home h3{ font-family: var(--vv-font-subtitle); font-size: var(--vv-subtitle); line-height: 1.12; color: rgba(255,255,255,0.98); margin: 0 0 10px 0; font-weight: 400; }
#vv-home p,#vv-home li,#vv-home span{ color: var(--vv-text-secondary) !important; font-family: var(--vv-font-body); font-size: var(--vv-body); line-height: 1.55; }
#vv-home .vv-note{ color: var(--vv-text-muted) !important; }
#vv-home .vv-container{ width: var(--vv-frame); margin-left: auto; margin-right: auto; position: relative; z-index: 2; }
#vv-home .vv-section,#vv-home .vv-section1{ margin-top: 22px; padding: var(--vv-pad); border-radius: var(--vv-radius); background: radial-gradient(700px 500px at 0% 100%, rgba(13, 36, 64, 1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%); border: 1px solid rgba(69,94,130,1); box-shadow: 0 18px 60px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08); }
#vv-home .vv-section1{ margin-top: 400px; padding-bottom: 0; background: radial-gradient(700px 500px at -10% 90%, rgba(13, 36, 64, 1), transparent 60%), var(--vv-gold-radial), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.36) 100%); }
#vv-home .vv-card{ border-radius: 22px; border: 1px solid var(--vv-border); background: rgba(255, 255, 255, 0.06); padding: 18px; min-width: 0; }
#vv-home .vv-btn{ display: inline-flex; align-items: center; justify-content: center; padding: 12px 18px; border-radius: 14px; border: 1px solid var(--vv-border); color: rgba(255, 255, 255, 1); text-decoration: none; font-weight: 600; background: rgba(69, 94, 135, 0.3); font-family: var(--vv-font-body); font-size: calc(var(--vv-body) * 0.85); min-height: 44px; }
#vv-home .vv-btn:hover{ background: rgba(235, 193, 118, 0.5); }
#vv-home .vv-btn-primary{ background: linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(100,155,255,0.6) 80%); border-color: rgba(100, 155, 255, 1); }

#vv-start-here{ width: var(--vv-frame); max-width: var(--vv-max); margin-top: var(--vv-hero-pocket); margin-left: auto; margin-right: auto; position: relative; }
#vv-home .vv-hero-grid{ display: grid; grid-template-columns: 1fr 2fr; align-items: start; gap: 10px 18px; }
#vv-home .vv-hero-title{ grid-column: 1 / -1; margin-bottom: 6px; text-align: center; }
#vv-home .vv-hero-sub{ grid-column: 1 / -1; max-width: 78ch; margin: 0 auto 8px auto; text-align: center; }
#vv-home .vv-hero-cta{ grid-column: 2; justify-self: end; align-self: start; display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 6px; padding-top: 6px; }

#vv-home .vv-left-door{ position: fixed; top: 50%; transform: translateY(-50%) translateZ(0); left: calc(var(--vvHeroLeft) - (var(--vvDoorW) * 0.60) + var(--vvDoorKiss)); width: var(--vvDoorW); pointer-events: none; z-index: 1; opacity: 0.94; }
#vv-home .vv-left-door img{ width: 100%; height: auto; display: block; object-fit: contain; }
#vv-home .vv-left-door .vv-door-dust{ position: absolute; top: -6%; bottom: -8%; left: 42%; right: 0%; overflow: visible; pointer-events: none; transform: translateY(20px); }
#vv-home .vv-left-door .vv-door-dust::before,
#vv-home .vv-left-door .vv-door-dust::after{
  content: "";
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}
#vv-home .vv-left-door .vv-door-dust::before{
  width: 44%;
  height: 74%;
  left: 30%;
  top: 12%;
  background: radial-gradient(closest-side, rgba(150, 210, 255, .28), rgba(150, 210, 255, 0));
  filter: blur(10px);
  animation: vv-door-haze 6.6s ease-in-out infinite;
}
#vv-home .vv-left-door .vv-door-dust::after{
  width: 26%;
  height: 100%;
  left: 37%;
  top: 5%;
  background: radial-gradient(closest-side, rgba(122, 195, 255, .45), rgba(122, 195, 255, 0));
  filter: blur(8px);
  animation: vv-door-haze 5.4s ease-in-out -1.8s infinite;
}
#vv-home .vv-left-door .vv-door-dust span{
  position: absolute;
  width: var(--size, 5px);
  height: var(--size, 5px);
  left: var(--x, 50%);
  top: var(--y, 50%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(214, 236, 255, .98) 0%, rgba(164, 212, 255, .78) 38%, rgba(115, 191, 255, .34) 68%, rgba(115, 191, 255, 0) 100%);
  box-shadow: 0 0 14px rgba(180, 225, 255, .95), 0 0 34px rgba(116, 194, 255, .55), 0 0 58px rgba(116, 194, 255, .26);
  mix-blend-mode: screen;
  opacity: .0;
  transform: translate3d(0, 0, 0) scale(.85);
  animation: vv-door-dust var(--dur, 5.4s) linear var(--delay, 0s) infinite;
}
#vv-home .vv-left-door .vv-door-dust span:nth-child(1){ --x: 26%; --y: 22%; --size: 3px; --dur: 5.6s; --delay: -1.4s; --dx: 40px; --dy: -12px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(2){ --x: 30%; --y: 34%; --size: 4px; --dur: 4.8s; --delay: -2.2s; --dx: 52px; --dy: -8px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(3){ --x: 28%; --y: 50%; --size: 3px; --dur: 6.2s; --delay: -3.8s; --dx: 34px; --dy: -2px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(4){ --x: 34%; --y: 28%; --size: 5px; --dur: 5.4s; --delay: -1.1s; --dx: 58px; --dy: -18px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(5){ --x: 36%; --y: 46%; --size: 3px; --dur: 6.0s; --delay: -4.1s; --dx: 46px; --dy: -4px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(6){ --x: 40%; --y: 38%; --size: 4px; --dur: 4.9s; --delay: -2.9s; --dx: 54px; --dy: -10px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(7){ --x: 32%; --y: 62%; --size: 3px; --dur: 5.8s; --delay: -0.6s; --dx: 44px; --dy: 4px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(8){ --x: 44%; --y: 56%; --size: 4px; --dur: 5.2s; --delay: -3.3s; --dx: 62px; --dy: 8px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(9){ --x: 24%; --y: 42%; --size: 3px; --dur: 4.7s; --delay: -2.0s; --dx: 48px; --dy: -6px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(10){ --x: 42%; --y: 30%; --size: 4px; --dur: 5.9s; --delay: -1.6s; --dx: 56px; --dy: -22px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(11){ --x: 38%; --y: 68%; --size: 3px; --dur: 6.4s; --delay: -4.5s; --dx: 42px; --dy: 14px; }
#vv-home .vv-left-door .vv-door-dust span:nth-child(12){ --x: 28%; --y: 74%; --size: 4px; --dur: 5.0s; --delay: -0.9s; --dx: 50px; --dy: 18px; }

@keyframes vv-door-dust{
  0%{ opacity: 0; transform: translate3d(-8px, 0, 0) scale(.62); }
  14%{ opacity: .98; }
  62%{ opacity: .55; }
  100%{ opacity: 0; transform: translate3d(var(--dx, 46px), var(--dy, -8px), 0) scale(1.18); }
}

@keyframes vv-door-haze{
  0%, 100%{ opacity: .45; transform: scale(1); }
  50%{ opacity: .78; transform: scale(1.08); }
}
#vv-home .vv-right-logo{ position: fixed; top: var(--vvHeaderBottom); left: 50%; transform: translateX(-50%) translateY(calc(var(--vv-logo-y-offset) + ((1 - var(--vvLogoOpacity, 1)) * 12px))) translateZ(0); width: min(var(--vv-frame), var(--vv-logo-max-w)); height: var(--vvTopPocketH); display: flex; justify-content: center; align-items: center; z-index: 1; pointer-events: none; opacity: var(--vvLogoOpacity, 1); }
#vv-home .vv-right-logo img{ width: min(var(--vv-logo-max-w), calc(var(--vv-frame) * var(--vv-logo-shrink-w))); max-width: 100%; max-height: 500px; display: block; }

#vv-lanes .vv-grid{ display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 12px; }
#vv-lanes .vv-lane{
  position: relative;
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}
#vv-lanes .vv-lane:hover{
  transform: translateY(-2px);
  border-color: rgba(128,194,255,.75);
  box-shadow: 0 22px 68px rgba(0,0,0,.72), 0 0 36px rgba(110,194,255,.24);
}
#vv-lanes .vv-lane:focus-visible{
  outline: none;
  border-color: rgba(163,214,255,.96);
  box-shadow: 0 0 0 2px rgba(163,214,255,.42), 0 0 40px rgba(110,194,255,.32);
}
#vv-lanes .vv-lane::after{
  content: "Click to expand";
  display: table;
  margin: 12px auto 0;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(163,214,255,.42);
  background: rgba(8,16,34,.6);
  color: rgba(224,242,255,.88);
  font-family: "Cormorant Garamond", serif;
  font-size: 16px;
  letter-spacing: .02em;
  transition: opacity 220ms ease, transform 220ms ease;
}
#vv-lanes .vv-lane.is-open::after{ content: "Click to collapse"; }
#vv-lanes .vv-more{ display: none; margin-top: 10px; }
#vv-lanes .vv-lane.is-open .vv-more{ display: block; }

#vv-home #vv-who .vv-more{ display: block; max-height: 0; overflow: hidden; opacity: 0; transform: translateY(-6px); transition: max-height 420ms ease, opacity 260ms ease, transform 260ms ease; }
#vv-home #vv-who.is-open .vv-more{ max-height: 1200px; opacity: 1; transform: translateY(0); }
#vv-home #vv-who{ position: relative; cursor: pointer; transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; }
#vv-home #vv-who:hover{ transform: translateY(-2px); border-color: rgba(128,194,255,.75); box-shadow: 0 22px 68px rgba(0,0,0,.72), 0 0 36px rgba(110,194,255,.24); }
#vv-home #vv-who:focus-visible{ outline: none; border-color: rgba(163,214,255,.96); box-shadow: 0 0 0 2px rgba(163,214,255,.42), 0 0 40px rgba(110,194,255,.32); }
#vv-home #vv-who .vv-preview::after{ content: "Click to expand"; display: table; margin: 12px auto 0; padding: 6px 12px; border-radius: 999px; border: 1px solid rgba(163,214,255,.42); background: rgba(8,16,34,.6); color: rgba(224,242,255,.88); font-family: "Cormorant Garamond", serif; font-size: 16px; letter-spacing: .02em; transition: opacity 220ms ease, transform 220ms ease; }
#vv-home #vv-who.is-open .vv-preview::after{ content: "Click to collapse"; }
#vv-home #vv-proof .vv-three-col{ list-style: disc; padding-left: 20px; margin: 14px 0 0 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px 40px; }

#vv-home .vv-soulcrest-ctas{ margin-top: 18px; display: flex; gap: 15px; justify-content: space-between; align-items: center; flex-wrap: wrap; }
#vv-home .vv-soulcrest-note{ text-align: right; font-size: 18px; margin-top: 12px; }
#vv-home .vv-acc{ position: relative; padding-top: 18px; min-height: 340px; }
#vv-home .vv-acc .vv-dev-kicker{ margin: 0; font-size: 18px; line-height: 1; color: rgba(255,255,255,.76); }
#vv-home .vv-acc .vv-dev-title{
  position: absolute;
  top: 18px;
  right: 20px;
  margin: 0;
  text-align: right;
  font-size: clamp(42px, 7vw, 64px);
}
#vv-home .vv-acc .vv-acc-btn{
  width: fit-content;
  max-width: 100%;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--vv-border);
  border-radius: 14px;
  background: rgba(255,255,255,.08);
  color: rgba(255,255,255,.92);
  font-family: var(--vv-font-body);
  font-size: 28px;
  cursor: pointer;
  z-index: 2;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}
#vv-home .vv-acc .vv-acc-btn:hover{
  transform: translate(-50%, -50%) translateY(-2px);
  border-color: rgba(128,194,255,.75);
  box-shadow: 0 22px 68px rgba(0,0,0,.72), 0 0 36px rgba(110,194,255,.24);
}
#vv-home .vv-acc .vv-acc-btn:focus-visible{
  outline: none;
  border-color: rgba(163,214,255,.96);
  box-shadow: 0 0 0 2px rgba(163,214,255,.42), 0 0 40px rgba(110,194,255,.32);
}
#vv-home .vv-acc .vv-acc-btn::after{
  content: "Click to expand";
  display: block;
  width: fit-content;
  margin: 10px auto 0;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(163,214,255,.42);
  background: rgba(8,16,34,.6);
  color: rgba(224,242,255,.88);
  font-family: "Cormorant Garamond", serif;
  font-size: 16px;
  letter-spacing: .02em;
}
#vv-home .vv-acc.is-open .vv-acc-btn{
  display: none;
}
#vv-home .vv-acc .vv-acc-icon{ width: 22px; text-align: center; font-size: 24px; line-height: 1; }
#vv-home .vv-acc .vv-acc-panel{ margin-top: 160px; display: none; width: min(920px, 100%); margin-left: auto; margin-right: auto; text-align: center; }
#vv-home .vv-acc.is-open .vv-acc-panel{ display: block; margin-top: 52px; }
#vv-home .vv-acc .vv-acc-panel[hidden]{ display: none !important; }
#vv-home .vv-acc .vv-acc-panel .vv-note{ max-width: 78ch !important; margin-left: auto !important; margin-right: auto !important; text-align: center !important; }
#vv-home .vv-acc .vv-acc-collapse{
  display: none;
  margin: 12px auto 0;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(163,214,255,.42);
  background: rgba(8,16,34,.6);
  color: rgba(224,242,255,.88);
  font-family: "Cormorant Garamond", serif;
  font-size: 16px;
  letter-spacing: .02em;
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}
#vv-home .vv-acc .vv-acc-collapse:hover{
  transform: translateY(-2px);
  border-color: rgba(128,194,255,.75);
  box-shadow: 0 16px 42px rgba(0,0,0,.55), 0 0 26px rgba(110,194,255,.20);
}
#vv-home .vv-acc .vv-acc-collapse:focus-visible{
  outline: none;
  border-color: rgba(163,214,255,.96);
  box-shadow: 0 0 0 2px rgba(163,214,255,.42), 0 0 30px rgba(110,194,255,.28);
}
#vv-home .vv-acc.is-open .vv-acc-collapse{ display: block; }
#vv-home .vv-acc .vv-phase-note{
  position: relative;
  z-index: 1;
  margin-top: 30px !important;
  padding-top: 176px;
}
#vv-home .vv-acc.is-open .vv-phase-note{
  padding-top: 28px;
}

#vv-footer-contact{ width:min(1161px, calc(100% - 40px)); margin:18px auto 36px; padding:18px; border-radius:24px; border:1px solid rgba(69,94,130,1); color:rgba(255,255,255,.92); overflow:hidden; isolation:isolate; position:relative; background: radial-gradient(700px 500px at -10% 90%, rgba(13,36,64,1), transparent 60%), radial-gradient(circle at center, transparent 0%, rgba(69,94,130,0.08) 55%, rgba(69,94,130,0.18) 75%, rgba(69,94,130,0.30) 100%); }
#vv-footer-contact .vv-footer-inner{ position:relative; z-index:1; display:grid; gap:12px; }
#vv-footer-contact .vv-footer-top{ display:flex; align-items:flex-start; justify-content:space-between; gap:16px; padding:2px 2px 6px; }
#vv-footer-contact .vv-footer-brand h2{ margin:0 0 4px; font-family:"Cinzel Decorative", serif; font-size:clamp(26px, 4vw, 40px); line-height:1.02; letter-spacing:.02em; color:rgba(255,255,255,.96); font-weight:900; }
#vv-footer-contact .vv-footer-brand p{ margin:0; max-width:28ch; font-family:"Cormorant Garamond", serif; font-size:20px; line-height:1.15; color:rgba(255,255,255,.72); }
#vv-footer-contact .vv-footer-note{ max-width:360px; font-family:"Cormorant Garamond", serif; font-size:18px; line-height:1.15; color:rgba(255,255,255,.62); text-align:right; padding-top:6px; }
#vv-footer-contact .vv-footer-stack{ display:grid; gap:10px; }
#vv-footer-contact .vv-footer-col{ border-radius:18px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.05); overflow:hidden; position:relative; }
#vv-footer-contact .vv-footer-toggle{ width:100%; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 14px; background:transparent; border:0; color:inherit; cursor:pointer; text-align:left; }
#vv-footer-contact .vv-footer-label{ display:grid; gap:2px; }
#vv-footer-contact .vv-footer-kicker{ font-family:"Cormorant Garamond", serif; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.56); }
#vv-footer-contact .vv-footer-title{ font-family:"Cinzel", serif; font-size:24px; line-height:1; color:rgba(255,255,255,.92); }
#vv-footer-contact .vv-footer-icon{ width:32px; height:32px; border-radius:10px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.04); display:inline-flex; align-items:center; justify-content:center; color:rgba(255,255,255,.84); flex:0 0 auto; font-size:15px; }
#vv-footer-contact .vv-footer-col.is-open .vv-footer-icon{ transform:rotate(180deg); }
#vv-footer-contact .vv-footer-links{ max-height:0; overflow:hidden; transition:max-height .28s ease, padding .22s ease; padding:0 14px; }
#vv-footer-contact .vv-footer-col.is-open .vv-footer-links{ max-height:220px; padding:14px; }
#vv-footer-contact .vv-footer-linksInner{ display:grid; grid-template-columns:repeat(4, minmax(0, 1fr)); gap:8px; }
#vv-footer-contact .vv-footer-links a{ display:block; text-decoration:none; padding:10px; border-radius:12px; border:1px solid rgba(255,255,255,.08); background:rgba(0,0,0,.16); color:rgba(255,255,255,.82); font-family:"Cormorant Garamond", serif; font-size:19px; line-height:1.1; text-align:center; }
#vv-footer-contact .vv-footer-signal{ display:grid; grid-template-columns:1fr auto; gap:12px; align-items:end; padding-top:2px; }
#vv-footer-contact .vv-footer-signalText h3{ margin:0 0 4px; font-family:"Cinzel", serif; font-size:24px; font-weight:500; line-height:1; color:rgba(255,255,255,.90); }
#vv-footer-contact .vv-footer-signalText p{ margin:0; font-family:"Cormorant Garamond", serif; font-size:18px; line-height:1.1; color:rgba(255,255,255,.66); }
#vv-footer-contact .vv-footer-form{ display:flex; gap:10px; align-items:center; }
#vv-footer-contact .vv-footer-form input[type="email"]{ width:min(320px, 42vw); padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.12); background:rgba(0,0,0,.22); color:rgba(255,255,255,.92); font-size:20px; outline:none; font-family:"Cormorant Garamond", serif; }
#vv-footer-contact .vv-footer-form button{ padding:11px 14px; border-radius:13px; border:1px solid rgba(100,155,255,.25); background:linear-gradient(rgba(0,0,0,1), rgba(100,155,255,1)); color:rgba(255,255,255,.94); font-weight:700; cursor:pointer; white-space:nowrap; font-size:18px; font-family:"Cinzel Decorative", serif; }
#vv-footer-contact .vv-footer-status{ display:none; padding:10px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.10); background:rgba(0,0,0,.18); color:rgba(255,255,255,.80); font-size:18px; line-height:1.15; font-family:"Cormorant Garamond", serif; }
#vv-footer-contact .vv-footer-bottom{ display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; padding-top:10px; border-top:1px solid rgba(255,255,255,.08); }
#vv-footer-contact .vv-footer-copy{ font-family:"Cormorant Garamond", serif; font-size:18px; line-height:1.1; color:rgba(255,255,255,.64); }
#vv-footer-contact .vv-footer-legal{ display:flex; gap:8px; flex-wrap:wrap; }
#vv-footer-contact .vv-footer-legal a{ text-decoration:none; padding:8px 10px; border-radius:12px; border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.03); color:rgba(255,255,255,.76); font-family:"Cormorant Garamond", serif; font-size:17px; line-height:1.1; }

@media (max-width: 900px){
  :root{ --vv-gold-size: 560px 560px; --vv-gold-pos: 108% -14%; }
  #vv-header{ --vv-edge: 24px; }
  #vv-home .vv-left-door{ display: none; }
  .vv-nav,.vv-cta{ display: none; }
  .vv-burger{ display: inline-flex; }
  .vv-logo{ height: 44px; }
  .vv-header-inner{ padding: 12px 14px; min-height: 64px; }
  #vv-home{ --vv-title: 30px; --vv-subtitle: 24px; --vv-body: 18px; --vv-home-top: clamp(140px, 15vw, 160px); --vv-hero-pocket: 240px; --vv-logo-max-w: 680px; --vv-logo-shrink-w: 92%; --vvDoorW: clamp(140px, 26vw, 220px); }
  #vv-home .vv-hero-grid{ grid-template-columns: 1fr; }
  #vv-home .vv-hero-cta{ grid-column: 1 / -1; justify-self: center; margin-top: 10px; }
  #vv-lanes .vv-lane::after{ content: "Tap to expand"; font-size: 15px; margin-top: 10px; }
  #vv-lanes .vv-lane.is-open::after{ content: "Tap to collapse"; }
  #vv-home #vv-who .vv-preview::after{ content: "Tap to expand"; font-size: 15px; margin-top: 10px; }
  #vv-home #vv-who.is-open .vv-preview::after{ content: "Tap to collapse"; }
  #vv-lanes .vv-grid{ grid-template-columns: 1fr; }
  #vv-home #vv-proof .vv-three-col{ grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 28px; }
  #vv-home .vv-soulcrest-ctas{ justify-content: center; flex-direction: column; gap: 14px; }
  #vv-home .vv-soulcrest-note{ text-align: center; margin-top: 14px; }
  #vv-home .vv-acc{ padding-top: 24px; min-height: 0; }
  #vv-home .vv-acc .vv-dev-kicker{ font-size: 18px; }
  #vv-home .vv-acc .vv-dev-title{ position: static; text-align: left; margin-top: -12px; margin-bottom: 8px; font-size: clamp(34px, 12vw, 48px); }
  #vv-home .vv-acc .vv-acc-btn{ width: 100%; justify-content: space-between; font-size: 20px; position: static; transform: none; margin: 18px auto 0; }
  #vv-home .vv-acc .vv-acc-btn:hover{ transform: translateY(-2px); }
  #vv-home .vv-acc .vv-acc-btn::after{ content: "Tap to expand"; font-size: 15px; margin-top: 8px; }
  #vv-home .vv-acc .vv-acc-collapse{ font-size: 15px; margin-top: 8px; }
  #vv-home .vv-acc .vv-acc-collapse .vv-acc-collapse-label{ display: none; }
  #vv-home .vv-acc .vv-acc-collapse::before{ content: "Tap to collapse"; }
  #vv-home .vv-acc .vv-acc-panel{ margin-top: 10px; }
  #vv-home .vv-acc .vv-phase-note{ padding-top: 0; }
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
@media (max-width:600px){ .vv-mobile{ left: 8px !important; right: 8px !important; width: auto !important; } #vv-home #vv-proof .vv-three-col{ grid-template-columns:1fr; } }
@media (max-width:420px){ #vv-header{ --vv-edge: 24px; width: calc(100% - 48px); } .vv-header-inner{ padding: 10px 12px; } .vv-burger{ width: 42px; height: 42px; } .vv-mobile a{ font-size: 17px; padding: 14px 10px; } #vv-home{ --vv-title: 26px; --vv-subtitle: 24px; --vv-body: 17px; --vv-hero-pocket: 200px; } #vv-footer-contact{ width:calc(100% - 16px); padding:14px; } }
</style>

<section id="vv-home">
  <div class="vv-left-door" aria-hidden="true">
    <img src="https://images.squarespace-cdn.com/content/691e9533ddf92169a657d827/3e5dd239-3520-4cae-807e-98ca3d10ed22/transparent+door.png?content-type=image%2Fpng" alt="" />
    <div class="vv-door-dust" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
    </div>
  </div>

  <div class="vv-right-logo" aria-hidden="true"><img src="https://images.squarespace-cdn.com/content/691e9533ddf92169a657d827/fd2eead8-5490-4d58-95c8-be74b1a979a1/Vodivus+Venture+Studios-Wide+white+text+transparent+background+%281%29.png?content-type=image%2Fpng" alt="" loading="eager" /></div>

  <div class="vv-container">
    <section id="vv-start-here" class="vv-section1 vv-global-hero-shard">
      <div class="vv-hero-grid">
        <h1 class="vv-hero-title">Dream Boldly <br /> Build Intentionally</h1>
        <p class="vv-hero-sub" style="font-size:36px; font-style:italic;">- Ideas are powerful. Without structure, they fade</p>
        <p class="vv-hero-sub"><br>We design venture architecture — defining scope, architecting systems,<br>and mapping execution so vision becomes<br>something you can actually build.</p>
        <p class="vv-hero-sub">The Blueprint is where momentum becomes durable.</p>
        <p class="vv-hero-sub">You bring the ambition.<br>We define the architecture.<br>You leave with a clear, buildable path forward.<br></p>
        <div class="vv-hero-cta">
          <a href="/contact" class="vv-btn vv-btn-primary">Build the Blueprint →</a>
          <p style="font-size:18px; text-align:center; margin:0;">Reviewed within 24–72 hours</p>
        </div>
      </div>
    </section>

    <p style="text-align:center; font-style:italic;">- Structure is theory until it survives reality</p>

    <section id="vv-lanes" class="vv-section">
      <h2 style="text-align:center; margin-top: 10px; margin-bottom: 26px;">Structured Build Paths</h2>
      <div class="vv-grid">
        <div class="vv-card vv-lane">
          <h3 style="text-align:center;"><strong>Market &amp; Positioning Architecture</strong></h3>
          <p style="font-style:italic;">The Signal</p>
          <br><p>Your idea needs definition before it. needs scale.</p>
          <div class="vv-more">
            <p><strong>What this solves:</strong><br>Confused messaging. Weak offers. No clear identity. No competitive edge.</p>
            <p><strong>What we do:</strong><br>We define your positioning, clarify your offer, align your brand strategy, and translate your idea into something structured and sellable.</p>
            <a class="vv-btn vv-btn-primary vv-lane-cta" href="/contact?lane=signal">Define the Signal →</a>
            <p style="font-size:15px; text-align:center;">Start here if your idea feels promising but undefined. Clarity first. Structure second.</p>
          </div>
        </div>

        <div class="vv-card vv-lane">
          <h3 style="text-align:center;"><strong>Operational &amp; Execution Architecture</strong></h3>
          <p style="font-style:italic;">The System</p>
          <br><p>Execution without structure burns time and talent.</p>
          <div class="vv-more">
            <p><strong>What this solves:</strong><br>Chaos. Bottlenecks. Wasted labor. Poor coordination. Leadership gaps.</p>
            <p><strong>What we do:</strong><br>We design, improve, and lead operational systems — from internal workflows to fully managed on-site team deployment.</p>
            <a class="vv-btn vv-btn-primary vv-lane-cta" href="/contact?lane=system">Strengthen the System →</a>
            <p style="font-size:15px; text-align:center;">Start here if execution feels heavy, chaotic, or stalled. We improve before we scale.</p>
          </div>
        </div>

        <div class="vv-card vv-lane">
          <h3 style="text-align:center;"><strong>Identity &amp; Experience Architecture</strong></h3>
          <p style="font-style:italic;">The Signature</p>
          <br><p>Who you are — expressed with precision.<br /></p>
          <div class="vv-more">
            <p><strong>What this solves:</strong><br>Inconsistency. Weak presence. Forgettable identity.</p>
            <p><strong>What we do:</strong><br>We align how you look, speak, operate, and show up — internally and externally.</p>
            <a class="vv-btn vv-btn-primary vv-lane-cta" href="/contact?lane=signature">Refine the Signature →</a>
            <p style="font-size:15px; text-align:center;">Start here if your presence doesn't match your ambition. Make it deliberate.</p>
          </div>
        </div>
      </div>
    </section>

    <p style="text-align:center; font-style:italic;">- Ideas rarely fail in theory. They fail when they're tested</p>

    <section id="vv-who" class="vv-section vv-lane" aria-label="Who we are">
      <h2 style="text-align:center;">BUILT UNDER PRESSURE</h2>
      <div class="vv-preview">
        <p style="text-align:center; margin: 0 auto;"><br>Vodivus was forged in live environments where<br>execution is public, timelines are unforgiving, and complexity is the norm.</p>
        <div class="vv-more">
          <p style="text-align:center; margin: 0 auto;">From multi-hundred-person productions to <br>large-scale operational deployments, our systems are built where failure is visible and structure must hold.</p>
          <p style="font-style:italic; text-align:center;">We don't theorize about efficiency.<br>We've operated where it's required.</p>
          <section id="vv-proof" aria-label="Proof points">
            <ul class="vv-three-col">
              <li>400+ person production coordination</li>
              <li>7,000-attendee live department leadership</li>
              <li>Fully insured on-site team deployment</li>
              <li>Program redesign from the ground up</li>
              <li>Infrastructure systems for large-scale operations</li>
              <li>Custom platform and ecosystem development (Soulcrest)</li>
            </ul>
          </section>
        </div>
      </div>
    </section>

    <section class="vv-section vv-acc" aria-label="Soulcrest In Development">
      <h3 class="vv-dev-kicker">In Development</h3>
      <h2 class="vv-dev-title">Soulcrest</h2>
      <button class="vv-acc-btn" type="button" aria-expanded="false" aria-controls="vv-soulcrest-body"><span>SoulCrest is a next-generation ecosystem</span></button>
      <div id="vv-soulcrest-body" class="vv-acc-panel" hidden>
        <p class="vv-note" style="margin-top: 10px; max-width: 90ch; margin-left:auto; margin-right:auto; text-align:justify;">An architecture for identity, momentum, and meaningful connection, SoulCrest integrates digital systems with real-world participation.</p>
        <p class="vv-note" style="margin-top: 10px; max-width: 90ch; margin-left:auto; margin-right:auto; text-align:justify;">It is designed to reflect and respond to how you move, build, and participate — deepening experience without reducing it to noise, homework, or metrics.</p>
        <p class="vv-note" style="margin-top: 10px; max-width: 90ch; margin-left:auto; margin-right:auto; text-align:justify;">Built to create coherence where most platforms create fragmentation, it aligns growth, access, and community within a deliberately engineered framework.</p>
        <p class="vv-note" style="margin-top: 10px; max-width: 90ch; margin-left:auto; margin-right:auto; text-align:justify;">Launching in structured phases, SoulCrest is designed as a long-term platform for sustained participation and evolving depth.</p>
      </div>
      <button class="vv-acc-collapse" type="button" aria-controls="vv-soulcrest-body"><span class="vv-acc-collapse-label">Click to collapse</span></button>
      <p class="vv-note vv-phase-note" style="text-align:left; max-width: 78ch; margin-left:auto; margin-right:auto;"><strong>Phase I beta access</strong> is curated and released by application.</p>
      <div class="vv-soulcrest-ctas">
        <a href="/soulcrest" class="vv-btn">Explore Soulcrest →</a>
        <a href="/contact?lane=soulcrest" class="vv-btn vv-btn-primary">Request Phase I Access →</a>
      </div>
      <div class="vv-note vv-soulcrest-note">Structured rollout • Curated beta • Application-based access</div>
    </section>
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
`;

export const HEADER_SCRIPT = `(function(){
  var header = document.getElementById("vv-header");
  var burger = document.getElementById("vv-burger");
  var overlay = document.getElementById("vv-overlay");
  var panel = document.getElementById("vv-mobile");
  var closeBtn = document.getElementById("vv-close");
  if(!header || !burger || !overlay || !panel) return;

  var lockedScrollY = 0;
  var prevBodyStyle = { position: document.body.style.position || "", top: document.body.style.top || "", left: document.body.style.left || "", right: document.body.style.right || "", width: document.body.style.width || "" };

  function lockScroll(){
    lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    prevBodyStyle.position = document.body.style.position || "";
    prevBodyStyle.top = document.body.style.top || "";
    prevBodyStyle.left = document.body.style.left || "";
    prevBodyStyle.right = document.body.style.right || "";
    prevBodyStyle.width = document.body.style.width || "";
    document.body.style.position = "fixed";
    document.body.style.top = "-" + lockedScrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }

  function unlockScroll(){
    document.body.style.position = prevBodyStyle.position;
    document.body.style.top = prevBodyStyle.top;
    document.body.style.left = prevBodyStyle.left;
    document.body.style.right = prevBodyStyle.right;
    document.body.style.width = prevBodyStyle.width;
    window.scrollTo(0, lockedScrollY);
  }

  function setExpanded(isOpen){
    burger.setAttribute("aria-expanded", String(isOpen));
    overlay.setAttribute("aria-hidden", String(!isOpen));
    panel.setAttribute("aria-hidden", String(!isOpen));
  }

  function openMenu(){ if(header.classList.contains("open")) return; header.classList.add("open"); setExpanded(true); lockScroll(); }
  function closeMenu(){ if(!header.classList.contains("open")) return; header.classList.remove("open"); setExpanded(false); unlockScroll(); }

  burger.addEventListener("click", function(){ header.classList.contains("open") ? closeMenu() : openMenu(); });
  overlay.addEventListener("click", closeMenu);
  if(closeBtn) closeBtn.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") closeMenu(); });
  panel.addEventListener("click", function(e){ var a = e.target && e.target.closest ? e.target.closest("a") : null; if(a) closeMenu(); });

  setExpanded(false);
})();`;

export const HOME_SCRIPT = `(function () {
  const root = document.querySelector("#vv-home");
  if (!root) return;
  if (root.dataset.vvInit === "1") return;
  root.dataset.vvInit = "1";

  const headerEl = document.getElementById("vv-header");
  const heroShard = document.getElementById("vv-start-here");

  function setPxVar(name, value){ root.style.setProperty(name, Math.round(value) + "px"); }
  const clamp01 = (n) => Math.max(0, Math.min(1, n));

  function measureLayout(){
    if (!headerEl || !heroShard) return;
    const headerRect = headerEl.getBoundingClientRect();
    const heroRect = heroShard.getBoundingClientRect();
    const headerBottom = Math.max(0, Math.round(headerRect.bottom));
    const heroTop = Math.max(headerBottom + 40, Math.round(heroRect.top));
    const heroLeft = Math.max(0, Math.round(heroRect.left));
    const topPocketH = Math.max(96, heroTop - headerBottom);
    setPxVar("--vvHeaderBottom", headerBottom);
    setPxVar("--vvHeroTop", heroTop);
    setPxVar("--vvHeroLeft", heroLeft);
    setPxVar("--vvTopPocketH", topPocketH);
  }

  const FADE_START = 0;
  const FADE_END = 680;
  let ticking = false;
  const updateFade = () => {
    ticking = false;
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    const t = clamp01((y - FADE_START) / Math.max(1, (FADE_END - FADE_START)));
    const opacity = 1 - t;
    root.style.setProperty("--vvLogoOpacity", opacity.toFixed(3));
  };
  const requestUpdate = () => { if (ticking) return; ticking = true; requestAnimationFrame(updateFade); };

  let measureTick = false;
  const requestMeasure = () => {
    if (measureTick) return;
    measureTick = true;
    requestAnimationFrame(() => { measureTick = false; measureLayout(); });
  };

  measureLayout();
  updateFade();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", function(){ requestUpdate(); requestMeasure(); }, { passive: true });
  window.addEventListener("orientationchange", requestMeasure, { passive: true });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!target) return;
    if (target.id === "vv-burger" || target.id === "vv-close") {
      setTimeout(requestMeasure, 0);
      setTimeout(requestMeasure, 140);
    }
  });

  const lanes = root.querySelectorAll("#vv-lanes .vv-lane");
  lanes.forEach((lane) => {
    if (lane.dataset.vvBound === "1") return;
    lane.dataset.vvBound = "1";
    lane.setAttribute("tabindex", "0");
    lane.setAttribute("role", "button");
    lane.setAttribute("aria-expanded", "false");

    const toggle = () => {
      const isOpen = lane.classList.toggle("is-open");
      lane.setAttribute("aria-expanded", String(isOpen));
    };

    lane.addEventListener("click", (e) => { if (e.target.closest("a, button")) return; toggle(); });
    lane.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  });

  const who = root.querySelector("#vv-who");
  if (who && who.dataset.vvBound !== "1") {
    who.dataset.vvBound = "1";
    who.setAttribute("tabindex", "0");
    who.setAttribute("role", "button");
    who.setAttribute("aria-expanded", "false");

    const toggleWho = () => {
      const isOpen = who.classList.toggle("is-open");
      who.setAttribute("aria-expanded", String(isOpen));
    };

    who.addEventListener("click", (e) => { if (e.target.closest("a, button")) return; toggleWho(); });
    who.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleWho(); } });
  }

  const soul = root.querySelector('section[aria-label="Soulcrest In Development"].vv-acc');
  if (soul && soul.dataset.vvBound !== "1") {
    soul.dataset.vvBound = "1";
    const btn = soul.querySelector(".vv-acc-btn");
    const collapseBtn = soul.querySelector(".vv-acc-collapse");
    const panel = soul.querySelector("#vv-soulcrest-body");
    const icon = soul.querySelector(".vv-acc-icon");

    if (btn && panel) {
      const setOpen = (open) => {
        soul.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
        panel.hidden = !open;
        if (icon) icon.textContent = open ? "×" : "+";
      };
      setOpen(false);
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        setOpen(!open);
      });
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          btn.click();
        }
      });
      if (collapseBtn) {
        collapseBtn.addEventListener("click", () => setOpen(false));
        collapseBtn.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(false);
          }
        });
      }
    }
  }
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
