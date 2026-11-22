import { Sparkles, ChevronRight, Plus, Heart, MessageCircle, MapPin, CalendarDays, Search, Home, BarChart3, User, Check, Activity, Plane, Wifi, BatteryFull, Signal, ArrowUpRight } from 'lucide-react';

function Fitness() {
  return <><div className="ap-screen-greeting"><span>MOVE / EVERY DAY</span><DumbbellMark /></div><h4>A little stronger.<br />Every day.</h4><div className="ap-fitness-ring"><div><strong>78<span>%</span></strong><small>Weekly goal</small></div></div><div className="ap-phone-stats"><span><strong>4</strong>workouts</span><span><strong>126</strong>active mins</span><span><strong>12</strong>day streak</span></div><div className="ap-screen-card"><span className="ap-screen-kicker">YOUR NEXT SESSION</span><strong>Full body flow</strong><div className="ap-workout-bars">{[35,65,50,85,70,100,80,95,65,90].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div><span className="ap-phone-row">25 min · Strength <ChevronRight size={16}/></span></div><div className="ap-screen-note"><Sparkles size={14}/> A plan that fits your day.</div></>;
}
function DumbbellMark(){ return <Activity size={20}/>; }
function Social() {
  return <><div className="ap-screen-greeting"><strong>circle.</strong><Plus size={20}/></div><h4>Find your people.</h4><div className="ap-story-avatars">{['You','Maya','Arjun','Lea'].map((n,i)=><span key={n}><i style={{'--avatar-hue':`${i*65+180}deg`}}>{n[0]}</i><small>{n}</small></span>)}</div><div className="ap-social-post"><div className="ap-phone-row"><span><b className="ap-mini-avatar">M</b> Maya's studio</span><span>···</span></div><div className="ap-social-art"><span>MAKE<br/><em>SOMETHING</em><br/>MATTER.</span><i/></div><div className="ap-phone-row"><span><Heart size={16}/> 128 <MessageCircle size={16}/> 16</span><span>Save</span></div><p>A little inspiration for your next big idea.</p></div><div className="ap-screen-note"><MessageCircle size={14}/> Your next conversation starts here.</div></>;
}
function Care() {
  return <><div className="ap-screen-greeting"><strong>care / connected</strong><Plus size={20}/></div><h4>Your care.<br/>A little simpler.</h4><div className="ap-screen-search"><Search size={15}/> Find a doctor or clinic</div><div className="ap-care-card"><div className="ap-doctor-avatar">+</div><span className="ap-screen-kicker">UPCOMING APPOINTMENT</span><strong>Dr. Aditi Sharma</strong><p>General consultation</p><span><CalendarDays size={14}/> Tomorrow · 10:30 AM</span></div><div className="ap-screen-tiles"><span><CalendarDays size={20}/>Appointments</span><span><Activity size={20}/>My records</span></div><div className="ap-screen-note"><Check size={15}/> Your appointment is confirmed.</div></>;
}
function Travel() {
  return <><div className="ap-screen-address"><span>▣</span> roam.example <span>•••</span></div><div className="ap-screen-greeting"><strong>roam.</strong><Plane size={20}/></div><h4>A change<br/>of scenery.</h4><div className="ap-travel-landscape"><div/><span><MapPin size={14}/> Somewhere wonderful</span></div><div className="ap-screen-card"><span className="ap-screen-kicker">YOUR WEEKEND, SORTED</span><strong>Find your next escape</strong><span className="ap-phone-row">2 travellers · 3 nights <ChevronRight size={17}/></span></div><div className="ap-install-card"><Plus size={19}/><span><strong>Add to home screen</strong><small>Your next trip, one tap away.</small></span></div></>;
}
function Assistant() {
  return <><div className="ap-screen-greeting"><strong>nexa / intelligence</strong><Sparkles size={20}/></div><div className="ap-ai-orb"><Sparkles size={35} strokeWidth={1}/></div><h4>A little help.<br/>A lot more possible.</h4><p className="ap-screen-subtitle">What would you like to do today?</p><div className="ap-ai-prompt">Turn my idea into a launch plan.<ArrowUpRight size={16}/></div><div className="ap-screen-card ap-ai-response"><span className="ap-screen-kicker"><Sparkles size={12}/> HERE'S A START</span><strong>From idea to first release.</strong>{['Define the one thing that matters','Map the first user journey','Build, learn and improve'].map((t,i)=><p key={t}><span>{i+1}</span>{t}</p>)}</div><div className="ap-screen-search">Ask a follow-up… <Plus size={16}/></div></>;
}
const screens={fitness:Fitness,social:Social,care:Care,travel:Travel,ai:Assistant};

export default function PhonePreview({screen='ai',label='AI product concept',className=''}) {
  const Screen=screens[screen] || Assistant;
  return <div className={`ap-phone ${className}`} data-screen={screen}>
    <div className="ap-phone-buttons"/><div className="ap-phone-glass">
      <div className="ap-phone-status"><span>9:41</span><i/><span><Signal size={12}/><Wifi size={12}/><BatteryFull size={15}/></span></div>
      <div className="ap-phone-content" key={screen}><Screen/></div>
      <div className="ap-phone-navigation" aria-hidden="true"><Home size={17}/><Search size={17}/><BarChart3 size={17}/><User size={17}/></div>
      <div className="ap-phone-platform">{label}</div><div className="ap-phone-home"/>
    </div>
  </div>;
}
