
import Header from "../../header"
import Footer from "../../footer"
import DigitalFAQ from "./digitalmarketingfaqs"
import DigitalMarketingExpertise from "./digitalmarketinexperties"
import DigitalMarketingShowcase from "./digitalmarketingshowcase"
import DigitalMarketingInfoSection from "./digitalmarketinginfo"
import DigitalMarketingHeroBanner from './digitalmarketingbanner'
export default function DigitalMarketing(){
      return(
        <>
        <Header/>
        <DigitalMarketingHeroBanner/>
        <DigitalMarketingExpertise/>
        <DigitalMarketingInfoSection/>
        <DigitalMarketingShowcase/>
        <DigitalFAQ/>
        <Footer/>
       
        </>
      )
}
