import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import CategoryBoxList from '../components/category/Category'

import { CircleButton, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'

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
      <ButtonWrap>
        <RoundButton text="완료"></RoundButton>
      </ButtonWrap>
    </div>
  )
}
const ButtonWrap = styled.div`
  padding-bottom: 4.8rem;
  margin-top: 11rem;
`

export default Research
