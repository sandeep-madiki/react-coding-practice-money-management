import './index.css'

const TransactionItem = props => {
  const {details, deleteItemFunc} = props
  const {id, title, amount, type} = details
  const callDelFunc = () => {
    deleteItemFunc(id)
  }

  return (
    <li>
      <div className="history-item-alignment">
        <hr className="h-left-line-v" />
        <div className="history-item-container">
          <p>{title}</p>
          <p>{amount}</p>
          <p>{type}</p>
          <button type="button" className="delete-btn" onClick={callDelFunc}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
        <hr className="h-right-line-v" />
      </div>
      <hr className="h-item-line-bottom" />
    </li>
  )
}

export default TransactionItem
