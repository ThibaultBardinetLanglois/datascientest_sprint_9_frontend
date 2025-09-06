import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import './index.css'
import App from './App.jsx'

const apiClient = axios.create({baseURL: `${import.meta.env.VITE_API_URL}/api`});

apiClient.get("health/")
  .then(res => console.log("Réponse API:", res.data))
  .catch(err => console.error("Erreur API:", err));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
