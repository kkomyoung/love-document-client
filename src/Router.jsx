import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Home from './pages/Home'
import Research from './pages/Research'
import ResearchReadyPage from './pages/research-ready'
import StandardComplete from './pages/StandardComplete'
import AnswerComplete from './pages/AnswerComplete'
import StandardPage from './pages/StandardPage'
import AnswerPage from './pages/AnswerPage'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/ready" element={<ResearchReadyPage />} />
        <Route path="/research/standard" element={<StandardPage />} />
        <Route path="/research/:questionId/answer" element={<AnswerPage />} />
        <Route
          path="/research/standard/complete"
          element={<StandardComplete />}
        />
        <Route
          path="/research/question/answer/complete"
          element={<AnswerComplete />}
        />
      </Routes>
    </>
  )
}

export default Router
