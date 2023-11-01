import { Typography } from "@mui/material";
import { Component } from "react";

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		};
	}

	static getDerivedStateFromError(error) {
		return { error };
	}

	componentDidCatch(error, info) {
		console.error(error);
    if(process.env.NODE_ENV === "development") {
      const url = "https://stackoverflow.com/search?q=" + error.message
      window.open(url)
    }
	}

	render() {
		const { error } = this.state;
		const { children } = this.props;

		if (error)
			return (
				<>
					<Typography variant="h4">
						Ha ocurrido un error inesperado. Por favor, acuda al Departamento de
						Soporte
					</Typography>
					<Typography color="error" variant="h6">{error.message}</Typography>
				</>
			);

		return children;
	}
}
