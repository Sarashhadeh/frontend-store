import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { products } = useContext(ShopContext);
  const featuredProducts = products.slice(0, 4);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ background: '#1e1e1e', color: '#fff', padding: '50px 20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h1>أهلاً بك في متجر باتمان للتقنية 🦇</h1>
        <p>وجهتك الأولى لأحدث الأجهزة، الهواتف، والكسسوارات التقنية بجودة عالية.</p>
        <Link to="/products" style={{ display: 'inline-block', marginTop: '15px', background: '#00df9a', color: '#000', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
          تصفح المنتجات الآن
        </Link>
      </div>

      <h2>منتجات مميزة</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {featuredProducts.map((product) => (
          <div key={product.id} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'left' }}>
            <h3>{product.name}</h3>
            <p style={{ color: '#27ae60', fontWeight: 'bold' }}>${product.price}</p>
            <Link to={`/products/${product.id}`} style={{ display: 'block', textAlign: 'center', marginTop: '10px', background: '#333', color: '#fff', padding: '6px', borderRadius: '4px', textDecoration: 'none' }}>
              عرض التفاصيل
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}