
import Header from "../../header"
import Footer from "../../footer"
import SocialFAQ from "./socialfaqs"
import SocialMediaMarketingExpertise from "./socialmediamarketingexperties"
import HeroSocialMediaBanner from "./socialmediamarketingbanner"
import SMMShowcase from "./socialmediashowcase"
import SocialMediaMarketingInfoSection from "./socialmediainfo"
export default function SocialMediaMarketing(){
      return(
        <>
        <Header/>
        <HeroSocialMediaBanner/>
        <SocialMediaMarketingExpertise/>
        <SocialMediaMarketingInfoSection/>
        <SMMShowcase/>
         <SocialFAQ/>
        <Footer/>
        </>
      )
}