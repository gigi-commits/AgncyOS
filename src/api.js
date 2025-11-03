// src/api.js
export const api = {
  async initiateAuth(){
    const res = await fetch('/auth/initiate', { method: 'POST' });
    if (!res.ok) throw new Error('auth failed');
    return res.json();
  },
  async fetchData(token){
    const res = await fetch('/data/fetch', { method: 'POST', headers: { 'Authorization': `Bearer ${token}` } });
    if (!res.ok) throw new Error('data fetch failed');
    return res.json();
  },
  async generateValuation(sessionId){
    const res = await fetch('/valuation/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId }) });
    if (!res.ok) throw new Error('valuation failed');
    return res.json();
  }
};
