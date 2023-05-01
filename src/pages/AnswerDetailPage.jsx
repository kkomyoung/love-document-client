/* eslint-disable multiline-ternary */
import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { SubTitle, TextArea, TextDesc, Title } from '../components/texts/Texts'
import Lottie from '../components/lotties/Lottie'
import { ReactComponent as HeartPuzzleImg } from '../assets/img_heart_puzzle.svg'
import { ReactComponent as BrokenHeartPuzzleImg } from '../assets/img_broken_heart_puzzle.svg'
import { ReactComponent as HeartTokenIcon } from '../assets/icon_heart_token.svg'
import CategoryLabel from '../components/category/CategoryLabel'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import useUser from '../hooks/useUser'
import useToastPopup from '../hooks/useToastPopup'
import useModal from '../hooks/useModal'

import { THUMBNAIL_URL } from '../utils/constants'
import { useQuery } from 'react-query'
import { getAnswerDetail } from '../apis'
import { useParams } from 'react-router-dom'

const AnswerDetailPage = () => {
  const params = useParams()
  const { data } = useQuery(
    'answer-detail',
    () => getAnswerDetail(params.answerId),
    {
      refetchOnWindowFocus: false,
    }
  )
  const { user } = useUser()
  const { openToastPopup, ToastPopup } = useToastPopup()
  const { Modal, openModal, closeModal } = useModal()
  const createModalData = (isAccept) => {
    const modelData = {
      type: 'share',
      title: isAccept ? '소개팅 할게요!' : '다른 좋은 인연이 있겠죠',
      desc: '주선자에게 의사를 전달해보세요',
      researchURL: `http://www.love-document.com/research/${user.linkId}`,
      thumbnailURL: isAccept ? THUMBNAIL_URL.ACCEPT : THUMBNAIL_URL.REJECT,
      btnCancel: {
        fn: () => {
          openToastPopup('설문지 링크가 복사되었어요')
          closeModal()
        },
      },
    }
    return modelData
  }

  const { percentage, totalCnt, matchCnt, nonMatchTitleList } = data

  return (
    <StyledMain>
      <Header title="질문지 준비 완료" btnBack btnDelete />
      <StyledAirticle>
        <TextArea>
          <Title>
            <span>키위</span>님의 답변
          </Title>

          <AnswererBox>
            <AnswererRow>
              <InfoText>1996년생</InfoText>
              <VerticalLine />
              <InfoText>서울강남구</InfoText>
            </AnswererRow>

            <AnswererRow>
              <InfoText>시각디자인과 대학생</InfoText>
              <InfoText>
                <span>오후 3:43</span>
              </InfoText>
            </AnswererRow>
          </AnswererBox>
        </TextArea>

        <Lottie data="magnifier" />

        <PercentageSection>
          <PercentageBox>
            <PercentageRow>
              {percentage === 100 ? (
                <HeartPuzzleImg />
              ) : (
                <BrokenHeartPuzzleImg />
              )}
              <PercentageCol>
                <PercentageTitleText>
                  {percentage}% 일치{' '}
                  <span>
                    {matchCnt}/{totalCnt}
                  </span>
                </PercentageTitleText>

                <PercentageSubtitleText>
                  {percentage === 100 ? (
                    '축! 연애서류 합격이에요!'
                  ) : (
                    <>
                      <span>{`${totalCnt - matchCnt}개 `}</span>
                      항목에서 어긋났어요
                    </>
                  )}
                </PercentageSubtitleText>
              </PercentageCol>
            </PercentageRow>

            <PercentageRow>
              <CategoryItemList>
                {nonMatchTitleList &&
                  nonMatchTitleList.map((title, index) => (
                    <CategoryItemItem key={index}>{title}</CategoryItemItem>
                  ))}
              </CategoryItemList>
            </PercentageRow>
          </PercentageBox>
        </PercentageSection>

        <AnswerResultSection>
          <AnswerResultContainerList>
            <AnswerResultContainerItem>
              <CategoryLabel category={'외모'} />
              <AnswerResultList>
                <AnswerResultItem>
                  제 키는 <span>183cm</span> 이에요
                </AnswerResultItem>
                <AnswerResultItem isDiff={true}>
                  제 키는 <span>183cm</span> 이에요
                </AnswerResultItem>
              </AnswerResultList>
            </AnswerResultContainerItem>

            <AnswerResultContainerItem>
              <CategoryLabel category={'외모'} />
              <AnswerResultList>
                <AnswerResultItem>
                  제 키는 <span>183cm</span> 이에요
                </AnswerResultItem>
                <AnswerResultItem>
                  제 키는 <span>183cm</span> 이에요
                </AnswerResultItem>
              </AnswerResultList>
            </AnswerResultContainerItem>
          </AnswerResultContainerList>
        </AnswerResultSection>

        <InformSection>
          <SubTitle>
            <i aria-hidden="true">
              <HeartTokenIcon />
            </i>
            <span>주선자에게 알리기</span>
          </SubTitle>
          <TextDesc>
            주선자에게 링크를 공유해 의사를 밝혀주세요 일치율과 답변 내용은
            공개되지 않아요
          </TextDesc>

          <ButtonArea full margin="2rem 0 0 0">
            <RoundButton
              text="다른 좋은 인연이 있겠죠"
              color="white"
              border="true"
              onClick={() => openModal(createModalData(false))}
            />

            <RoundButton
              text="소개팅 할게요!"
              color="white"
              border="true"
              onClick={() => openModal(createModalData(true))}
            />
          </ButtonArea>
        </InformSection>
      </StyledAirticle>
      <ToastPopup />
      <Modal />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 10rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;

  h1 > span {
    color: ${(props) => props.theme.blue500};
  }
`

const AnswererBox = styled.div`
  margin-top: 1.1rem;
`

const AnswererRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const InfoText = styled.span`
  vertical-align: middle;
  ${(props) => props.theme.fontSize.b2}
  color: ${(props) => props.theme.gray800};

  span {
    color: ${(props) => props.theme.gray600};
  }
`

const VerticalLine = styled.span`
  height: 0.8rem;
  border-left: 1px solid ${(props) => props.theme.gray400};
`

const PercentageSection = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.pink300};
  border-radius: 0.8rem;
  padding: 1.2rem;
`

const PercentageBox = styled.div`
  display: flex;
  flex-direction: column;
`

const PercentageRow = styled.div`
  display: flex;
  flex-direction: row;
`

const PercentageCol = styled.div``

const PercentageTitleText = styled.h3`
  display: flex;
  align-items: center;
  ${(props) => props.theme.fontSize.h3_m}
  color: ${(props) => props.theme.gray900};
  margin-top: 1rem;

  span {
    ${(props) => props.theme.fontSize.b2}
    color: ${(props) => props.theme.gray600};
    margin-left: 0.8rem;
  }
`

const PercentageSubtitleText = styled.h4`
  ${(props) => props.theme.fontSize.b2}
  color: ${(props) => props.theme.gray800};
  margin-top: 0.5rem;

  span {
    color: ${(props) => props.theme.pink700};
  }
`

const CategoryItemList = styled.ul`
  margin-top: 1.8rem;

  li + li {
    margin-left: 0.6rem;
    margin-top: 0.5rem;
  }
`

const CategoryItemItem = styled.li`
  padding: 0.4rem 1.2rem;
  min-width: 3.6rem;
  height: 3rem;
  border-radius: 2.6rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pink700};
  margin-left: 0.4rem;
  margin-bottom: 0.2rem;
  ${(props) => props.theme.fontSize.label_s_m}
  color: ${(props) => props.theme.white};
`

const AnswerResultSection = styled.section`
  margin-top: 4.5rem;
`

const AnswerResultContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const AnswerResultContainerItem = styled.li``

const AnswerResultList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  gap: 0.8rem;
`

const AnswerResultItem = styled.li`
  background-color: ${(props) => props.theme.gray100};
  border-radius: 0.8rem;
  border: ${(props) => props.isDiff && `0.2rem solid ${props.theme.pink700}`};
  padding: 2rem;

  ${(props) => props.theme.fontSize.b1}
  color: ${(props) => props.theme.gray700};

  span {
    ${(props) => props.theme.fontWeight.bold}
  }
`

const InformSection = styled.section`
  margin-top: 4.8rem;
`
export default AnswerDetailPage
