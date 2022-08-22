import React, { FC } from 'react';
import { IUser } from '../models/IUser';

import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
	dialogTitle: {
		textAlign: 'center',
		fontSize: '28px !important',
		marginTop: '10px !important',
	},
	closeIcon: {
		position: 'absolute',
		left: '80%',
		top: '0.5%',
		color: 'inherit',
	},
});

interface UserProfileProps {
	user: IUser;
	open: boolean;
	setOpen: (open: boolean) => void;
}
const UserProfile: FC<UserProfileProps> = ({ user, open, setOpen }) => {
	const classes = useStyles();

	const handleCloseModal = () => setOpen(false);

	return (
		<div>
			<Dialog open={open} onClose={handleCloseModal}>
				<Box className={classes.closeIcon}>
					<IconButton onClick={handleCloseModal}>
						<CloseIcon />
					</IconButton>
				</Box>
				<DialogTitle>
					<Typography className={classes.dialogTitle}>
						Profile
					</Typography>
				</DialogTitle>
				<DialogContent>
					<Typography fontSize={18} padding={0.5}>
						First name: {user.firstName}
					</Typography>
					<Typography fontSize={18} padding={0.5}>
						Last name: {user.lastName}
					</Typography>
					<Typography fontSize={18} padding={0.5}>
						Gender: {user.gender}
					</Typography>
					<Typography fontSize={18} padding={0.5}>
						Country: {user.country}
					</Typography>
					<Typography fontSize={18} padding={0.5}>
						Age: {user.age}
					</Typography>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default UserProfile;
