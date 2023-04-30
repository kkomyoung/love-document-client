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

const answers = [
  {
    id: 1,
    nickname: '영애',
    age: 26,
    address: '서울 강남구',
    match: 70,
    date: '2월 7일',
  },
  {
    id: 2,
    nickname: '본휘',
    age: 29,
    address: '서울 강남구',
    match: null,
    date: '2월 8일',
  },
]

function ResearchReady() {
  const navigate = useNavigate()
  const { Modal, openModal } = useModal()
  const { ToastPopup, openToastPopup } = useToastPopup()
  const onDelete = (id) => {
    // console.log(id)
  }

  const onCopyURL = () => {
    // TODO 링크 API로 받은 데이터로 변경해야 함. 아래는 예시용 링크
    openToastPopup('설문지링크가 복사되었습니다.')
  }

  return (
    <StyledMain>
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
            <TextDesc>아직 도착한 답변이 없어요 :(</TextDesc>
          </TextArea>

          <AnswerList>
            {answers.map((answer) => (
              <AnswerItem key={answer.id} {...answer} onDelete={onDelete} />
            ))}
          </AnswerList>
        </StyledAnswersSection>
      </StyledAirticle>
      <ToastPopup />
      <Modal />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 2rem;
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

const AnswerList = styled.ul`
  margin-top: 2.8rem;
  padding: 0px 2rem;

  & > li + li {
    margin-top: 1.6rem;
  }
`

export default ResearchReady
