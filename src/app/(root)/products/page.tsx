import Bounded from "@/components/common/Bounded";
import ProductsPage from "@/components/ProductsPage";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { preferences } from "@/data";
import Image from "next/image";
import Link from "next/link";

const ProductLayout = ({ title, description, image1, image2 }: { title: string; description: string, image1: string, image2: string }) => {
    return (
        <div className="relative shadow-behind  w-full h-[400px] bg-neutral-900 border border-neutral-800 shadow-2xl  p-6 rounded-lg flex flex-col items-center text-center md:text-left mt-4">
        {/* Image 1 */}
        <div className="absolute top-10 left-10">
          <div className="w-40 h-32 rounded-ss-lg  border-4 !absolute -left-6 -top-6 z-0 border-golden-400 shadow-2xl " />
          <div className="w-60 h-40 rounded-lg bg-slate-300 shadow-2xl  flex items-center justify-center z-20 relative overflow-hidden rounded-ss-none">
            <Image
              src={`/images/${image1}`}
              alt="Product Image 1"
              width={240}
              height={160}
              className="object-contain rounded-lg rounded-ss-none"
            />
          </div>
        </div>

        {/* Dynamic Title */}
        <h3 className="text-xl w-full md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 text-right font-sans font-bold p-8 py-10">
          {title}
        </h3>

        {/* Dynamic Description */}
        <p className="text-lg md:text-xl text-gray-300 w-11/12 md:w-3/4 lg:w-80 font-medium leading-relaxed !absolute bottom-20 left-8">
          {description}
        </p>

        {/* Image 2 */}
        <div className="!absolute bottom-10 right-10">
          <div className="w-60 h-40 rounded-ee-lg border-4 !absolute left-6 top-6 z-0 border-golden-400 shadow-2xl " />
          <div className="w-60 h-40 rounded-lg bg-slate-300 shadow-2xl  flex items-center justify-center z-20 relative overflow-hidden rounded-ee-none">
            <Image
              src={`/images/${image2}`}
              alt="Product Image 2"
              width={240}
              height={160}
              className="object-contain rounded-lg rounded-ee-none"
            />
          </div>
        </div>
      </div>
    );
  };


const Page = () => {

  return (
    <div className="  bg-transparent">
      {/* Hero Section */}
      <section>
  <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased">
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 text-center font-sans font-bold">
        Smart Elevators
      </h1>
    </div>

    {/* The Elevator Company Smart Technology Section */}
    <div className="max-w-3xl relative mx-auto p-6 mt-10 bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl shadow-behind ">
      <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 text-center font-sans font-bold pb-8">
        AI-Powered & Alexa-Integrated Elevators
      </h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center">
        **The Elevator Company** brings the future to your building with AI-driven
        **smart elevators** that integrate seamlessly with Alexa. Experience hands-free
        control, real-time optimization, and predictive maintenance like never before.
      </p>
      <ul className="text-neutral-400 max-w-lg mx-auto my-4 text-sm space-y-2">
        <li>✅ **Voice-Controlled Operation** with Alexa</li>
        <li>✅ **AI-Powered Traffic Optimization** for reduced wait times</li>
        <li>✅ **Predictive Maintenance** to prevent breakdowns</li>
        <li>✅ **IoT & Cloud Connectivity** for remote monitoring</li>
        <li>✅ **Enhanced Security** with AI-assisted access</li>
      </ul>
      <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center">
        Elevate your experience with cutting-edge technology—because your building deserves the best.
      </p>
    </div>

    <BackgroundBeams className="bg-zinc-900" />
  </div>
</section>

      <section className="text-center py-16 px-4 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn">Our Range of Products</h1>
        <p className="text-lg max-w-2xl mx-auto ">
          Discover our premium selection of lifts, designed for both luxury
          homes and commercial establishments. Engineered with cutting-edge
          technology, they ensure seamless mobility, safety, and elegance.
        </p>
        <Link href={"#products"} className="w-[20rem] px-6 py-3 bg-zinc-800 text-golden-400  rounded-lg shadow-md">
          Explore Products
        </Link>
      </section>


      {/* Product Categories */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
        {/* Luxury Home Lifts */}
        <div className=" p-6 bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl shadow-behind ">
          <h2 className="text-2xl font-semibold   bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn mb-3">Luxury Home Lifts</h2>
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
        <div className=" p-6 bg-neutral-900 border border-neutral-800  rounded-lg shadow-2xl shadow-behind ">
          <h2 className="text-2xl font-semibold  bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn mb-3">Commercial Lifts</h2>
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
      <Bounded className="!text-center !py-16 !px-4 !flex !flex-col !items-center !gap-4">
        <h2 className="text-6xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-b from-golden-400 via-golden-400 bg-neutral-950 gold-hover-btn">Choose Your Preferred Structure</h2>
        <div className="flex flex-col md:flex-row w-full gap-6 justify-center">
             {preferences.map((preference, index)=>(
            <ProductLayout
                key={index}
                title={preference.title}
                description={preference.description}
                image1={preference.image1}
                image2={preference.image2}
                />
             ))}
        </div>
      </Bounded>


    <section id="products">
              {/* Render Product Page */}
      <ProductsPage />
    </section>
    <div className="flex h-screen "></div>
    </div>
  );
};

export default Page;
