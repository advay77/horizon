import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Hotel, User, Calendar, ArrowRight } from "lucide-react";

const earlyBirdOffers = [
  {
    id: 1,
    title: "Shimla, Kullu, Manali in Winters",
    location: "Himachal Pradesh",
    duration: "6N/7D",
    price: "5,999",
    originalPrice: "12,999",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: {
      flights: "2 Flights",
      hotels: "11 Hotels",
      activities: "5 Activities",
      transfers: "6 Transfers"
    },
    badge: "Early Bird Offer",
    includes: "Includes taxes"
  },
  {
    id: 2,
    title: "The Desert Odyssey",
    location: "Rajasthan",
    duration: "6N/7D", 
    price: "5,999",
    originalPrice: "12,999",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: {
      flights: "2 Flights",
      hotels: "11 Hotels",
      activities: "5 Activities",
      transfers: "4 Transfers"
    },
    badge: "Early Bird Offer",
    includes: "Includes taxes"
  },
  {
    id: 3,
    title: "The Landscape Adventure",
    location: "Meghalaya",
    duration: "6N/7D",
    price: "5,999",
    originalPrice: "12,999",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    details: {
      flights: "2 Flights",
      hotels: "11 Hotels",
      activities: "5 Activities",
      transfers: "4 Transfers"
    },
    badge: "Early Bird Offer",
    includes: "Includes taxes"
  }
];

const EarlyBirdOffers = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Early Bird Offers</h2>
          <p className="text-gray-600 text-lg">Grab our early bird offer deals and enjoy your vacation with multiple benefits</p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {earlyBirdOffers.map((offer, index) => (
            <Card key={offer.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {offer.badge}
                  </Badge>
                </div>
                
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs">
                    {offer.duration}
                  </Badge>
                </div>

                {/* Popular badge for middle card */}
                {index === 1 && (
                  <div className="absolute top-0 right-8 bg-blue-500 text-white px-4 py-1 rounded-b-lg text-xs font-bold">
                    POPULAR
                  </div>
                )}
              </div>

              <CardContent className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-300 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {offer.location}
                  </p>
                </div>

                {/* Package Details Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <Plane className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{offer.details.flights}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <Hotel className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{offer.details.hotels}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{offer.details.activities}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <Calendar className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{offer.details.transfers}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-orange-400">₹ {offer.price}</span>
                      <span className="text-sm text-gray-400 line-through">₹ {offer.originalPrice}</span>
                      <span className="text-xs text-gray-300">Per Person</span>
                    </div>
                    <p className="text-xs text-gray-400">{offer.includes}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Explore More
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EarlyBirdOffers;