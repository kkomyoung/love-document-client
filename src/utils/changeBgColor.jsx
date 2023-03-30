import { useEffect } from 'react'

function changeBgColor(color) {
  useEffect(() => {
    document.querySelector("meta[name='theme-color']").content = color
    document.querySelector('#wrap').style.backgroundColor = color

    return () => {
      document.querySelector("meta[name='theme-color']").content = '#fff'
      document.querySelector('#wrap').style.backgroundColor = ''
    }
  }, [])
}

export default changeBgColor
