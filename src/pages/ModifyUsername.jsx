import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import LoginInput from '../components/form/LoginInput'

function ModifyUsername() {
  return (
    <StyledMain>
      <Header title="닉네임 변경" btnBack />
      <article>
        <TextArea>
          <Title>닉네임 변경</Title>
          <TextDesc>질문지 확인용 닉네임 변경</TextDesc>
        </TextArea>
        <StyledInputWrap>
          <LoginInput type="user" placeholder="새 닉네임 입력" />
        </StyledInputWrap>
        <StyledFixedArea>
          <ButtonArea margin="11rem 0 0 0">
            <RoundButton size="large" text="저장" />
          </ButtonArea>
        </StyledFixedArea>
      </article>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 9rem;

  @media (min-width: 500px) {
    height: 100%;
    /* min-height: calc(100vh - 9rem - 8.4rem); */
    padding-bottom: 0;
  }
`

const StyledInputWrap = styled.div`
  margin-top: 2.8rem;
  padding: 0 2.4rem;
`

const StyledFixedArea = styled.div`
  position: absolute;
  left: 50%;
  bottom: 4.8rem;
  transform: translateX(-50%);
`
export default ModifyUsername