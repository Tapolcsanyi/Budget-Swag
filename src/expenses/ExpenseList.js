import React, {useEffect, useReducer, useState} from "react";
import { ExpenseCard, SalaryCard } from "./Expense";
import { getAllExpenses, getAllUsers } from "../DataManager";

export const ExpenseList = () => {
    const loguser = parseInt(sessionStorage.getItem("budget_user"))
    const [expenses, setExpenses] = useState ([])
    const [user, setUsers] = useState([])

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

    useEffect(() => {
        getExpenses();
        getUsers();
    }, [])
    return (
        <>
            {user.filter(user => user.id === loguser).map(user =>
                <SalaryCard user={user} key={user.id} />)}
            {expenses.filter(expense => expense.user.id === loguser).map(expense =>
                <ExpenseCard expense={expense} key={expense.id} />)}
        </>
    )
}