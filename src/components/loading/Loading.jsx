import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import lottie from 'lottie-web'
import loadingAnimation from '../../assets/lottie/loading.json'

const Loading = ({ text }) => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: loadingAnimation,
    })
  }, [])

  return (
    <StyledLoading>
      <div>
        <div className="spinner" ref={container}></div>
        {text && <p>{text}</p>}
      </div>
    </StyledLoading>
  )
}

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.52);

  .spinner {
    width: 3.6rem;
    margin: 0 auto;
  }

  p {
    margin-top: 1.4rem;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    color: #ffffff;
    text-align: center;
  }

  svg + svg {
    display: none;
  }
`

export default Loading
