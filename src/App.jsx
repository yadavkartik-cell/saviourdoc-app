import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import SplashScreen from './components/SplashScreen'
import OfflineBanner from './components/OfflineBanner'
import Home from './screens/Home'
import Doctors from './screens/Doctors'
import DoctorDetail from './screens/DoctorDetail'
import Services from './screens/Services'
import BookCall from './screens/BookCall'
import Blog from './screens/Blog'
import Profile from './screens/Profile'

export default function App() {
  const [splash, setSplash] = useState(true)
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 2500)
    window.addEventListener('online', () => setOnline(true))
    window.addEventListener('offline', () => setOnline(false))
    return () => clearTimeout(t)
  }, [])

  if (splash) return <SplashScreen />

  return (
    <Router>
      <div className="app-container">
        {!online && <OfflineBanner />}
        <div className="screen-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookCall />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </Router>
  )
}
