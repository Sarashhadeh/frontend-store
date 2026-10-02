import React, { createContext, useState, useEffect } from 'react';
import { products as initialProducts, categories, mockUsers } from '../data/mockData';

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  // الحالة الخاصة بالمنتجات (لتكون قابلة للإضافة أو التعديل من الأدمن محلياً)
  const [products, setProducts] = useState(initialProducts);
  
  // حالة سلة المشتريات (يتم استرجاعها من LocalStorage إن وجدت)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('batman_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // حالة المستخدم الحالي (محاكاة تسجيل الدخول)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('batman_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // حفظ السلة في LocalStorage كلما تغيرت
  useEffect(() => {
    localStorage.setItem('batman_cart', JSON.stringify(cart));
  }, [cart]);

  // حفظ المستخدم في LocalStorage كلما تغير
  useEffect(() => {
    if (user) {
      localStorage.setItem('batman_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('batman_user');
    }
  }, [user]);

  // إضافة منتج للسلة (مع مراعاة المخزون)
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stockQuantity) {
          alert('عذراً، لا يمكنك إضافة كمية تتجاوز المخزون المتوفر!');
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        if (quantity > product.stockQuantity) {
          alert('عذراً، الكمية المطلوبة أكبر من المخزون!');
          return prevCart;
        }
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // تحديث كمية منتج في السلة
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const product = products.find((p) => p.id === productId);
    if (product && quantity > product.stockQuantity) {
      alert('عذراً، لا يمكن تجاوز الكمية المتوفرة في المخزون!');
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  // حذف منتج من السلة
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // تفريغ السلة (بعد إتمام الطلب)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        categories,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        user,
        setUser,
        mockUsers
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}