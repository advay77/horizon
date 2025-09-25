import { Search, FileText, MapPin } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Choose your Package",
    description: "& tell us your preferences",
    icon: Search,
    color: "text-blue-500"
  },
  {
    number: "2", 
    title: "Get multiple free quotes",
    description: "from our verified travel agents",
    icon: FileText,
    color: "text-green-500"
  },
  {
    number: "3",
    title: "Customize & Book Package", 
    description: "and enjoy your travel",
    icon: MapPin,
    color: "text-orange-500"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Customize and book your travel in 3 simple steps</p>
        </div>

        <div className="relative">
          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="relative text-center group">
                  {/* Connecting Line - Hidden on mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-full">
                      <svg 
                        className="w-full h-8" 
                        viewBox="0 0 200 40"
                        fill="none"
                      >
                        <path
                          d="M20 20 Q50 10, 80 20 T140 20 T200 20"
                          stroke="#FB923C"
                          strokeWidth="2"
                          strokeDasharray="8,4"
                          fill="none"
                        />
                        <polygon
                          points="190,15 200,20 190,25"
                          fill="#FB923C"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Step Content */}
                  <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    {/* Large Step Number Background */}
                    <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-100 leading-none select-none">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gray-50 flex items-center justify-center ${step.color} group-hover:bg-gray-100 transition-colors duration-300 relative z-10`}>
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Connecting Lines */}
          <div className="md:hidden flex flex-col items-center mt-8 space-y-4">
            {[1, 2].map((index) => (
              <svg key={index} className="w-8 h-12" viewBox="0 0 40 60" fill="none">
                <path
                  d="M20 10 Q15 20, 20 30 T20 50"
                  stroke="#FB923C"
                  strokeWidth="2"
                  strokeDasharray="6,3"
                  fill="none"
                />
                <polygon
                  points="17,45 20,55 23,45"
                  fill="#FB923C"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;