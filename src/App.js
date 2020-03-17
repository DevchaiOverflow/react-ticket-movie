import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		paddingTop: '50px'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: 'gray'
		}
	},
	screen: {
		color: '#ffff',
		backgroundColor: 'gray',
	},
}))

const App = () => {

	const classes = useStyles()
	const [seat, setSeat] = useState([])
	const [group, setGroup] = useState(['A', 'B', 'C', 'D', 'E'])

	const handleClickSeat = (name) => {

		if (seat.indexOf(`${name}`) !== -1) {

			setSeat(seat.filter(item => item !== name))

		}
		else {

			setSeat(prevState => ([
				...prevState,
				name
			]))

		}

	}

	const handleClickTicket = (e) => {

		if (seat.length > 0) {
			alert('Your ticketn is ' + seat.toString())
		}
		else {
			alert('Please select seat')
		}

		
	}

	const FormScreen = () => {
		return (
			<>
				<Grid item xs={12}>
					<Paper className={`${classes.paper} ${classes.screen}`}>Screen</Paper>
				</Grid>
			</>
		)
	}

	const FormSeat = (group) => {

		const seatComponent = []

		for (let i = 10; i > 0; i--) {

			if (seat.indexOf(`${group.groupList}${i}`) !== -1) {

				seatComponent.push(
					<Grid item xs={1}>
						<Paper className={`${classes.paper}`} onClick={() => handleClickSeat(`${group.groupList}${i}`)} style={{ backgroundColor: 'gray' }}>
							{`${group.groupList}${i}`}
						</Paper>
					</Grid>
				)

			}
			else {

				seatComponent.push(
					<Grid item xs={1}>
						<Paper className={`${classes.paper}`} onClick={() => handleClickSeat(`${group.groupList}${i}`)}>
							{`${group.groupList}${i}`}
						</Paper>
					</Grid>
				)

			}

		}

		return seatComponent
	}

	const RowSeat = () => {

		const rowList = []

		for (let i = 0; i < group.length; i++) {
			rowList.push(
				<Grid container item xs={12} spacing={1} justify="center" alignItems="center">
					<FormSeat groupList={group[i]} />
				</Grid>
			)
		}

		return rowList

	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid container item xs={12}>
						<FormScreen />
					</Grid>

					<Grid container item xs={12} style={{ marginTop: '50px' }} spacing={4}>
						<RowSeat />
					</Grid>

					<Grid container item xs={12} style={{ marginTop: '50px' }} justify="center" alignItems="center">
						<Button variant="contained" color="primary" onClick={handleClickTicket}>
							Get Ticket
      					</Button>
					</Grid>

				</Grid>
			</Container>
		</div>
	)
}

export default App
