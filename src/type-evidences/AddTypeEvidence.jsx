import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
export default function AddTypeEvidence() {
	const [name, setName] = useState("");
	const [open, setOpen] = useState(false);
	const [mutateAsync, loading] = useAddContext();

	const toggle = () => {
		if (submitted) {
			setName("");
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
			setSubmitted(false);
		}
		setOpen(false);
	};

	return (
		<>
			<Button startIcon={<Add />} variant="contained" onClick={toggle}>
				Add
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle> Añadir tipo de evidencia</DialogTitle>
				<DialogContent>
					<TextField
						label="Nombre"
						onChange={ev => setName(ev.target.value)}
						required
						value={name}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle}>Cancelar</Button>
					<Button disabled={!name} onClick={handleSubmit} variant="contained">
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
