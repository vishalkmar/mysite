
import Header from "../../header"
import Footer from "../../footer"
import ContentMarketingFAQ from "./contentmarketingfaqs"
import ContentMarketingExpertise from "./contentmaketingexperties"
import HeroContentMarketingBanner from "./contentmarketingbanner"
import ContentMarketingShowcase from "./contentmarketingshowcase"
import ContentMarketingInfoSection from "./contentmarketinginfo"
export default function ContentMarketing(){
     return(
        <>
            <Header/>
            <HeroContentMarketingBanner/>
            <ContentMarketingExpertise/>
            <ContentMarketingInfoSection/>
            <ContentMarketingShowcase/>
            <ContentMarketingFAQ/>
            <Footer/>
        </>
      )
}