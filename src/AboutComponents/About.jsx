import Header from "../header";
import Footer from "../footer";
import TeamSection from "./TeamSection";
import HowWeWork from "./HowWeWork";
import SectionHeading from "../Ui/SectionHeading";
import AboutCharacter from "./AboutCharacter";

export default function About() {
  return (
    <>
      <Header />
      <main className="nexa-about-page" style={{ backgroundColor: "var(--site-bg)", color: "#f8fafc" }}>
        <section className="nexa-about-hero" aria-labelledby="about-page-title">
          <div className="nexa-about-grid">
            <div className="nexa-about-copy">
              <p className="nexa-about-eyebrow"><span /> The NexaTech studio</p>
              <h1 id="about-page-title">
                Digital ideas,
                <span>built with purpose.</span>
              </h1>
              <p className="nexa-about-lead">
                We combine strategy, design and engineering to create digital products
                that feel clear, work beautifully and move businesses forward.
              </p>
              <div className="nexa-about-actions">
                <a className="nexa-about-primary" href="/contact">Start a project <b aria-hidden="true">↗</b></a>
                <a className="nexa-about-secondary" href="#nexa-story">Discover our studio</a>
              </div>
            </div>

            <div className="nexa-about-visual">
              <div className="nexa-about-orbit nexa-about-orbit--one" />
              <div className="nexa-about-orbit nexa-about-orbit--two" />
              <div className="nexa-about-glow" />
              <AboutCharacter variant="hero" />
              <div className="nexa-about-bubble">
                <span>Hi! Let's build</span>
                <strong>something great.</strong>
              </div>
              <div className="nexa-about-status"><i /> Available for new projects</div>
            </div>
          </div>
        </section>

        <section className="nexa-story" id="nexa-story" aria-label="About NexaTech">
          <div className="nexa-about-grid nexa-story-grid">
            <div className="nexa-story-label">
              <span>01</span>
              <p>Who we are</p>
            </div>
            <div className="nexa-story-copy">
              <h2>
                One connected team for
                <span> ideas that need to work in the real world.</span>
              </h2>
              <p>
                NexaTech is an independent product studio for growing brands and ambitious
                founders. We stay close to every decision—from the first conversation to
                the final release—so the result stays focused, useful and distinctly yours.
              </p>
            </div>
          </div>
        </section>

        <section className="nexa-practice">
          <div className="nexa-about-grid">
            <SectionHeading
              eyebrow="How we work"
              index="Strategy · Design · Engineering"
              title="A small team."
              accent="A complete perspective."
              copy="We bring the right thinking together early, keep communication direct, and shape every detail around the people who will use it."
            />

            <div className="nexa-practice-grid">
              <article>
                <span>01</span>
                <h3>Understand</h3>
                <p>We learn the business, users and real problem before choosing a solution.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Shape</h3>
                <p>Strategy becomes a clear experience, a visual direction and a practical roadmap.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Build</h3>
                <p>Design and development move together, with testing and iteration built in.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="nexa-culture">
          <div className="nexa-about-grid nexa-culture-grid">
            <div className="nexa-culture-visual">
              <div className="nexa-culture-frame">
                <AboutCharacter variant="culture" />
              </div>
              <div className="nexa-culture-note"><span>Studio energy</span><strong>Curious by default.</strong></div>
            </div>
            <div className="nexa-culture-copy">
              <p className="nexa-about-eyebrow"><span /> Our culture</p>
              <h2>Make it clear.<br /><em>Make it matter.</em></h2>
              <p>
                Good work comes from honest conversations, shared ownership and room to
                explore. We value craft, but never hide it behind complexity.
              </p>
              <ul>
                <li><i>✦</i> Direct, transparent communication</li>
                <li><i>✦</i> Craft in every screen and interaction</li>
                <li><i>✦</i> Long-term thinking, not quick fixes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="nexa-facts" aria-label="NexaTech highlights">
          <div className="nexa-about-grid nexa-facts-grid">
            <div><strong>50+</strong><span>Projects delivered</span></div>
            <div><strong>10+</strong><span>People across disciplines</span></div>
            <div><strong>3+</strong><span>Years of experience</span></div>
          </div>
        </section>

        <HowWeWork />
        <TeamSection />
      </main>
      <Footer />

      <style>{`
        .nexa-about-page {
          --nexa-cyan:#67d8f5;
          --nexa-blue:#54a9ff;
          --nexa-line:rgba(170,202,224,.16);
          overflow:hidden;
        }
        .nexa-about-grid { width:min(1180px,calc(100% - 48px)); margin-inline:auto; }
        .nexa-about-hero {
          min-height:760px;
          display:flex;
          align-items:center;
          position:relative;
          padding:120px 0 70px;
          border-bottom:1px solid var(--nexa-line);
          background:
            radial-gradient(circle at 78% 44%,rgba(83,200,237,.13),transparent 24%),
            linear-gradient(145deg,#07101d 0%,var(--site-bg) 70%);
        }
        .nexa-about-hero::before {
          content:"";
          position:absolute;
          inset:0;
          opacity:.14;
          background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);
          background-size:64px 64px;
          mask-image:linear-gradient(to right,transparent 5%,#000 100%);
          pointer-events:none;
        }
        .nexa-about-hero > .nexa-about-grid {
          display:grid;
          grid-template-columns:53% 47%;
          align-items:center;
          position:relative;
          z-index:2;
        }
        .nexa-about-copy { max-width:650px; }
        .nexa-about-eyebrow {
          display:flex;
          align-items:center;
          gap:10px;
          margin:0 0 22px;
          color:#bdd3e3;
          font-size:.76rem;
          font-weight:800;
          letter-spacing:.18em;
          text-transform:uppercase;
        }
        .nexa-about-eyebrow span {
          width:34px;
          height:1px;
          background:var(--nexa-cyan);
          box-shadow:0 0 10px var(--nexa-cyan);
        }
        .nexa-about-copy h1 {
          margin:0;
          max-width:700px;
          font-family:Georgia,"Times New Roman",serif;
          font-size:clamp(4.2rem,7.4vw,7.8rem);
          line-height:.88;
          letter-spacing:-.065em;
          font-weight:500;
        }
        .nexa-about-copy h1 span {
          display:block;
          color:var(--nexa-cyan);
          font-style:italic;
          font-weight:400;
        }
        .nexa-about-lead {
          max-width:560px;
          margin:30px 0 32px;
          color:#bdcbd8;
          font-size:clamp(1.05rem,1.6vw,1.28rem);
          line-height:1.72;
        }
        .nexa-about-actions { display:flex; align-items:center; gap:24px; }
        .nexa-about-primary {
          display:inline-flex;
          align-items:center;
          gap:24px;
          min-height:58px;
          padding:0 18px 0 22px;
          border-radius:999px;
          color:#07101d;
          background:#effcff;
          text-decoration:none;
          font-weight:800;
          transition:transform .35s ease,box-shadow .35s ease;
        }
        .nexa-about-primary b {
          display:grid;
          place-items:center;
          width:36px;
          height:36px;
          border-radius:50%;
          color:#effcff;
          background:#101b2a;
        }
        .nexa-about-primary:hover { transform:translateY(-4px); box-shadow:0 16px 38px rgba(103,216,245,.16); color:#07101d; }
        .nexa-about-secondary { color:#d8e5ef; text-decoration:none; border-bottom:1px solid rgba(216,229,239,.45); padding:8px 0; }
        .nexa-about-visual {
          position:relative;
          height:570px;
          display:grid;
          place-items:center;
        }
        .nexa-about-glow {
          position:absolute;
          width:390px;
          height:390px;
          border-radius:50%;
          background:radial-gradient(circle,rgba(103,216,245,.26),rgba(103,216,245,.04) 48%,transparent 70%);
          filter:blur(4px);
        }
        .nexa-about-orbit {
          position:absolute;
          width:430px;
          height:430px;
          border:1px solid rgba(103,216,245,.15);
          border-radius:50%;
        }
        .nexa-about-orbit--one { animation:nexa-orbit 18s linear infinite; }
        .nexa-about-orbit--two { width:500px;height:500px;border-style:dashed;opacity:.5;animation:nexa-orbit 26s linear reverse infinite; }
        @keyframes nexa-orbit { to { transform:rotate(360deg); } }
        .about-character {
          position:relative;
          z-index:3;
          width:420px;
          height:510px;
        }
        .about-character canvas { width:100%!important;height:100%!important;display:block; }
        .about-character__fallback {
          display:none;
          position:absolute;
          inset:12%;
          align-items:center;
          justify-content:center;
          border:1px solid rgba(103,216,245,.25);
          border-radius:50%;
          background:radial-gradient(circle,#9fdff0 0 18%,#243449 19% 55%,transparent 56%);
        }
        .about-character[data-ready] .about-character__fallback { display:none; }
        .about-character:not([data-ready]) .about-character__fallback { display:flex; }
        .about-character__face {
          width:110px;height:110px;display:grid;place-items:center;border-radius:50%;
          color:#07101d;background:#f2d0aa;font-family:Georgia,serif;font-size:1.5rem;font-weight:800;
        }
        .nexa-about-bubble {
          position:absolute;
          z-index:5;
          right:-8px;
          top:94px;
          min-width:190px;
          padding:14px 18px;
          border:1px solid rgba(255,255,255,.16);
          border-radius:18px 18px 18px 4px;
          background:rgba(9,20,34,.82);
          backdrop-filter:blur(14px);
          box-shadow:0 18px 48px rgba(0,0,0,.24);
          animation:nexa-bubble 4.8s ease-in-out infinite;
        }
        .nexa-about-bubble span,.nexa-about-bubble strong { display:block; }
        .nexa-about-bubble span { color:#9db1c2;font-size:.78rem; }
        .nexa-about-bubble strong { margin-top:3px;font-size:.98rem; }
        @keyframes nexa-bubble { 50% { transform:translateY(-8px) rotate(-1deg); } }
        .nexa-about-status {
          position:absolute;
          z-index:5;
          left:24px;
          bottom:48px;
          display:flex;
          align-items:center;
          gap:8px;
          padding:10px 13px;
          border:1px solid var(--nexa-line);
          border-radius:999px;
          color:#b9c9d6;
          background:rgba(7,16,29,.72);
          font-size:.78rem;
          backdrop-filter:blur(12px);
        }
        .nexa-about-status i { width:7px;height:7px;border-radius:50%;background:#78e0b1;box-shadow:0 0 12px #78e0b1; }

        .nexa-story { padding:110px 0; border-bottom:1px solid var(--nexa-line); }
        .nexa-story-grid { display:grid;grid-template-columns:22% 78%; }
        .nexa-story-label { display:flex;gap:16px;color:#8293a3; }
        .nexa-story-label span { color:var(--nexa-cyan);font-size:.75rem;letter-spacing:.12em; }
        .nexa-story-label p { margin:0;text-transform:uppercase;font-size:.75rem;font-weight:800;letter-spacing:.16em; }
        .nexa-story-copy h2 {
          max-width:860px;
          margin:0 0 28px;
          font-family:Georgia,"Times New Roman",serif;
          font-size:clamp(3rem,5.5vw,5.6rem);
          line-height:.98;
          letter-spacing:-.045em;
          font-weight:500;
        }
        .nexa-story-copy h2 span { color:#8fa6b8;font-style:italic; }
        .nexa-story-copy p { max-width:680px;margin:0;color:#afbdc9;font-size:1.08rem;line-height:1.8; }

        .nexa-practice { padding:100px 0 110px; }
        .nexa-practice .nx-heading { margin-bottom:70px; }
        .nexa-practice-grid { display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--nexa-line); }
        .nexa-practice-grid article { min-height:250px;padding:32px 38px 30px 0;border-right:1px solid var(--nexa-line);transition:background .35s ease,transform .35s ease; }
        .nexa-practice-grid article:not(:first-child){padding-left:38px;}
        .nexa-practice-grid article:last-child{border-right:0;}
        .nexa-practice-grid article:hover { transform:translateY(-8px);background:linear-gradient(180deg,rgba(103,216,245,.07),transparent); }
        .nexa-practice-grid article>span { color:var(--nexa-cyan);font-size:.75rem;letter-spacing:.14em; }
        .nexa-practice-grid h3 { margin:55px 0 12px;font-family:Georgia,"Times New Roman",serif;font-size:2.2rem;font-weight:500; }
        .nexa-practice-grid p { max-width:280px;margin:0;color:#9db0bf;line-height:1.65; }

        .nexa-culture { padding:110px 0;border-top:1px solid var(--nexa-line);border-bottom:1px solid var(--nexa-line);background:linear-gradient(135deg,rgba(103,216,245,.035),transparent 45%); }
        .nexa-culture-grid { display:grid;grid-template-columns:48% 52%;align-items:center;gap:40px; }
        .nexa-culture-visual { position:relative;min-height:560px; }
        .nexa-culture-frame {
          width:92%;height:520px;position:relative;overflow:hidden;border:1px solid var(--nexa-line);
          border-radius:48% 48% 18px 18px;background:radial-gradient(circle at 50% 48%,rgba(103,216,245,.18),rgba(7,16,29,.2) 55%,transparent 72%);
        }
        .nexa-culture-frame .about-character { position:absolute;left:50%;bottom:-30px;transform:translateX(-50%); }
        .nexa-culture-note { position:absolute;right:0;bottom:32px;padding:16px 18px;border:1px solid var(--nexa-line);background:rgba(7,16,29,.88);backdrop-filter:blur(12px); }
        .nexa-culture-note span,.nexa-culture-note strong { display:block; }
        .nexa-culture-note span { color:#91a7b8;font-size:.72rem;text-transform:uppercase;letter-spacing:.12em; }
        .nexa-culture-note strong { margin-top:4px;font-family:Georgia,serif;font-size:1.05rem; }
        .nexa-culture-copy { padding-left:60px; }
        .nexa-culture-copy h2 { margin:0 0 24px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(3.6rem,6vw,6.2rem);line-height:.92;letter-spacing:-.055em;font-weight:500; }
        .nexa-culture-copy h2 em { color:var(--nexa-cyan);font-weight:400; }
        .nexa-culture-copy>p { max-width:520px;color:#afbdc9;font-size:1.08rem;line-height:1.75; }
        .nexa-culture-copy ul { list-style:none;margin:28px 0 0;padding:0;display:grid;gap:13px;color:#d0dae3; }
        .nexa-culture-copy li { display:flex;gap:12px;align-items:center; }
        .nexa-culture-copy li i { color:var(--nexa-cyan);font-style:normal; }

        .nexa-facts { padding:54px 0;background:var(--nexa-cyan);color:#07101d; }
        .nexa-facts-grid { display:grid;grid-template-columns:repeat(3,1fr); }
        .nexa-facts-grid div { min-height:130px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center; }
        .nexa-facts-grid div+div { border-left:1px solid rgba(7,16,29,.24); }
        .nexa-facts-grid strong { font-family:Georgia,serif;font-size:clamp(3.2rem,6vw,5.4rem);line-height:.9; }
        .nexa-facts-grid span { margin-top:12px;font-size:.78rem;font-weight:900;text-transform:uppercase;letter-spacing:.12em; }

        @media (max-width:991px) {
          .nexa-about-hero { min-height:auto; }
          .nexa-about-hero > .nexa-about-grid { grid-template-columns:56% 44%; }
          .nexa-about-copy h1 { font-size:clamp(3.8rem,9vw,6.2rem); }
          .nexa-about-visual { height:520px; }
          .about-character { width:350px;height:470px; }
          .nexa-culture-copy { padding-left:20px; }
        }
        @media (max-width:767px) {
          .nexa-about-grid { width:min(100% - 32px,1180px); }
          .nexa-about-hero { padding:105px 0 45px; }
          .nexa-about-hero > .nexa-about-grid,.nexa-story-grid,.nexa-culture-grid { grid-template-columns:1fr; }
          .nexa-about-copy h1 { font-size:clamp(3.4rem,16vw,5.4rem); }
          .nexa-about-lead { margin:24px 0 28px; }
          .nexa-about-actions { flex-wrap:wrap; }
          .nexa-about-visual { height:500px;margin-top:20px; }
          .about-character { width:330px;height:470px; }
          .nexa-about-bubble { right:0;top:72px;min-width:165px; }
          .nexa-about-status { left:0;bottom:30px; }
          .nexa-about-orbit { width:330px;height:330px; }
          .nexa-about-orbit--two { width:380px;height:380px; }
          .nexa-story { padding:75px 0; }
          .nexa-story-label { margin-bottom:28px; }
          .nexa-story-copy h2 { font-size:clamp(2.8rem,12vw,4.4rem); }
          .nexa-practice { padding:75px 0; }
          .nexa-practice-grid { grid-template-columns:1fr; }
          .nexa-practice-grid article,.nexa-practice-grid article:not(:first-child) {
            min-height:210px;padding:28px 0;border-right:0;border-bottom:1px solid var(--nexa-line);
          }
          .nexa-practice-grid h3 { margin-top:35px; }
          .nexa-culture { padding:75px 0; }
          .nexa-culture-visual { min-height:440px; }
          .nexa-culture-frame { width:100%;height:420px; }
          .nexa-culture-copy { padding:20px 0 0; }
          .nexa-culture-copy h2 { font-size:clamp(3.2rem,14vw,5rem); }
          .nexa-facts-grid { grid-template-columns:1fr; }
          .nexa-facts-grid div+div { border-left:0;border-top:1px solid rgba(7,16,29,.24); }
        }
        @media (prefers-reduced-motion:reduce) {
          .nexa-about-orbit,.nexa-about-bubble { animation:none; }
        }
      `}</style>
    </>
  );
}
