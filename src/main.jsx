import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SideMenu from './components/SideMenu.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideMenu/>
    <App />
  </StrictMode>,
)
