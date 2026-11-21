import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./RouteCursorEffects.css";

// Loaded only on the pages that use them (FluidCursor pulls in three.js).
const FluidCursor = lazy(() => import("../../ApexUI-Kit/FluidCursor/FluidCursor.jsx"));
const CursorTrail = lazy(() => import("../../ApexUI-Kit/CursorTrail/CursorTrail.jsx"));

// Keep in sync with FLUID_CURSOR_ROUTES in ../GlobalPointerEffects.jsx
const FLUID_CURSOR_ROUTES = ["/seo", "/socialmediamarketing", "/contentmarketing", "/digitalmarketing"];
const TRAIL_ROUTES = ["/about"];

/*
 * Page-specific cursor effects from ApexUI:
 *  - marketing pages: full-page FluidCursor
 *  - about page: global comet CursorTrail
 * This project has no Tailwind, so the layer positioning lives in RouteCursorEffects.css.
 */
export default function RouteCursorEffects() {
  const path = useLocation().pathname.replace(/\/$/, "") || "/";
  const [finePointer, setFinePointer] = useState(() => matchMedia("(hover: hover) and (pointer: fine)").matches);

  useEffect(() => {
    const media = matchMedia("(hover: hover) and (pointer: fine)");
    const change = () => setFinePointer(media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);

  if (!finePointer) return null;

  if (FLUID_CURSOR_ROUTES.includes(path)) {
    return (
      <Suspense fallback={null}>
        {/* key: fresh simulation per page */}
        <div className="route-fluid-cursor" aria-hidden="true" key={path}>
          <FluidCursor dissipation={1.6} curl={18} splatRadius={0.22} />
        </div>
      </Suspense>
    );
  }

  if (TRAIL_ROUTES.includes(path)) {
    return (
      <Suspense fallback={null}>
        <div className="route-cursor-trail">
          <CursorTrail variant="comet" global />
        </div>
      </Suspense>
    );
  }

  return null;
}
