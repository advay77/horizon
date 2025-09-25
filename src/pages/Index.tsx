import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingTabs from "@/components/BookingTabs";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <BookingTabs />
    </div>
  );
};

export default Index;
