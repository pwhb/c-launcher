import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n.ts';
import { registerSW } from "virtual:pwa-register";
import { Provider } from 'react-redux';
import { store } from './lib/redux/store.ts';
// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh()
  {
    if (confirm("New content available. Reload?"))
    {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
