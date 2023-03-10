import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import lottie from 'lottie-web'
import heartAnimation from '../../assets/lottie/heart.json'
import homeAnimation from '../../assets/lottie/home.json'
import magnifierAnimation from '../../assets/lottie/magnifier.json'
import mainAnimation from '../../assets/lottie/main.json'
import puzzleAnimation from '../../assets/lottie/puzzle.json'

const Lottie = ({ margin, data }) => {
  const container = useRef(null)

  const animationMapping = {
    heart: heartAnimation,
    home: homeAnimation,
    magnifier: magnifierAnimation,
    main: mainAnimation,
    puzzle: puzzleAnimation,
  }

  const animationData = animationMapping[data]

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData,
    })
  }, [])

  return (
    <StyledLottieArea
      ref={container}
      data={data}
      margin={margin}
    ></StyledLottieArea>
  )
}
const StyledLottieArea = styled.figure`
  margin: ${(props) => props.margin};

  // json은 나중에 삭제
  svg + svg {
    display: none;
  }
`
export default Lottie
