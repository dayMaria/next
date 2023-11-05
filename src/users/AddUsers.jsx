import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import useToggle from "../hooks/useToggle";
import { useState } from "react";
export default function AddUsers() {
	const [name, setName] = useState("");
	const [passport, setPassport] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [open, setOpen] = useState(false);

	const toggle = () => {
		if (submitted) {
			setName("");
			setPassport("");
			setSubmitted(false);
		}
		setOpen(!open);
	};

	const handleSubmit = () => {
		// Aquí puedes realizar acciones adicionales antes de enviar el formulario, si es necesario.
		setSubmitted(true);
		setOpen(false);
	};

	const handleClose = () => {
		if (submitted) {
			setName("");
			setPassport("");
			setSubmitted(false);
		}
		setOpen(false);
	};

	return (
		<>
			<Button startIcon={<Add />} variant="contained" onClick={toggle}>
				Añadir
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle> Añadir usuario</DialogTitle>
				<DialogContent>
					<TextField
						label="Nombre de usuario"
						onChange={ev => setName(ev.target.value)}
						required
						value={name}
						style={{ marginBottom: "20px" }}
					/>
					<TextField
						label="Contraseña"
						type="password"
						onChange={ev => setPassport(ev.target.value)}
						required
						value={passport}
						style={{ marginBottom: "20px" }}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle}>Cancelar</Button>
					<Button
						disabled={!passport || !name}
						onClick={handleSubmit}
						variant="contained"
					>
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
