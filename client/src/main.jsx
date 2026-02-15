import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FetchCoffeeImage from "./CoffeeAPI.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <FetchCoffeeImage />
    </StrictMode>,
)
