import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: 1,
    title: "Solo/Group Female Travelers",
    subtitle: "Your safety and peace of mind are our utmost priorities",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    buttonText: "Explore Now"
  },
  {
    id: 2,
    title: "Adventure Seekers",
    subtitle: "Push your limits with thrilling adventures across the globe",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    buttonText: "Discover More"
  },
  {
    id: 3,
    title: "Cultural Explorers",
    subtitle: "Immerse yourself in rich cultures and ancient traditions",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    buttonText: "Learn More"
  }
];

const ExperienceExtraordinary = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience the Extraordinary</h2>
          <p className="text-gray-600 text-lg">Immerse yourself in extraordinary journeys tailored to your style</p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-96 md:h-[500px]">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    index === currentSlide ? 'transform translate-x-0' : 
                    index < currentSlide ? 'transform -translate-x-full' : 'transform translate-x-full'
                  }`}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${experience.image})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="px-8 md:px-16 text-white max-w-2xl">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                          {experience.title}
                        </h3>
                        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                          {experience.subtitle}
                        </p>
                        <Button 
                          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                          {experience.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Card>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-500 transform scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceExtraordinary;