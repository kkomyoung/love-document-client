import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import CategoryBoxList from '../../components/category/Category'

function SelectCategory() {
  const { isLoading, error, data } = useQuery(['categories'], () =>
    fetch('http://api-dev.love-document.com/categories').then((res) =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'
  if (error) return console.log(error.message)

  return (
    <StyledSectionCategory>
      <CategoryBoxList data={data}></CategoryBoxList>
    </StyledSectionCategory>
  )
}

const StyledSectionCategory = styled.section`
  margin-top: 2.8rem;
  padding: 0 2rem;
`

export default SelectCategory
