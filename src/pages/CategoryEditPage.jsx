import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import Header from '../components/header/Header'
import { getQuestionsCategories, patchQuestions } from '../apis'
import { useMutation, useQuery } from 'react-query'
import CategoryBoxList from '../components/category/Category'
import useToastPopup from '../hooks/useToastPopup'
import useModal from '../hooks/useModal'
import Loading from '../components/loading/Loading'
import { useNavigate } from 'react-router-dom'

const CategoryEditPage = () => {
  const navigate = useNavigate()
  const { openToastPopup, ToastPopup } = useToastPopup()
  const { openModal, Modal } = useModal()
  const formRef = useRef()
  // 변경된 항목
  const [resultOptions, setResultOptions] = useState({
    categoryItems: [],
  })
  // 기존 항목
  const prevValue = useRef([])

  const {
    data,
    refetch,
    isLoading: dataIsLoading,
  } = useQuery('questionsCategories', getQuestionsCategories)

  const { mutate: patchQuestionsMutate, isLoading: patchQuestionsIsLoading } =
    useMutation(patchQuestions, {
      onSuccess: () => {
        setResultOptions({ categoryItems: [] })
        refetch()
        openModal({
          type: 'alert',
          title: '내 카테고리 편집',
          desc: '수정사항이 저장되었어요',
          btnConfirm: {
            text: '확인',
            fn: () => {
              navigate('/home/research')
            },
          },
        })
      },
    })

  useEffect(() => {
    if (data) {
      const newPrevValue = []
      data.forEach((item) => {
        item.categoryItemList.forEach((items) => {
          if (items.selected === 'Y') {
            newPrevValue.push(`${items.id}`)
          }
        })
      })
      prevValue.current = newPrevValue
      setResultOptions({ categoryItems: prevValue.current })
    }
  }, [data])

  const submitForm = () => {
    const checkedOptions = Array.from(
      formRef.current.querySelectorAll('input[type="checkbox"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id)
    setResultOptions({ categoryItems: [...checkedOptions] })
  }

  const handlerSave = () => {
    const isChanged = resultOptions.categoryItems.length !== 0
    const prevValues = data?.flatMap((item) =>
      item.categoryItemList
        .filter((items) => items.selected === 'Y')
        .map(({ id }) => `${id}`)
    )
    const isSame =
      JSON.stringify(resultOptions.categoryItems) === JSON.stringify(prevValues)

    if (isChanged && !isSame) {
      patchQuestionsMutate({ categoryItems: resultOptions.categoryItems })
    } else if (!isChanged) {
      openToastPopup('1개 이상의 항목을 선택해주세요')
    } else {
      openToastPopup('기존 항목과 동일합니다')
    }
  }

  return (
    <StyledMain>
      {dataIsLoading && <Loading />}
      {patchQuestionsIsLoading && <Loading text="질문지 저장중" />}
      <Header title="내 카테고리 편집" btnBack />
      <article>
        <TextArea>
          <Title>내 카테고리 편집</Title>
          <TextDesc>
            <span>내 애인후보... 이것만큼은..절대지켜!!</span>
            <br />
            <span>상대방에 대해 알고싶은 카테고리를 선택해주세요</span>
          </TextDesc>
        </TextArea>
        {data && (
          <StyledSectionCategory>
            <form ref={formRef} onChange={submitForm}>
              <CategoryBoxList data={data}></CategoryBoxList>
            </form>
          </StyledSectionCategory>
        )}
        <ButtonArea margin="8.3rem 0 0">
          <RoundButton size="large" text="저장" onClick={handlerSave} />
        </ButtonArea>
      </article>
      <Modal />
      <ToastPopup />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 10rem;
`

const StyledSectionCategory = styled.section`
  margin-top: 2.8rem;
  padding: 0 2rem;
`

export default CategoryEditPage
