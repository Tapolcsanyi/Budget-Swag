import { useHistory } from "react-router"


export const ExpenseCard = ({expense, handleExpenseDelete}) => {
    return (
        <>
            <h2>{expense.name}</h2>
            <h3>cost: ${expense.amount}</h3>
            <button onClick={() => handleExpenseDelete(expense.id)}>delete expense</button>
        </>
    )
}

export const SalaryCard = ({user}) => {

    return (
        <>
            <h1>hi, {user.name}</h1>
            <h2>Salary: ${user.salary}, Percent Saved: {user.perSaved}%</h2>
        </>
    )
}