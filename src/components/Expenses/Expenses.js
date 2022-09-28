import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const expenses = props.expenses
    const [filteredYear, setFilteredYear] = useState("2022");
    const selectYearListener = (year) => {
        setFilteredYear(year);
    };
    console.log(filteredYear);
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;

    });


    return (

        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onSelectYear={selectYearListener}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}></ExpensesList>
    </Card>
        );


}

export default Expenses
