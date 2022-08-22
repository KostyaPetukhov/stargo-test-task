import React from 'react';

import UsersList from './components/UsersList';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	App: {
		display: 'flex',
		justifyContent: 'center',
	},
});

function App() {
	const classes = useStyles();

	return (
		<div className={classes.App}>
			<UsersList />
		</div>
	);
}

export default App;
