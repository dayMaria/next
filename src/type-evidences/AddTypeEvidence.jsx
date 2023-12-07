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
				<DialogTitle
					style={{
						background: "#0A4551",
						padding: 4.5,
						display: "flex",
						justifyContent: "center",
						color: "#FAFBFC",
					}}
				>
					Añadir tipo de evidencia
				</DialogTitle>
				<DialogContent style={{ marginTop: 20 }}>
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
