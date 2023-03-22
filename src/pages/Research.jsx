import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import CategoryBoxList from '../components/category/Category'
import { LoginForm } from '../components/form/LoginForm'
import { Modal } from '../components/modals/Modal'

import { ReactComponent as IconAirplane } from '../assets/icon_airplane.svg'

import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import {
  TextArea,
  SubTextArea,
  Title,
  SubTitle,
  TextDesc,
} from '../components/texts/Texts'

const dummy = [
  {
    id: 1,
    title: '외모',
    items: ['키', '체형', '쌍커풀', '피부', '안경', '타투'],
  },
  {
    id: 2,
    title: '가치관',
    items: ['종교', '결혼관', '자녀관', '정치성향', '술', '흡연'],
  },
  {
    id: 3,
    title: '연애스타일',
    items: ['연애리스크', '만남 빈도', '연락 빈도', '스킨십', '표현'],
  },
]
function Research() {
  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(true)
  }

  return (
    <StyledMain>
      <Header title="질문지 만들기" btnBack />
      <article>
        <TextArea>
          <Title>질문지 만들기</Title>
          <TextDesc>
            <span>내 애인후보... 이것만큼은..절대지켜!!</span>
            <br />
            <span>상대방에 대해 알고싶은 카테고리를 선택해주세요</span>
          </TextDesc>
        </TextArea>
        <StyledSectionCategory>
          <CategoryBoxList data={dummy}></CategoryBoxList>
        </StyledSectionCategory>
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
            <LoginForm />
          </StyledLoginFormArea>
        </StyledSectionLogin>
        <ButtonArea margin="8.3rem 0 0">
          <RoundButton size="large" text="완료" onClick={showModal} />
        </ButtonArea>
      </article>
      {openModal && (
        <Modal
          text="질문지 닉네임과 비밀번호를 꼭 기억해주세요"
          btnConfirm="확인"
          setOpenModal={setOpenModal}
        />
      )}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`
const StyledSectionLogin = styled.section`
  margin-top: 4.8rem;
  padding: 0 2rem;
`
const StyledSectionCategory = styled.section`
  margin-top: 2.8rem;
  padding: 0 2rem;
`

const StyledLoginFormArea = styled.div`
  margin-top: 2.8rem;
`
export default Research
