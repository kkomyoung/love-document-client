import React from 'react'
import styled from 'styled-components'
import { Text2, Title4M, Title4SB } from './texts/Texts'

function Answer({ nickname, age, address, match, date }) {
  return (
    <Container>
      <LeftBox>
        <Title4M>
          <Nickname>{nickname}</Nickname>님의 답변
        </Title4M>

        <MemberInfoWrap>
          <Text2 color={(props) => props.theme.gray600}>{age}세</Text2>
          <VerticalLine />
          <Text2 color={(props) => props.theme.gray600}>{address}</Text2>
        </MemberInfoWrap>
      </LeftBox>

      <RightBox>
        <Title4SB color={(props) => props.theme.blue500}>
          {match === null ? '??' : match}% 일치
        </Title4SB>
        <Text2 color={(props) => props.theme.gray600}>{date}</Text2>
      </RightBox>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.gray100};
  border: 1px solid ${(props) => props.theme.gray300};
  border-radius: 8px;
  padding: 2.4rem 2rem;
`

const LeftBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
`

const Nickname = styled.span`
  color: ${(props) => props.theme.pink700};
`

const MemberInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.8rem;
  color: ${(props) => props.theme.gray600};
`

const VerticalLine = styled.span`
  height: 0.8rem;
  border-left: 1px solid ${(props) => props.theme.gray400};
`

export default Answer
