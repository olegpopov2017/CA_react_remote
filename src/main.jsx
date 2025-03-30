import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainCA from './components/MainCA.jsx'
//import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainCA />
  </StrictMode>,
)
