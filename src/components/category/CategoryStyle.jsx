import styled from 'styled-components'
import IconHeart from '../../assets/icon_heart.svg'
import IconPlus from '../../assets/icon_plus.svg'

const Item = styled.li`
  display: inline-flex;
  margin: 0.3rem;

  input {
    display: none;
  }

  input + label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 4.4rem;
    padding: 0 1.2rem 0 1.5rem;
    background: ${(props) => props.theme.bgColor};
    border-radius: 2.2rem;
    font-size: 1.4rem;
    border: 1px solid ${(props) => props.theme.gray300};
    color: ${(props) => props.theme.gray900};
    letter-spacing: -0.04rem;
    cursor: pointer;
  }

  input:checked + label {
    border: 1px solid ${(props) => props.theme.pink700};

    i {
      background-image: url(${IconHeart});
    }
  }

  i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.8rem;
    background-image: url(${IconPlus});
    background-size: 16px 16px;
  }
`

const ItemList = styled.ul`
  margin: -0.3rem;
`

const Box = styled.div`
  background: ${(props) => props.theme.gray100};
  padding: 2rem 2rem 2.8rem;
  border-radius: 0.8rem;

  & + & {
    margin-top: 2.8rem;
  }

  strong {
    display: inline-flex;
    align-items: center;
    height: 3rem;
    padding: 0 1.2rem;
    font-size: 1.4rem;
    border-radius: 2.6rem;
    margin-bottom: 1.6rem;
    color: ${(props) => props.theme.pink700};
    background: ${(props) => props.theme.pink300};

    i {
      margin-right: 0.3rem;
      font-size: 1.2rem;
    }
  }
`

export { Item, ItemList, Box }
