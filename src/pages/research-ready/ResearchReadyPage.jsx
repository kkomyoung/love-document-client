import React from 'react'
import Header from '../../components/header/Header'
import { TextArea, TextDesc, Title } from '../../components/texts/Texts'
import styled from 'styled-components'
import { CircleButton } from '../../components/buttons/Buttons'
import ShareResearch from './ShareResearch'

const member = {
  name: '연서합',
  researchCnt: 4,
}

// const answers = [
//   {
//     id: 1,
//     nickname: '영애',
//     age: 26,
//     address: '서울 강남구',
//     match: 70,
//     date: '2월 7일',
//   },
//   {
//     id: 2,
//     nickname: '본휘',
//     age: 29,
//     address: '서울 강남구',
//     match: null,
//     date: '2월 8일',
//   },
// ]

function ResearchReady() {
  console.log()
  return (
    <Container>
      <Header>
        <CircleButton feature="back" />
        <CircleButton feature="close" />
      </Header>

      <TextArea>
        <Title>질문지 준비 완료</Title>
        <TextDesc>
          상대에게 질문지를 보낼 준비가 완료되었어요
          <br />
          링크를 공유하고 답변을 요청해보세요
        </TextDesc>
      </TextArea>

      <ShareResearch {...member} />

      {/* <StandardBox>
        <StandardTop>
          <HeartPuzzleImg src={HeartPuzzleIcon} alt="heart-puzzle" />
          <StandardTitleBox>
            <Title3B color={(props) => props.theme.pink700}>
              내 기준에 부합할까?
            </Title3B>
            <Text2>
              바라는 조건을 알려주시면
              <br />
              상대방의 답변과 비교해드려요
            </Text2>
          </StandardTitleBox>
        </StandardTop>
        <WriteStandardBtn>
          <LabelM color={(props) => props.theme.white}>
            <Link> 내 기준 작성하기 &rarr;</Link>
          </LabelM>
        </WriteStandardBtn>
      </StandardBox>

      <AnswerContainer>
        <TextArea>
          <Title3MIocn icon={LoveLetterIcon}>도착한 답변</Title3MIocn>
        </TextArea>

        <AnswersBox>
          {answers.map((answer) => (
            <Answer key={answer.id} {...answer} />
          ))}
        </AnswersBox>
      </AnswerContainer> */}
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 2rem;
`

// const StandardBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: ${(props) => props.theme.pink300};
//   border-radius: 8px;
//   border: 0px;
//   padding: 2.4rem;
// `

// const StandardTop = styled.div`
//   display: flex;
// `

// const HeartPuzzleImg = styled.img`
//   width: 100px;
//   margin-right: 0.2rem;
// `

// const StandardTitleBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
// `

// const WriteStandardBtn = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 5.2rem;
//   background-color: ${(props) => props.theme.pink700};
//   border-radius: 53px;
//   border: 0px;
//   margin-top: 2.4rem;
// `

// const AnswerContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   margin-top: 4.8rem;
// `

// const AnswersBox = styled.div`
//   padding: 0 2rem;
//   margin-top: 2.8rem;

//   & > div + div {
//     margin-top: 1.6rem;
//   }
// `

export default ResearchReady
