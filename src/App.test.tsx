import React from 'react';
import { render, screen } from '@testing-library/react';

import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';
import UserItem from './components/UserItem';

test('render list element', () => {
	render(<UsersList />);
	const list = screen.getByText(/Users list/i);
	expect(list).toBeInTheDocument();
});

test('render users from api', async () => {
  render(<UserItem id='123' />);
  const user = await screen.findByTestId('user-item')
  expect(user).toBeInTheDocument();
})

const user = {
  id: '123',
  firstName: 'John',
  lastName: 'Smith',
  age: 15,
  gender: 'male',
  country: 'Ukraine'
} 

test('render user profile', () => {
	render(<UserProfile user={user} open={true} setOpen={() => false}/>);
  const dialog =  screen.getByRole('dialog')
  expect(dialog).toBeInTheDocument();
});