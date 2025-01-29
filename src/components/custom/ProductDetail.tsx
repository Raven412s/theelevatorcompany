import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import { ProductDetailsProps } from "@/types";

const ProductDetails: React.FC<ProductDetailsProps> = ({
  images,
  title,
  description,
  features,
  specialFeature,
}) => {
  return (
    <div className="flex flex-wrap w-full min-h-screen py-8 px-4 sm:px-8 md:py-12 lg:py-16 lg:px-10 bg-[#141516] relative text-white">
      {/* Left: Carousel */}
      <div className="w-full lg:w-2/4 p-4 flex justify-center items-start lg:sticky top-20 h-auto lg:h-[calc(100vh-4rem)]">
        <Carousel className="w-full max-w-md sm:max-w-lg p-0">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-4 sm:p-6">
                      <Image
                        src={image}
                        alt={`${title}-image-${index}`}
                        width={500}
                        height={500}
                        className="w-full max-h-[20rem] sm:max-h-[25rem] md:max-h-[27rem] object-contain rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:flex hidden" />
          <CarouselNext className="md:flex hidden" />
        </Carousel>
      </div>

      {/* Right: Product Details */}
      <div className="w-full lg:w-2/4 py-6 px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-golden-400 underline">
          {title}
        </h1>
        <p className="mb-6 text-sm sm:text-base text-muted-foreground">
          {description}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-golden-400 underline">
          Features:
        </h2>
        <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {specialFeature && (
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-golden-400 underline">
              Special Feature:
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">{specialFeature}</p>
          </div>
        )}

        <Button className="mt-8 px-6 py-3 text-sm sm:text-base bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
