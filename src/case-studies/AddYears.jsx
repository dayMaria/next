import { Add } from "@mui/icons-material";
import {
	Alert,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	IconButton,
	Snackbar,
} from "@mui/material";
import { useState } from "react";
export default function AddYears({ onAdd, yearDate, yearDateEnd }) {
	const [year, setYear] = useState("");
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const toggle = () => {
		setYear("");
		setOpen(!open);
	};

	const handleSubmit = () => {
		if (year.length !== 4) {
			setError(true);
			setErrorMessage("El año debe contener 4 dígitos");
		} else if (parseInt(year) < yearDate) {
			setError(true);
			setErrorMessage(`El año debe ser mayor o igual a ${yearDate}`);
		} else if (yearDateEnd && parseInt(year) > yearDateEnd) {
			setError(true);
			setErrorMessage(`El año debe estar entre ${yearDate} y ${yearDateEnd}`);
		} else {
			onAdd(year);
			setYear("");
			setOpen(false);
		}
	};

	const handleClose = () => {
		setYear("");
		setOpen(false);
	};

	const handleSnackbarClose = () => {
		setError(false);
		setErrorMessage("");
	};

	return (
		<>
			<IconButton onClick={toggle}>
				<Add />
			</IconButton>
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
				<DialogTitle>Añadir año</DialogTitle>
				<DialogContent>
					<TextField
						label="Año"
						required
						onChange={ev => setYear(ev.target.value)}
						value={year}
						type="number"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle}>Cancelar</Button>
					<Button
						disabled={!year || error}
						onClick={handleSubmit}
						variant="contained"
					>
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				open={error}
				autoHideDuration={3000}
				onClose={handleSnackbarClose}
			>
				<Alert severity="error">{errorMessage}</Alert>
			</Snackbar>
		</>
	);
}
