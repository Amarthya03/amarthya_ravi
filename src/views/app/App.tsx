import { BrowserRouter } from "react-router-dom";
import React from "react";
// import Navbar from "../shared/components/Navbar";
import Router from "./Router";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.scss";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: "Fira Code",
		},
	});

	return (
		<div>
			<ThemeProvider theme={theme}>
				{/* <Navbar /> */}
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
