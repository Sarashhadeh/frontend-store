import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { setUser, mockUsers } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLoginAsCustomer = () => {
    setUser(mockUsers.customer);
    navigate('/');
  };

  const handleLoginAsAdmin = () => {
    setUser(mockUsers.admin);
    navigate('/admin');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', background: '#fff', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
      <h2>تسجيل الدخول التجريبي</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>اختر صفة الدخول لاختبار صلاحيات العميل أو الأدمن:</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <button onClick={handleLoginAsCustomer} style={{ padding: '12px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>دخول كمستخدم عادي (Customer)</button>
        <button onClick={handleLoginAsAdmin} style={{ padding: '12px', background: '#ffcc00', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>دخول كمسؤول النظام (Admin)</button>
      </div>
    </div>
  );
}