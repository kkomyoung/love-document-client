import React from 'react'
import { ReactComponent as IconNotFound } from '../assets/icon_not_found.svg'
import styled from 'styled-components'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <StyledMain>
      <StyledNotFound>
        <figure>
          <IconNotFound />
        </figure>
        <h2>일시적인 오류가 발생했어요</h2>
        <p>잠시 후에 다시 시도해주세요</p>
        <ButtonArea full margin="4.6rem 0 0 0">
          <RoundButton as={Link} to="/" text="시작페이지로 가기" color="pink" />
        </ButtonArea>
      </StyledNotFound>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  position: relative;
  height: 100vh;
  max-height: 100%;
`
const StyledNotFound = styled.div`
  position: absolute;
  top: 50%;
  left: 2rem;
  right: 2rem;
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.gray100};
  padding: 4.2rem 2rem 2.4rem;
  border-radius: 0.8rem;
  text-align: center;

  h2 {
    ${(props) => props.theme.fontSize.h3_b}
    color: ${(props) => props.theme.gray700};
    margin-top: 2.45rem;
  }
  p {
    ${(props) => props.theme.fontSize.b1}
    color: ${(props) => props.theme.gray700};
    margin-top: 0.2rem;
  }
`
export default NotFound
