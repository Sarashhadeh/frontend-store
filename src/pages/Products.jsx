import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function Products() {
  const { products, categories, addToCart } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // تصفية المنتجات حسب التصنيف والبحث
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2>تصفح المنتجات</h2>

      {/* قسم البحث والفلاتر */}
      <div style={{ display: 'flex', gap: '15px', margin: '20px 0', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="All">جميع التصنيفات</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* شبكة المنتجات */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3>{product.name}</h3>
                <p style={{ color: '#666', fontSize: '14px' }}>{product.description}</p>
                <p style={{ fontWeight: 'bold', color: '#27ae60', fontSize: '18px' }}>${product.price}</p>
                <p style={{ fontSize: '12px', color: product.stockQuantity > 0 ? '#27ae60' : '#e74c3c' }}>
                  {product.stockQuantity > 0 ? `المتوفر: ${product.stockQuantity}` : 'نفذ المخزون'}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <Link to={`/products/${product.id}`} style={{ flex: 1, textAlign: 'center', padding: '8px', background: '#333', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontSize: '14px' }}>
                  التفاصيل
                </Link>
                <button
                  onClick={() => addToCart(product, 1)}
                  disabled={product.stockQuantity <= 0}
                  style={{ flex: 1, padding: '8px', background: product.stockQuantity > 0 ? '#00df9a' : '#ccc', color: '#000', border: 'none', borderRadius: '4px', cursor: product.stockQuantity > 0 ? 'pointer' : 'not-allowed', fontWeight: 'bold', fontSize: '14px' }}
                >
                  إضافة للسلة
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>لا توجد منتجات تطابق بحثك.</p>
        )}
      </div>
    </div>
  );
}