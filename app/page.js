
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



export default function Home() {
  return (
   <div className="">
    <NavBar/>
   <IfaHome />
   <MovingTexts text1={'verse interpretation'} text2={"orisa studies"} />
   <AboutIfakiko/>
   <MobilAppFeatures/>
   <JoinIfa/>
   <AppUsage/>
   <IfaFaq/>
   <IfaConnect/>
   <MovingTexts text1={'orisa studies'} text2={'verse interpretation'} />
   <MovingTexts text1={'verse interpretation'} text2={'orisa studies'} />
   <Footer/>
   
   </div>
  );
}
