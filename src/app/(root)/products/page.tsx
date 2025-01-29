import React from "react";
import ProductsPage from "@/components/ProductsPage";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {

  return (
    <div className="bg-[#141516] text-white">
      {/* Hero Section */}

      <section className="text-center py-16 px-4 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold mb-4 text-golden-400 gold-hover-btn">Our Range of Products</h1>
        <p className="text-lg max-w-2xl mx-auto ">
          Discover our premium selection of lifts, designed for both luxury
          homes and commercial establishments. Engineered with cutting-edge
          technology, they ensure seamless mobility, safety, and elegance.
        </p>
        <Link href={"#products"} className="w-[20rem] px-6 py-3 bg-zinc-800 text-golden-400 rounded-lg shadow-md">
          Explore Products
        </Link>
      </section>


      {/* Product Categories */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
        {/* Luxury Home Lifts */}
        <div className=" p-6 bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold  text-golden-400 gold-hover-btn mb-3">Luxury Home Lifts</h2>
          <p className="text-gray-300 mb-4">
            Introducing our luxury home elevator, designed to seamlessly
            integrate into your existing residence with minimal civil changes.
            Adhering to stringent European safety standards, this elevator
            offers effortless installation for both indoor and outdoor
            settings.
          </p>
          <p className="text-gray-300">
            Its sleek, sophisticated design enhances the aesthetic appeal of
            your home, adding an element of grandeur and architectural
            elegance. Elevate your living space with a product that combines
            luxury, safety, and seamless integration.
          </p>
          <div className="flex gap-4 mt-4">
            <Image src="/images/luxury/felix.jpg" alt="Felix" width={200} height={150} className="rounded-lg" />
            <Image src="/images/luxury/climberx.png" alt="Climber X" width={200} height={150} className="rounded-lg" />
          </div>
        </div>

        {/* Commercial Lifts */}
        <div className=" p-6 bg-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-golden-400 gold-hover-btn mb-3">Commercial Lifts</h2>
          <p className="text-gray-300 mb-4">
            Our state-of-the-art commercial lifts offer seamless vertical
            mobility, perfect for office buildings or hotels. Combining
            cutting-edge technology with sleek design, they ensure fast,
            smooth, and safe transportation for people and goods.
          </p>
          <p className="text-gray-300">
            Commercial lifts provide fast, reliable service and advanced safety
            features, ideal for high-traffic and heavy-load environments.
            Enhance accessibility and efficiency seamlessly within business
            settings.
          </p>
          <div className="flex gap-4 mt-4">
            <Image src="/images/commercial/elivio.jpg" alt="Elivio" width={200} height={150} className="rounded-lg" />
            <Image src="/images/commercial/eleventra.jpg" alt="Eleventra" width={200} height={150} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Shaft Options */}
      <section className="text-center py-16 px-4 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold mb-4 text-golden-400 gold-hover-btn">Choose Your Preferred Structure</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-full md:w-1/3 shadow-md">
            <h3 className="text-xl font-semibold text-golden-400 gold-hover-btn">With Shaft</h3>
            <p className="text-gray-300 mt-2">
              With an in-built patented metal structure, this lift does not
              require a separate shaft or support.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg w-full md:w-1/3 shadow-md">
            <h3 className="text-xl font-semibold text-golden-400 gold-hover-btn">Without Shaft</h3>
            <p className="text-gray-300 mt-2">
              Requires a separate structure built of concrete, brick, or metal
              fabrication.
            </p>
          </div>
        </div>
      </section>


    <section id="products">
              {/* Render Product Page */}
      <ProductsPage />
    </section>
    <div className="flex h-screen "></div>
    </div>
  );
};

export default Page;
