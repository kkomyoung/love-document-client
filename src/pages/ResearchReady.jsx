import React from 'react'
import Header from '../components/header/Header'
import { TextDesc, Title } from '../components/texts/Texts'

function ResearchReady() {
  return (
    <div>
      <Header></Header>
      <Title>질문지 준비 완료</Title>
      <TextDesc>
        상대에게 질문지를 보낼 준비가 완료되었어요 링크를 공유하고 답변을
        요청해보세요
      </TextDesc>
    </div>
  )
}

export default ResearchReady
