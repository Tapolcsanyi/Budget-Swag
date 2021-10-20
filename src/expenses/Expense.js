export const ExpenseCard = ({expense}) => {
    return (
        <>
            <h2>{expense.name}</h2>
            <h3>{expense.amount}</h3>
            <h3>{expense.user.name}</h3>
        </>
    )
}

export const SalaryCard = ({user}) => {
    return (
        <>
            <h1>hi</h1>
            <h2>{user.name}</h2>
            <h2>{user.salary}</h2>
        </>
    )
}