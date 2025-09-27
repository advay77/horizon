import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Plane } from "lucide-react";
import I1 from "@/assets/I1.png";
import I2 from "@/assets/I2.png";
import I3 from "@/assets/I3.png";

const dealCategories = [
  "Deals", "Hotels", "Packages", "Cruise", "Cabs", "Activities", "Community Trips", "Trekking"
];

const dealsData = [
  {
    id: 1,
    type: "Hotel",
    title: "Lemon Tree Hotel",
    location: "New Delhi",
    price: "5,999",
    originalPrice: "12,999",
    timeLeft: "32m : 45s",
    image: I1,
    includes: "Includes taxes"
  },
  {
    id: 2,
    type: "Package",
    title: "Shimla, Kullu & Manali",
    location: "Manali",
    price: "10,999",
    originalPrice: "12,999",
    timeLeft: "32m : 45s",
    image: I2,
    details: {
      nights: "2 Flights",
      hotels: "11 Hotels", 
      activities: "5 Activities",
      transfers: "4 Transfers"
    },
    includes: "Includes taxes"
  },
  {
    id: 3,
    type: "Cruise",
    title: "Cordelia Cruise",
    location: "Chennai - Chennai",
    price: "10,999",
    originalPrice: "12,999",
    timeLeft: "32m : 45s",
    date: "16 October 2023",
    image: I3,
    includes: "Includes taxes"
  }
];

const ExclusiveDeals = () => {
  const [activeCategory, setActiveCategory] = useState("Deals");

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Exclusive Deals & Offers
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {dealCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealsData.map((deal) => (
            <Card key={deal.id} className="flex flex-col h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Timer Badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Ends in 1h : {deal.timeLeft}
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {deal.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="flex-1 flex flex-col p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{deal.title}</h3>
                        <p className="text-gray-300 text-sm flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {deal.location}
                        </p>
                      </div>
                      {deal.type === "Package" && (
                        <div className="flex gap-1">
                          <Users className="w-4 h-4 text-orange-400" />
                          <Plane className="w-4 h-4 text-orange-400" />
                        </div>
                      )}
                    </div>

                    {/* Package Details */}
                    {deal.details && (
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                            <Plane className="w-2 h-2 text-white" />
                          </div>
                          {deal.details.nights}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded"></div>
                          </div>
                          {deal.details.hotels}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                            <Users className="w-2 h-2 text-white" />
                          </div>
                          {deal.details.activities}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded"></div>
                          </div>
                          {deal.details.transfers}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto">
                    {/* Date for Cruise */}
                    {deal.date && (
                      <div className="flex items-center gap-1 mb-4 text-sm">
                        <Calendar className="w-4 h-4 text-orange-400" />
                        {deal.date}
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl font-bold text-orange-400">₹ {deal.price}</span>
                          <span className="text-sm text-gray-400 line-through">₹ {deal.originalPrice}</span>
                          <span className="text-xs text-gray-300">Per Person</span>
                        </div>
                        <p className="text-xs text-gray-400">{deal.includes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals;