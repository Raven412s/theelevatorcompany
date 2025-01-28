import GetQuote from "@/components/custom/GetQuote";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const luxuryHomeLifts = [
    {
      name: "Felix",
      image: "/images/luxury/felix.jpg",
      description: "A sleek and elegant lift for modern homes, with silent operation and high energy efficiency.",
      features: ["Smooth ride", "Customizable interiors", "Compact design"],
    },
    {
      name: "Felix 2.0",
      image: "/images/luxury/felix2.png",
      description: "An upgraded version of Felix with advanced safety features and enhanced capacity.",
      features: ["Enhanced safety", "Greater load capacity", "Eco-friendly technology"],
    },
    {
      name: "Climber X",
      image: "/images/luxury/climberx.png",
      description: "Engineered for luxury homes, combining aesthetics with high performance.",
      features: ["Aesthetic appeal", "High-speed motor", "Advanced control system"],
    },
    {
      name: "Pneumatic Vacuum",
      image: "/images/luxury/pneumatic.jpg",
      description: "A revolutionary design with no cables or pulleys, perfect for compact spaces.",
      features: ["Space-saving", "Modern technology", "Easy installation"],
    },
  ];

  const commercialLifts = [
    {
      name: "Elivio",
      image: "/images/commercial/elivio.jpg",
      description: "A reliable lift for commercial buildings with heavy usage and durability.",
      features: ["High capacity", "Durable design", "Optimized for efficiency"],
    },
    {
      name: "Elivio 2.0",
      image: "/images/commercial/elivio2.jpg",
      description: "An advanced version of Elivio with improved speed and safety.",
      features: ["Faster operation", "Enhanced safety", "Smart monitoring"],
    },
    {
      name: "Eleventra",
      image: "/images/commercial/eleventra.jpg",
      description: "Designed for high-rise buildings, offering exceptional performance and comfort.",
      features: ["Comfortable ride", "High-speed elevator", "Advanced durability"],
    },
  ];

  return (
    <div className="w-full min-h-screen ">
      <GetQuote />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-200 via-golden-400 to-[#141516] py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Elevators & Solutions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore our range of elevators tailored to luxury homes and commercial spaces, designed to meet every need.
        </p>
        <Button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md">
          Explore Products
        </Button>
      </section>

      {/* Product Categories */}
      <section className="py-12 px-8 bg-[#141516]">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Luxury Home Lifts */}
          <div className="bg-gradient-to-bl from-gray-800 via-gray-900 to-black rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Luxury Home Lifts</h3>
            <p className="text-gray-300 mb-6">
              Elevate your living experience with our range of luxury home lifts. Designed for style, comfort, and performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {luxuryHomeLifts.map((lift, index) => (
                <div key={index} className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={lift.image}
                    alt={lift.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-yellow-400">{lift.name}</h4>
                    <p className="text-sm text-gray-300 mb-4">{lift.description}</p>
                    <Button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Lifts */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Commercial Lifts</h3>
            <p className="text-gray-300 mb-6">
              Optimize your building's efficiency with our robust and reliable commercial elevators, built to last.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {commercialLifts.map((lift, index) => (
                <div key={index} className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={lift.image}
                    alt={lift.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-yellow-400">{lift.name}</h4>
                    <p className="text-sm text-gray-300 mb-4">{lift.description}</p>
                    <Button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-gradient-to-b from-yellow-200 via-golden-400 to-[#141516] text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Elevator?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Contact us today to discuss your needs and get a customized solution for your building.
        </p>
        <Button className="px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-yellow-500">
          Get a Quote
        </Button>
      </section>
    </div>
  );
}
