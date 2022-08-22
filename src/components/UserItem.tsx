import React, { useState, useEffect, FC } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';

import UserService from '../services/UserService';
import { IUser } from '../models/IUser';
import UserProfile from './UserProfile';

interface UserItemProps {
	id: string;
}

const UserItem: FC<UserItemProps> = ({ id }) => {
	const [user, setUser] = useState<IUser>();
	const [openProfile, setOpenProfile] = useState<boolean>(false);

	useEffect(() => {
		getUser();
	}, []);

	async function getUser() {
		try {
			const response = await UserService.fetchUser(id);
			if (response.data.status === 'success') {
				setUser(response.data.data);
			}
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div>
			{user && (
				<>
					<ListItem disablePadding>
						<ListItemButton onClick={() => setOpenProfile(true)}>
							<ListItemIcon>
								<PersonIcon fontSize='large' />
							</ListItemIcon>
							<ListItemText primary={user.firstName} />
						</ListItemButton>
					</ListItem>
					<UserProfile
						user={user}
						open={openProfile}
						setOpen={setOpenProfile}
					/>
				</>
			)}
		</div>
	);
};

export default UserItem;
