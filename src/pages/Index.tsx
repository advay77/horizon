import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingTabs from "@/components/BookingTabs";
import ExclusiveDeals from "@/components/ExclusiveDeals";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <BookingTabs />
      <ExclusiveDeals />
      <HowItWorks />
    </div>
  );
};

export default Index;
