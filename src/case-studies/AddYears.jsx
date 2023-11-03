import { Add } from "@mui/icons-material";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	IconButton,
} from "@mui/material";
import useToggle from "../hooks/useToggle";
import { useState } from "react";
export default function AddYears() {
	const [year, setYear] = useState("");
	const [open, toggle] = useToggle();

	return (
		<>
			<IconButton onClick={toggle}>
				<Add />
			</IconButton>
			<Dialog open={open}>
				<DialogTitle>Añadir año</DialogTitle>
				<DialogContent>
					<TextField
						label="Año"
						required
						onChange={ev => setYear(ev.target.value)}
						value={year}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle}>Cancelar</Button>
					<Button disabled={!year} onClick={toggle} variant="contained">
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
