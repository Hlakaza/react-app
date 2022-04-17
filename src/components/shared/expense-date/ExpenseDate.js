import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  console.log('Date object',props.date);
  const dateValue = new Date(props.date);
  const date = {
    month:  dateValue.toLocaleString('en-Us', {month: 'long'}),
    day:  dateValue.toLocaleString('en-Us', {day: '2-digit'}),
    year:  dateValue.getFullYear()
  }
    return (
      <div className="expense-date">
      <div className="expense-date__day"> {date.day}</div>
      <div className="expense-date__month"> {date.month}</div>
      <div className="expense-date__year"> {date.year}</div>
     </div>
    )
}

export default ExpenseDate;