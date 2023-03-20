import React from 'react'
import styled from 'styled-components'
import CategoryLabel from '../category/CategoryLabel'
import { ReactComponent as IconUser } from '../../assets/icon_user.svg'

function DefaultInfo() {
  return (
    <StyledContainer>
      <CategoryLabel category="기본정보" />

      <StyledForm>
        <StyledQuestionTitle>
          <span>Q1</span>닉네임을 입력해주세요
        </StyledQuestionTitle>

        <StyledInputBox>
          <i aria-hidden="true">
            <IconUser fill />
          </i>
          <input type="text" placeholder="닉네임" />
        </StyledInputBox>

        <StyledQuestionTitle>
          <span>Q2</span>나이가 어떻게 되시나요?
        </StyledQuestionTitle>

        <StyledInputBox>
          <input type="number" placeholder="18" />
        </StyledInputBox>

        <StyledQuestionTitle>
          <span>Q3</span>어느 지역에 사시나요?
        </StyledQuestionTitle>

        <StyledInputBox>
          <input type="text" placeholder="ex. 서울 성동구" />
        </StyledInputBox>

        <StyledQuestionTitle>
          <span>Q4</span>무슨 일을 하시나요?
        </StyledQuestionTitle>

        <StyledInputBox>
          <input type="text" placeholder="ex. 시각디자인과 대학생" />
        </StyledInputBox>
      </StyledForm>
    </StyledContainer>
  )
}

export default DefaultInfo

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: none;
  padding: 2rem;

  div + h4 {
    margin-top: 5.2rem;
  }
`

const StyledForm = styled.form``

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

const StyledInputBox = styled.div`
  display: flex;
  border: 1px solid
    ${(props) => (props.error ? props.theme.pink700 : props.theme.gray500)};
  border-radius: 0.8rem;
  overflow: hidden;
  height: 4.8rem;
  margin-top: 2rem;

  input {
    flex-grow: 1;
    height: 100%;
    border: none;
    padding: 0 1.2rem;
    ${(props) => props.theme.fontSize.lable_m_m}
    color: ${(props) => props.theme.gray900};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.gray400};
    }
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.2rem;
    width: 2.4rem;
    background-color: ${(props) => props.theme.bgColor};

    svg {
      fill: ${(props) => props.theme.gray500};
    }
  }
`
