import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export default function AdminDashboard() {
  const { products, user } = useContext(ShopContext);

  if (!user || user.role !== 'admin') {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#e74c3c' }}><h2>عذراً، هذه الصفحة خاصة بمدير النظام (Admin) فقط.</h2></div>;
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h2>لوحة تحكم الأدمن</h2>
      <p>أهلاً بك يا مدير النظام. يمكنك هنا معاينة المنتجات الحالية:</p>
      <ul style={{ background: '#fff', padding: '20px', borderRadius: '8px', listStyle: 'none' }}>
        {products.map((p) => (
          <li key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
            <span>{p.name} - ${p.price} (المخزون: {p.stockQuantity})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}