import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExclusiveDeals from "@/components/ExclusiveDeals";
import HowItWorks from "@/components/HowItWorks";
import ExperienceExtraordinary from "@/components/ExperienceExtraordinary";
import EarlyBirdOffers from "@/components/EarlyBirdOffers";
import CustomizeBooking from "@/components/CustomizeBooking";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <ExclusiveDeals />
      <HowItWorks />
      <ExperienceExtraordinary />
      <EarlyBirdOffers />
      <CustomizeBooking />
    </div>
  );
};

export default Index;
