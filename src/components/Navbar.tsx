"use client";
import Rounded from "@/components/common/RoundedButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Shadcn's Sheet
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

const navItems = ["Customizations-and-Range", "About"];

const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();
const router = useRouter()

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef?.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef?.current?.classList?.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const handleProductsClick=()=>{
    router.push('/products')
  }
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0  top-4 z-50 h-16 px-4  border border-transparent !rounded-[1.2rem] transition-all duration-700 sm:inset-x-6"
    >
         {/* Mobile Navigation */}
         <div className="flex lg:hidden relative">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 absolute right-10 top-3">
                  <span className="block w-6 h-1 bg-golden-400 rounded mb-1"></span>
                  <span className="block w-6 h-1 bg-golden-400 rounded mb-1"></span>
                  <span className="block w-6 h-1 bg-golden-400 rounded"></span>
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-white/10 backdrop-blur-md border size-full border-white/10 flex flex-col gap-6 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/images/the-elevator-company.png"
                    alt="logo"
                    className="w-12"
                  />
                  <p className="text-lg font-bold">The Elevator Company</p>
                </div>
                {navItems.map((item) => (
                  <Link
                    href={`/${item.toLowerCase()}`}
                    key={item}
                    className=" text-lg hover:underline"
                  >
                    {item}
                  </Link>
                ))}
                <Rounded>
                  <p onClick={handleProductsClick} className="flex gap-3 items-center justify-start">
                    Products <TiLocationArrow />
                  </p>
                </Rounded>
              </SheetContent>
            </Sheet>
          </div>
      <header className="absolute top-1/2  -translate-y-1/2 py-3">
        <nav className="flex size-full items-center ">
          {/* Logo and Main Button */}
          <div className="flex items-center gap-7 w-full justify-between">
            <a href="/">
              <img
                src="/images/the-elevator-company.png"
                alt="logo"
                className="w-16"
              />
            </a>
            <Rounded>
              <p onClick={handleProductsClick} className="flex gap-3 !max-w-max items-center justify-start">
                Products <TiLocationArrow />
              </p>
            </Rounded>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-6 items-center ">
            {navItems.map((item) => (
              <Link
                href={`/${item.toLowerCase()}`}
                key={item}
                className="nav-hover-btn min-w-max !text-sm"
              >
                {item}
              </Link>
            ))}
          </div>


        </nav>
      </header>
    </div>
  );
};

export default Navbar;
