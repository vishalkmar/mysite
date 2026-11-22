
import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom"
// Route code-splitting: each page is its own chunk, so the first load stays small.
// Production HTML preloads only the requested route (scripts/build-route-pages.mjs).
const pageImports = {
  Home: () => import("./Home"),
  About: () => import("./AboutComponents/About"),
  WebDevelopment: () => import("./webDevelopment/webDevelopment"),
  AppDevelopment: () => import("./appDevelopment/AppDevelopment"),
  SoftwareDevelopment: () => import("./SoftwareDevelopment/softwareDevelopment"),
  WebDesign: () => import("./WebDesign/webDesign"),
  UiUxdDevelopment: () => import("./UiUxDesign/UiUxDevelopment"),
  Contact: () => import("./contactComponents/contact"),
  SEO: () => import("./marketing/SEO/SEO"),
  SocialMediaMarketing: () => import("./marketing/socialMediaMarketing/socialMediaMarketing"),
  ContentMarketing: () => import("./marketing/contentMarketing/contentMarketing"),
  DigitalMarketing: () => import("./marketing/digitalMarketing/digitalMarketing"),
  FAQPage: () => import("./pages/faqs"),
  PrivacyPolicy: () => import("./pages/privacypolacy"),
  TermsAndConditions: () => import("./pages/termsandconditions"),
  NotFound: () => import("./notfound"),
};
const Home = lazy(pageImports.Home);
const About = lazy(pageImports.About);
const WebDevelopment = lazy(pageImports.WebDevelopment);
const AppDevelopment = lazy(pageImports.AppDevelopment);
const SoftwareDevelopment = lazy(pageImports.SoftwareDevelopment);
const WebDesign = lazy(pageImports.WebDesign);
const UiUxdDevelopment = lazy(pageImports.UiUxdDevelopment);
const Contact = lazy(pageImports.Contact);
const SEO = lazy(pageImports.SEO);
const SocialMediaMarketing = lazy(pageImports.SocialMediaMarketing);
const ContentMarketing = lazy(pageImports.ContentMarketing);
const DigitalMarketing = lazy(pageImports.DigitalMarketing);
const FAQPage = lazy(pageImports.FAQPage);
const PrivacyPolicy = lazy(pageImports.PrivacyPolicy);
const TermsAndConditions = lazy(pageImports.TermsAndConditions);
const NotFound = lazy(pageImports.NotFound);
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialSidebar from "./SocialSideBarIcons";
import GlobalPointerEffects from "./Ui/GlobalPointerEffects";
import PageCursor from "./Ui/cursurs/PageCursor";
import RouteCursorEffects from "./Ui/cursurs/RouteCursorEffects";
// import Ribbons from "./Ui/cursurs/PattaRibbon";
// Path -> chunk, used to warm a page's code before the user clicks its link.
const importsByPath = {
  "/": pageImports.Home,
  "/about": pageImports.About,
  "/webdevelopment": pageImports.WebDevelopment,
  "/appdevelopment": pageImports.AppDevelopment,
  "/softwaredevelopment": pageImports.SoftwareDevelopment,
  "/webdesign": pageImports.WebDesign,
  "/uiuxdesign": pageImports.UiUxdDevelopment,
  "/contact": pageImports.Contact,
  "/seo": pageImports.SEO,
  "/socialmediamarketing": pageImports.SocialMediaMarketing,
  "/contentmarketing": pageImports.ContentMarketing,
  "/digitalmarketing": pageImports.DigitalMarketing,
  "/faqs": pageImports.FAQPage,
  "/privacy": pageImports.PrivacyPolicy,
  "/termsandconditions": pageImports.TermsAndConditions,
};

/*
 * Makes page-to-page navigation feel instant:
 *  - hovering / touching an internal link starts loading that page's chunk right away;
 *  - only intentional links are warmed; never download the entire site in the background.
 * Chunks are cached by the browser, so the click then renders without a "Loading..." flash.
 */
function PrefetchPages() {
  useEffect(() => {
    const warmed = new Set();
    const warm = (path) => {
      const load = importsByPath[path];
      if (!load || warmed.has(path)) return;
      warmed.add(path);
      load().catch(() => warmed.delete(path));
    };
    const onIntent = (e) => {
      const conn = navigator.connection;
      if (conn?.saveData || /2g/.test(conn?.effectiveType || "")) return;
      const a = e.target instanceof Element ? e.target.closest("a[href^='/']") : null;
      if (a && new URL(a.href).origin === location.origin) warm(new URL(a.href).pathname.replace(/\/$/, "") || "/");
    };
    document.addEventListener("pointerover", onIntent, { passive: true });
    document.addEventListener("touchstart", onIntent, { passive: true });
    document.addEventListener("focusin", onIntent);

    return () => {
      document.removeEventListener("pointerover", onIntent);
      document.removeEventListener("touchstart", onIntent);
      document.removeEventListener("focusin", onIntent);
    };
  }, []);
  return null;
}

// Soft fade-in on every page change. Opacity only: a transform here would break the
// position:fixed header inside each page.
function PageFade({ children }) {
  const { pathname } = useLocation();
  return <div key={pathname} className="page-fade">{children}</div>;
}

// New route = start at the top of the page (in-page #hash links still jump to their target).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
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
<ScrollToTop />
<PrefetchPages />
<GlobalPointerEffects />
<RouteCursorEffects />
<PageCursor />

        <SocialSidebar/>
            <Suspense fallback={<div role="status" aria-label="Loading page" style={{ minHeight: "100svh", background: "var(--site-bg)" }} />}>
            <PageFade>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hometwo" element={<Navigate to="/" replace />} />
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
                <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>
                <Route path="/faqs" element={<FAQPage />}/>
                <Route path="/privacy" element={<PrivacyPolicy />}/>
                  <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
            </PageFade>
            </Suspense>
        </BrowserRouter>
    );
}
