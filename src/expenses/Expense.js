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

    const newPercent = user.perSaved * 100

    return (
        <>
            <h1>hi, {user.name}</h1>
            <h2>Salary: ${user.salary}, Percent Saved: {newPercent}%</h2>
            <button>Edit Salary</button>
        </>
    )
}