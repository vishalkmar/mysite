
import Header from "../header"
import Footer from "../footer"
import SoftwareDevFAQ from "./softwaredevfaqs"

import SoftwareDevelopmentExpertise from "./softwaredevexperties"

import SoftwareDevelopmentShowcase from "./softwaredevelopmentshaowcase"
import GalaxyHeroBanner from "./banner"
export default function SoftwareDevelopment(){

     return(
        <>
        <Header/>
       
          <GalaxyHeroBanner/>
         <SoftwareDevelopmentExpertise/>
         <SoftwareDevelopmentShowcase/>
        <SoftwareDevFAQ/>
        <Footer/>
        </>
     )
}