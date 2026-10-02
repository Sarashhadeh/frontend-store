import axios from 'axios';

// إنشاء نسخة مخصصة من axios مع ضبط عنوان الـ Backend على البورت 3000
const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;