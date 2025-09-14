const API_BASE = 'http://localhost:5000/api';
function setAuth(token){ localStorage.setItem('token', token) }
function getAuth(){ return localStorage.getItem('token') }
function authHeaders(){ const t=getAuth(); return t ? { 'Authorization': 'Bearer '+t } : {} }
function showToast(msg){ alert(msg) } // minimal; replace with nicer UI later
