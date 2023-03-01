import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import IconHeart from '../assets/icon_heart.svg'
import IconPlus from '../assets/icon_plus.svg'
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

const ItemButton = styled.ul`
  margin: -0.3rem;

  li {
    display: inline-flex;
    margin: 0.3rem;
  }

  input {
    display: none;
  }

  input + label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 4.4rem;
    padding: 0 1.2rem 0 1.5rem;
    background: ${(props) => props.theme.bgColor};
    border-radius: 2.2rem;
    font-size: 1.4rem;
    border: 1px solid ${(props) => props.theme.gray300};
    color: ${(props) => props.theme.gray900};
    letter-spacing: -0.04rem;
  }

  input:checked + label {
    border: 1px solid ${(props) => props.theme.pink700};

    i {
      background-image: url(${IconHeart});
    }
  }

  i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.8rem;
    background-image: url(${IconPlus});
    background-size: 16px 16px;
  }
`

const CategoryItem = ({ category }) => {
  const itemButtons = category.items.map((item, index) => (
    <li key={index}>
      <input
        type="checkbox"
        name={category.title}
        id={'check' + category.id + '_' + index}
      />
      <label htmlFor={'check' + category.id + '_' + index}>
        <i></i>
        <span>{item}</span>
      </label>
    </li>
  ))

  return <ItemButton>{itemButtons}</ItemButton>
}

const Category = () => {
  const titles = dummy.map((category) => {
    return (
      <CategoryBox key={category.id}>
        <strong>
          <i>👀</i>
          {category.title}
        </strong>
        <CategoryItem category={category}></CategoryItem>
      </CategoryBox>
    )
  })

  return <CategoryForm>{titles}</CategoryForm>
}

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
      <Category></Category>
      <ButtonWrap>
        <RoundButton text="완료"></RoundButton>
      </ButtonWrap>
    </div>
  )
}

const CategoryForm = styled.form`
  margin-top: 2.8rem;
  padding: 0 2rem;
`

const CategoryBox = styled.div`
  background: ${(props) => props.theme.gray100};
  padding: 2rem 2rem 2.8rem;
  border-radius: 0.8rem;

  & + & {
    margin-top: 2.8rem;
  }

  strong {
    display: inline-flex;
    align-items: center;
    height: 3rem;
    padding: 0 1.2rem;
    font-size: 1.4rem;
    border-radius: 2.6rem;
    margin-bottom: 1.6rem;
    color: ${(props) => props.theme.pink700};
    background: ${(props) => props.theme.pink300};

    i {
      margin-right: 0.3rem;
      font-size: 1.2rem;
    }
  }
`

const ButtonWrap = styled.div`
  padding-bottom: 4.8rem;
  margin-top: 11rem;
`

export default Research
