import React from 'react'
import { RoundButton, KakaoShareButton } from '../buttons/Buttons'
import { StyledButtonWrap, StyledCloseButton } from './ModalStyle'
import { ReactComponent as IconClose } from '../../assets/icon_close.svg'
import CopyToClipboard from 'react-copy-to-clipboard'

// 닫기 버튼이 있는 모달
// TODO KAKAO SDK 로드해야 사용 가능 : 수정 필요 (ShareResearchBox 참고)
const ModalShare = ({
  close,
  modalData: { title, desc, researchURL, thumbnailURL, btnCancel },
}) => {
  return (
    <div className="inner">
      <h3>{title}</h3>
      <p>{desc}</p>
      <StyledButtonWrap type="full">
        <CopyToClipboard text={researchURL} onCopy={btnCancel.fn}>
          <RoundButton text="링크복사" />
        </CopyToClipboard>
        <KakaoShareButton
          researchURL={researchURL}
          thumbnailURL={thumbnailURL}
        ></KakaoShareButton>
      </StyledButtonWrap>
      <StyledCloseButton onClick={close}>
        <IconClose></IconClose>
        <span className="hide-txt">닫기</span>
      </StyledCloseButton>
    </div>
  )
}
export default ModalShare
