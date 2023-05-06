import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import { useNavigate } from 'react-router-dom'
import useModal from '../hooks/useModal'
import { useMutation } from 'react-query'
import { deleteUser } from '../apis'
import useToastPopup from '../hooks/useToastPopup'

const Unregister = () => {
  const { openToastPopup, ToastPopup } = useToastPopup()
  const formRef = useRef()
  const [reasonTextValue, setReasonTextValue] = useState('')
  const [reason, setReason] = useState('')
  const navigate = useNavigate()
  const { Modal, openModal } = useModal()
  const { mutate } = useMutation(deleteUser, {
    onSuccess: () => {
      navigate('/', { replace: true })
      localStorage.clear()
    },
  })

  useEffect(() => {
    submitForm()
  }, [reasonTextValue])

  const submitForm = () => {
    const checkedOptions = Array.from(formRef.current.querySelectorAll('input'))
      .filter((input) => input.checked)
      .map((option) => option.value)

    if (reasonTextValue !== '') {
      checkedOptions.push(reasonTextValue)
    }
    setReason(checkedOptions.join(', '))
  }

  const uncheckOtherCheckboxes = (e) => {
    if (e.target.checked) {
      formRef.current.elements.reason.forEach((elem) => {
        if (elem !== e.target) {
          elem.checked = false
        }
      })
    }
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
            <StyledReasonForm>
              <form ref={formRef} onChange={submitForm}>
                <div className="reasonRadio">
                  <input
                    id="reason01"
                    type="checkbox"
                    name="reason"
                    value="생각했던 서비스가 아니에요"
                    onClick={(e) => {
                      uncheckOtherCheckboxes(e)
                    }}
                  />
                  <label htmlFor="reason01">생각했던 서비스가 아니에요</label>
                </div>
                <div className="reasonRadio">
                  <input
                    id="reason02"
                    type="checkbox"
                    name="reason"
                    value="삭제하고 싶은 내용이 있어요"
                    onClick={(e) => {
                      uncheckOtherCheckboxes(e)
                    }}
                  />
                  <label htmlFor="reason02">삭제하고 싶은 내용이 있어요</label>
                </div>
                <div className="reasonRadio">
                  <input
                    id="reason03"
                    type="checkbox"
                    name="reason"
                    value="더 이상 사용하지 않아요"
                    onClick={(e) => {
                      uncheckOtherCheckboxes(e)
                    }}
                  />
                  <label htmlFor="reason03">더 이상 사용하지 않아요</label>
                </div>
                <div className="reasonText">
                  <input
                    type="text"
                    id="reason04"
                    name="reason"
                    placeholder="기타 사유를 알려주세요"
                    value={reasonTextValue}
                    // onFocus={() =>
                    //   formRef.current.elements.reason.forEach(
                    //     (elem) => (elem.checked = false)
                    //   )
                    // }
                    onChange={(e) => setReasonTextValue(e.target.value)}
                  />
                </div>
              </form>
            </StyledReasonForm>
          </div>
        </StyledMenuWrap>
        <ButtonArea margin="10rem 0 0 0">
          <RoundButton
            size="large"
            text="탈퇴하기"
            onClick={() => {
              if (reason === '') {
                openToastPopup('탈퇴사유를 선택해주세요')
              } else {
                openModal({
                  type: 'alert',
                  title: '탈퇴하기',
                  desc: '정말 탈퇴하실 건가요?',
                  btnCancel: {
                    text: '계속 쓸게요',
                  },
                  btnConfirm: {
                    text: '네, 탈퇴할게요',
                    fn: () => {
                      mutate(reason)
                    },
                  },
                })
              }
            }}
          />
        </ButtonArea>
      </article>
      <Modal />
      <ToastPopup />
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

const StyledReasonForm = styled.ul`
  margin: 2rem 0 0.8rem;

  .reasonRadio {
    input {
      ${(props) => props.theme.a11yHidden}
    }

    input + label {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 5.3rem;
      background-color: ${(props) => props.theme.bgColor};
      ${(props) => props.theme.fontSize.label_m_m}
      color: ${(props) => props.theme.gray900};
      transition: 0.3s;
      width: 100%;
      height: 5.2rem;
      cursor: pointer;
      border: 1px solid ${(props) => props.theme.gray300};
      margin-bottom: 0.8rem;
    }

    input:checked + label {
      background-color: ${(props) => props.theme.pink700};
      color: ${(props) => props.theme.bgColor};
    }
  }

  .reasonText {
    display: flex;
    border: 1px solid
      ${(props) => (props.error ? props.theme.pink700 : props.theme.gray500)};
    border-radius: 0.8rem;
    overflow: hidden;
    height: 4.8rem;

    input {
      font-size: 1.6rem;
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
  }
`
export default Unregister
