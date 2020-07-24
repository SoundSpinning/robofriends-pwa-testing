import { shallow } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
	const mockColor = 'crimson';
	expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
	const mockColor = 'crimson';
	const wrapper = shallow(<CounterButton color={mockColor} />);

	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2 });
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3 });
	wrapper.find('[id="counter"]').simulate('keypress');
	expect(wrapper.state()).toEqual({ count: 3 });
	expect(wrapper.props().color).toEqual('crimson');
})