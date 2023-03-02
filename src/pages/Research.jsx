import React from 'react'
import Header from '../components/header/Header'
import CategoryBoxList from '../components/category/Category'
import { LoginForm, LoginInput } from '../components/form/LoginForm'
import { ReactComponent as IconAirplane } from '../assets/icon_airplane.svg'

import {
  ButtonArea,
  CircleButton,
  RoundButton,
} from '../components/buttons/Buttons'
import { TextArea, Title, SubTitle, TextDesc } from '../components/texts/Texts'

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
  return (
    <div>
      <Header>
        <CircleButton feature="back" />
      </Header>
      <TextArea>
        <Title>질문지 만들기</Title>
        <TextDesc>
          <span>내 애인후보... 이것만큼은..절대지켜!!</span>
          <br />
          <span>상대방에 대해 알고싶은 카테고리를 선택해주세요</span>
        </TextDesc>
      </TextArea>
      <CategoryBoxList data={dummy}></CategoryBoxList>
      <TextArea margin="4.8rem 0 0 0">
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
      </TextArea>
      <LoginForm>
        <LoginInput type="user" placeholder="닉네임 (최대 10자)" />
        <LoginInput error type="password" placeholder="비밀번호 (최소 8자)" />
      </LoginForm>
      <ButtonArea>
        <RoundButton large text="완료"></RoundButton>
      </ButtonArea>
    </div>
  )
}
export default Research
