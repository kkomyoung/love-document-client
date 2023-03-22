import { useEffect } from 'react'

function changeBgColor(color) {
  useEffect(() => {
    document.querySelector('#wrap').style.backgroundColor = color

    return () => {
      document.querySelector('#wrap').style.backgroundColor = ''
    }
  }, [])
}

export default changeBgColor
