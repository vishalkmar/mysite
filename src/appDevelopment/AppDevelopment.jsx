

import Header from "../header"
import Footer from "../footer"
import RainBackground from "../ApexUI-Kit/RainBackground/RainBackground.jsx"
import "./appDevelopment.css"


import AppDevelopmentServices from "./appdevelopmentService"
import AppTechnologies from "./apptechnologies"
import AppDevelopmentFAQ from "./faqs"
import AppDevelopmentShowcase from "./Appdevshowcase"
import HeroBanner from "./banner"
import AppWork from "./AppWork"
import { useEffect } from "react"
export default function AppDevelopment(){
     useEffect(() => {
       const previous = document.title;
       document.documentElement.classList.add('app-development-active');
       document.title = "AI & Mobile App Development | Flutter, React Native & PWA | NexaTech Innovation";
       return () => { document.title = previous; document.documentElement.classList.remove('app-development-active'); };
     }, []);

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
            
            <AppDevelopmentShowcase/>
            <AppTechnologies/>
            <AppDevelopmentServices/>
            <AppWork/>
            <AppDevelopmentFAQ/>
        </main>
        <Footer/>
        </div>
     )
}
