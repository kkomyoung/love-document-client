import React, { useState } from 'react'
import styled from 'styled-components'
import { SELECT_OPTIONS } from '../../utils/constants'

function QuestionSelect({ questionId, dataType }) {
  const [selected, setSelected] = useState('')

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  return (
    <Box>
      <Select onChange={handleSelect} value={selected}>
        <Option value="" disabled selected hidden>
          {dataType}
        </Option>
        {SELECT_OPTIONS[dataType].map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>
    </Box>
  )
}

export default QuestionSelect

const Box = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.gray500};
  border-radius: 0.8rem;
  overflow: hidden;
  height: 4.8rem;
`

const Select = styled.select`
  font-size: 1.6rem;
  flex-grow: 1;
  height: 100%;
  border: none;
  padding: 0 1.2rem;
  ${(props) => props.theme.fontSize.lable_m_m}
  color: ${(props) =>
    props.value === '' ? props.theme.gray400 : props.theme.gray900};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
  }
`

const Option = styled.option``
