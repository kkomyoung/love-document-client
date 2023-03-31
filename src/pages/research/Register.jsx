import React from 'react'

import styled from 'styled-components'
import { ReactComponent as IconAirplane } from '../../assets/icon_airplane.svg'
import { SubTextArea, SubTitle, TextDesc } from '../../components/texts/Texts'
import LoginInput from '../../components/form/LoginInput'

function Register({
  valueNickname,
  valuePassword,
  errorNickname,
  errorPassword,
  errorMessageNickname,
  errorMessagePassword,
  handlerNicknameChange,
  handlerPasswordChange,
}) {
  return (
    <StyledSectionLogin>
      <SubTextArea>
        <SubTitle>
          <i aria-hidden="true">
            <IconAirplane />
          </i>
          <span>질문지 저장</span>
        </SubTitle>
        <TextDesc>
          <span>상대의 답변을 확인하려면 질문지를 저장해야해요</span>
          <br />
          <span>확인용 닉네임과 비밀번호를 설정해주세요</span>
        </TextDesc>
      </SubTextArea>
      <StyledLoginFormArea>
        <>
          <LoginInput
            inputValue={valueNickname}
            error={errorNickname}
            errorMessage={errorMessageNickname}
            onChange={handlerNicknameChange}
            name="nickname"
            placeholder="닉네임 (1~10자, 특수문자 제외)"
          />
          <LoginInput
            inputValue={valuePassword}
            error={errorPassword}
            errorMessage={errorMessagePassword}
            onChange={handlerPasswordChange}
            name="password"
            pattern="[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+"
            placeholder="비밀번호 (4~20자)"
          />
        </>
      </StyledLoginFormArea>
    </StyledSectionLogin>
  )
}

const StyledSectionLogin = styled.section`
  margin-top: 4.8rem;
  padding: 0 2rem;
`

const StyledLoginFormArea = styled.div`
  margin-top: 2.8rem;
`

export default Register
