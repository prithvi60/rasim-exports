import Carousel from "@/components/Carousel";
import Certifications from "@/components/Certifications";
import CompanyStats from "@/components/CompanyStats";
import ContactUsHome from "@/components/ContactUsHome";
import FabricTypes from "@/components/FabricTypes";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import OurVision_Mission from "@/components/OurVison&Mission";
import { ReactMarquee } from "@/components/ReactMarquee";
import REProgress from "@/components/REProgress";
import Summary from "@/components/Summary";
import VariousTypesOfProducts from "@/components/VariousTypesOfProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Summary />
      <ReactMarquee
        data={"Fashion that redefines timeless charm"}
        direction={"left"}
      />
      <REProgress />
      {/* <Carousel /> */}
      <OurClients />
      <FabricTypes />
      <CompanyStats />
      {/* <VariousTypesOfProducts /> */}
      <OurVision_Mission />
      <ReactMarquee
        data={"Fashion that redefines timeless charm"}
        direction={"right"}
      />
      <Certifications />
      <ContactUsHome />
    </main>
  );
}
