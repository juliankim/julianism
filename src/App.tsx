import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import AppBar from "./containers/AppBar";

export default function App() {
	return (
		<Fragment>
			<AppBar />
			<Button variant="contained" color="primary">
				Primary
			</Button>
		</Fragment>
	);
}
