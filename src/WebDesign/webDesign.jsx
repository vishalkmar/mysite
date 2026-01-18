
import Header from "../header"
import Footer from "../footer"
import WebDesignFAQ from "./webfaqs"
import WebDesignExpertise from "./webdesignexperties"
import HeroWebDesignBanner from "./heroWebdesign"
import WebDesignShowcase from "./webdesignshowcase"
export default function WebDesign(){

     return(
        <>
           <Header/>
           <HeroWebDesignBanner/>
           <WebDesignExpertise/>
            <WebDesignShowcase/>
           <WebDesignFAQ/>
           <Footer/>
        </>
     )
}