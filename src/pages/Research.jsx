import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { CircleButton } from '../components/buttons/Buttons'
import { Title, TextDesc } from '../components/texts/Texts'

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

const CategoryItem = ({ items }) => {
  const itemButtons = items.map((item, index) => {
    return (
      <ItemButton key={index}>
        <label htmlFor="">{item}</label>
        <input type="checkbox" />
      </ItemButton>
    )
  })

  return itemButtons
}

const ItemButton = styled.li`
  background: #fff;
`
const CategoryBox = styled.li`
  background: ${(props) => props.theme.gray100};
`
const Category = () => {
  const titles = dummy.map((category) => {
    return (
      <CategoryBox key={category.id}>
        <li>{category.title}</li>
        <CategoryItem items={category.items}></CategoryItem>
      </CategoryBox>
    )
  })

  return <div>{titles}</div>
}

function Research() {
  return (
    <div>
      <Header>
        <CircleButton feature="back" />
      </Header>
      <Wrapper>
        <Title>질문지 만들기</Title>
        <TextDesc>
          <span>내 애인후보... 이것만큼은..절대지켜!!</span>
          <br />
          <span>상대방에 대해 알고싶은 카테고리를 선택해주세요</span>
        </TextDesc>
        <Category></Category>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.article`
  padding: 0 2.4rem;
`

export default Research
