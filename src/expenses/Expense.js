import "./Expense.css"
import { useState } from "react"

export const ExpenseCard = ({expense, handleExpenseDelete}) => {
    return (
        <div className="budgetCard">
            <h2 className="budgetLabel">{expense.name}</h2>
            <div className="budgetInfo">
                <h3>cost: ${expense.amount}</h3>
                <button className="budgetButton" onClick={() => handleExpenseDelete(expense.id)}>delete expense</button>
            </div>
        </div>
    )
}

export const SalaryCard = ({user}) => {
    const amntSaved = (user.perSaved / 100) * user.salary
    const balance = user.salary - user.salary * (user.perSaved / 100)
    return (
        <div className="budgetCard">
            <h1 className="budgetLabel">hi, {user.name}</h1>
            <div className="budgetInfo">
                <h2>Here's your monthly budget plan:</h2>
                <h2>Salary: ${user.salary}, Percent Saved: {user.perSaved}%, Amount Saved: ${amntSaved.toFixed(2)}</h2>
                <h2>CHECKING BALANCE: ${balance.toFixed(2)}</h2>
            </div>
        </div>
    )
}