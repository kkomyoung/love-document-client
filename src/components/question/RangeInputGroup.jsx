import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

function RangeInputGroup() {
  const { register, handleSubmit } = useForm()
  const onValid = (data) => {}

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Input
        type="number"
        {...register('minimum', { required: true, maxLength: 3, minLength: 3 })}
      />
      <span>이상</span>
      <Input
        type="number"
        {...register('maximum', { required: true, maxLength: 3, minLength: 3 })}
      />
      <span>이하</span>
    </Form>
  )
}

export default RangeInputGroup

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    margin-right: 0.8rem;
  }

  span {
    margin-right: 1.2rem;
    ${(props) => props.theme.fontSize.label_m_m}
    color: ${(props) => props.theme.gray800}
  }
`

const Input = styled.input`
  display: flex;
  width: 8rem;
  height: 4.8rem;
  text-align: center;
  border: 1px solid ${(props) => props.theme.gray500};
  border-radius: 0.8rem;
  overflow: hidden;
  color: ${(props) => props.theme.gray900};
  ${(props) => props.theme.fontSize.label_m_m}

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.pink700};
  }

  &::placeholder {
    color: ${(props) => props.theme.gray400};
  }
`
