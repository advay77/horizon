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
        <p className="text-hero-subtext text-lg md:text-xl lg:text-2xl mb-4 font-light tracking-wide">
          One Adventure At A Time
        </p>
        <h1 className="text-hero-text font-bold text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-none tracking-tight">
          DISCOVER
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;