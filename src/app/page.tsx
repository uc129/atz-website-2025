import CareSection from "./components/care/care";
import LightButton from "./components/form-components/buttons/light-button";
import Foundations from "./components/foundations/foundations";
import StartToday from "./components/get-started/start";
import HeroSection from "./components/hero/hero";
import ServicesOverview from "./components/services-overview/overview";
import { ShowcaseButton } from "./components/showcase/button";
import { Testimonials } from "./components/testimonials/testimonials";
import { ElevatorTicker } from "./components/ticker/elevator-ticker";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-12">
      <HeroSection />
      <ServicesOverview />
      <ElevatorTicker />
      <Foundations />
      <StartToday />
      <CareSection />
      <ShowcaseButton />
      <Testimonials />
    </div>
  );
}
