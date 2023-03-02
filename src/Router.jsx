import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Research from './pages/Research'
import ResearchReady from './pages/ResearchReady'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/ready" element={<ResearchReady />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
