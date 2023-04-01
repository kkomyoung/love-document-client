import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Home from './pages/Home'
import Research from './pages/research'
import ResearchReadyPage from './pages/research-ready'
import StandardComplete from './pages/StandardComplete'
import AnswerComplete from './pages/AnswerComplete'
import StandardPage from './pages/StandardPage'
import AnswerLanding from './pages/AnswerLanding'
import AnswerPage from './pages/AnswerPage'
import Setting from './pages/Setting'
import Unregister from './pages/Unregister'
import Modify from './pages/Modify'
import ModifyNickname from './pages/ModifyNickname'
import ModifyPassword from './pages/ModifyPassword'
import AnswersPage from './pages/AnswersPage'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting/unregister" element={<Unregister />} />
        <Route path="/setting/modify" element={<Modify />} />
        <Route path="/setting/modify/nickname" element={<ModifyNickname />} />
        <Route path="/setting/modify/password" element={<ModifyPassword />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/ready" element={<ResearchReadyPage />} />
        <Route path="/research/standard" element={<StandardPage />} />
        <Route path="/research/:questionId" element={<AnswerLanding />} />
        <Route path="/research/:questionId/answer" element={<AnswerPage />} />
        <Route
          path="/research/standard/complete"
          element={<StandardComplete />}
        />
        <Route
          path="/research/question/answer/complete"
          element={<AnswerComplete />}
        />
        <Route path="/home/answers" element={<AnswersPage />} />
      </Routes>
    </>
  )
}

export default Router
