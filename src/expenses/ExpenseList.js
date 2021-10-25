import React, {useEffect, useReducer, useState} from "react";
import { ExpenseCard, SalaryCard } from "./Expense";
import { getAllExpenses, getAllUsers, addExpense, deleteExpense } from "../DataManager";
import { useHistory } from "react-router";
import { CheckingBalance } from "./MathFunctions";
import "./Expense.css"

export const ExpenseList = () => {
    const loguser = parseInt(sessionStorage.getItem("budget_user"))
    const [expenses, setExpenses] = useState ([])
    const [user, setUsers] = useState([])
    const [salary, setSalary] = useState([])
    const [saved, setSaved] = useState([])
    const history = useHistory();
    const userSalary = parseInt(sessionStorage.getItem("budget_salary"))
    const userPerSaved = parseInt(sessionStorage.getItem("budget_saving"))

    let balanceAfterSaving = userSalary - (userSalary * (userPerSaved / 100))

    const getExpenses = () => {
        return getAllExpenses().then(res => {
            setExpenses(res)
        })
    }

    const getUsers = () => {
        return getAllUsers().then(res => {
            setUsers(res)
        })
    }

    const handleExpenseDelete = (expId) => {
        deleteExpense(expId).then(res => (
            getExpenses()
        ))
    }

    const filteredExpenses = expenses.filter(expense => expense.user.id === loguser)

    let sum = 0;

    for (let i = 0; i < filteredExpenses.length; i++) {
    sum += parseInt(filteredExpenses[i].amount);
    }

    const finalBalance = balanceAfterSaving - sum

    useEffect(() => {
        getExpenses();
        getUsers();
    }, [])
    return (
        <>
            {user.filter(user => user.id === loguser).map(user =>
                <SalaryCard user={user} key={user.id} />)}
                <h2 className="budgetInfo">CHECKING BALANCE: ${finalBalance.toFixed(2)}</h2>

                <div className="buttons">

                <button className="Salarybutton" onClick={() => history.push("/salaryform")}>Edit Salary</button>
                <button className="Salarybutton" onClick={() => history.push("/expenseform")}>Add Expense</button>
                
                </div>

            {expenses.filter(expense => expense.user.id === loguser).map(expense =>
                <ExpenseCard expense={expense} key={expense.id} handleExpenseDelete={handleExpenseDelete} />)}
        </>
    )
}