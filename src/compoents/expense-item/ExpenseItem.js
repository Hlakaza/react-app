import Card from "../shared/card/Card";
import ExpenseDate from "../shared/expense-date/ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const expense = props.expense;
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">R{expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
