import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.body).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
 
  
)
