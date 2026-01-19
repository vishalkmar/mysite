
import Header from "../../header"
import Footer from "../../footer"
import DigitalFAQ from "./digitalmarketingfaqs"
import DigitalMarketingExpertise from "./digitalmarketinexperties"
import DigitalMarketingShowcase from "./digitalmarketingshowcase"
import DigitalMarketingInfoSection from "./digitalmarketinginfo"
import GridScanHeroBanner from './digitalmarketingbanner'
export default function DigitalMarketing(){
      return(
        <>
        <Header/>
        < GridScanHeroBanner/>
        <DigitalMarketingExpertise/>
        <DigitalMarketingInfoSection/>
        <DigitalMarketingShowcase/>
        <DigitalFAQ/>
        <Footer/>
       
        </>
      )
}