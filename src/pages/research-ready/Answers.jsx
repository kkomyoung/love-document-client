import React from 'react'
import styled from 'styled-components'
import { SubTitle, TextDesc } from '../../components/texts/Texts'
import { ReactComponent as LoveLetterIcon } from '../../assets/icon_love_letter_36.svg'
import AnswerItem from '../../components/AnswerItem'

function Answers({ answers }) {
  return (
    <Container>
      <TitleArea>
        <SubTitle>
          <i aria-hidden="true">
            <LoveLetterIcon />
          </i>
          <span>도착한 답변</span>
        </SubTitle>
        <TextDesc>아직 도착한 답변이 없어요 :(</TextDesc>
      </TitleArea>

      <Box>
        {answers.map((answer) => (
          <AnswerItem key={answer.id} {...answer} />
        ))}
      </Box>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2.4rem 2rem 4.8rem 2rem;
`

const TitleArea = styled.div`
  padding: 0 0.4rem;
`

const Box = styled.div`
  margin-top: 2.8rem;

  & > div + div {
    margin-top: 1.6rem;
  }
`

export default Answers
