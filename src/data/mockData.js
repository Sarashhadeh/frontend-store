// src/data/mockData.js

export const categories = [
  { id: 1, name: 'Laptops', slug: 'laptops' },
  { id: 2, name: 'Phones', slug: 'phones' },
  { id: 3, name: 'Smart Watches', slug: 'watches' },
  { id: 4, name: 'Accessories', slug: 'accessories' },
  { id: 5, name: 'Monitors', slug: 'monitors' }
];

export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 35,
    stockQuantity: 12,
    category: "Accessories",
    categoryId: 4,
    isActive: true
  },
  {
    id: 2,
    name: "Laptop Lenovo ThinkPad X1",
    description: "حاسوب محمول للأعمال بمعالج قوي وأداء مستقر",
    price: 950,
    stockQuantity: 10,
    category: "Laptops",
    categoryId: 1,
    isActive: true
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    description: "هاتف أبل الذكي الرائد بكاميرا فائقة وتصميم أنيق",
    price: 1100,
    stockQuantity: 8,
    category: "Phones",
    categoryId: 2,
    isActive: true
  },
  {
    id: 4,
    name: "Monitor Samsung 27 Curved",
    description: "شاشة منحنية تجربة مشاهدة غامرة",
    price: 180,
    stockQuantity: 0,
    category: "Monitors",
    categoryId: 5,
    isActive: true
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    description: "ساعة ذكية متابعة للصحة واللياقة البدنية",
    price: 350,
    stockQuantity: 15,
    category: "Smart Watches",
    categoryId: 3,
    isActive: true
  }
];

export const mockUsers = {
  customer: { email: 'customer@batman.com', role: 'customer', name: 'أحمد العميل' },
  admin: { email: 'admin@batman.com', role: 'admin', name: 'مدير النظام' }
};