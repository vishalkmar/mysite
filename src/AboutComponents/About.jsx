
import Header from "../header"
import Footer from "../footer"
import AboutBanner from "./AboutBanner"
import WhoWeAreAboutUs from "./WhoWeAreAboutUs"
import TeamSection from "./TeamSection"
import HowWeWork from "./HowWeWork"
import { lazy, Suspense } from "react"
// 3D lanyard card pulls in three.js + react-three-fiber + rapier physics (~2 MB):
// load it as its own chunk so the rest of the About page opens instantly.
const Icard = lazy(() => import("../Ui/Icard"))
import Lightning from "../Ui/background/Lighting"

export default function About(){

     return(
        <>
              <Header/>
           

            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Lightning
            hue={220}
            xOffset={0}
            speed={1}
            intensity={1}
            size={1}
            />
             <Suspense fallback={null}><Icard /></Suspense>
            </div>
              
              <AboutBanner/>
              <WhoWeAreAboutUs/>
              <HowWeWork/>
             
              <TeamSection/>
              <Footer/>
        </>
     )
}
