import React from 'react'
import styled from 'styled-components'
import PopupPortal from '../../portal'

const ToastPopup = ({ isOpen, message }) => {
  return (
    <PopupPortal>
      {isOpen && (
        <StyledToastPopup className="fadeIn">
          <div className="inner">
            <p>{message}</p>
          </div>
        </StyledToastPopup>
      )}
    </PopupPortal>
  )
}

const StyledToastPopup = styled.div`
  position: fixed;
  left: 2rem;
  right: 2rem;
  bottom: 3rem;
  z-index: 90;

  .inner {
    background: ${(props) => props.theme.gray900};
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    padding: 1.4rem 1.5rem;
  }

  @media (min-width: 500px) {
    position: fixed;
    left: 50%;
    bottom: 10.5vh;
    transform: translateX(-50%);
    max-width: 320px;
    width: 100%;
  }

  p {
    ${(props) => props.theme.fontSize.b2};
    color: #fff;
  }

  &.fadeIn {
    animation: fadeInAnimation 0.5s;
  }
  &.fadeOut {
    animation: fadeOutAnimation 0.5s;
  }

  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOutAnimation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

export default ToastPopup
