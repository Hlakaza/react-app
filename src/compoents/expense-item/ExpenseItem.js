import Card from "../shared/card/Card";
import ExpenseDate from "../shared/expense-date/ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";

const  ExpenseItem = (props) => {

  const [expense, setExpense] = useState(props.expense);

  const clickHandler = () => {
    console.log('Clicked');
    setExpense({...expense, title: expense.title + ' !Updated'});
    console.log('expense.title', expense)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">R{expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
