import React, { useState } from 'react';
import ExpenseItem from './components/expense-item/ExpenseItem';
import NewExpense from './components/new-expense/NewExpense';
import Card from './components/shared/card/Card';
import ExpensesFilter from './components/shared/expense-filter/ExpensesFilter';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: '2020, 7, 14',
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: '2021, 2, 12' },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: '2021, 2, 12',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: '2021, 5, 12',
  },
];

const App = () => {
  const [expenseList, setExpenseList] = useState(expenses);
  const [filterValue, setFilterValue] = useState('2019');

  const onSaveExpenseDataHandler = (expenseData) => {
    setExpenseList([...expenseList, expenseData]);
  };

  const onChangeFilterHandler = (filterValue) => {
    setFilterValue(filterValue);
  };

  return (
    <div className="expenses">
      <ExpensesFilter selected={filterValue} onChangeFilter={onChangeFilterHandler}></ExpensesFilter>
      <NewExpense onSaveExpenseData={onSaveExpenseDataHandler}></NewExpense>
      <Card className="expenses">
        {expenseList.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default App;
