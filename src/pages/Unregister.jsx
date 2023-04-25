import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import InputText from '../components/form/QuestionInput'
import ExampleButton from '../components/question/ExampleButton'
import { useNavigate } from 'react-router-dom'
import useModal from '../hooks/useModal'

const Unregister = () => {
  const navigate = useNavigate()
  const { Modal, openModal } = useModal()

  const modalData = {
    type: 'alert',
    title: '탈퇴하기',
    desc: '정말 탈퇴하실 건가요?',
    btnCancel: {
      text: '계속 쓸게요',
    },
    btnConfirm: {
      text: '네, 탈퇴할게요',
      fn: () => {
        console.log('탈퇴')
        navigate('/')
      },
    },
  }

  return (
    <StyledMain>
      <Header title="회원 탈퇴" btnBack />
      <article>
        <TextArea>
          <Title>회원 탈퇴</Title>
          <TextDesc>정말 떠나시는 건가요?</TextDesc>
        </TextArea>
        <StyledMenuWrap>
          <div className="inner">
            <StyledQuestionTitle>
              <span>Q</span>탈퇴 사유를 알려주세요
            </StyledQuestionTitle>
            <StyledBox>
              <ExampleButton
                name="unregister"
                multiChoice="N"
                id="unregister_01"
                content="생각했던 서비스가 아니에요"
              />
              <ExampleButton
                name="unregister"
                multiChoice="N"
                id="unregister_02"
                content="삭제하고 싶은 내용이 있어요"
              />
              <ExampleButton
                name="unregister"
                multiChoice="N"
                id="unregister_03"
                content="더 이상 사용하지 않아요"
              />
            </StyledBox>
            <InputText type="text" placeholder="기타 사유를 알려주세요" />
          </div>
        </StyledMenuWrap>
        <ButtonArea margin="10rem 0 0 0">
          <RoundButton
            size="large"
            text="탈퇴하기"
            onClick={() => openModal(modalData)}
          />
        </ButtonArea>
      </article>
      <Modal />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 3rem;
`
const StyledMenuWrap = styled.section`
  margin-top: 2.8rem;
  padding: 0 2rem;

  .inner {
    padding: 2.5rem 2rem 2rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.gray100};
  }
`

const StyledQuestionTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${(props) => props.theme.gray800};

  span {
    color: ${(props) => props.theme.blue500};
    margin-right: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme.gray800};
  }
`

const StyledBox = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0.8rem;

  button > label {
    width: 100%;
  }

  button + button {
    margin-top: 0.8rem;
  }
`
export default Unregister
