import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header/Header.jsx'
import Maincon from './Main/Maincon.jsx'
import Footer from './Footer/Footer.jsx'
import Movies from './Movies/Movies.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>
    <Header />
    <Maincon />
    <Movies />
    <Footer />
  </>
  </StrictMode>,
)
