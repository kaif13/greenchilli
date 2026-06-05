export const PHONE = "919999999999";

export const waLink = (text) =>
  `https://wa.me/${8112351108}?text=${encodeURIComponent(text)}`;

const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_IMG = img("1565299624946-b28f40a0ae38", 1100);

export const MENU = [
  {
    name: "Tandoori Paneer Pizza",
    price: 249,
    veg: true,
    tag: "Bestseller",
    emoji: "🍕",
    img: img("1604382354936-07c5d9983bd3"),
    desc: "Smoky paneer, onion, capsicum, extra cheese.",
  },
  {
    name: "Green Chilli Special Thali",
    price: 199,
    veg: true,
    tag: "Signature",
    emoji: "🍱",
    img: img("1601050690597-df0568f70950"),
    desc: "Our house thali - dal, sabzi, rice, roti & sweet.",
  },
  {
    name: "Chilli Paneer Dry",
    price: 149,
    veg: true,
    tag: "Spicy",
    emoji: "🌶️",
    img: img("1585937421612-70a008356fbe"),
    desc: "Crispy paneer tossed in fiery indo-chinese sauce.",
  },
  {
    name: "Fried Chicken Momos",
    price: 119,
    veg: false,
    tag: "Hot",
    emoji: "🥟",
    img: img("1534422298391-e4f8c172dddb"),
    desc: "Golden fried, juicy, served with schezwan dip.",
  },
  {
    name: "Veg Manchurian",
    price: 139,
    veg: true,
    emoji: "🍲",
    img: img("1589302168068-964664d93dc0"),
    desc: "Veg balls in tangy garlic-soy gravy.",
  },
  {
    name: "Paneer Tikka Roll",
    price: 109,
    veg: true,
    emoji: "🌯",
    img: img("1631515243349-e0cb75fb8d3a"),
    desc: "Charred paneer tikka wrapped in soft paratha.",
  },
  {
    name: "Cheese Loaded Fries",
    price: 129,
    veg: true,
    tag: "New",
    emoji: "🍟",
    img: img("1630384060421-cb20d0e0649d"),
    desc: "Crispy fries drowning in melted cheese & herbs.",
  },
  {
    name: "Veg Chowmein",
    price: 89,
    veg: true,
    emoji: "🍜",
    img: img("1617622141573-2e00d8818f3f"),
    desc: "Wok-tossed noodles, fresh veggies, secret masala.",
  },
  {
    name: "Steamed Veg Momos",
    price: 79,
    veg: true,
    emoji: "🥟",
    img: img("1694923450868-b432a8ee52aa"),
    desc: "Light, healthy, dunked in spicy red chutney.",
  },
  {
    name: "Classic Veg Burger",
    price: 99,
    veg: true,
    emoji: "🍔",
    img: img("1568901346375-23c9450c58cd"),
    desc: "Crunchy patty, fresh lettuce, house sauce.",
  },
  {
    name: "Spicy Maggi Masala",
    price: 69,
    veg: true,
    emoji: "🍝",
    img: img("1617622141675-d3005b9067c5"),
    desc: "Desi-style buttery masala maggi. Comfort food.",
  },
  {
    name: "Cold Coffee Thickshake",
    price: 89,
    veg: true,
    tag: "Chill",
    emoji: "🥤",
    img: img("1599937577325-e38f27f010db"),
    desc: "Thick, creamy, topped with chocolate.",
  },
];

export const GALLERY = [
  {
    title: "Signature Pizza",
    caption: "Fresh baked, loaded with cheese and chilli heat.",
    src: img("1594007654729-407eedc4be65", 900),
    emoji: "🍕",
    featured: true,
  },
  {
    title: "Party Table",
    caption: "Birthday spreads built for sharing.",
    src: img("1551218808-94e220e084d2", 900),
    emoji: "🎂",
  },
  {
    title: "Momos & Dip",
    caption: "Steamed, fried, spicy, and fast.",
    src: img("1534422298391-e4f8c172dddb", 900),
    emoji: "🥟",
  },
  {
    title: "Chilli Paneer",
    caption: "Crispy Indo-Chinese comfort.",
    src: img("1585937421612-70a008356fbe", 900),
    emoji: "🌶️",
  },
  {
    title: "Loaded Snacks",
    caption: "Fries, rolls, burgers, and quick bites.",
    src: img("1630384060421-cb20d0e0649d", 900),
    emoji: "🍟",
  },
];

export const REVIEWS = [
  {
    name: "Rahul Verma",
    city: "Ballia",
    stars: 5,
    text: "Best pizza in Ballia, hands down. The tandoori paneer is unreal and the place is super clean.",
  },
  {
    name: "Sneha Gupta",
    city: "Ballia",
    stars: 5,
    text: "Booked my daughter's birthday here. The team decorated everything beautifully and the kids loved it!",
  },
  {
    name: "Amit Singh",
    city: "Bansdih",
    stars: 4,
    text: "Momos and chilli paneer are a must-try. Fast service even on weekends. Worth the drive.",
  },
  {
    name: "Pooja Yadav",
    city: "Ballia",
    stars: 5,
    text: "Affordable, tasty and the staff is so polite. The special thali is heavy and full of flavour.",
  },
  {
    name: "Kabir Khan",
    city: "Rasra",
    stars: 5,
    text: "Ordered for a small party. Everyone kept asking where the food was from. 10/10 will order again.",
  },
  {
    name: "Anjali Mishra",
    city: "Ballia",
    stars: 4,
    text: "Cozy vibe, great for hanging out with friends. The cold coffee thickshake is my weekly fix.",
  },
];
