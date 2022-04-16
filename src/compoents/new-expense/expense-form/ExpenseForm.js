import React, { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
  const [enteredTitle, setEnterdTitle] = useState('');
  const [enteredAmount, setEnterdAmount] = useState('');
  const [enteredDate, setEnterdDate] = useState('');
   const titleChangeHandler = (event) => {
     setEnterdTitle(event.target.value);
   }
   const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
   }
   const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
   }
  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input onChange={titleChangeHandler} type="text" />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input onChange={dateChangeHandler} type="date" min="2019-01-01" step="2022-12-31" />
      </div>
    </div>
    <div className="new-expense__actions">
      <button>Add expense</button>
    </div>
  </form>
}

export default ExpenseForm;