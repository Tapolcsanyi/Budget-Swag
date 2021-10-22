import React, {useEffect, useReducer, useState} from "react";
import { ExpenseCard, SalaryCard } from "./Expense";
import { getAllExpenses, getAllUsers, addExpense, deleteExpense } from "../DataManager";
import { useHistory } from "react-router";

export const ExpenseList = () => {
    const loguser = parseInt(sessionStorage.getItem("budget_user"))
    const [expenses, setExpenses] = useState ([])
    const [user, setUsers] = useState([])
    const history = useHistory();
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
    
    useEffect(() => {
        getExpenses();
        getUsers();
    }, [])
    return (
        <>
            {user.filter(user => user.id === loguser).map(user =>
                <SalaryCard user={user} key={user.id} />)}

                <button onClick={() => history.push("/salaryform")}>Edit Salary</button>
                <button onClick={() => history.push("/expenseform")}>Add Expense</button>

            {expenses.filter(expense => expense.user.id === loguser).map(expense =>
                <ExpenseCard expense={expense} key={expense.id} handleExpenseDelete={handleExpenseDelete} />)}
        </>
    )
}