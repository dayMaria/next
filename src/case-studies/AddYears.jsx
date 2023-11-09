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
export default function AddYears({ onAdd }) {
	const [year, setYear] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setYear("");
		setOpen(!open);
	};

	const handleSubmit = () => {
		// Aquí puedes realizar acciones adicionales antes de enviar el formulario, si es necesario.
		onAdd(year);
		setYear("");
		setOpen(false);
	};

	const handleClose = () => {
		setYear("");
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={toggle}>
				<Add />
			</IconButton>
			<Dialog open={open} onClose={handleClose}>
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
					<Button disabled={!year} onClick={handleSubmit} variant="contained">
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
