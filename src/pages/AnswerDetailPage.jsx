import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { SubTitle, TextArea, TextDesc, Title } from '../components/texts/Texts'
import Lottie from '../components/lotties/Lottie'
import { ReactComponent as HeartPuzzleImg } from '../assets/img_heart_puzzle.svg'
import { ReactComponent as HeartTokenIcon } from '../assets/icon_heart_token.svg'
import CategoryLabel from '../components/category/CategoryLabel'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
// import { ReactComponent as HeartPuzzleIcon } from '../assets/icon_heart_puzzle.svg'
import useUser from '../hooks/useUser'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import KakaoShareButton from '../components/buttons/KakaoShareButton'
import useToastPopup from '../hooks/useToastPopup'
import useModal from '../hooks/useModal'

const AnswerDetailPage = () => {
  const { user } = useUser()
  const { openToastPopup, ToastPopup } = useToastPopup()
  const { Modal, openModal } = useModal()

  const createModalData = (isAccept) => {
    return {
      type: 'share',
      title: isAccept ? '소개팅 할게요' : '탈퇴하기',
      desc: '주선자에게 의사를 전달해보세요',
      btnCancel: {
        text: '내용 복사',
      },
      btnConfirm: {
        text: '카톡공유',
        fn: () => {},
      },
    }
  }

  const onCopyLink = () => {
    openToastPopup('설문지링크가 복사되었습니다.')
  }

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
              <HeartPuzzleImg />
              <PercentageCol>
                <PercentageTitleText>
                  100% 일치 <span>(10/10)</span>
                </PercentageTitleText>

                <PercentageSubtitleText>
                  축! 연애서류 합격이에요!
                </PercentageSubtitleText>
              </PercentageCol>
            </PercentageRow>

            <PercentageRow>
              <CategoryItemList>
                <CategoryItemItem>키</CategoryItemItem>
                <CategoryItemItem>타투</CategoryItemItem>
                <CategoryItemItem>안경</CategoryItemItem>
                <CategoryItemItem>안경</CategoryItemItem>
                <CategoryItemItem>안경</CategoryItemItem>
                <CategoryItemItem>안경</CategoryItemItem>
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
              text="소개팅 할게요"
              color="pink"
              border="true"
              onClick={() => openModal(createModalData(true))}
            />
          </ButtonArea>

          {user && (
            <ButtonArea flex full margin="4rem 0 0 0">
              <CopyToClipboard
                text={`http://www.love-document.com/research/${user.linkId}`}
                onCopy={onCopyLink}
              >
                <RoundButton text="링크복사" />
              </CopyToClipboard>

              <KakaoShareButton
                questionLink={`http://www.love-document.com/research/${user.linkId}`}
              />
            </ButtonArea>
          )}
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
`

const CategoryItemList = styled.ul`
  margin-top: 1.8rem;

  li + li {
    margin-left: 0.6rem;
    margin-top: 0.2rem;
  }
`

const CategoryItemItem = styled.li`
  display: inline-flex;
  background-color: ${(props) => props.theme.pink700};
  border-radius: 2.6rem;
  padding: 0.8rem 1.75rem;
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
