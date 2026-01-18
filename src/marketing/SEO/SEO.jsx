
import Header from "../../header"
import Footer from "../../footer"
import SeoFAQ from "./seofaqs"
import SEOExpertise from "./seoexperties"
import HeroSEOBanner from "./seoherobanner"
import SEOShowcase from "./seoshowcase"
import SEOInfoSection from "./seoinfo"

export default function SEO(){
      return(
        <>
     
        <Header/>
        <HeroSEOBanner/>
        <SEOExpertise/>
        <SEOInfoSection/>
        <SEOShowcase/>
        <SeoFAQ/>
        <Footer/>
        </>
      )
}