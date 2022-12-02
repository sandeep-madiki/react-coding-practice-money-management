import './index.css'

const MoneyDetails = props => {
  const {transactionDetails} = props
  const {availableBalance, totalIncome, totalExpenses} = transactionDetails
  return (
    <div className="main-container">
      <div className="available-bal-container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="heading">Your Balance</p>
          <p className="balance">{`Rs ${availableBalance}`}</p>
        </div>
      </div>
      <div className="available-bal-container income-container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="heading">Your Income</p>
          <p className="balance">{`Rs ${totalIncome}`}</p>
        </div>
      </div>
      <div className="available-bal-container expenses-container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="heading">Your Expenses</p>
          <p className="balance">{`Rs ${totalExpenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
