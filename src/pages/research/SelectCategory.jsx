import React from 'react'
import styled from 'styled-components'
import CategoryBoxList from '../../components/category/Category'
function SelectCategory({ formRef, data, onChange }) {
  return (
    <StyledSectionCategory>
      <form ref={formRef} onChange={onChange}>
        <CategoryBoxList data={data}></CategoryBoxList>
      </form>
    </StyledSectionCategory>
  )
}

const StyledSectionCategory = styled.section`
  margin-top: 2.8rem;
  padding: 0 2rem;
`

export default SelectCategory
