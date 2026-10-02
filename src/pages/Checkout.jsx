import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => navigate('/'), 3000);
  };

  if (submitted) {
    return <div style={{ textAlign: 'center', padding: '50px' }}><h2 style={{ color: '#27ae60' }}>تم إتمام طلبك بنجاح! 🎉</h2><p>جاري تحويلك للصفحة الرئيسية...</p></div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '8px' }}>
      <h2>إتمام الطلب</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="الاسم الكامل" required style={{ padding: '10px' }} />
        <input type="text" placeholder="عنوان الشحن (المدينة، الشارع)" required style={{ padding: '10px' }} />
        <input type="text" placeholder="رقم الهاتف" required style={{ padding: '10px' }} />
        <button type="submit" style={{ padding: '12px', background: '#00df9a', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>تأكيد الطلب</button>
      </form>
    </div>
  );
}