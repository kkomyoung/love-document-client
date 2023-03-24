import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import { ReactComponent as ImgHeartLock } from '../assets/img_heart_lock02.svg'

function Modify() {
  return (
    <StyledMain>
      <Header title="내 정보 수정" btnBack />
      <article>
        <TextArea>
          <Title>내 정보 수정</Title>
          <TextDesc>질문지 확인용 닉네임과 비밀번호를 변경</TextDesc>
        </TextArea>
        <StyledMenuWrap>
          <div className="inner">
            <StyledImgWrap>
              <ImgHeartLock />
            </StyledImgWrap>
            <ButtonArea full>
              <RoundButton
                as={Link}
                to="/setting/modify/username"
                text="닉네임 변경"
                color="white"
                border="true"
              />
              <RoundButton
                as={Link}
                to="/setting/modify/password"
                text="비밀번호 변경"
                color="white"
                border="true"
              />
            </ButtonArea>
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

const StyledImgWrap = styled.figure`
  margin: 0 -2rem 2.6rem;
  svg {
    width: 100%;
  }
`

export default Modify
