import React from 'react'
import styled from 'styled-components'

function Answer({ nickname, age, address, match, date }) {
  return (
    <Container>
      <LeftBox>
        <Nickname>
          <span>{nickname}</span>님의 답변
        </Nickname>

        <MemberInfoWrap>
          <MemberInfo color={(props) => props.theme.gray600}>
            {age}세
          </MemberInfo>
          <VerticalLine />
          <MemberInfo color={(props) => props.theme.gray600}>
            {address}
          </MemberInfo>
        </MemberInfoWrap>
      </LeftBox>

      <RightBox>
        <Match>{match === null ? '??' : match}% 일치</Match>
        <MemberInfo color={(props) => props.theme.gray600}>{date}</MemberInfo>
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
  ${(props) => props.theme.fontSize.h4_m}
  span {
    color: ${(props) => props.theme.pink700};
  }
`

const MemberInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.8rem;
  color: ${(props) => props.theme.gray600};
`
const MemberInfo = styled.span`
  ${(props) => props.theme.fontSize.b2}
  color: ${(props) => props.theme.gray600};
`

const VerticalLine = styled.span`
  height: 0.8rem;
  border-left: 1px solid ${(props) => props.theme.gray400};
`

const Match = styled.h4`
  ${(props) => props.theme.fontSize.h4_sb}
  color: ${(props) => props.theme.blue500};
`

export default Answer
