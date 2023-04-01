import React from 'react'
import Header from '../../components/header/Header'
import { TextArea, Title } from '../../components/texts/Texts'
import { ReactComponent as IconAirplane } from '../../assets/icon_airplane.svg'
import styled from 'styled-components'
import MyCategories from './MyCategories'
import MyStandards from './MyStandards'

const HomeRearch = () => {
  return (
    <StyledMain>
      <Header title="질문지 준비 완료" btnBack btnHome />
      <article>
        <TextArea>
          <Title>
            <i aria-hidden="true">
              <IconAirplane />
            </i>
            내 질문지
          </Title>
        </TextArea>
        <MyCategories />
        <MyStandards />
      </article>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 2rem;
`

export default HomeRearch
