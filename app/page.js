import Carousel from "@/components/Carousel";
import FabricTypes from "@/components/FabricTypes";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <main>
      <Hero />
      <Summary />
      <Carousel />
      <FabricTypes />
    </main>
  );
}
