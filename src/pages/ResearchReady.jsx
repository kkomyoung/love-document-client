import React from 'react'
import Header from '../components/header/Header'
import { TextArea, TextDesc, Title, Title3M } from '../components/texts/Texts'
import styled from 'styled-components'
import { CircleButton } from '../components/buttons/Buttons'

const member = {
  name: '연서합',
  researchCnt: 4,
}

function ResearchReady() {
  return (
    <Container>
      <Header>
        <CircleButton feature="back" />
        <CircleButton feature="close" />
      </Header>

      <TextArea>
        <Title>질문지 준비 완료</Title>
        <TextDesc>
          상대에게 질문지를 보낼 준비가 완료되었어요
          <br />
          링크를 공유하고 답변을 요청해보세요
        </TextDesc>
      </TextArea>

      <ResearchContainer>
        <Title3M>
          <Name>{member.name}</Name>님의 연애서류
          <TextDesc>
            <ResearchCnt>{member.researchCnt}</ResearchCnt>
            개의 질문
          </TextDesc>
        </Title3M>
      </ResearchContainer>
    </Container>
  )
}

const Container = styled.div``

const ResearchContainer = styled.div`
  flex: flex;
  padding: 2rem;
  margin: 2.8rem 2rem;
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
`

const Name = styled.span`
  color: ${(props) => props.theme.pink700};
`

const ResearchCnt = styled.span`
  color: ${(props) => props.theme.blue700};
`
export default ResearchReady
