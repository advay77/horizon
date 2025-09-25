import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <p className="text-hero-subtext text-lg md:text-xl lg:text-2xl mb-6 font-light tracking-[0.2em] uppercase">
          One Adventure At A Time
        </p>
        <h1 className="text-hero-text font-black text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-[0.8] tracking-[-0.02em] mb-8">
          DISCOVER
        </h1>
        <p className="text-hero-subtext/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Embark on extraordinary journeys and create memories that will last a lifetime with our curated travel experiences.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;