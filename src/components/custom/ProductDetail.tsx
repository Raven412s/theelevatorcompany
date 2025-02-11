import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductDetailsProps } from "@/types";
import Image from "next/image";
import React from "react";
import QuotationDrawer from "../common/QutationDrawer";
import { BackgroundBeams } from "../ui/background-beams";
import { Card, CardContent } from "../ui/card";
import Bounded from "../common/Bounded";

const ProductDetails: React.FC<ProductDetailsProps> = ({
  images,
  title,
  description,
  features,
  specialFeature,
}) => {
  return (
<Bounded className="">
    <h1 className="mt-32  text-2xl sm:text-3xl lg:text-6xl font-bold mb-4 w-full text-left text-golden-400 ">
      {title} :
    </h1>
<div className="flex flex-wrap w-full min-h-screen   relative text-white">
      {/* Left: Carousel */}
      <div className="w-full lg:w-2/4 p-4 flex justify-center items-start lg:sticky top-20 h-auto lg:h-[calc(100vh-4rem)]">
        <Carousel className="w-full max-w-md sm:max-w-lg p-0 ">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} >
                <div className="p-2">
                  <Card className="bg-[url(/images/pattern.png)] relative bg-cover bg-no-repeat">
                  <div className="absolute inset-0 bg-black opacity-60"></div>
                    <CardContent className="flex aspect-square items-center relative z-10 justify-center p-4 sm:p-6">

                     <Image
                        src={image}
                        alt={`${title}-image-${index}`}
                        width={500}
                        height={500}
                        className="w-full max-h-[20rem] sm:max-h-[25rem] md:max-h-[27rem] flex aspect-square items-center relative z-10 justify-center p-4 sm:p-6 object-contain rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center "><QuotationDrawer triggerText="Contact Now" /></div>
          <CarouselPrevious className="md:flex hidden" />
          <CarouselNext className="md:flex hidden" />
        </Carousel>
      </div>

      {/* Right: Product Details */}
      <div className="w-full lg:w-2/4 py-6 px-4 sm:px-6 md:px-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-golden-400 underline">
          Description:
        </h2>
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
      </div>
      <BackgroundBeams/>
    </div>
</Bounded>
  );
};

export default ProductDetails;
