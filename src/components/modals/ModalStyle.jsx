import styled from 'styled-components'

const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;

  .modal {
    background: #fff;
    width: 100%;
    border-radius: 1.6rem;
    text-align: center;

    .inner {
      position: relative;
      padding: 3.6rem 1.6rem 3.2rem;
    }
  }

  h3 {
    ${(props) => props.theme.fontSize.h3_m}
  }

  p {
    margin-top: 1.6rem;
    ${(props) => props.theme.fontSize.b1}
  }

  @media (min-width: 500px) {
    .modal {
      max-width: calc(360px - 4rem);
    }
  }
`

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  button + button {
    margin-left: 0.8rem;
  }

  ${(props) => {
    if (props.type === 'full') {
      return `
      button {flex: 1}
    `
    }
  }}
`

const StyledCloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  /* width: 2.4rem;
height: 2.4rem; */
  padding: 1.6rem;
`
export { StyledModal, StyledButtonWrap, StyledCloseButton }
