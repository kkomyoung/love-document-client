import React from 'react'
import Header from '../../components/header/Header'
import {
  SubTitle,
  TextArea,
  TextDesc,
  Title,
} from '../../components/texts/Texts'
import styled from 'styled-components'
import { ReactComponent as IconLoveLetter } from '../../assets/icon_love_letter_36.svg'
import ShareResearchBox from '../../components/research/ShareResearchBox'
import AnswerItem from '../../components/answer/AnswerItem'
import WriteStandard from './WriteStandard'
import useToastPopup from '../../hooks/useToastPopup'
import useModal from '../../hooks/useModal'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { deleteAnswer, getUsersAnswers } from '../../apis'
import NoDataAnswerItem from '../../components/answer/NoDataAnswerItem'
import Loading from '../../components/loading/Loading'

function ResearchReady() {
  const navigate = useNavigate()
  const { Modal, openModal } = useModal()
  const { openToastPopup, ToastPopup } = useToastPopup()

  const { data, refetch } = useQuery('usersAnswersList', getUsersAnswers)
  const dataLength = data?.length || 0

  const { mutate: removeAnswer, isLoading } = useMutation(deleteAnswer, {
    onSuccess: (data) => {
      refetch()
    },
    onError: () => {
      openToastPopup('답변삭제를 실패했어요')
    },
  })

  const onDelete = (id) => removeAnswer(id)

  const onCopyURL = () => {
    openToastPopup('설문지링크가 복사되었습니다.')
  }

  return (
    <StyledMain>
      {isLoading && <Loading text="답변 삭제 중" />}
      <Header
        title="질문지 준비 완료"
        btnBack={() =>
          openModal({
            type: 'alert',
            title: '뒤로 가기',
            desc: '질문지 작성 페이지로 돌아갈까요?',
            btnCancel: {
              text: '아니요',
            },
            btnConfirm: {
              text: '네',
              fn: () => {
                // TODO 회원가입 정보 리셋해야 함
                navigate('/research')
              },
            },
          })
        }
        btnHome={() =>
          openModal({
            type: 'alert',
            title: '홈으로 가기',
            desc: '시작 화면으로 갈까요?',
            btnCancel: {
              text: '아니요',
            },
            btnConfirm: {
              text: '네',
              fn: () => {
                navigate('/home')
              },
            },
          })
        }
      />
      <StyledAirticle>
        <TextArea>
          <Title>질문지 준비 완료</Title>
          <TextDesc>
            상대에게 질문지를 보낼 준비가 완료되었어요
            <br />
            링크를 공유하고 답변을 요청해보세요
          </TextDesc>
        </TextArea>

        <StyledShareResearchSection>
          <ShareResearchBox onCopyURL={onCopyURL} />
        </StyledShareResearchSection>

        <WriteStandard />

        <StyledAnswersSection>
          <TextArea>
            <SubTitle>
              <i aria-hidden="true">
                <IconLoveLetter />
              </i>
              <span>도착한 답변</span>
            </SubTitle>
            {dataLength === 0 && (
              <TextDesc>아직 도착한 답변이 없어요 :(</TextDesc>
            )}
          </TextArea>

          <StyledAnswerList>
            {dataLength === 0 && <NoDataAnswerItem />}
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

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 10rem;
`

const StyledAirticle = styled.article``
const StyledShareResearchSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 2rem;

  & > div + div {
    margin-top: 3.3rem;
  }
`
const StyledAnswersSection = styled.section``

const StyledAnswerList = styled.ul`
  margin-top: 2.8rem;
  padding: 0px 2rem;

  & > li + li {
    margin-top: 1.6rem;
  }
`

export default ResearchReady
