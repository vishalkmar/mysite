

import Header from "../header"
import Footer from "../footer"
import ImageBanner from "./banner"
import appbanner from '../serviceImages/app/appbanner.jpg'
import AppDevelopmentServices from "./appdevelopmentService"
import AppTechnologies from "./apptechnologies"
import AppDevelopmentFAQ from "./faqs"
import AppDevelopmentShowcase from "./Appdevshowcase"
export default function AppDevelopment(){

     return(
        <>
        <Header/>
            <ImageBanner 
            imageUrl={appbanner}
            />
            <AppTechnologies/>
            <AppDevelopmentShowcase/>
            <AppDevelopmentServices/>
            <AppDevelopmentFAQ/>
        <Footer/>
        </>
     )
}