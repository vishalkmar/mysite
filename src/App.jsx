
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
// Landing page is bundled eagerly so the hero paints without waiting for a chunk.
import Home from "./Home";
const About = lazy(() => import("./AboutComponents/About"));
const HomeTwo = lazy(() => import("./homeTwo/HomeTwo"));
const WebDevelopment = lazy(() => import("./webDevelopment/webDevelopment"));
const AppDevelopment = lazy(() => import("./appDevelopment/AppDevelopment"));
const SoftwareDevelopment = lazy(() => import("./SoftwareDevelopment/softwareDevelopment"));
const WebDesign = lazy(() => import("./WebDesign/webDesign"));
const UiUxdDevelopment = lazy(() => import("./UiUxDesign/UiUxDevelopment"));
const Contact = lazy(() => import("./contactComponents/contact"));
const SEO = lazy(() => import("./marketing/SEO/SEO"));
const SocialMediaMarketing = lazy(() => import("./marketing/socialMediaMarketing/socialMediaMarketing"));
const ContentMarketing = lazy(() => import("./marketing/contentMarketing/contentMarketing"));
const LogoDesign = lazy(() => import("./marketing/logoDesign/logoDesign"));
const DigitalMarketing = lazy(() => import("./marketing/digitalMarketing/digitalMarketing"));
const FAQPage = lazy(() => import("./pages/faqs"));
const PrivacyPolicy = lazy(() => import("./pages/privacypolacy"));
const TermsAndConditions = lazy(() => import("./pages/termsandconditions"));
const NotFound = lazy(() => import("./notfound"));
import LeadPopupForm from "./LeadPopForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialSidebar from "./SocialSideBarIcons";
import GlobalPointerEffects from "./Ui/GlobalPointerEffects";
import PageCursor from "./Ui/cursurs/PageCursor";
import RouteCursorEffects from "./Ui/cursurs/RouteCursorEffects";
// import Ribbons from "./Ui/cursurs/PattaRibbon";
function HomeLeadPopup() {
  const { pathname } = useLocation();
  return pathname === "/" ? <LeadPopupForm logoSrc="/logo.png" companyName="NexaTech Innovation" /> : null;
}

export default function App() {
  
    return (
        <BrowserRouter>
         <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {/* <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <Ribbons
    baseThickness={29}
  />
</div> */}
<GlobalPointerEffects />
<RouteCursorEffects />
<PageCursor />
            <HomeLeadPopup />

        <SocialSidebar/>
            <Suspense fallback={<div role="status" style={{ minHeight: "100svh", display: "grid", placeItems: "center", background: "var(--site-bg)", color: "#f5f3fa" }}>Loading…</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hometwo" element={<HomeTwo />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/webdevelopment" element={<WebDevelopment/>} />
                <Route path="/appdevelopment" element={<AppDevelopment/>} />
                <Route path="/softwaredevelopment" element={<SoftwareDevelopment/>} />
                <Route path="/webdesign" element={<WebDesign />}/>
                <Route path="/uiuxdesign" element={<UiUxdDevelopment/>} />
                <Route path="/seo" element={<SEO />}/>
                <Route path="/socialmediamarketing" element={<SocialMediaMarketing/>} />
                <Route path="/contentmarketing" element={<ContentMarketing/>}/>
                <Route path="/logodesign" element={<LogoDesign />} />
                <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>
                <Route path="/faqs" element={<FAQPage />}/>
                <Route path="/privacy" element={<PrivacyPolicy />}/>
                  <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
