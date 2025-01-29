import { Lift } from "@/types";

export const umbrellaPoints = [
    {
      title: "Innovative and Customizable Solutions",
      description: "Tailored to meet diverse customer needs, these solutions offer unparalleled flexibility. Whether it's customizable cabins, Italian-inspired designs, or bespoke configurations, the client ensures that every installation reflects the unique preferences and requirements of the user.",
      src: "eleventra.jpg", // Replace with relevant image filename
      link: "https://example.com/customizable-solutions", // Replace with a relevant link
      color: "#0d1b2a",
      text: "white",
      keyUSPs: [
        "Italian designs",
        "Customisable Cabins",
        "Tailored Solutions",
        "Flexibility in Installation"
      ]
    },
    {
      title: "Unmatched Safety and Reliability",
      description: "With a focus on security, every product is built to adhere to the highest international safety standards. The integration of 194 safety parameters and TUV SUD certification guarantees peace of mind for users of all ages.",
      src: "elivio.jpg", // Replace with relevant image filename
      link: "https://example.com/safety-reliability", // Replace with a relevant link
      color: "#1b263b",
      text: "white",
      keyUSPs: [
        "194 safety parameters",
        "TUV SUD Certified",
        "Safe for all Ages",
        "Reliable"
      ]
    },
    {
      title: "Advanced Technology and Modern Features",
      description: "Leveraging cutting-edge technology, these solutions integrate modern features like lift automation and voice command capabilities, ensuring seamless and efficient operation that meets the demands of the future.",
      src: "felix.jpg", // Replace with relevant image filename
      link: "https://example.com/technology-modern", // Replace with a relevant link
      color: "#415a77",
      text: "white",
      keyUSPs: [
        "Lift Automation",
        "Voice Command Enabled",
        "Modern",
        "Smooth and Quiet Operation"
      ]
    },
    {
      title: "Eco-Friendly and Vastu Compliance",
      description: "Combining sustainability with practicality, these designs emphasize low energy consumption and cost efficiency, making them an eco-friendly choice that aligns with the growing demand for green technology.",
      src: "pneumatic.jpg", // Replace with relevant image filename
      link: "https://example.com/eco-friendly", // Replace with a relevant link
      color: "#778da9",
      text: "white",
      keyUSPs: [
        "Cost Efficient",
        "Low Energy Consumption",
        "Space Saving Design",
        "Vastu Compliance"
      ]
    },
    {
      title: "Global Standards and Superior Quality",
      description: "Built with imported machinery and tested against international benchmarks, these products provide innovative, reliable, and high-quality solutions that stand out in the global market.",
      src: "climberx.png", // Replace with relevant image filename
      link: "https://example.com/global-quality", // Replace with a relevant link
      color: "#e0e1dd",
      text: "#101010",
      keyUSPs: [
        "Internationally Certified",
        "Imported Machinery",
        "Innovative",
        "Efficient"
      ]
    }
  ];

  export const slides = [
    {
        id: 1,
        image: '/images/parrallax/10.jpg',
        title: 'Elevate with Precision',
        subtitle: 'Delivering safe and reliable elevator solutions for modern buildings.',
    },
    {
        id: 2,
        image: '/images/parrallax/12.jpg',
        title: 'Innovative Design',
        subtitle: 'Crafting elevators that seamlessly integrate with your architecture.',
    },
    {
        id: 3,
        image: '/images/parrallax/8.jpg',
        title: 'Empower Mobility',
        subtitle: 'Enhancing vertical transportation with cutting-edge technology.',
    }
];

export const images: string[] = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
    '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg',
  ];

  export const testimonials = [
    { id: 1, title: "1000+", subtitle: "Lifts installed globally, enhancing vertical mobility", videoSrc: "videos/testimonials/1.mp4", imgSrc: "images/testimonials/1.jpg" },
    { id: 2, title: "500+", subtitle: "Happy customers benefiting from our advanced elevator solutions", videoSrc: "videos/video1.mp4", imgSrc: "images/testimonials/2.jpg" },
    { id: 3, title: "150+", subtitle: "Services delivered, ensuring smooth and reliable elevator operations", videoSrc: "videos/video1.mp4", imgSrc: "images/testimonials/3.avif" },
    { id: 4, title: "15+", subtitle: "Countries served with cutting-edge elevator and lift technologies", videoSrc: "videos/video1.mp4", imgSrc: "images/testimonials/4.jpg" },
    { id: 5, title: "10+", subtitle: "Years of experience in designing and manufacturing world-class elevator systems", videoSrc: "videos/video1.mp4", imgSrc: "images/testimonials/5.jpg" },
];

  export const luxuryHomeLifts: Lift[] = [
    {
      name: "Felix",
      image: "/images/luxury/felix.jpg",
      description: "A sleek and elegant lift for modern homes, with silent operation and high energy efficiency.",
      features: ["Smooth ride", "Customizable interiors", "Compact design"],
    },
    {
      name: "Felix-2.0",
      image: "/images/luxury/felix2.png",
      description: "An upgraded version of Felix with advanced safety features and enhanced capacity.",
      features: ["Enhanced safety", "Greater load capacity", "Eco-friendly technology"],
    },
    {
      name: "Climber-X",
      image: "/images/luxury/climberx.png",
      description: "Engineered for luxury homes, combining aesthetics with high performance.",
      features: ["Aesthetic appeal", "High-speed motor", "Advanced control system"],
    },
    {
      name: "Pneumatic-Elevator",
      image: "/images/luxury/pneumatic.jpg",
      description: "A revolutionary design with no cables or pulleys, perfect for compact spaces.",
      features: ["Space-saving", "Modern technology", "Easy installation"],
    },
  ];

  export  const commercialLifts: Lift[] = [
    {
      name: "Elivio",
      image: "/images/commercial/elivio.jpg",
      description: "A reliable lift for commercial buildings with heavy usage and durability.",
      features: ["High capacity", "Durable design", "Optimized for efficiency"],
    },
    {
      name: "Elivio-2.0",
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

  export const productsData = [
    {
      images: ["/images/luxury/felix.jpg", "/images/luxury/felix2.png"],
      productTitle: "Felix",
      productDescription:
        "A sleek and elegant lift for modern homes, with silent operation and high energy efficiency.",
      productFeatures: [
        "Compliance: Meets European Machinery Directive",
        "Mechanism: Hydraulic with a smooth operating speed of 0.3 - 0.5 m/s",
        "Compatible with single-phase power",
        "Number of Stops: Upto 6 stops",
        "Indoor / Outdoor",
        "Space-Saving Design: Minimum pit requirement of just 200 mm and headroom clearance of 2800mm",
        "Eco-Friendly Feature: Using energy only while ascending"
      ],
      productSpecialFeature:
        "Using energy-efficient hydraulic technology, Felix is perfect for homes looking to save on power without compromising on luxury and style."
    },
    {
      images: ["/images/luxury/felix2.0.jpg", "/images/luxury/felix2.1.png"],
      productTitle: "Felix-2.0",
      productDescription:
        "An advanced version of the Felix lift with cutting-edge belt-drive technology for improved performance and durability.",
      productFeatures: [
        "Compliance: Meets European Machinery Directive",
        "Mechanism: Gearless Traction Mechanism",
        "Speed: 0.4-1m/s",
        "Compatible with single-phase power",
        "Number of Stops: Upto 6 stops",
        "Indoor / Outdoor",
        "Minimum pit required: 200mm"
      ],
      productSpecialFeature:
        "Uses durable, high-strength belts instead of traditional steel cables, resulting in reduced wear and tear, increased lifespan, and quieter performance. Utilizes a gearless motor for smooth, quiet, and efficient operation without the need for a gearbox."
    },
    {
      images: ["/images/luxury/climberx.png", "/images/luxury/climberx2.png"],
      productTitle: "Climber-X",
      productDescription:
        "A compact lift designed for indoor and outdoor staircases, ensuring accessibility for every space.",
      productFeatures: [
        "Compliance: Meets European Machinery Directive",
        "Mechanism: Rack and Pinion Mechanism",
        "Smooth operating speed of 0.10 - 0.15 m/s",
        "Compatible with single-phase power",
        "Space-Saving Design: Can be easily installed in staircases with a stair width of 900mm",
        "Eco-Friendly Feature: Power-efficient with a 24vdc motor that operates on a chargeable battery"
      ]
    },
    {
      images: ["/images/luxury/pneumatic.jpg", "/images/luxury/pneumatic2.png"],
      productTitle: "Pneumatic-Elevator",
      productDescription:
        "A revolutionary lift using pneumatic vacuum technology, offering unparalleled design and efficiency for modern homes.",
      productFeatures: [
        "Drive System: Pneumatic vacuum technology using air pressure",
        "Lift Capacity: Up to 220 kg (485 lbs)",
        "Number of Passengers: 2 to 4 passengers (depending on model)",
        "Travel Speed: 0.15 m/s (15 cm/s)",
        "Power Supply: Single-phase power (220V)",
        "Stops: Up to 5 stops (15 meters maximum travel height)",
        "Installation: Self-supporting structure, no pit, shaft, or machine room required",
        "Safety Features: Emergency brakes, battery backup, and safety locks",
        "LEC (Low Energy Consumption)"
      ]
    },
    {
      images: ["/images/luxury/elivio.jpg", "/images/luxury/elivio2.png"],
      productTitle: "Elivio",
      productDescription:
        "A robust and versatile lift designed for commercial, residential, and industrial buildings, meeting the highest safety standards.",
      productFeatures: [
        "Compliance: Meets European standard EN81-41",
        "Usage: Commercial, Residential, and Industrial buildings",
        "Mechanism: Elevator with Machine Room",
        "Power: Compatible with three-phase power",
        "Minimum pit requirement: 1500 mm",
        "Headroom clearance: 4800 mm",
        "Tailor-Made Solution",
        "Capacity: 408 kg - 2500 kg",
        "Speed: 1.0 m/s to 2.5 m/s",
        "Number of Stops: Up to 20 stops"
      ]
    },
    {
      images: ["/images/luxury/elivio2.jpg", "/images/luxury/elivio2.1.png"],
      productTitle: "Elivio-2.0",
      productDescription:
        "A machine-room-less lift offering gearless traction for seamless and efficient operation in modern buildings.",
      productFeatures: [
        "Compliance: Meets European standard EN81-41",
        "Drive System: Gearless Traction",
        "Usage: Commercial, Residential, and Industrial buildings",
        "Mechanism: Elevator without Machine Room",
        "Power: Compatible with three-phase power",
        "Capacity: 408 kg - 2500 kg",
        "Speed: 1.0 m/s to 2.5 m/s",
        "Number of Stops: Up to 20 stops"
      ]
    },
    {
      images: ["/images/luxury/eleventra.jpg", "/images/luxury/eleventra2.png"],
      productTitle: "Eleventra",
      productDescription:
        "A high-power lift designed to handle heavy loads, making it ideal for transporting goods, vehicles, stretchers, and more.",
      productFeatures: [
        "Types: Good Lift, Car Lift, Stretcher Lift, Service Lift, Scissor Lift",
        "Capacity: Supports heavy loads up to 10,000 kg",
        "Usage: Industrial and Commercial applications",
        "Mechanism: Hydraulic and Gear-based options",
        "Safety Features: Advanced braking system, overload sensors, and emergency stop mechanism",
        "Durability: Reinforced structure for long-term usage in demanding environments",
        "Installation: Customizable solutions for varied building requirements",
        "Energy Efficiency: High-performance motor with low energy consumption"
      ]
    }
  ];

  export     const features = [
    "Italian designs",
    "Vastu compliance",
    "Customisable Cabins",
    "Cost efficient",
    "Low Energy Consumption",
    "Innovative",
    "Reliable",
    "Efficient",
    "Modern",
    "Lift Automation",
    "Tailored Solutions",
    "Internationally certified",
    "194 safety parameters",
    "Tuv Sud Certified",
    "Imported Machinery",
    "Smooth and Quiet Operation",
    "Flexibility in Installation",
    "Space Saving Design",
    "Voice Command Enabled",
    "Safe for all Age"
  ];
