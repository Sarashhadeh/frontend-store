import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div style={{ padding: '20px' }}>المنتج غير موجود! <Link to="/products">العودة للمنتجات</Link></div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '8px' }}>
      <h2>{product.name}</h2>
      <p style={{ color: '#666' }}>{product.description}</p>
      <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#27ae60' }}>${product.price}</p>
      <p>التصنيف: {product.category}</p>
      <p>المتوفر في المخزون: {product.stockQuantity}</p>
      <button 
        onClick={() => addToCart(product, 1)} 
        disabled={product.stockQuantity <= 0}
        style={{ padding: '10px 20px', background: product.stockQuantity > 0 ? '#00df9a' : '#ccc', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
      >
        إضافة إلى السلة
      </button>
      <br/><br/>
      <Link to="/products">← العودة لقائمة المنتجات</Link>
    </div>
  );
}