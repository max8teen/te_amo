export type MenuItem = {
  name: string;
  price?: number;
  veg?: boolean;
  note?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  tagline: string;
  priceRange: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "milkshakes",
    name: "Milkshakes",
    tagline: "Cold, creamy, indulgent",
    priceRange: "₹99 – ₹219",
    items: [
      { name: "Cold Coffee", price: 99, veg: true },
      { name: "Cold Coffee with Ice Cream", price: 149, veg: true },
      { name: "Vanilla Milkshake", price: 129, veg: true },
      { name: "Strawberry Milkshake", price: 129, veg: true },
      { name: "Mango Milkshake", price: 129, veg: true },
      { name: "Banana Milkshake", price: 129, veg: true },
      { name: "Pineapple Milkshake", price: 129, veg: true },
      { name: "Chikoo Milkshake", price: 139, veg: true },
      { name: "Chocolate Milkshake", price: 139, veg: true },
      { name: "Chocolate Badam Milkshake", price: 199, veg: true },
      { name: "Chocolate Brownie Milkshake", price: 199, veg: true },
      { name: "Oreo Milkshake", price: 199, veg: true },
      { name: "Sitaphal Milkshake", price: 219, veg: true, note: "Seasonal" },
      { name: "Dry Fruit Milkshake", price: 219, veg: true },
    ],
  },
  {
    id: "mastani",
    name: "Mastani Specials",
    tagline: "Pune's iconic dessert drink, our way",
    priceRange: "₹175 – ₹259",
    items: [
      { name: "Mango Mastani", price: 175, veg: true },
      { name: "Strawberry Mastani", price: 175, veg: true },
      { name: "Pinacolada Mastani", price: 175, veg: true },
      { name: "Chocolate Badam Mastani", price: 229, veg: true },
      { name: "Dry Fruit Mastani", price: 249, veg: true },
      { name: "Te Amo Special Mastani", price: 259, veg: true, note: "House signature" },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    tagline: "Warm beginnings",
    priceRange: "₹99 – ₹149",
    items: [
      { name: "Veg Clear Soup", price: 99, veg: true },
      { name: "Cream of Tomato Soup", price: 125, veg: true },
      { name: "Cream of Vegetable Soup", price: 125, veg: true },
      { name: "Manchow Soup", price: 125, veg: true },
      { name: "Hot & Sour Soup", price: 129, veg: true },
      { name: "Lemon Coriander Soup", price: 139, veg: true },
      { name: "Sweet Corn Soup", price: 139, veg: true },
      { name: "Wonton Soup", price: 149, veg: true },
      { name: "Talumein Soup", price: 139, veg: true },
      { name: "Lung Fung Soup", price: 149, veg: true },
      { name: "French Onion Soup", price: 149, veg: true },
      { name: "Minestrone Soup", price: 149, veg: true },
      { name: "Cream of Palak Soup", price: 149, veg: true },
      { name: "Cream of Mushroom Soup", price: 149, veg: true },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    tagline: "Crisp, fresh, vibrant",
    priceRange: "₹89 – ₹169",
    items: [
      { name: "Green Salad", price: 89, veg: true },
      { name: "Russian Salad", price: 129, veg: true },
      { name: "Italian Salad", price: 139, veg: true },
      { name: "Hawaiian Salad", price: 149, veg: true },
      { name: "Pineapple Salad", price: 139, veg: true },
      { name: "Greek Salad", price: 169, veg: true },
    ],
  },
  {
    id: "raitas",
    name: "Raitas",
    tagline: "Cooling companions",
    priceRange: "₹89 – ₹119",
    items: [
      { name: "Curd Bowl", price: 89, veg: true },
      { name: "Boondi Raita", price: 89, veg: true },
      { name: "Vegetable Raita", price: 89, veg: true },
      { name: "Pudina Raita", price: 89, veg: true },
      { name: "Pineapple Raita", price: 99, veg: true },
      { name: "Kashmiri Raita", price: 119, veg: true },
    ],
  },
  {
    id: "starters",
    name: "Starters",
    tagline: "Tempting first bites",
    priceRange: "₹179 – ₹329",
    items: [
      { name: "Paneer Tikka", price: 249, veg: true },
      { name: "Hara Bhara Kebab", price: 219, veg: true },
      { name: "Veg Manchurian Dry", price: 199, veg: true },
      { name: "Crispy Honey Chilli Potato", price: 189, veg: true },
      { name: "Mushroom 65", price: 229, veg: true },
      { name: "Chilli Paneer Dry", price: 249, veg: true },
      { name: "Cheese Corn Balls", price: 219, veg: true },
      { name: "Spring Rolls", price: 179, veg: true },
    ],
  },
  {
    id: "main-course",
    name: "Main Course",
    tagline: "Heart of the meal",
    priceRange: "₹199 – ₹399",
    items: [
      { name: "Paneer Butter Masala", price: 289, veg: true },
      { name: "Dal Makhani", price: 229, veg: true },
      { name: "Kadai Paneer", price: 279, veg: true },
      { name: "Veg Kolhapuri", price: 249, veg: true },
      { name: "Malai Kofta", price: 269, veg: true },
      { name: "Mushroom Masala", price: 259, veg: true },
      { name: "Veg Biryani", price: 229, veg: true },
      { name: "Paneer Lababdar", price: 299, veg: true },
      { name: "Choley Bhature", price: 199, veg: true },
      { name: "Veg Hyderabadi", price: 269, veg: true },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    tagline: "Sweet farewells",
    priceRange: "₹89 – ₹229",
    items: [
      { name: "Gulab Jamun (2 pc)", price: 99, veg: true },
      { name: "Vanilla Ice Cream Scoop", price: 89, veg: true },
      { name: "Chocolate Brownie with Ice Cream", price: 199, veg: true },
      { name: "Sizzling Brownie", price: 229, veg: true },
      { name: "Gajar Halwa", price: 169, veg: true, note: "Seasonal" },
      { name: "Rasmalai (2 pc)", price: 149, veg: true },
    ],
  },
];
