

import Header from "../header"
import Footer from "../footer"


import AppDevelopmentServices from "./appdevelopmentService"
import AppTechnologies from "./apptechnologies"
import AppDevelopmentFAQ from "./faqs"
import AppDevelopmentShowcase from "./Appdevshowcase"
import HeroBanner from "./banner"
export default function AppDevelopment(){

     return(
        <>
        <Header/>
            <HeroBanner/>
            
            <AppTechnologies/>
            <AppDevelopmentShowcase/>
            <AppDevelopmentServices/>
            <AppDevelopmentFAQ/>
        <Footer/>
        </>
     )
}