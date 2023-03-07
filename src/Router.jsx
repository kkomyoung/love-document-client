import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Research from './pages/Research'
import ResearchReadyPage from './pages/research-ready/ResearchReadyPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/ready" element={<ResearchReadyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
