import ExpenseForm from "./expense-form/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return <div className="new-expense">
      <ExpenseForm></ExpenseForm>
  </div>
}

export default NewExpense;