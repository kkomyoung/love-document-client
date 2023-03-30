import React from 'react'
import theme from '../../styles/theme'
import styled from 'styled-components'
import { ReactComponent as IconUser } from '../../assets/icon_user.svg'
import { ReactComponent as IconLock } from '../../assets/icon_lock.svg'
import { ReactComponent as IconWarning } from '../../assets/icon_warning.svg'

const LoginInput = ({
  type,
  name,
  pattern,
  placeholder,
  error,
  errorMessage,
  inputValue,
  handlerInputChange,
}) => {
  const iconColor = error ? theme.pink700 : theme.gray500

  return (
    <StyledLoginInput error={error}>
      <div className="input-box">
        <i aria-hidden="true">
          {name === 'nickname' && <IconUser fill={iconColor} />}
          {name === 'password' && <IconLock fill={iconColor} />}
        </i>
        <input
          type={type}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          value={inputValue}
          onChange={handlerInputChange}
          autoComplete="off"
        />
        {error && (
          <i aria-hidden="true">
            <IconWarning />
          </i>
        )}
      </div>
      {error && <span className="message">{errorMessage}</span>}
    </StyledLoginInput>
  )
}

const StyledLoginInput = styled.form`
  & + & {
    margin-top: 1.6rem;
  }

  .input-box {
    display: flex;
    border: 1px solid
      ${(props) => (props.error ? props.theme.pink700 : props.theme.gray500)};
    border-radius: 0.8rem;
    overflow: hidden;
    height: 4.8rem;
  }

  .message {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 0.6rem;
    padding: 0 1.2rem;
    color: ${(props) => props.theme.pink700};
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    /* height: 100%; */
  }

  input {
    flex-grow: 1;
    padding: 0 1.2rem 0 0;
    border: none;
    font-size: 1.6rem;
    color: ${(props) => props.theme.gray900};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.gray400};
    }
  }
`

export default LoginInput
