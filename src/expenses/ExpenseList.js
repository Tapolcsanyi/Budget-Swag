import React, {useEffect, useReducer, useState} from "react";
import { ExpenseCard, SalaryCard } from "./Expense";
import { getAllExpenses, getAllUsers, addExpense, deleteExpense, getAllTypes } from "../DataManager";
import { useHistory } from "react-router";
import { CheckingBalance } from "./MathFunctions";
import "./Expense.css"

export const ExpenseList = () => {

    const [selected, setSelected] = useState(0);
    const [types, setTypes] = useState([])
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

    const getTypes = () => {
        return getAllTypes().then(res => {
            setTypes(res)
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
            .then (res =>
                console.log(res))
        ))
    }

    const filteredExpenses = expenses.filter(expense => expense.userId === loguser)

    let sum = 0;

    for (let i = 0; i < filteredExpenses.length; i++) {
    sum += parseInt(filteredExpenses[i].amount);
    }

    const finalBalance = balanceAfterSaving - sum

    const handleControlledInputChange = (event) => {
        
        console.log(event.target.value)
        setSelected(event.target.value)
	}

    useEffect(() => {
        getExpenses();
        getUsers();
        getTypes();
    }, [])
    
    return (
        <>
            {user.filter(user => user.id === loguser).map(user =>
                <SalaryCard user={user} key={user.id} />)}

                <div className="budgetInfo2">
                    <h2>CHECKING BALANCE: </h2>
                    <h2 className="salaryChecking">${finalBalance.toFixed(2)}</h2>
                </div>

                <div className="buttons">
                <button className="budgetButton" onClick={() => history.push("/salaryform")}>Edit Salary</button>
                <button className="budgetButton" onClick={() => history.push("/expenseform")}>Add Expense</button>
                <select onChange={handleControlledInputChange}>
                    <option defaultValue value="0">All</option>
                    {types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
                </select>
                </div>

        <div className="budgetCard2">
            <h2 className="budgetName2">Name</h2>
            <h2 className="budgetName2">Cost</h2>
            <h2 className="budgetName2">Type</h2>
            <div className="">
                <h2 className="">Edit</h2>
            </div>
        </div>

            <div className="">
            {filteredExpenses.filter(expense => expense.typeId == selected || selected == 0).map(expense =>
                <ExpenseCard expense={expense} key={expense.id} handleExpenseDelete={handleExpenseDelete} />)}
            </div>
        </>
    )
}