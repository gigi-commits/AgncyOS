import { config } from './config.js';

export const api = {
  async initiateAuth() {
    const res = await fetch(`${config.API_BASE}/auth/initiate`, {
      method: 'POST',
      headers: {
        'x-api-key': config.API_KEY,
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) throw new Error('auth failed');
    return res.json();
  },

  async fetchData(token) {
    const res = await fetch(`${config.API_BASE}/data/fetch`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}` ,
        'x-api-key': config.API_KEY,
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) throw new Error('data fetch failed');
    return res.json();
  },

  async generateValuation(sessionId) {
    const res = await fetch(`${config.API_BASE}/valuation/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.API_KEY
      },
      body: JSON.stringify({ sessionId })
    });
    if (!res.ok) throw new Error('valuation failed');
    return res.json();
  }
};
