import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        Viewing {props.expenses.length}
        {props.expenses.length === 1 ? ' expense ' : ' expenses '}
        totalling {numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);