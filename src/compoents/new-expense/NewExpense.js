import ExpenseForm from "./expense-form/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const onSaveExpenseDataHnadler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData)
    props.onSaveExpenseData(expenseData);
  }
  return <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHnadler}></ExpenseForm>
  </div>
}

export default NewExpense;