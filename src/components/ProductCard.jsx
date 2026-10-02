import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', margin: '10px', width: '220px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h3>{product.name || product.title}</h3>
      <p style={{ color: '#666' }}>{product.description || 'لا يوجد وصف متاح'}</p>
      <p style={{ fontWeight: 'bold', color: '#27ae60' }}>${product.price}</p>
      <button style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
        إضافة للسلة
      </button>
    </div>
  );
}