import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import AnswerItem from '../components/answer/AnswerItem'
import NoDataAnswerItem from '../components/answer/NoDataAnswerItem'
import { useQuery } from 'react-query'
import { getUsersAnswers } from '../apis'

function AnswersPage() {
  const { data } = useQuery('usersAnswersList', getUsersAnswers)
  const dataLength = data?.length || 0

  const onDelete = (id) => {}

  return (
    <StyledMain>
      <Header title="도착한 답변" btnBack></Header>
      <StyledAirticle>
        <TextArea>
          <Title>
            <i aria-hidden="true">
              <IconLetter />
            </i>
            도착한 답변
          </Title>
          {dataLength === 0 && (
            <TextDesc>아직 도착한 답변이 없어요 :(</TextDesc>
          )}
        </TextArea>

        <StyledAnswersSection>
          <AnswerList>
            {dataLength === 0 && <NoDataAnswerItem />}
            {data &&
              data.map((answer) => (
                <AnswerItem
                  key={answer.answerId}
                  {...answer}
                  onDelete={onDelete}
                />
              ))}
          </AnswerList>
        </StyledAnswersSection>
      </StyledAirticle>
    </StyledMain>
  )
}

export default AnswersPage

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article``
const StyledAnswersSection = styled.section``

const AnswerList = styled.ul`
  margin-top: 2.8rem;
  padding: 0px 2rem;

  & > li + li {
    margin-top: 1.6rem;
  }
`
