
import Header from "../header"
import Footer from "../footer"
import WebDesignFAQ from "./webfaqs"
import WebDesignExpertise from "./webdesignexperties"
import HeroWebDesignBanner from "./heroWebdesign"
import WebDesignShowcase from "./webdesignshowcase"
import { SkDesignProjects } from "../serviceKit/Projects"
import { byIds } from "../serviceKit/projectData"
export default function WebDesign(){

     return(
        <>
           <Header/>
           <HeroWebDesignBanner/>
           <WebDesignExpertise/>
            <WebDesignShowcase/>
            <SkDesignProjects
              heading={{
                eyebrow: "Design work",
                title: "Every brand",
                accent: "its own look.",
                copy: "Palettes, type and layouts shaped around each client, from editorial real estate to playful product sites.",
              }}
              projects={byIds(["shriyamuna", "callingkaro", "devshay", "talklink", "xclusiveoman"])}
            />
           <WebDesignFAQ/>
           <Footer/>
        </>
     )
}