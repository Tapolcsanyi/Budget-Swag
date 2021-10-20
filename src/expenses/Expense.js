export const ExpenseCard = ({expense}) => {
    return (
        <>
            <h1>BRUH</h1>
            <h2>{expense.name}</h2>
            <h2>{expense.amount}</h2>
            <h2>{expense.user.name}</h2>
        </>
    )
}