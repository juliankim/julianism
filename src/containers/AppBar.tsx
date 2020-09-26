import React from "react";
import { AppBar as MuiAppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})
);

export default function AppBar() {
	const classes = useStyles();
	const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

	return (
		<div className={classes.root}>
			<MuiAppBar color="secondary" position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						JULIAN KIM
					</Typography>
					<Button color="inherit" href="#home">
						HOME
					</Button>
					<Button color="inherit" href="#about">
						ABOUT
					</Button>
					<Button color="inherit" href="#skills">
						SKILLS
					</Button>
					<Button color="inherit" href="#contact">
						CONTACT
					</Button>
				</Toolbar>
			</MuiAppBar>
		</div>
	);
}
