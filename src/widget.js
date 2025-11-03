// src/widget.js
import { api } from './api.js';

const ROOT_ID = 'widget-root';

function h(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => {
    if (k === 'class') el.className = v; else el.setAttribute(k, v);
  });
  children.forEach(c => el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
  return el;
}

function render(root){
  root.innerHTML = '';
  const title = h('h2', {}, ['See My Valuation']);
  const btn = h('button', { id: 'see-valuation', class: 'btn' }, ['See My Valuation']);
  const out = h('pre', { id: 'output' }, []);
  btn.addEventListener('click', async ()=>{
    btn.disabled = true;
    out.textContent = 'Starting auth → data sync → valuation…';
    try {
      const auth = await api.initiateAuth();
      const data = await api.fetchData(auth.token);
      const valuation = await api.generateValuation(data.sessionId);
      out.textContent = JSON.stringify(valuation, null, 2);
    } catch (e) {
      out.textContent = 'Error: ' + (e?.message || e);
    } finally {
      btn.disabled = false;
    }
  });
  root.append(title, btn, out);
}

export function mount(){
  const root = document.getElementById(ROOT_ID);
  if (!root) throw new Error(`#${ROOT_ID} not found`);
  render(root);
}

// auto-mount
mount();
