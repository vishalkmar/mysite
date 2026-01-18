
import Header from "../../header"
import Footer from "../../footer"
import DigitalFAQ from "./digitalmarketingfaqs"
import DigitalMarketingExpertise from "./digitalmarketinexperties"
import HeroDigitalMarketingBanner from "./digitalmarketingbanner"
import DigitalMarketingShowcase from "./digitalmarketingshowcase"
import DigitalMarketingInfoSection from "./digitalmarketinginfo"
export default function DigitalMarketing(){
      return(
        <>
        <Header/>
        <HeroDigitalMarketingBanner/>
        <DigitalMarketingExpertise/>
        <DigitalMarketingInfoSection/>
        <DigitalMarketingShowcase/>
        <DigitalFAQ/>
        <Footer/>
       
        </>
      )
}