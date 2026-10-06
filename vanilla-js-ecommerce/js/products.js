const products = [
  {
    id: 1,
    title: "Smartphone Nova X12",
    category: "electronics",
    price: 12999,
    rating: 4.7,
    stock: 18,
    brand: "NovaTech",
    featured: true
  },
  {
    id: 2,
    title: "Laptop AeroBook Pro 14",
    category: "electronics",
    price: 24999,
    rating: 4.8,
    stock: 9,
    brand: "Aero",
    featured: true
  },
  {
    id: 3,
    title: "Audífonos WavePods Pro",
    category: "electronics",
    price: 2499,
    rating: 4.5,
    stock: 35,
    brand: "Wave",
    featured: false
  },
  {
    id: 4,
    title: "Smartwatch Pulse S5",
    category: "electronics",
    price: 3999,
    rating: 4.4,
    stock: 22,
    brand: "Pulse",
    featured: true
  },
  {
    id: 5,
    title: "Monitor Vision 27 4K",
    category: "electronics",
    price: 7499,
    rating: 4.6,
    stock: 12,
    brand: "Vision",
    featured: false
  },
  {
    id: 6,
    title: "Teclado Mecánico Strike RGB",
    category: "gaming",
    price: 1899,
    rating: 4.7,
    stock: 28,
    brand: "Strike",
    featured: true
  },
  {
    id: 7,
    title: "Mouse Gamer Phantom X",
    category: "gaming",
    price: 999,
    rating: 4.3,
    stock: 40,
    brand: "Phantom",
    featured: false
  },
  {
    id: 8,
    title: "Silla Gamer Titan Pro",
    category: "gaming",
    price: 5499,
    rating: 4.6,
    stock: 7,
    brand: "Titan",
    featured: true
  },
  {
    id: 9,
    title: "Mochila Urban Explorer",
    category: "fashion",
    price: 1299,
    rating: 4.4,
    stock: 31,
    brand: "UrbanPeak",
    featured: false
  },
  {
    id: 10,
    title: "Tenis Runner Air",
    category: "fashion",
    price: 2199,
    rating: 4.5,
    stock: 24,
    brand: "Runner",
    featured: true
  },
  {
    id: 11,
    title: "Sudadera Essential",
    category: "fashion",
    price: 899,
    rating: 4.2,
    stock: 45,
    brand: "Northline",
    featured: false
  },
  {
    id: 12,
    title: "Cafetera Barista Mini",
    category: "home",
    price: 3299,
    rating: 4.6,
    stock: 14,
    brand: "BrewHouse",
    featured: true
  },
  {
    id: 13,
    title: "Lámpara LED Aura",
    category: "home",
    price: 749,
    rating: 4.1,
    stock: 38,
    brand: "Lumina",
    featured: false
  },
  {
    id: 14,
    title: "Aspiradora Cyclone Max",
    category: "home",
    price: 4599,
    rating: 4.7,
    stock: 11,
    brand: "Cyclone",
    featured: true
  },
  {
    id: 15,
    title: "Botella Térmica Adventure 1L",
    category: "sports",
    price: 699,
    rating: 4.5,
    stock: 50,
    brand: "Adventure",
    featured: false
  },
  {
    id: 16,
    title: "Mancuernas Ajustables PowerFit",
    category: "sports",
    price: 2899,
    rating: 4.6,
    stock: 16,
    brand: "PowerFit",
    featured: true
  },
  {
    id: 17,
    title: "Tapete Yoga Balance Pro",
    category: "sports",
    price: 849,
    rating: 4.3,
    stock: 27,
    brand: "Balance",
    featured: false
  },
  {
    id: 18,
    title: "Cámara ActionCam 4K",
    category: "electronics",
    price: 5899,
    rating: 4.7,
    stock: 8,
    brand: "ActionCam",
    featured: true
  },
  {
    id: 19,
    title: "Bocina Bluetooth SoundBox",
    category: "electronics",
    price: 1599,
    rating: 4.4,
    stock: 33,
    brand: "SoundBox",
    featured: false
  },
  {
    id: 20,
    title: "Consola RetroBox Mini",
    category: "gaming",
    price: 1999,
    rating: 4.8,
    stock: 0,
    brand: "RetroBox",
    featured: true
  },

  // =========================
  // NUEVOS PRODUCTOS
  // =========================

  {
    id: 21,
    title: "Tablet NovaTab 10",
    category: "electronics",
    price: 6499,
    rating: 4.6,
    stock: 17,
    brand: "NovaTech",
    featured: false
  },
  {
    id: 22,
    title: "Audífonos SoundBeat X",
    category: "electronics",
    price: 2199,
    rating: 4.5,
    stock: 29,
    brand: "SoundBox",
    featured: true
  },
  {
    id: 23,
    title: "Monitor Vision 24 Full HD",
    category: "electronics",
    price: 5299,
    rating: 4.5,
    stock: 15,
    brand: "Vision",
    featured: false
  },
  {
    id: 24,
    title: "Control Gamer Phantom Pro",
    category: "gaming",
    price: 1599,
    rating: 4.4,
    stock: 26,
    brand: "Phantom",
    featured: false
  },
  {
    id: 25,
    title: "Headset Gamer Strike 7.1",
    category: "gaming",
    price: 2299,
    rating: 4.6,
    stock: 19,
    brand: "Strike",
    featured: true
  },
  {
    id: 26,
    title: "Teclado Gamer Phantom Mini",
    category: "gaming",
    price: 1399,
    rating: 4.3,
    stock: 32,
    brand: "Phantom",
    featured: false
  },
  {
    id: 27,
    title: "Chamarra Urban Wind",
    category: "fashion",
    price: 1899,
    rating: 4.5,
    stock: 21,
    brand: "UrbanPeak",
    featured: true
  },
  {
    id: 28,
    title: "Tenis Northline Street",
    category: "fashion",
    price: 1999,
    rating: 4.4,
    stock: 28,
    brand: "Northline",
    featured: false
  },
  {
    id: 29,
    title: "Mochila Runner Active",
    category: "fashion",
    price: 1099,
    rating: 4.3,
    stock: 36,
    brand: "Runner",
    featured: false
  },
  {
    id: 30,
    title: "Licuadora BlendMax Pro",
    category: "home",
    price: 2799,
    rating: 4.5,
    stock: 18,
    brand: "BlendMax",
    featured: true
  },
  {
    id: 31,
    title: "Lámpara Aura Desk Pro",
    category: "home",
    price: 999,
    rating: 4.3,
    stock: 34,
    brand: "Lumina",
    featured: false
  },
  {
    id: 32,
    title: "Cafetera BrewHouse Compact",
    category: "home",
    price: 2899,
    rating: 4.6,
    stock: 13,
    brand: "BrewHouse",
    featured: false
  },
  {
    id: 33,
    title: "Banda Elástica PowerFit Pro",
    category: "sports",
    price: 799,
    rating: 4.4,
    stock: 43,
    brand: "PowerFit",
    featured: false
  },
  {
    id: 34,
    title: "Mochila Deportiva Adventure",
    category: "sports",
    price: 1199,
    rating: 4.5,
    stock: 25,
    brand: "Adventure",
    featured: true
  },
  {
    id: 35,
    title: "Kit Yoga Balance",
    category: "sports",
    price: 1499,
    rating: 4.4,
    stock: 20,
    brand: "Balance",
    featured: false
  },

  // Nueva categoría: books

  {
    id: 36,
    title: "JavaScript Desde Cero",
    category: "books",
    price: 699,
    rating: 4.6,
    stock: 32,
    brand: "CodeBooks",
    featured: true
  },
  {
    id: 37,
    title: "Diseño Web Moderno",
    category: "books",
    price: 799,
    rating: 4.5,
    stock: 24,
    brand: "CodeBooks",
    featured: false
  },
  {
    id: 38,
    title: "Introducción a la Inteligencia Artificial",
    category: "books",
    price: 899,
    rating: 4.7,
    stock: 18,
    brand: "TechPress",
    featured: true
  },

  // Nueva categoría: toys

  {
    id: 39,
    title: "Robot Programable RoboKid",
    category: "toys",
    price: 1899,
    rating: 4.6,
    stock: 16,
    brand: "RoboFun",
    featured: true
  },
  {
    id: 40,
    title: "Kit de Construcción TechBlocks",
    category: "toys",
    price: 1499,
    rating: 4.5,
    stock: 23,
    brand: "TechBlocks",
    featured: false
  }
];

export default products;