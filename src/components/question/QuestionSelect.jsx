import React, { useState } from 'react'
import styled from 'styled-components'
import { QUETION_DATAS } from '../../utils/constants'

function QuestionSelect({ questionId, dataType }) {
  const [selected, setSelected] = useState('')

  const handleSelect = (e) => {
    console.log(`id: ${questionId}, selected: ${e.target.value}`)
    setSelected(e.target.value)
  }

  return (
    <Box>
      <select onChange={handleSelect} value={selected}>
        {QUETION_DATAS[dataType].map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </Box>
  )
}

export default QuestionSelect

const Box = styled.div`
  display: flex;
  border: 1px solid
    ${(props) => (props.error ? props.theme.pink700 : props.theme.gray500)};
  border-radius: 0.8rem;
  overflow: hidden;
  height: 4.8rem;
  /* margin-top: 2rem; */

  select {
    font-size: 1.6rem;
    flex-grow: 1;
    height: 100%;
    border: none;
    padding: 0 1.2rem;
    ${(props) => props.theme.fontSize.lable_m_m}
    color: ${(props) => props.theme.gray900};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.gray400};
    }
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.2rem;
    width: 2.4rem;
    background-color: ${(props) => props.theme.bgColor};

    svg {
      fill: ${(props) => props.theme.gray500};
    }
  }
`
