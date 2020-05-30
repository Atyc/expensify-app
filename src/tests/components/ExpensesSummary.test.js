import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expense summary component correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={123456789} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense summary component correctly with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});
