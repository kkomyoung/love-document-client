import React from 'react'
import { CircleButton } from '../buttons/buttons'

function Header() {
  return (
    <div>
      <CircleButton title="뒤로가기"></CircleButton>
      <CircleButton title="삭제하기"></CircleButton>
      <CircleButton title="닫기"></CircleButton>
    </div>
  )
}

export default Header
