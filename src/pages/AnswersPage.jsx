import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import AnswerItem from '../components/answer/AnswerItem'
import NoDataAnswerItem from '../components/answer/NoDataAnswerItem'
import { useMutation, useQuery } from 'react-query'
import { deleteAnswer, getUsersAnswers } from '../apis'
import useToastPopup from '../hooks/useToastPopup'
import Loading from '../components/loading/Loading'
import useModal from '../hooks/useModal'

function AnswersPage() {
  const {
    data,
    refetch,
    isLoading: answersIsLoading,
  } = useQuery('usersAnswersList', getUsersAnswers)

  const { openToastPopup, ToastPopup } = useToastPopup()
  const { Modal, openModal, closeModal } = useModal()

  const { mutate: removeAnswer, isLoading: deleteIsLoading } = useMutation(
    deleteAnswer,
    {
      onSuccess: (data) => {
        refetch()
      },
      onError: () => {
        openToastPopup('답변삭제를 실패했어요')
      },
    }
  )

  const onDelete = (id) => {
    openModal({
      type: 'alert',
      title: '답변 삭제',
      desc: '답변을 삭제하시겠어요?',
      btnCancel: {
        text: '아니요',
        fn: () => {
          closeModal()
        },
      },
      btnConfirm: {
        text: '네',
        fn: () => {
          removeAnswer(id)
        },
      },
    })
  }

  return (
    <StyledMain>
      {answersIsLoading && <Loading text="답변 불러오는 중" />}
      {deleteIsLoading && <Loading text="답변 삭제 중" />}
      <Header title="도착한 답변" btnBack></Header>
      <StyledAirticle>
        <TextArea>
          <Title>
            <i aria-hidden="true">
              <IconLetter />
            </i>
            도착한 답변
          </Title>
          {!data ||
            (data.length === 0 && (
              <TextDesc>아직 도착한 답변이 없어요 :(</TextDesc>
            ))}
        </TextArea>

        <StyledAnswersSection>
          <StyledAnswerList>
            {!data || (data.length === 0 && <NoDataAnswerItem />)}
            {data &&
              data.map((answer) => (
                <AnswerItem
                  key={answer.answerId}
                  {...answer}
                  onDelete={onDelete}
                />
              ))}
          </StyledAnswerList>
        </StyledAnswersSection>
      </StyledAirticle>
      <ToastPopup />
      <Modal />
    </StyledMain>
  )
}

export default AnswersPage

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article``
const StyledAnswersSection = styled.section``

const StyledAnswerList = styled.ul`
  margin-top: 2.8rem;
  padding: 0px 2rem;

  & > li + li {
    margin-top: 1.6rem;
  }
`
