
import Header from "../header"
import Footer from "../footer"
import SoftwareDevFAQ from "./softwaredevfaqs"

import SoftwareDevelopmentExpertise from "./softwaredevexperties"

import SoftwareDevelopmentShowcase from "./softwaredevelopmentshaowcase"
import GalaxyHeroBanner from "./banner"
import { SkWebProjects } from "../serviceKit/Projects"
import { byIds } from "../serviceKit/projectData"
export default function SoftwareDevelopment(){

     return(
        <>
        <Header/>
       
          <GalaxyHeroBanner/>
         <SoftwareDevelopmentExpertise/>
         <SoftwareDevelopmentShowcase/>
         <SkWebProjects
           heading={{
             eyebrow: "Systems we built",
             title: "Platforms,",
             accent: "portals and SaaS.",
             copy: "Booking engines, B2B portals, admissions systems and AI products running for real customers every day.",
           }}
           projects={byIds(["cyphermind", "seychelles", "xclusiveoman", "mcti", "reconnct"])}
         />
        <SoftwareDevFAQ/>
        <Footer/>
        </>
     )
}