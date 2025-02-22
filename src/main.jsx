import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import useLanguageStore from './store/useLanguageStore';

// Initialize Zustand store (optional but useful for debugging)
const { language } = useLanguageStore.getState();
console.log("Current Language:", language);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
