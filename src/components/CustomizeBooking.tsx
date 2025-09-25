import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Grid, Map, Clock, DollarSign, MessageCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Grid,
    title: "100% Customized Trips",
    description: "Tailor-made travel experiences just for you.",
    color: "text-orange-500"
  },
  {
    icon: Map,
    title: "Multi-City Adventures", 
    description: "Visit multiple destinations in one seamless trip.",
    color: "text-orange-500"
  },
  {
    icon: Clock,
    title: "Instant & Flexible Planning",
    description: "Pick your own dates that fit your schedule.",
    color: "text-orange-500"
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly Trips",
    description: "Smart recommendations that match your budget.",
    color: "text-orange-500"
  }
];

const CustomizeBooking = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customize Your Booking</h2>
          <p className="text-gray-600 text-lg">Customize every aspect of your journey to fit your budget, schedule, and group dynamics.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <Card className="bg-gradient-to-br from-orange-100 to-blue-100 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                      Let Our Experts Tailor A{" "}
                      <span className="text-orange-500">Customized Package</span>{" "}
                      That Caters To Your Preferences
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-lg font-medium">Make Your Custom Itinerary Now!</span>
                      <ArrowRight className="w-5 h-5 text-orange-500" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex-1 sm:flex-none">
                      Customize Now
                    </Button>
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 flex-1 sm:flex-none">
                      <MessageCircle className="w-5 h-5" />
                      Whatsapp Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Features */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center ${feature.color} group-hover:bg-orange-100 transition-colors duration-300`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Stats or Additional Content */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
            <p className="text-gray-600 font-medium">Happy Travelers</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
            <p className="text-gray-600 font-medium">Destinations</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <p className="text-gray-600 font-medium">Support</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <p className="text-gray-600 font-medium">Customizable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeBooking;