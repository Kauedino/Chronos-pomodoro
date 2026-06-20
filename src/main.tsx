import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App' // 1. Corrigido aqui: Importando com o nome 'App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App />
    <App />
    <App />
    
  </StrictMode>,
)