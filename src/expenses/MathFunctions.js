import { getExpenseByUser } from "../DataManager"

export const CheckingBalance = ({expense, newbalance}) => {
    const loguserId = parseInt(sessionStorage.getItem("budget_user"))
    const userSalary = parseInt(sessionStorage.getItem("budget_salary"))
    const userPerSaved = parseInt(sessionStorage.getItem("budget_saving"))
    const balance = (userSalary - (userSalary * (userPerSaved / 100)))
    
    return (
        <>
        <p>{parseInt(balance - expense)}</p>
        </>
    )
}