

import Header from "../header"
import Footer from "../footer"
import RainBackground from "../ApexUI-Kit/RainBackground/RainBackground.jsx"
import "./appDevelopment.css"


import AppDevelopmentServices from "./appdevelopmentService"
import AppTechnologies from "./apptechnologies"
import AppDevelopmentFAQ from "./faqs"
import AppDevelopmentShowcase from "./Appdevshowcase"
import HeroBanner from "./banner"
import { SkAppProjects } from "../serviceKit/Projects"
export default function AppDevelopment(){

     return(
        <div className="app-development-page">
        <div className="app-development-rain" aria-hidden="true">
            <RainBackground
                dropCount={32}
                dropGradient="linear-gradient(to bottom, #00f2fe, #4facfe)"
                collisionGradient="linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            />
        </div>
        <Header/>
        <main className="app-development-content">
            <HeroBanner/>
            
            <AppTechnologies/>
            <AppDevelopmentShowcase/>
            <SkAppProjects
                heading={{
                    eyebrow: "Apps we have shipped",
                    title: "In your pocket.",
                    accent: "On every screen.",
                    copy: "Calling, chat, travel, AI and education apps. Each one designed and engineered end to end by our team.",
                }}
            />
            <AppDevelopmentServices/>
            <AppDevelopmentFAQ/>
        </main>
        <Footer/>
        </div>
     )
}
