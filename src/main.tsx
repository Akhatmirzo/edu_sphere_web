import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import ScrollTop from './components/ScrollTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ScrollTop>
    </ScrollTop>, */}
      <App />
  </StrictMode>
)
