import React from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const carouselItems = [
  {
    image: "/discgolfbag.jpg",
    title: "Premium Disc Golf Bags",
    description: "Starting from $39.99",
    link: "/product/10"
  },
  {
    image: "/discgolfbag1.jpg",
    title: "Commander Cooler Bag",
    description: "Keep your discs and drinks cool - $59.99",
    link: "/product/11"
  },
  {
    image: "/discgolfbag2.jpg",
    title: "Luxury Cart Bag",
    description: "Professional grade equipment - $199.99",
    link: "/product/12"
  },
  {
    image: "/exampledischaven.jpg",
    title: "Professional Discs",
    description: "High-performance discs from $14.99",
    link: "/products/drivers"
  },
];

const ImageCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Link to={item.link}>
              <Card className="border-none transition-transform duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                      <CardTitle className="text-lg md:text-xl mb-1">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-200">
                        {item.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white" />
      <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white" />
    </Carousel>
  );
};

export default ImageCarousel;