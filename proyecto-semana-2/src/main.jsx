import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './comp/Header.jsx'
import Principal from './comp/Principal.jsx'
import Footer from './comp/Footer.jsx'
import './css/styles.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Principal />
    <Footer />  
  </React.StrictMode>,
);
