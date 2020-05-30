const getExpensesTotal = (expenses) => {
    return expenses.map(x => x.amount).reduce((acc, cur) => acc + cur, 0);
}

export default getExpensesTotal;