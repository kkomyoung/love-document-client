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
import { useMutation, useQuery } from 'react-query'
import { deleteAnswer, getAnswerDetail } from '../apis'
import Loading from '../components/loading/Loading'
import { useNavigate, useParams } from 'react-router-dom'
const AnswerDetailPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { data, isLoading: isGetAnswerDetailLoading } = useQuery(
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
      researchURL: `https://www.love-document.com/research/${user.linkId}`,
      thumbnailURL: isAccept ? THUMBNAIL_URL.ACCEPT : THUMBNAIL_URL.REJECT,
      btnCancel: {
        fn: () => {
          openToastPopup('링크가 복사되었어요')
          closeModal()
        },
      },
    }
    return modelData
  }

  const removeAnswerModalData = {
    type: 'alert',
    title: '답변 삭제',
    desc: '답변을 삭제하시겠어요?',
    btnCancel: {
      text: '아니요',
      fn: () => {
        closeModal()
      },
    },
    btnConfirm: {
      text: '네',
      fn: () => {
        removeAnswer(params.answerId)
      },
    },
  }

  const { mutate: removeAnswer, isLoading: isRemoveAnswerLoading } =
    useMutation(deleteAnswer, {
      onSuccess: (data) => {
        navigate(-1)
      },
      onError: () => {
        openToastPopup('답변삭제를 실패했어요')
      },
    })

  return (
    <StyledMain>
      {(isGetAnswerDetailLoading || isRemoveAnswerLoading) && (
        <Loading
          text={isGetAnswerDetailLoading ? '답변 불러오는 중' : '답변 삭제 중'}
        />
      )}
      <Header
        title="답변 상세"
        btnBack
        btnDelete={() => openModal(removeAnswerModalData)}
      />
      <StyledAirticle>
        {!isGetAnswerDetailLoading ? (
          <>
            <TextArea>
              <Title>
                <span>{data.nickname}</span>님의 답변
              </Title>

              <AnswererBox>
                <AnswererRow>
                  <InfoText>
                    {new Date().getFullYear() - Number(data.age)}년생
                  </InfoText>
                  <VerticalLine />
                  <InfoText>{data.live}</InfoText>
                </AnswererRow>

                <AnswererRow>
                  <InfoText>{data.work}</InfoText>
                  <InfoText>
                    <span>
                      {data.dateTime.substr(5, 2)}월{' '}
                      {data.dateTime.substr(8, 2)}일
                    </span>
                  </InfoText>
                </AnswererRow>
              </AnswererBox>
            </TextArea>

            <Lottie data="magnifier" />

            <PercentageSection>
              <PercentageBox>
                <PercentageRow align={data.percentage === 100 && 'center'}>
                  {data.percentage === 100 ? (
                    <HeartPuzzleImg />
                  ) : (
                    <BrokenHeartPuzzleImg />
                  )}
                  <PercentageCol>
                    <PercentageTitleText>
                      {data.percentage}% 일치
                      <span>
                        ({data.matchCnt}/{data.totalCnt})
                      </span>
                    </PercentageTitleText>

                    <PercentageSubtitleText>
                      {data.percentage === 100 ? (
                        '축! 연애서류 합격이에요!'
                      ) : (
                        <>
                          <span>{`${data.totalCnt - data.matchCnt}개 `}</span>
                          항목에서 어긋났어요
                        </>
                      )}
                    </PercentageSubtitleText>
                  </PercentageCol>
                </PercentageRow>

                {data.nonMatchTitleList.length !== 0 && (
                  <PercentageRow>
                    <CategoryItemList>
                      {data.nonMatchTitleList.map((title, index) => (
                        <CategoryItemItem key={index}>{title}</CategoryItemItem>
                      ))}
                    </CategoryItemList>
                  </PercentageRow>
                )}
              </PercentageBox>
            </PercentageSection>

            <AnswerResultSection>
              <AnswerResultContainerList>
                {data.categoryInfoList &&
                  data.categoryInfoList.map((info, index) => (
                    <AnswerResultContainerItem key={index}>
                      <CategoryLabel emoji={info.emoji} title={info.title} />
                      <AnswerResultList>
                        {info.itemList.map((item, index) => (
                          <AnswerResultItem
                            key={index}
                            isNotMatch={item.ideal !== null}
                          >
                            <AnswerText isNotMatch={item.ideal !== null}>
                              {item.answerInfo.location === 1 ? (
                                <span>{item.answerInfo.answer}</span>
                              ) : null}
                              {item.answerInfo.start}
                              {item.answerInfo.location === 2 ? (
                                <span>{item.answerInfo.answer}</span>
                              ) : null}
                              {item.answerInfo.mid}
                              {item.answerInfo.location === 3 ? (
                                <span>{item.answerInfo.answer}</span>
                              ) : null}
                              {item.answerInfo.end}
                            </AnswerText>
                            {item.ideal && (
                              <IdealText>
                                <p>{item.ideal}</p>
                              </IdealText>
                            )}
                          </AnswerResultItem>
                        ))}
                      </AnswerResultList>
                    </AnswerResultContainerItem>
                  ))}
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
          </>
        ) : null}
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
  /* padding: 0 2.4rem; */

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
  padding: 0 2.4rem;
  margin-top: 2rem;
`

const PercentageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2rem;
  background-color: ${(props) => props.theme.pink300};
  border-radius: 0.8rem;
`

const PercentageRow = styled.div`
  display: flex;
  flex-direction: row;
  ${(props) => {
    if (props.align === 'center') {
      return `
      align-items: center;
      h3 {margin-top: 0}
      `
    }
  }}
`

const PercentageCol = styled.div``

const PercentageTitleText = styled.h3`
  display: flex;
  align-items: center;
  ${(props) => props.theme.fontSize.h3_m}
  color: ${(props) => props.theme.gray900};
  margin-top: 0.6rem;

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
  padding: 0 1rem;
  min-width: 3.6rem;
  height: 3rem;
  border-radius: 2.6rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pink700};
  margin-left: 0.4rem;
  ${(props) => props.theme.fontSize.label_s_m}
  color: ${(props) => props.theme.white};
`

const AnswerResultSection = styled.section`
  padding: 0 2.4rem;
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
  gap: 0.8rem;
`

const AnswerResultItem = styled.li`
  background-color: ${(props) => props.theme.gray100};
  border-radius: 0.8rem;
  border: ${(props) =>
    props.isNotMatch && `0.2rem solid ${props.theme.pink700}`};
  padding: 2rem;
`

const AnswerText = styled.p`
  ${(props) => props.theme.fontSize.b1}
  color: ${(props) => props.theme.gray700};

  span {
    ${(props) => props.theme.fontWeight.bold}
    color: ${(props) =>
      props.isNotMatch ? props.theme.pink700 : props.theme.gray700}
  }
`

const IdealText = styled.div`
  margin-top: 1.2rem;
  text-align: right;
  p {
    position: relative;
    ${(props) => props.theme.fontSize.label_s_m}
    color: ${(props) => props.theme.gray700};
    display: inline-flex;
    padding: 1rem;
    background: ${(props) => props.theme.gray300};
    border-radius: 0.8rem;
    margin-right: 0.8rem;

    &:before {
      position: absolute;
      right: -0.8rem;
      bottom: 1rem;
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-top: 0.8rem solid ${(props) => props.theme.gray300};
      border-right: 1rem solid transparent;
    }
  }
`

const InformSection = styled.section`
  margin-top: 4.8rem;
  padding: 0 2.4rem;
`
export default AnswerDetailPage
