import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, Title } from '../components/texts/Texts'

const AnswerDetailPage = () => {
  return (
    <StyledMain>
      <Header title="질문지 준비 완료" btnBack btnDelete />
      <StyledAirticle>
        <TextArea>
          <Title>
            <span>키위</span>님의 답변
          </Title>

          <AnswererBox>
            <InfoBox>
              <InfoText>1996년생</InfoText>
              <VerticalLine />
              <InfoText>서울강남구</InfoText>
            </InfoBox>

            <InfoBox>
              <InfoText>시각디자인과 대학생</InfoText>
              <InfoText>
                <span>오후 3:43</span>
              </InfoText>
            </InfoBox>
          </AnswererBox>
        </TextArea>
      </StyledAirticle>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 10rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;

  h1 > span {
    color: ${(props) => props.theme.blue500};
  }
`

const AnswererBox = styled.div`
  margin-top: 1.1rem;
`

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const InfoText = styled.span`
  vertical-align: middle;
  ${(props) => props.theme.fontSize.b2}
  color: ${(props) => props.theme.gray800};

  span {
    color: ${(props) => props.theme.gray600};
  }
`

const VerticalLine = styled.span`
  height: 0.8rem;
  border-left: 1px solid ${(props) => props.theme.gray400};
`

export default AnswerDetailPage
