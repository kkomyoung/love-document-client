import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Home from './pages/Home'
import Research from './pages/Research'
import ResearchReadyPage from './pages/research-ready/ResearchReadyPage'
import StandardComplete from './pages/StandardComplete'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/ready" element={<ResearchReadyPage />} />
        <Route
          path="/research/standard/complete"
          element={<StandardComplete />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
