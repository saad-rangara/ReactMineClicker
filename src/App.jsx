import { useState, useEffect } from 'react'
import Header from  './components/Header.jsx'
import './components/Header.css'
import Mining from './components/Mining.jsx'
import './components/Mining.css'
import Upgrades from './components/Upgrades.jsx'
import './components/Upgrades.css'
import Footer from './components/Footer.jsx'
import './components/Footer.css'
import './App.css'

export default function App() {
  // const [click, setClick] = useState(() +> {
  //   const saveClick = localStorage.getItem('.click');
  //   return saveClick ? Number(saveClick) : 0;
  // })

  // const [mine, setMine] =  useState(() => {
  // })

  // useEffect(() => {
  //   const cookiesPerSecondInterval = setInterval(() => {
  //     setCookies((currentCookies) => currentCookies + cookiesPerSecond);
  //   }, 1000);

  //   return () => {
  //     clearInterval(cookiesPerSecondInterval);
  //   };
  // }, [cookiesPerSecond]);

  return (
  <>
  <Header />
  <Mining />
  <Footer />
  </>
  )
}