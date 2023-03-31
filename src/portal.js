import ReactDOM from 'react-dom'

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup')
  return ReactDOM.createPortal(children, el)
}

export default PopupPortal
