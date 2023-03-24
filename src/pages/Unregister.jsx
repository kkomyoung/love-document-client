import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/header/Header'
// import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import Input from '../components/form/Input'

function Unregister() {
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
            <Input />
          </div>
        </StyledMenuWrap>
      </article>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 9rem;
`
const StyledMenuWrap = styled.section`
  margin-top: 2.8rem;
  padding: 0 2rem;

  .inner {
    padding: 0 2rem 2rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.gray100};
  }
`
export default Unregister
