import React from 'react'
import Header from '../components/header/Header'
import {
  LabelM,
  TextArea,
  TextDesc,
  Title,
  Title3B,
  Title3M,
} from '../components/texts/Texts'
import styled from 'styled-components'
import { CircleButton } from '../components/buttons/Buttons'
import DocumentImgAsset from '../assets/img-document.svg'
import HeartPuzzleImgAsset from '../assets/img-heart-puzzle.svg'
import { Link } from 'react-router-dom'

const member = {
  name: '연서합',
  researchCnt: 4,
}

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

      <ResearchContainer>
        <ResearchBox>
          <Title3M>
            <Name>{member.name}</Name>님의 연애서류
            <TextDesc>
              <ResearchCnt>{member.researchCnt}</ResearchCnt>
              개의 질문
            </TextDesc>
          </Title3M>

          <DocumentImg src={DocumentImgAsset} alt="document" />

          <HorizontalBtnWrap>
            <CopyLinkBtn>
              <LabelM fontColor={(props) => props.theme.white}>
                <Link to="/">링크복사</Link>
              </LabelM>
            </CopyLinkBtn>

            <ShareKakaoTalkBtn>
              <LabelM>
                <Link to="/">카톡공유</Link>
              </LabelM>
            </ShareKakaoTalkBtn>
          </HorizontalBtnWrap>
        </ResearchBox>

        <StandardBox>
          <StandardTop>
            <HeartPuzzleImg src={HeartPuzzleImgAsset} alt="heart-puzzle" />
            <div>
              <Title3B fontColor={(props) => props.theme.pink700}>
                내 기준에 부합할까?
              </Title3B>
              <TextDesc>
                바라는 조건을 알려주시면
                <br />
                상대방의 답변과 비교해드려요
              </TextDesc>
            </div>
          </StandardTop>
          <WriteStandardBtn>
            <LabelM fontColor={(props) => props.theme.white}>
              <Link> 내 기준 작성하기 &rarr;</Link>
            </LabelM>
          </WriteStandardBtn>
        </StandardBox>
      </ResearchContainer>
    </Container>
  )
}

const Container = styled.div``

const ResearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 2rem;

  div + div {
    margin-top: 3.3rem;
  }
`

const ResearchBox = styled.div`
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: 0px;
`

const Name = styled.span`
  color: ${(props) => props.theme.pink700};
`

const ResearchCnt = styled.span`
  color: ${(props) => props.theme.blue700};
`

const DocumentImg = styled.img`
  width: 360px;
  height: 280px;
  margin: 0 auto;
`

const HorizontalBtnWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`

const CopyLinkBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.2rem;
  background-color: ${(props) => props.theme.gray900};
  border-radius: 53px;
  border: 0px;
`

const ShareKakaoTalkBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.2rem;
  background-color: ${(props) => props.theme.kakao};
  border-radius: 53px;
  border: 0px;

  label {
    color: ${(props) => props.theme.gray900};
  }
`

const StandardBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.pink300};
  border-radius: 8px;
  border: 0px;
  padding: 2.4rem;
`

const StandardTop = styled.div`
  display: flex;
`

const HeartPuzzleImg = styled.img`
  width: 100px;
  margin-right: 0.2rem;
`

const WriteStandardBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.2rem;
  background-color: ${(props) => props.theme.pink700};
  border-radius: 53px;
  border: 0px;
  margin-top: 2.4rem;
`

export default ResearchReady
