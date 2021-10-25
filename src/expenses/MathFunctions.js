import { getExpenseByUser } from "../DataManager"

export const CheckingBalance = ({expense}) => {
    const loguserId = parseInt(sessionStorage.getItem("budget_user"))
    const userSalary = parseInt(sessionStorage.getItem("budget_salary"))
    const userPerSaved = parseInt(sessionStorage.getItem("budget_saving"))
    const balbal = (userSalary - (userSalary * (userPerSaved / 100)))

    const array = [1, 2, 3, 4];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }
    console.log(sum);
    
    return parseInt(0 - expense)
}