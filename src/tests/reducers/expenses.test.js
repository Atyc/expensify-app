import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { editExpense } from '../../actions/expenses';

test('should set default state ', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'New',
        note: 'N',
        amount: 105,
        createdAt: 1
    };
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: newExpense });
    // expect(state[3]).toEqual(newExpense);
    expect(state).toEqual([...expenses, newExpense])
});

test('should edit an expense', () => {
    const newDescription = 'something else';
    const updates = {
        description: newDescription
    }
    const state = expensesReducer(expenses, { id: '2', type: 'EDIT_EXPENSE', updates: updates });
    expect(state[1].description).toBe(newDescription);
})

test('should not edit expense if id not found', () => {
    const state = expensesReducer(expenses, { id: '-1', type: 'EDIT_EXPENSE', updates: {description: 'new'} });
    expect(state).toEqual(expenses);

})