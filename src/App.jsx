import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ShopProvider, ShopContext } from './context/ShopContext';
import { useContext } from 'react';

// استيراد الصفحات (تأكدي من إنشاء ملفاتهم الفارغة على الأقل لكي لا يحدث خطأ استيراد)
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

// شريط التنقل العلوي
function Navbar() {
  const { cart, user, setUser } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav style={{ background: '#1e1e1e', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#00df9a', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }}>🦇 Batman Tech</Link>
        <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>المنتجات</Link>
        {user?.role === 'admin' && (
          <Link to="/admin" style={{ color: '#ffcc00', textDecoration: 'none' }}>لوحة التحكم</Link>
        )}
      </div>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>🛒 السلة ({totalItems})</Link>
        {user ? (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#00df9a' }}>أهلاً، {user.name}</span>
            <button onClick={handleLogout} style={{ background: '#ff4d4d', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>خروج</button>
          </div>
        ) : (
          <Link to="/login" style={{ background: '#00df9a', color: '#000', padding: '6px 12px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>دخول</Link>
        )}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
          <Navbar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ShopProvider>
  );
}