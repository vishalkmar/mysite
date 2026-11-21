import Footer from "../footer";

import Header from "../header";
import UiUxFAQ from "./uiusfaqs";
import UIUXExpertise from "./uiuxexperties";
import HeroUIUXBanner from "./heroUiUsbanner";
import UIUXShowcase from "./uiusshowcase";
import { SkAppProjects } from "../serviceKit/Projects";
export default function UiUxdDevelopment(){

     return(
        <>
        <Header/>
        <HeroUIUXBanner/>
        <UIUXExpertise/>
        <UIUXShowcase/>
        <SkAppProjects
          heading={{
            eyebrow: "Interfaces we designed",
            title: "Designed",
            accent: "to be used.",
            copy: "Dialers, chats, booking flows and dashboards. Clear hierarchy, honest feedback and screens that feel effortless.",
          }}
          ids={["callingkaro", "talklink", "reconnct", "seychelles", "cyphermind", "mcti"]}
        />
            <UiUxFAQ/>
        <Footer/>
        </>
     )
}