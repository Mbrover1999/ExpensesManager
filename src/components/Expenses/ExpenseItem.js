import React, { useState } from "react";
import "./ExpenseItem.css"
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title);
    const amount = props.amount
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{amount}$</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
