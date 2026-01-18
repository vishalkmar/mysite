import Footer from "../footer";

import Header from "../header";
import UiUxFAQ from "./uiusfaqs";
import UIUXExpertise from "./uiuxexperties";
import HeroUIUXBanner from "./heroUiUsbanner";
import UIUXShowcase from "./uiusshowcase";
export default function UiUxdDevelopment(){

     return(
        <>
        <Header/>
        <HeroUIUXBanner/>
        <UIUXExpertise/>
        <UIUXShowcase/>
            <UiUxFAQ/>
        <Footer/>
        </>
     )
}