import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
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
import HomeRearch from './pages/home-research'
import StandardEditPage from './pages/StandardEditPage'
import AnswerDetailPage from './pages/AnswerDetailPage'
import CategoryEditPage from './pages/CategoryEditPage'
import NotFound from './pages/NotFound'
import NoticePage from './pages/NoticePage'

function requireLogin(Component) {
  function AuthenticatedComponent() {
    const navigate = useNavigate()
    const isLoggedIn = !!localStorage.getItem('nickname')

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/login')
      }
    }, [isLoggedIn, navigate])

    if (isLoggedIn) {
      return <Component />
    } else {
      return null
    }
  }

  return <AuthenticatedComponent />
}

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={requireLogin(Home)} />
        <Route path="/setting" element={requireLogin(Setting)} />
        <Route path="/setting/unregister" element={requireLogin(Unregister)} />
        <Route path="/setting/modify" element={requireLogin(Modify)} />
        <Route
          path="/setting/modify/nickname"
          element={requireLogin(ModifyNickname)}
        />
        <Route
          path="/setting/modify/password"
          element={requireLogin(ModifyPassword)}
        />
        <Route path="/research" element={<Research />} />
        <Route
          path="/research/ready"
          element={requireLogin(ResearchReadyPage)}
        />
        <Route path="/research/standard" element={requireLogin(StandardPage)} />
        <Route
          path="/research/standard/complete"
          element={requireLogin(StandardComplete)}
        />

        <Route path="/home/answers" element={requireLogin(AnswersPage)} />
        <Route
          path="/home/answers/:answerId"
          element={requireLogin(AnswerDetailPage)}
        />
        <Route path="/home/research" element={requireLogin(HomeRearch)} />
        <Route path="/home/category" element={requireLogin(CategoryEditPage)} />
        <Route path="/home/standard" element={requireLogin(StandardEditPage)} />
        <Route path="/research/:questionId" element={<AnswerLanding />} />
        <Route path="/research/:questionId/answer" element={<AnswerPage />} />
        <Route
          path="/research/:questionId/answer/complete"
          element={<AnswerComplete />}
        />
        <Route path="/*" element={<NotFound />} />
        <Route path="/notice" element={<NoticePage />} />
      </Routes>
    </>
  )
}

export default Router
