export const PHONE = "919999999999";

export const waLink = (text) =>
  `https://wa.me/${8112351108}?text=${encodeURIComponent(text)}`;

const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const menuImg = (name) => `/menu/${name}.jpg`;
const galleryImg = (name) => `/gallery/${name}.jpg`;

export const HERO_IMG = img("1565299624946-b28f40a0ae38", 1100);

const single = (value) => [{ value }];
const halfFull = (half, full) => [
  {
    options: [
      { label: "Half", value: half },
      { label: "Full", value: full },
    ],
  },
];
const smallMedium = (small, medium) => [
  {
    options: [
      { label: "Small", value: small },
      { label: "Medium", value: medium },
    ],
  },
];

export const MENU = [
  {
    title: "Rolls",
    items: [
      {
        name: "Veg Roll",
        prices: single(35),
        veg: true,
        emoji: "R",
        img: menuImg("veg-roll"),
        desc: "Soft wrap filled with fresh vegetables and house sauces.",
      },
      {
        name: "Paneer Roll",
        prices: single(45),
        veg: true,
        tag: "Popular",
        emoji: "R",
        img: menuImg("paneer-roll"),
        desc: "Paneer and vegetables rolled in a warm, flaky wrap.",
      },
      {
        name: "Paneer Cheese Roll",
        prices: single(55),
        veg: true,
        emoji: "R",
        img: menuImg("paneer-roll"),
        desc: "Paneer roll finished with a creamy cheese layer.",
      },
    ],
  },
  {
    title: "Burgers",
    items: [
      {
        name: "Veg Burger",
        prices: single(35),
        veg: true,
        emoji: "B",
        img: menuImg("veg-burger"),
        desc: "Classic vegetable patty with crisp salad and sauce.",
      },
      {
        name: "Paneer Burger",
        prices: single(50),
        veg: true,
        emoji: "B",
        img: menuImg("paneer-cheese-burger"),
        desc: "Paneer patty burger with fresh vegetables and chutney.",
      },
      {
        name: "Veg Cheese Burger",
        prices: single(65),
        veg: true,
        emoji: "B",
        img: menuImg("paneer-cheese-burger"),
        desc: "Veg burger with melted cheese and house sauce.",
      },
      {
        name: "Paneer Cheese Burger",
        prices: single(75),
        veg: true,
        tag: "Cheesy",
        emoji: "B",
        img: menuImg("paneer-cheese-burger"),
        desc: "Paneer patty, cheese, salad and a soft toasted bun.",
      },
    ],
  },
  {
    title: "Chowmein",
    note: "Half and full plates",
    items: [
      {
        name: "Veg Chowmein",
        prices: halfFull(45, 80),
        veg: true,
        emoji: "N",
        img: menuImg("veg-chowmein"),
        desc: "Wok-tossed noodles with vegetables and desi masala.",
      },
      {
        name: "Paneer Chowmein",
        prices: halfFull(55, 100),
        veg: true,
        emoji: "N",
        img: menuImg("veg-chowmein"),
        desc: "Noodles tossed with paneer cubes and crunchy vegetables.",
      },
      {
        name: "Schezwan Chowmein",
        prices: halfFull(55, 100),
        veg: true,
        tag: "Spicy",
        emoji: "N",
        img: menuImg("veg-chowmein"),
        desc: "Chowmein in a bold Schezwan-style chilli sauce.",
      },
      {
        name: "Hakka Noodles",
        prices: halfFull(50, 90),
        veg: true,
        emoji: "N",
        img: menuImg("veg-chowmein"),
        desc: "Light, fast-tossed noodles with garlic and vegetables.",
      },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      {
        name: "Veg Sandwich",
        prices: single(40),
        veg: true,
        emoji: "S",
        img: menuImg("veg-cheese-sandwich"),
        desc: "Fresh vegetable sandwich with chutney and seasoning.",
      },
      {
        name: "Paneer Sandwich",
        prices: single(50),
        veg: true,
        emoji: "S",
        img: menuImg("veg-cheese-sandwich"),
        desc: "Paneer sandwich grilled until warm and crisp.",
      },
      {
        name: "Cheese Sandwich",
        prices: single(50),
        veg: true,
        emoji: "S",
        img: menuImg("veg-cheese-sandwich"),
        desc: "Simple grilled cheese sandwich with a soft centre.",
      },
      {
        name: "Veg Cheese Sandwich",
        prices: single(60),
        veg: true,
        emoji: "S",
        img: menuImg("veg-cheese-sandwich"),
        desc: "Vegetables and cheese pressed between toasted bread.",
      },
      {
        name: "Paneer Cheese Sandwich",
        prices: single(80),
        veg: true,
        tag: "Loaded",
        emoji: "S",
        img: menuImg("veg-cheese-sandwich"),
        desc: "Paneer and cheese grilled with house seasoning.",
      },
    ],
  },
  {
    title: "Maggi",
    note: "Half and full plates",
    items: [
      {
        name: "Normal Maggi",
        prices: halfFull(50, 90),
        veg: true,
        emoji: "M",
        img: menuImg("masala-maggi"),
        desc: "Comforting masala Maggi cooked fresh and hot.",
      },
      {
        name: "Veg Maggi",
        prices: halfFull(55, 100),
        veg: true,
        emoji: "M",
        img: menuImg("masala-maggi"),
        desc: "Masala Maggi upgraded with vegetables and spices.",
      },
    ],
  },
  {
    title: "Soups",
    items: [
      {
        name: "Veg Soup",
        prices: single(40),
        veg: true,
        emoji: "S",
        img: menuImg("veg-soup"),
        desc: "Warm vegetable soup with a light, savoury broth.",
      },
      {
        name: "Manchurian Soup",
        prices: single(45),
        veg: true,
        emoji: "S",
        img: menuImg("veg-soup"),
        desc: "Indo-Chinese soup with Manchurian-style flavour.",
      },
      {
        name: "Paneer Soup",
        prices: single(55),
        veg: true,
        emoji: "S",
        img: menuImg("veg-soup"),
        desc: "Hot soup with soft paneer and gentle spice.",
      },
    ],
  },
  {
    title: "Rice",
    note: "Half and full plates",
    items: [
      {
        name: "Veg Fried Rice",
        prices: halfFull(55, 100),
        veg: true,
        emoji: "R",
        img: menuImg("paneer-fried-rice"),
        desc: "Fried rice tossed with fresh vegetables and seasoning.",
      },
      {
        name: "Paneer Fried Rice",
        prices: halfFull(65, 120),
        veg: true,
        emoji: "R",
        img: menuImg("paneer-fried-rice"),
        desc: "Vegetable fried rice with paneer cubes.",
      },
      {
        name: "Manchurian Fried Rice",
        prices: halfFull(65, 120),
        veg: true,
        emoji: "R",
        img: menuImg("manchurian-gravy"),
        desc: "Fried rice paired with Indo-Chinese Manchurian flavour.",
      },
      {
        name: "Corn Fried Rice",
        prices: halfFull(85, 160),
        veg: true,
        emoji: "R",
        img: menuImg("paneer-fried-rice"),
        desc: "Fried rice with sweet corn and vegetables.",
      },
      {
        name: "Manchurian Paneer Fried Rice",
        prices: halfFull(80, 150),
        veg: true,
        tag: "Loaded",
        emoji: "R",
        img: menuImg("paneer-fried-rice"),
        desc: "Fried rice with paneer and Manchurian-style sauce.",
      },
      {
        name: "Veg Rice",
        prices: halfFull(50, 90),
        veg: true,
        emoji: "R",
        img: menuImg("paneer-fried-rice"),
        desc: "Simple vegetable rice for a lighter plate.",
      },
      {
        name: "Paneer Biryani",
        prices: halfFull(75, 140),
        veg: true,
        emoji: "R",
        img: menuImg("paneer-biryani"),
        desc: "Aromatic rice layered with paneer and spices.",
      },
    ],
  },
  {
    title: "Pizza",
    note: "Small and medium sizes",
    items: [
      {
        name: "Veg Pizza",
        prices: smallMedium(100, 170),
        veg: true,
        emoji: "P",
        img: menuImg("veg-pizza"),
        desc: "Vegetable pizza with cheese and a crisp base.",
      },
      {
        name: "Cheese Pizza",
        prices: smallMedium(135, 220),
        veg: true,
        tag: "Cheesy",
        emoji: "P",
        img: menuImg("cheese-pizza"),
        desc: "A cheese-forward pizza baked until golden.",
      },
      {
        name: "Sweet Corn Pizza",
        prices: smallMedium(115, 190),
        veg: true,
        emoji: "P",
        img: menuImg("corn-pizza"),
        desc: "Cheese pizza topped with sweet corn and herbs.",
      },
      {
        name: "Delight Pizza",
        prices: smallMedium(135, 220),
        veg: true,
        emoji: "P",
        img: menuImg("veg-pizza"),
        desc: "House-style loaded veg pizza with a spicy finish.",
      },
    ],
  },
  {
    title: "Chinese Snacks",
    note: "Half and full plates",
    items: [
      {
        name: "Paneer Chilli",
        prices: halfFull(100, 190),
        veg: true,
        tag: "Spicy",
        emoji: "C",
        img: menuImg("chilli-paneer"),
        desc: "Paneer tossed in chilli, onion and capsicum sauce.",
      },
      {
        name: "Paneer Chilli Dry",
        prices: halfFull(90, 170),
        veg: true,
        emoji: "C",
        img: menuImg("chilli-paneer"),
        desc: "Dry-style chilli paneer with bold Indo-Chinese flavour.",
      },
      {
        name: "Manchurian Gravy",
        prices: halfFull(60, 100),
        veg: true,
        emoji: "C",
        img: menuImg("manchurian-gravy"),
        desc: "Veg Manchurian served in a rich garlic-soy gravy.",
      },
      {
        name: "Chilli Potato",
        prices: halfFull(55, 100),
        veg: true,
        emoji: "C",
        img: menuImg("chilli-potato"),
        desc: "Crispy potatoes tossed in a sweet and spicy sauce.",
      },
    ],
  },
];

export const GALLERY = [
  {
    title: "Party Spread",
    caption: "Pizza, noodles, rolls, burgers and snacks for sharing.",
    src: galleryImg("party-spread"),
    emoji: "P",
  },
  {
    title: "Veg Momos",
    caption: "Steamed momos with a spicy red chilli dip.",
    src: galleryImg("veg-momos"),
    emoji: "M",
  },
  {
    title: "Loaded Fries",
    caption: "Crispy fries with melted cheese, herbs and chilli.",
    src: galleryImg("loaded-fries"),
    emoji: "F",
  },
  {
    title: "Cold Coffee",
    caption: "Thick, chilled and finished with chocolate.",
    src: galleryImg("cold-coffee"),
    emoji: "C",
  },
  {
    title: "Quick Bites",
    caption: "Burger, sandwich, roll and chilli paneer on one platter.",
    src: galleryImg("quick-bites-platter"),
    emoji: "Q",
  },
  {
    title: "Rice & Soup",
    caption: "Paneer biryani, fried rice and warm soup.",
    src: galleryImg("rice-soup-spread"),
    emoji: "R",
  },
  {
    title: "Veg Pizza",
    caption: "Crisp base, vegetables and golden cheese.",
    src: menuImg("veg-pizza"),
    emoji: "P",
  },
  {
    title: "Cheese Pizza",
    caption: "A golden cheese pull favorite for pizza lovers.",
    src: menuImg("cheese-pizza"),
    emoji: "P",
  },
  {
    title: "Paneer Roll",
    caption: "Soft wrap packed with paneer and fresh vegetables.",
    src: menuImg("paneer-roll"),
    emoji: "R",
  },
  {
    title: "Veg Chowmein",
    caption: "Wok-tossed noodles with crunchy vegetables.",
    src: menuImg("veg-chowmein"),
    emoji: "N",
  },
  {
    title: "Chilli Paneer",
    caption: "Paneer tossed in bold Indo-Chinese chilli sauce.",
    src: menuImg("chilli-paneer"),
    emoji: "C",
  },
  {
    title: "Paneer Biryani",
    caption: "Aromatic rice layered with paneer and spices.",
    src: menuImg("paneer-biryani"),
    emoji: "B",
  },
];

export const REVIEWS = [
  {
    name: "Sneha Gupta",
    city: "Chitbaragaon",
    stars: 5,
    text: "Booked my daughter's birthday here. The team decorated everything beautifully and the kids loved it!",
  },
  {
    name: "Amit Singh",
    city: "Ashapur",
    stars: 4,
    text: "Momos and chilli paneer are a must-try. Fast service even on weekends. Worth the drive.",
  },
  {
    name: "Kaif",
    city: "Chitbaragaon",
    stars: 5,
    text: "Affordable, tasty and the staff is so polite. The special thali is heavy and full of flavour.",
  },
];
