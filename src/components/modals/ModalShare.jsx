import React from 'react'
import { RoundButton, KakaoButton } from '../buttons/Buttons'
import { StyledButtonWrap, StyledCloseButton } from './ModalStyle'
import { ReactComponent as IconClose } from '../../assets/icon_close.svg'

// 닫기 버튼이 있는 모달
const ModalShare = ({ close, modalData: { title, desc } }) => {
  return (
    <div className="inner">
      <h3>{title}</h3>
      <p>{desc}</p>
      <StyledButtonWrap type="full">
        <RoundButton
          text="내용 복사"
          onClick={() => console.log('내용복사!!!')}
        ></RoundButton>
        <KakaoButton
          text="카톡공유"
          onClick={() => console.log('카톡공유!!!')}
        ></KakaoButton>
      </StyledButtonWrap>
      <StyledCloseButton onClick={close}>
        <IconClose></IconClose>
        <span className="hide-txt">닫기</span>
      </StyledCloseButton>
    </div>
  )
}
export default ModalShare
