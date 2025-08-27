
import NavBar from "@/components/NavBar";
import IfaHome from "@/components/IfaHome";
import MovingTexts from "@/components/MovingTexts";
import AboutIfakiko from "@/components/AboutIfakiko";
import MobilAppFeatures from "@/components/MobilAppFeatures";
import JoinIfa from "@/components/JoinIfa";
import AppUsage from "@/components/AppUsage";
import IfaFaq from "@/components/IfaFaq";
import IfaConnect from "@/components/IfaConnect";
import Footer from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";


export default function Home() {
  return (
   <div className="">
    <NavBar/>
   <IfaHome />
   <MovingTexts text2={'verse interpretation'} text1={"orisa studies"} />
   <AboutIfakiko/>
   <MobilAppFeatures/>
   <JoinIfa/>
   <AppUsage/>
   <IfaFaq/>
   <IfaConnect/>
  
   <Footer/>
  <div className="md:block hidden"> <SmoothCursor/></div>
   </div>
  );
}
