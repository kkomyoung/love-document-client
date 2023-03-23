import React from 'react'
import theme from '../../styles/theme'
import styled from 'styled-components'
import { ReactComponent as IconUser } from '../../assets/icon_user.svg'
import { ReactComponent as IconLock } from '../../assets/icon_lock.svg'
import { ReactComponent as IconWarning } from '../../assets/icon_warning.svg'

const LoginInput = ({
  className,
  placeholder,
  error,
  errorMessage,
  inputValue,
  handleInputChange,
}) => {
  const iconColor = error ? theme.pink700 : theme.gray500

  return (
    <StyledLoginInput error={error}>
      <div className="input-box">
        <i aria-hidden="true">
          {className === 'nickname' && <IconUser fill={iconColor} />}
          {className === 'password' && <IconLock fill={iconColor} />}
        </i>
        <input
          className={className}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
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

const LoginForm = ({
  valueNickname,
  valuePassword,
  errorNickname,
  errorPassword,
  errorMessageNickname,
  errorMessagePassword,
  handleNicknameChange,
  handlePasswordChange,
}) => {
  return (
    <>
      <LoginInput
        inputValue={valueNickname}
        error={errorNickname}
        errorMessage={errorMessageNickname}
        className="nickname"
        handleInputChange={handleNicknameChange}
        placeholder="닉네임 (최소 1자, 최대 10자)"
      />
      <LoginInput
        inputValue={valuePassword}
        error={errorPassword}
        errorMessage={errorMessagePassword}
        className="password"
        handleInputChange={handlePasswordChange}
        placeholder="비밀번호 (최소 4자, 최대 20자)"
      />
    </>
  )
}

const StyledLoginInput = styled.div`
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
    height: 100%;
  }

  input {
    flex-grow: 1;
    height: 100%;
    padding-right: 1.2rem;
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

export { LoginInput, LoginForm }
