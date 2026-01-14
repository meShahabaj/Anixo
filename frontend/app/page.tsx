import Banner from "@/components/Home/Banner";
import TechnologiesSlider from "@/components/Home/TechnologiesSlider";
import Services from "@/components/Home/Services"
import Reasons from "@/components/Home/Reasons";
import ProjectsSection from "@/components/Home/ProjectSection";
import ContactForm from "@/components/Home/ContactForm";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services/>
      <Reasons/>
      <ProjectsSection/>
      <ContactForm/>
      <TechnologiesSlider />
      
    </div>
  );
}
