import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

// const transactionTypeOptions = [
//   {
//     optionId: 'INCOME',
//     displayText: 'Income',
//   },
//   {
//     optionId: 'EXPENSES',
//     displayText: 'Expenses',
//   },
// ]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    transactions: [],
    availableBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  addTransaction = event => {
    event.preventDefault()
    const {
      title,
      amount,
      type,
      availableBalance,
      totalIncome,
      totalExpenses,
    } = this.state
    if (type === 'Income') {
      this.state.availableBalance =
        parseInt(availableBalance) + parseInt(amount)
      this.state.totalIncome = parseInt(totalIncome) + parseInt(amount)
    }
    if (type !== 'Income') {
      this.state.availableBalance =
        parseInt(availableBalance) - parseInt(amount)
      this.state.totalExpenses = parseInt(totalExpenses) + parseInt(amount)
    }
    if (title !== '' && amount !== '') {
      const newTransaction = {
        id: uuidV4(),
        title,
        amount,
        type,
      }
      this.setState(prev => ({
        transactions: [...prev.transactions, newTransaction],
        title: '',
        amount: '',
      }))
    }
  }

  getTransactionCategory = event => {
    this.setState({type: event.target.value})
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  onDeleteHistoryItem = id => {
    const {transactions} = this.state
    this.setState({
      transactions: transactions.filter(each => each.id !== id),
    })
  }

  render() {
    const {
      title,
      amount,
      transactions,
      availableBalance,
      totalIncome,
      totalExpenses,
    } = this.state
    const updateDetails = {
      availableBalance,
      totalIncome,
      totalExpenses,
    }

    return (
      <div className="main-bg-container">
        <div className="user-name-bg-img">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="welcome-msg">
            Welcome back to your{' '}
            <span className="welcome-msg-span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails transactionDetails={updateDetails} />
        <div className="transaction-history-container">
          <div className="transaction-container">
            <form onSubmit={this.addTransaction} className="container">
              <h1 className="add-transaction">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <br />
              <input
                placeholder="TITLE"
                className="input"
                type="text"
                id="title"
                onChange={this.getTitle}
                value={title}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <br />
              <input
                placeholder="AMOUNT"
                className="input"
                type="number"
                id="amount"
                onChange={this.getAmount}
                value={amount}
              />
              <label htmlFor="cars" className="label">
                TYPE
              </label>
              <br />
              <select
                onChange={this.getTransactionCategory}
                className="input"
                name="Type"
                id="cars"
              >
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
              <br />
              <button type="submit" className="add-transaction-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="add-transaction">History</h1>
            <hr className="h-line" />
            <div className="row-heading">
              <hr className="left-line-v" />
              <div className="row-flex">
                <h3 className="title">Title</h3>
                <h3 className="amount">Amount</h3>
                <h3 className="type">Type</h3>
                <h4> </h4>
              </div>
              <hr className="right-line-v" />
            </div>
            <hr className="h-line-b" />
            <ul className="history-items">
              {transactions.map(each => (
                <TransactionItem
                  details={each}
                  key={each.id}
                  deleteItemFunc={this.onDeleteHistoryItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
