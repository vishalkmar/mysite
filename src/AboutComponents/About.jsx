
import Header from "../header"
import Footer from "../footer"
import AboutBanner from "./AboutBanner"
import WhoWeAreAboutUs from "./WhoWeAreAboutUs"
import TeamSection from "./TeamSection"
import HowWeWork from "./HowWeWork"
import Icard from "../Ui/Icard"
import Lightning from "../Ui/background/Lighting"

export default function About(){

     return(
        <>
              <Header/>
           

            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Lightning
            hue={220}
            xOffset={0}
            speed={1}
            intensity={1}
            size={1}
            />
             <Icard />
            </div>
              
              <AboutBanner/>
              <WhoWeAreAboutUs/>
              <HowWeWork/>
             
              <TeamSection/>
              <Footer/>
        </>
     )
}