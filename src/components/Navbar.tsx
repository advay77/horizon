import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-md border-b border-glass-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H</span>
            </div>
            <span className="text-hero-text font-semibold text-xl">Horizon</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-hero-text bg-transparent hover:bg-glass-bg">
                    Destination <ChevronDown className="w-4 h-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-card">
                      <div className="space-y-2">
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Popular Destinations</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Beach Resorts</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Mountain Retreats</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">City Breaks</a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-hero-text bg-transparent hover:bg-glass-bg">
                    Explore Extraordinary <ChevronDown className="w-4 h-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-card">
                      <div className="space-y-2">
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Adventure Tours</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Luxury Experiences</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Cultural Journeys</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Wildlife Safaris</a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-hero-text bg-transparent hover:bg-glass-bg">
                    Offers <ChevronDown className="w-4 h-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-card">
                      <div className="space-y-2">
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Early Bird Deals</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Last Minute</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Group Discounts</a>
                        <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Seasonal Offers</a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#" className="text-hero-text hover:text-hero-subtext transition-colors">Support</a>
            <a href="#" className="text-hero-text hover:text-hero-subtext transition-colors">Review & Ratings</a>
            <a href="#" className="text-hero-text hover:text-hero-subtext transition-colors">About Us</a>
            <a href="#" className="text-hero-text hover:text-hero-subtext transition-colors">Blogs</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" className="text-hero-text hover:bg-glass-bg">
              Login
            </Button>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Signup
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-hero-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Destination</a>
              <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Explore Extraordinary</a>
              <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Offers</a>
              <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Support</a>
              <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Review & Ratings</a>
              <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">About Us</a>
              <a href="#" className="block px-3 py-2 text-card-foreground hover:bg-accent/10 rounded-md">Blogs</a>
              <div className="flex space-x-3 pt-3 border-t border-glass-border">
                <Button variant="ghost" className="flex-1">Login</Button>
                <Button className="flex-1 bg-secondary text-secondary-foreground">Signup</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
