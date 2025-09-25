import { useState } from "react";
import { Calendar, MapPin, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BookingTabs = () => {
  const [isFlightAdded, setIsFlightAdded] = useState(false);

  const bookingTypes = [
    { id: "packages", label: "Packages", icon: "🎒" },
    { id: "hotels", label: "Hotels", icon: "🏨" },
    { id: "cabs", label: "Cabs", icon: "🚗" },
    { id: "activities", label: "Activities", icon: "🏔️" },
    { id: "trains", label: "Trains", icon: "🚂" },
    { id: "buses", label: "Buses", icon: "🚌" },
    { id: "flights", label: "Flights", icon: "✈️" },
    { id: "cruise", label: "Cruise", icon: "🛳️" },
  ];

  return (
    <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-20">
      <div className="bg-card/95 backdrop-blur-md rounded-2xl border border-glass-border p-6 shadow-2xl">
        <Tabs defaultValue="packages" className="w-full">
          {/* Booking Type Tabs */}
          <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-1 bg-transparent h-auto p-0 mb-6">
            {bookingTypes.map((type) => (
              <TabsTrigger
                key={type.id}
                value={type.id}
                className="flex flex-col items-center gap-1 p-3 text-xs bg-secondary/20 hover:bg-secondary/40 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground rounded-lg border-0"
              >
                <span className="text-lg">{type.icon}</span>
                <span className="hidden sm:block">{type.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Booking Forms */}
          <TabsContent value="packages" className="space-y-4">
            <PackageBookingForm />
          </TabsContent>
          
          <TabsContent value="hotels" className="space-y-4">
            <HotelBookingForm />
          </TabsContent>

          <TabsContent value="flights" className="space-y-4">
            <FlightBookingForm />
          </TabsContent>

          {/* Add similar content for other tabs */}
          {bookingTypes.slice(2, -1).map((type) => (
            <TabsContent key={type.id} value={type.id} className="space-y-4">
              <div className="text-center py-8">
                <span className="text-4xl mb-4 block">{type.icon}</span>
                <h3 className="text-xl font-semibold text-card-foreground">{type.label} Booking</h3>
                <p className="text-muted-foreground mt-2">Coming Soon</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Add Flight Option */}
        {!isFlightAdded && (
          <div className="mt-4 pt-4 border-t border-glass-border">
            <Button
              variant="ghost"
              onClick={() => setIsFlightAdded(true)}
              className="text-card-foreground hover:bg-accent/10"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add a flight
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const PackageBookingForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div className="lg:col-span-1">
        <Label htmlFor="leaving-from" className="text-sm text-muted-foreground">Leaving From</Label>
        <Select>
          <SelectTrigger id="leaving-from" className="bg-input border-input-border">
            <SelectValue placeholder="Select leaving Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="london">London</SelectItem>
            <SelectItem value="tokyo">Tokyo</SelectItem>
            <SelectItem value="paris">Paris</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="destination" className="text-sm text-muted-foreground">Destination</Label>
        <Select>
          <SelectTrigger id="destination" className="bg-input border-input-border">
            <SelectValue placeholder="Select Destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bali">Bali</SelectItem>
            <SelectItem value="maldives">Maldives</SelectItem>
            <SelectItem value="switzerland">Switzerland</SelectItem>
            <SelectItem value="norway">Norway</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="theme" className="text-sm text-muted-foreground">Theme</Label>
        <Select>
          <SelectTrigger id="theme" className="bg-input border-input-border">
            <SelectValue placeholder="Solo Travel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="solo">Solo Travel</SelectItem>
            <SelectItem value="family">Family</SelectItem>
            <SelectItem value="couple">Couple</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="from-date" className="text-sm text-muted-foreground">From</Label>
        <div className="relative">
          <Input
            id="from-date"
            type="text"
            placeholder="DD-MM"
            className="bg-input border-input-border pl-10"
          />
          <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="to-date" className="text-sm text-muted-foreground">To</Label>
        <div className="relative">
          <Input
            id="to-date"
            type="text"
            placeholder="DD-MM"
            className="bg-input border-input-border pl-10"
          />
          <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="travelers" className="text-sm text-muted-foreground">Travelers</Label>
        <div className="relative">
          <Input
            id="travelers"
            type="text"
            placeholder="2 Traveler, 1 Room"
            className="bg-input border-input-border pl-10"
          />
          <Users className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-6 flex justify-end mt-4">
        <Button className="bg-primary text-primary-foreground hover:bg-primary-dark px-8 py-6 text-lg font-semibold">
          Search
        </Button>
      </div>
    </div>
  );
};

const HotelBookingForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-2">
        <Label htmlFor="hotel-destination" className="text-sm text-muted-foreground">Destination</Label>
        <div className="relative">
          <Input
            id="hotel-destination"
            type="text"
            placeholder="Where are you going?"
            className="bg-input border-input-border pl-10"
          />
          <MapPin className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="checkin" className="text-sm text-muted-foreground">Check-in</Label>
        <div className="relative">
          <Input
            id="checkin"
            type="text"
            placeholder="DD-MM"
            className="bg-input border-input-border pl-10"
          />
          <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="checkout" className="text-sm text-muted-foreground">Check-out</Label>
        <div className="relative">
          <Input
            id="checkout"
            type="text"
            placeholder="DD-MM"
            className="bg-input border-input-border pl-10"
          />
          <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="hotel-travelers" className="text-sm text-muted-foreground">Travelers</Label>
        <div className="relative">
          <Input
            id="hotel-travelers"
            type="text"
            placeholder="2 Guests, 1 Room"
            className="bg-input border-input-border pl-10"
          />
          <Users className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-5 flex justify-end mt-4">
        <Button className="bg-primary text-primary-foreground hover:bg-primary-dark px-8 py-6 text-lg font-semibold">
          Search Hotels
        </Button>
      </div>
    </div>
  );
};

const FlightBookingForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div className="lg:col-span-1">
        <Label htmlFor="flight-from" className="text-sm text-muted-foreground">From</Label>
        <div className="relative">
          <Input
            id="flight-from"
            type="text"
            placeholder="Departure City"
            className="bg-input border-input-border pl-10"
          />
          <MapPin className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="flight-to" className="text-sm text-muted-foreground">To</Label>
        <div className="relative">
          <Input
            id="flight-to"
            type="text"
            placeholder="Arrival City"
            className="bg-input border-input-border pl-10"
          />
          <MapPin className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="departure" className="text-sm text-muted-foreground">Departure</Label>
        <div className="relative">
          <Input
            id="departure"
            type="text"
            placeholder="DD-MM"
            className="bg-input border-input-border pl-10"
          />
          <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="return" className="text-sm text-muted-foreground">Return</Label>
        <div className="relative">
          <Input
            id="return"
            type="text"
            placeholder="DD-MM"
            className="bg-input border-input-border pl-10"
          />
          <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="passengers" className="text-sm text-muted-foreground">Passengers</Label>
        <div className="relative">
          <Input
            id="passengers"
            type="text"
            placeholder="1 Adult"
            className="bg-input border-input-border pl-10"
          />
          <Users className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <Label htmlFor="class" className="text-sm text-muted-foreground">Class</Label>
        <Select>
          <SelectTrigger id="class" className="bg-input border-input-border">
            <SelectValue placeholder="Economy" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="first">First Class</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="lg:col-span-6 flex justify-end mt-4">
        <Button className="bg-primary text-primary-foreground hover:bg-primary-dark px-8 py-6 text-lg font-semibold">
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default BookingTabs;