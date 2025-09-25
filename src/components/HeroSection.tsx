import heroBackground from "@/assets/hero-background.jpg";
import BookingTabs from "./BookingTabs";

const HeroSection = () => {
  return (
    <section className="relative">
      <div 
        className="w-full pt-16 pb-24 md:pt-20 md:pb-32 relative"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '70vh'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto h-full flex flex-col justify-center">
          <p className="text-hero-subtext text-lg md:text-xl lg:text-2xl mb-2 font-light tracking-[0.2em] uppercase">
            One Adventure At A Time
          </p>
          <h1 className="text-hero-text font-black text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.9] tracking-[-0.02em] mb-6">
            DISCOVER
          </h1>
          <p className="text-hero-subtext/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Embark on extraordinary journeys and create memories that will last a lifetime with our curated travel experiences.
          </p>
          
          {/* Booking Tabs - Simplified without glass effect */}
          <div className="w-full max-w-4xl mx-auto">
            <BookingTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;