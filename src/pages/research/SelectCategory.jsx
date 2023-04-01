import React from 'react'
import styled from 'styled-components'
import CategoryBoxList from '../../components/category/Category'
import { getCategories } from '../../apis/category'
import { useQuery } from 'react-query'

function SelectCategory({ formRef, onChange }) {
  const { data } = useQuery('categories', getCategories)

  return (
    <>
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
