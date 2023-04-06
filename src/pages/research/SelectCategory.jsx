import React from 'react'
import styled from 'styled-components'
import CategoryBoxList from '../../components/category/Category'
import { getCategories } from '../../apis/category'
import { useQuery } from 'react-query'
import Loading from '../../components/loading/Loading'

function SelectCategory({ formRef, onChange }) {
  const { data, isLoading } = useQuery('categories', getCategories)

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <StyledSectionCategory>
          <form ref={formRef} onChange={onChange}>
            <CategoryBoxList data={data}></CategoryBoxList>
          </form>
        </StyledSectionCategory>
      )}
    </>
  )
}

const StyledSectionCategory = styled.section`
  margin-top: 2.8rem;
  padding: 0 2rem;
`

export default SelectCategory
