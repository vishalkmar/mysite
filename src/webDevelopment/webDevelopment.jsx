import HeroBanner from "./Herobanner"
import Header from "../header"

import Footer from "../footer"
import HappyClients from "./client"
import FeatureSection from "./features"
import TechnologyExpertise from "./experites"
import BootstrapCarousel from "./webcrowsel"
import WebDevelopmentFAQ from "./webdevfaqs"
export default function WebDevelopment(){

     return(
        <>
        <Header/>
        <HeroBanner/>
        <FeatureSection/>
        <TechnologyExpertise/>
       <div className="container-fluid py-5" style={{background:  "#020617",}}>
           <h1 className="text-center" style={{  background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', fontFamily:'orbitron',fontSize:'4.2rem' }}>Have an Eye To Our Decent Work</h1>
            <div className="container">
                   <div className="row">
               <div className="col-auto py-5">
                     <BootstrapCarousel/>
               </div>
           </div>
            </div>
       </div>
        <HappyClients/>
        <WebDevelopmentFAQ/>
        <Footer/>
        </>
     )
}