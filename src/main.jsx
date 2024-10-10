import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductTab from './ProductTab.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ProductTab />
  </StrictMode>,
)
