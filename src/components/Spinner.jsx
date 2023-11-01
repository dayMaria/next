import { CircularProgress, Typography } from "@mui/material";

function Spinner() {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 md:space-y-2">
			<CircularProgress />
			<Typography variant="body1">Cargando datos</Typography>
		</div>
	);
}

export default Spinner;