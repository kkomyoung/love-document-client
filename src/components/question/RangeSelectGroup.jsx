import React, { useState } from 'react'
import styled from 'styled-components'

import { SELECT_OPTIONS } from '../../utils/constants'

function RangeSelectGroup({
  questionId,
  questionType,
  answeredRange,
  dataType,
}) {
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

      <span>이상</span>

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

      <span>이하</span>
    </Box>
  )
}

export default RangeSelectGroup

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  select {
    margin-right: 0.8rem;
  }

  span {
    margin-right: 1.2rem;
    ${(props) => props.theme.fontSize.label_m_m}
    color: ${(props) => props.theme.gray800}
  }
`

const Select = styled.select`
  width: 8rem;
  height: 4.8rem;
  font-size: 1.6rem;
  flex-grow: 1;
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.gray500};
  overflow: hidden;
  padding: 0 1.2rem;
  outline: none;
  ${(props) => props.theme.fontSize.lable_m_m}
  color: ${(props) =>
    props.value === '' ? props.theme.gray400 : props.theme.gray900};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.pink700};
  }
`

const Option = styled.option``
