export const BRANDS = ["All", "Lamborghini", "Porsche", "Ferrari", "Mercedes", "Bentley", "BMW", "Audi"];
export const TYPES = ["All", "Sport", "Luxury", "SUV", "Electric", "Grand Tourer"];
export const PRICES = ["All", "Under ₨2Cr", "₨2–5Cr", "₨5Cr+"];

export interface Car {
  id: number;
  name: string;
  brand: string;
  type: string;
  price: number;
  priceStr: string;
  usd: string;
  hp: number;
  seats: number;
  fuel: string;
  color: string;
  rating: number;
  img: string;
  images?: string[];
  acceleration: string;
  topSpeed: string;
  torque: string;
  engine: string;
  description: string;
  features: string[];
}

export const inventory: Car[] = [
  { 
    id: 1, 
    name: "Huracán EVO Spyder", 
    brand: "Lamborghini", 
    type: "Sport", 
    price: 42000000, 
    priceStr: "₨ 4.2 Cr", 
    usd: "$150K", 
    hp: 610, 
    seats: 2, 
    fuel: "Petrol", 
    color: "#FF6B35", 
    rating: 4.9, 
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    acceleration: "3.1s",
    topSpeed: "325 km/h",
    torque: "560 Nm",
    engine: "5.2L V10",
    description: "The Huracán EVO Spyder was designed to amplify your driving experience. With its naturally aspirated V10 engine and cutting edge technology, it offers an adrenaline-charged ride with the top down.",
    features: ["AWD System", "LDF Dual-Clutch", "Carbon Ceramic Brakes", "Virtual Cockpit"]
  },
  { 
    id: 2, 
    name: "911 Turbo S Cabriolet", 
    brand: "Porsche", 
    type: "Sport", 
    price: 38000000, 
    priceStr: "₨ 3.8 Cr", 
    usd: "$135K", 
    hp: 640, 
    seats: 2, 
    fuel: "Petrol", 
    color: "#39FF14", 
    rating: 5.0, 
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=80",
      "https://images.unsplash.com/photo-1611821064430-f9ab5c5e4e6e?w=1200&q=80",
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    acceleration: "2.7s",
    topSpeed: "330 km/h",
    torque: "800 Nm",
    engine: "3.8L Flat-6 Twin-Turbo",
    description: "The Porsche 911 Turbo S is the benchmark for all-weather performance. It combines daily usability with supercar-slaying acceleration and precision handling.",
    features: ["PDK Transmission", "Active Aerodynamics", "PASM Suspension", "Bose Surround Sound"]
  },
  { 
    id: 3, 
    name: "SF90 Stradale", 
    brand: "Ferrari", 
    type: "Sport", 
    price: 75000000, 
    priceStr: "₨ 7.5 Cr", 
    usd: "$265K", 
    hp: 986, 
    seats: 2, 
    fuel: "Hybrid", 
    color: "#FF1F1F", 
    rating: 5.0, 
    img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    acceleration: "2.5s",
    topSpeed: "340 km/h",
    torque: "800 Nm",
    engine: "4.0L V8 PHEV",
    description: "The SF90 Stradale is the first-ever Ferrari to feature Plug-in Hybrid Electric Vehicle architecture. It represents a paradigm shift in performance and technology.",
    features: ["E-Diff 3", "SCME-Frs Damper", "eSSC Traction Control", "Digital Dash"]
  },
  { 
    id: 4, 
    name: "AMG GT 63 S", 
    brand: "Mercedes", 
    type: "Luxury", 
    price: 29000000, 
    priceStr: "₨ 2.9 Cr", 
    usd: "$103K", 
    hp: 630, 
    seats: 4, 
    fuel: "Petrol", 
    color: "#D1D1D1", 
    rating: 4.8, 
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1800&q=90",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1800&q=90",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    acceleration: "3.2s",
    topSpeed: "315 km/h",
    torque: "900 Nm",
    engine: "4.0L V8 Biturbo",
    description: "The Mercedes-AMG GT 63 S 4-Door Coupe is the perfect blend of family luxury and race-track performance. Raw power meets refined comfort.",
    features: ["4MATIC+ AWD", "Drift Mode", "Luxury Interior", "Rear-Axle Steering"]
  },
  { 
    id: 5, 
    name: "Continental GT V8", 
    brand: "Bentley", 
    type: "Grand Tourer", 
    price: 61000000, 
    priceStr: "₨ 6.1 Cr", 
    usd: "$218K", 
    hp: 542, 
    seats: 4, 
    fuel: "Petrol", 
    color: "#7B5EA7", 
    rating: 4.9, 
    img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&q=80",
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    acceleration: "4.0s",
    topSpeed: "318 km/h",
    torque: "770 Nm",
    engine: "4.0L V8",
    description: "Every journey is an event in the Bentley Continental GT. It provides the ultimate grand touring experience with unparalleled craftsmanship and effortless power.",
    features: ["Handcrafted Leather", "Rotate Display", "V8 Biturbo", "Air Suspension"]
  },
  { 
    id: 6, 
    name: "Cayenne Turbo GT", 
    brand: "Porsche", 
    type: "SUV", 
    price: 32000000, 
    priceStr: "₨ 3.2 Cr", 
    usd: "$114K", 
    hp: 640, 
    seats: 5, 
    fuel: "Petrol", 
    color: "#FFD700", 
    rating: 4.7, 
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80",
      "https://images.unsplash.com/photo-1566023888-c8e4e8c0e8e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    acceleration: "3.3s",
    topSpeed: "300 km/h",
    torque: "850 Nm",
    engine: "4.0L V8 Twin-Turbo",
    description: "The Cayenne Turbo GT is the SUV that thinks it's a supercar. It holds the Nürburgring record for its class, proving that size doesn't compromise speed.",
    features: ["Sport Exhaust", "Carbon Roof", "PDCC Stabilization", "Rear Steering"]
  },
  { 
    id: 7, 
    name: "X5 M Competition", 
    brand: "BMW", 
    type: "SUV", 
    price: 19500000, 
    priceStr: "₨ 1.95 Cr", 
    usd: "$69K", 
    hp: 617, 
    seats: 5, 
    fuel: "Petrol", 
    color: "#4FC3F7", 
    rating: 4.6, 
    img: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    acceleration: "3.8s",
    topSpeed: "290 km/h",
    torque: "750 Nm",
    engine: "4.4L V8 TwinPower",
    description: "The BMW X5 M Competition combines the versatility of an SUV with the performance of a high-end sport sedan. Precision meets power in this dominant vehicle.",
    features: ["M xDrive", "Sport Diff", "Harman Kardon", "Heated Seats"]
  },
  { 
    id: 8, 
    name: "RS e-tron GT", 
    brand: "Audi", 
    type: "Electric", 
    price: 27000000, 
    priceStr: "₨ 2.7 Cr", 
    usd: "$96K", 
    hp: 598, 
    seats: 4, 
    fuel: "Electric", 
    color: "#00E5FF", 
    rating: 4.8, 
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    acceleration: "3.3s",
    topSpeed: "250 km/h",
    torque: "830 Nm",
    engine: "Dual Electric Motors",
    description: "The RS e-tron GT is Audi's vision of the future. Electric performance that is as emotionally charging as it is technologically advanced.",
    features: ["Quattro AWD", "Boost Mode", "e-tron Sport Sound", "Virtual Mirrors"]
  },
];
