// src/config.js
export const config = {
  API_BASE: import.meta.env?.VITE_AGNCYOS_API_BASE || process.env.AGNCYOS_API_BASE || 'https://staging.agncyos.com/api',
  API_KEY: import.meta.env?.VITE_AGNCYOS_API_KEY || process.env.AGNCYOS_API_KEY || 'DEMO_KEY',
};
