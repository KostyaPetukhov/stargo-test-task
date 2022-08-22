import React, { useState, useEffect, FC } from 'react';

import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import UsersListService from '../services/UsersListService';
import UserItem from './UserItem';

const useStyles = makeStyles({
	usersList: {
		textAlign: 'center',
		marginTop: '10px !important',
		width: 200,
	},
});

const UsersList: FC = () => {
	const [users, setUsers] = useState<[]>([]);
	const classes = useStyles();

	useEffect(() => {
		getUsers();
	}, []);

	async function getUsers() {
		try {
			const response = await UsersListService.fetchUsersList();
			setUsers(response.data.data);
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className={classes.usersList}>
			<Typography fontSize={24}>Users list</Typography>
			{users.map((item) => (
				<UserItem key={item} id={item} />
			))}
		</div>
	);
};

export default UsersList;
