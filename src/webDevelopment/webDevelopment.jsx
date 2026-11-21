import HeroBanner from "./Herobanner"
import Header from "../header"

import Footer from "../footer"
import HappyClients from "./client"
import FeatureSection from "./features"
import TechnologyExpertise from "./experites"
import { SkWebProjects } from "../serviceKit/Projects"
import { webProjects } from "../serviceKit/projectData"
import WebDevelopmentFAQ from "./webdevfaqs"
export default function WebDevelopment(){

     return(
        <>
        <Header/>
        <HeroBanner/>
        <FeatureSection/>
        <TechnologyExpertise/>
        <SkWebProjects
          heading={{
            eyebrow: "Selected work",
            title: "Live websites.",
            accent: "Real businesses.",
            copy: "Product sites, booking platforms, portals and brand websites we have designed, built and launched.",
          }}
          projects={webProjects}
        />
        <HappyClients/>
        <WebDevelopmentFAQ/>
        <Footer/>
        </>
     )
}