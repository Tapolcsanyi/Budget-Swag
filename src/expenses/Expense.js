import "./Expense.css"
import { useState } from "react"
import { useHistory } from "react-router"

export const ExpenseCard = ({expense, handleExpenseDelete}) => {
    const history = useHistory();
    return (
        <div className="budgetCard">
            <h3 className="budgetName">{expense.name}</h3>
            <h3 className="budgetName3">${expense.amount}</h3>
            <h3 className="budgetName">{expense.type.name}</h3>

            <div className="budgetButton">
                <button className="budgetButton2" onClick={() => history.push(`/expenses/${expense.id}/edit`)}>Edit</button>
                <button className="budgetButton2" onClick={() => handleExpenseDelete(expense.id)}>Delete</button>
            </div>
        </div>
    )
}

export const SalaryCard = ({user}) => {
    const amntSaved = (user.perSaved / 100) * user.salary
    const balance = user.salary - user.salary * (user.perSaved / 100)
    return (
        <div className="">
            <h1 className="salaryName">Hi, {user.name}!</h1>
            <div className="salaryName2">
                <h2>Here's your monthly budget plan:</h2>
            </div>
                <div className="budgetInfo">
                    <h2>Monthly Salary: ${user.salary}</h2> 
                    <h2>Percent Saved: {user.perSaved}%</h2> 
                    <h2>Amount Saved Monthly: ${amntSaved.toFixed(2)}</h2>
                </div>
        </div>
    )
}