import { Info } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Result({ color, description, label }) {
	return (
		<div className="flex flex-col items-center justify-center space-y-4">
			<Info color={color} sx={{ fontSize: "3rem" }} />
			<Typography align="center" variant="h5">{label}</Typography>
			<Typography align="center" variant="body1">{description}</Typography>
		</div>
	);
}