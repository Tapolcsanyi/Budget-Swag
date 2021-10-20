import React, {useEffect, useState} from "react";
import { ExpenseCard } from "./Expense";
import { getAllExpenses } from "../DataManager";

export const ExpenseList = () => {
    const loguser = parseInt(sessionStorage.getItem("budget_user"))
    const [expenses, setExpenses] = useState ([])

    const getExpenses = () => {
        return getAllExpenses().then(res => {
            setExpenses(res)
        })
    }

    useEffect(() => {
        getExpenses();
    }, [])
    return (
        <>
            {expenses.filter(expense => expense.user.id === loguser).map(expense =>
                <ExpenseCard expense={expense} key={expense.id} />)}
        </>
    )
}