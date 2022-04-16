import ExpenseItem from "./compoents/expense-item/ExpenseItem";
import NewExpense from "./compoents/new-expense/NewExpense";
import Card from "./compoents/shared/card/Card";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: '2020, 7, 14',
  },
  { id: "e2", title: "New TV", amount: 799.49, date: '2021, 2, 12' },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: '2021, 2, 12',
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: '2021, 5, 12',
  },
];

function App() {
  const buildElements = () => {
    const elements = [];
    expenses.forEach((element) => {
      elements.push(<ExpenseItem key={element.id} expense={element}></ExpenseItem>);
    });
    return elements;
  };
  return (
    <div>
    <NewExpense></NewExpense>
    <Card className="expenses">
      {buildElements()}
    </Card>
    </div>
  );
}

export default App;
