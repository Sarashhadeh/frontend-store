import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(ShopContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div style={{ textAlign: 'center', padding: '40px' }}><h2>سلة المشتريات فارغة 🛒</h2><Link to="/products">تسوق الآن</Link></div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>سلة المشتريات</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '15px', marginBottom: '10px', borderRadius: '6px' }}>
          <div>
            <h4>{item.name}</h4>
            <p>${item.price} × {item.quantity}</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)} style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px' }}>حذف</button>
          </div>
        </div>
      ))}
      <h3>المجموع الكلي: ${total.toFixed(2)}</h3>
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <button onClick={clearCart} style={{ background: '#ccc', border: 'none', padding: '10px', borderRadius: '4px' }}>تفريغ السلة</button>
        <Link to="/checkout" style={{ background: '#00df9a', color: '#000', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>إتمام الطلب</Link>
      </div>
    </div>
  );
}