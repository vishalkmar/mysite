import { Phone, Search, Send, Mic, MapPin, Star, Shield, Terminal, Calendar, BedDouble, GraduationCap, CheckCircle2, Delete } from "lucide-react";
import { SkSection, SkHead } from "./ServiceKit";

/* ================= Web: browser-framed screenshots ================= */
function Browser({ project, eager }) {
  return (
    <div className="sk-browser" style={{ "--accent": project.accent }}>
      <div className="sk-browser__bar" aria-hidden="true">
        <i /><i /><i />
        <span>{project.name.toLowerCase().replace(/[^a-z]+/g, "")}.com</span>
      </div>
      <div className="sk-browser__shot">
        <img src={project.image} alt={`${project.name} website designed and built by NexaTech Innovation`} loading={eager ? "eager" : "lazy"} decoding="async" />
      </div>
    </div>
  );
}

export function SkWebProjects({ heading, projects }) {
  return (
    <SkSection className="sk-work" label={heading.eyebrow}>
      <SkHead index={`${String(projects.length).padStart(2, "0")} live projects`} {...heading} />
      <div className="sk-work__grid">
        {projects.map((p, i) => (
          // first project spans the row; the rest pair up (last one spans too if it would be alone)
          <article key={p.id} className={`sk-work__item ${i === 0 || (i === projects.length - 1 && i % 2 === 1) ? "sk-work__item--wide" : ""}`} data-nx-reveal style={{ "--nx-delay": `${(i % 2) * 90}ms` }}>
            <Browser project={p} />
            <div className="sk-work__meta">
              <div>
                <span className="sk-work__cat">{p.category}</span>
                <h3>{p.name}</h3>
              </div>
              <ul className="sk-tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </SkSection>
  );
}

/* ================= Design: screenshot + palette + type specimen ================= */
export function SkDesignProjects({ heading, projects }) {
  return (
    <SkSection className="sk-design" label={heading.eyebrow}>
      <SkHead {...heading} />
      <div className="sk-design__list">
        {projects.map((p, i) => (
          <article key={p.id} className="sk-design__item" data-nx-reveal style={{ "--accent": p.accent }}>
            <div className="sk-design__shot"><Browser project={p} /></div>
            <aside className="sk-design__spec">
              <span className="sk-work__cat">{String(i + 1).padStart(2, "0")} · {p.category}</span>
              <h3>{p.name}</h3>
              <div className="sk-design__palette" aria-label="Brand palette">
                <span style={{ background: p.accent }} /><span style={{ background: "#0b1220" }} /><span style={{ background: "#f4f6fa" }} /><span style={{ background: `color-mix(in srgb, ${p.accent} 35%, white)` }} />
              </div>
              <div className="sk-design__type" aria-hidden="true"><strong>Aa</strong><span>Display · Body · UI</span></div>
              <ul className="sk-tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </aside>
          </article>
        ))}
      </div>
    </SkSection>
  );
}

/* ================= Apps: hand-built phone screens ================= */
const Status = () => <div className="ph-status" aria-hidden="true"><span>9:41</span><span>5G ▮▮▮</span></div>;

function CallingKaroScreen() {
  return (
    <div className="ph-screen ph-ck">
      <Status />
      <div className="ph-ck__head"><strong>CallingKaro</strong><span>12 min left</span></div>
      <div className="ph-ck__tabs"><b>Dialpad</b><span>Contacts</span><span>Recent</span></div>
      <div className="ph-ck__num"><small>IN +91</small>98765 43210</div>
      <small className="ph-muted">Mobile · India</small>
      <div className="ph-ck__pad">{["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((k) => <span key={k}>{k}</span>)}</div>
      <div className="ph-ck__actions"><span /><span className="ph-ck__call"><Phone size={18} /></span><span><Delete size={14} /></span></div>
    </div>
  );
}
function TalkLinkScreen() {
  return (
    <div className="ph-screen ph-tl">
      <Status />
      <div className="ph-tl__head"><span className="ph-avatar">M</span><div><strong>Meera</strong><small>online</small></div><Phone size={16} /></div>
      <div className="ph-tl__chat">
        <p className="in">That was fun! 😄</p>
        <p className="out">Same here. Talk tomorrow?</p>
        <p className="in voice"><Mic size={12} /> Voice note · 0:12</p>
        <p className="out">ⓘ View once photo</p>
        <p className="in">See you ✨</p>
      </div>
      <div className="ph-tl__input"><span>Message</span><i><Send size={13} /></i></div>
    </div>
  );
}
function ReconnctScreen() {
  return (
    <div className="ph-screen ph-rc">
      <Status />
      <div className="ph-rc__brand">reconnct<small>Delhi <MapPin size={10} /></small></div>
      <h4>Explore.<br /><span>Together.</span></h4>
      <div className="ph-rc__search"><Search size={12} /> Experiences, destinations…</div>
      <div className="ph-rc__card big"><span>Santorini sunsets</span><small><Star size={10} /> 4.9 · 3 days</small></div>
      <div className="ph-rc__row">
        <div className="ph-rc__card"><span>Rishikesh</span></div>
        <div className="ph-rc__card alt"><span>Goa</span></div>
      </div>
    </div>
  );
}
function SeychellesScreen() {
  return (
    <div className="ph-screen ph-hs">
      <Status />
      <div className="ph-hs__hero"><small>AI travel</small><strong>Plan your perfect Seychelles</strong></div>
      <div className="ph-hs__tabs"><b><BedDouble size={12} /> Hotel</b><span>Transfers</span><span>Tours</span></div>
      <div className="ph-hs__field"><MapPin size={12} /> Mahé, Seychelles</div>
      <div className="ph-hs__dates"><span><Calendar size={11} /> 09 Nov</span><span><Calendar size={11} /> 10 Nov</span></div>
      <div className="ph-hs__btn">Search stays</div>
      <div className="ph-hs__ai"><span>🤖</span> Ask our AI assistant</div>
    </div>
  );
}
function CypherMindScreen() {
  return (
    <div className="ph-screen ph-cm">
      <Status />
      <div className="ph-cm__head"><Shield size={14} /> CypherMind <small>console</small></div>
      <div className="ph-cm__term">
        <p><b>$</b> recon --target lab.local</p>
        <p className="ok">✓ 14 hosts discovered</p>
        <p className="ok">✓ 3 services flagged</p>
        <p><b>$</b> report --format pdf</p>
        <p className="dim">generating…<i /></p>
      </div>
      <div className="ph-cm__stats"><span><strong>14</strong>hosts</span><span><strong>3</strong>issues</span><span><strong>A-</strong>score</span></div>
      <div className="ph-cm__btn"><Terminal size={12} /> Launch agent</div>
    </div>
  );
}
function MctiScreen() {
  return (
    <div className="ph-screen ph-mc">
      <Status />
      <div className="ph-mc__head"><GraduationCap size={16} /> <strong>MCTI</strong><small>Student</small></div>
      <div className="ph-mc__card"><small>Result · ADCA</small><strong>Grade A+</strong><span>92% · Semester 2</span></div>
      <div className="ph-mc__list">
        {["MS Office", "Tally Prime", "Web Design"].map((c, i) => (
          <div key={c}><CheckCircle2 size={12} /><span>{c}</span><i style={{ width: `${88 - i * 12}%` }} /></div>
        ))}
      </div>
      <div className="ph-mc__btn">Online Apply</div>
    </div>
  );
}

const APP_SCREENS = {
  callingkaro: { Screen: CallingKaroScreen, name: "CallingKaro", cat: "Internet calling · Android" },
  talklink: { Screen: TalkLinkScreen, name: "TalkLink", cat: "Calling & chat · Android" },
  reconnct: { Screen: ReconnctScreen, name: "Reconnct", cat: "Travel experiences" },
  seychelles: { Screen: SeychellesScreen, name: "Holidays Seychelles", cat: "AI hotel booking" },
  cyphermind: { Screen: CypherMindScreen, name: "CypherMind AI", cat: "Security copilot" },
  mcti: { Screen: MctiScreen, name: "MCTI", cat: "Student portal" },
};

export function SkAppProjects({ heading, ids = Object.keys(APP_SCREENS) }) {
  return (
    <SkSection className="sk-apps" label={heading.eyebrow}>
      <SkHead index={`${String(ids.length).padStart(2, "0")} apps`} {...heading} />
      <div className="sk-apps__grid">
        {ids.map((id, i) => {
          const { Screen, name, cat } = APP_SCREENS[id];
          return (
            <figure key={id} className="sk-app" data-nx-reveal style={{ "--nx-delay": `${(i % 3) * 90}ms` }}>
              <div className="sk-phone" role="img" aria-label={`${name} app screen`}>
                <span className="sk-phone__notch" aria-hidden="true" />
                <Screen />
              </div>
              <figcaption><strong>{name}</strong><span>{cat}</span></figcaption>
            </figure>
          );
        })}
      </div>
    </SkSection>
  );
}
