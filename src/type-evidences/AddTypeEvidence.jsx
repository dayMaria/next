import {
	Button,
	IconButton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import useAddTypeEvidence from "./useAddTypeEvidence";
export default function AddTypeEvidence() {
	const [name, setName] = useState("");
	const [open, setOpen] = useState(false);
	const [mutateAsync, loading] = useAddTypeEvidence();

	const handleSubmit = () => {
		// Aquí puedes realizar acciones adicionales antes de enviar el formulario, si es necesario.
		mutateAsync({ name }).then(() => {
			setName("");
			setOpen(false);
		});
	};

	const handleClose = () => {
		setName("");
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={() => setOpen(true)}>
				<Add />
			</IconButton>
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
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
					<Button onClick={handleClose}>Cancelar</Button>
					<Button
						disabled={!name || loading}
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
