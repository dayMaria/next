import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	TextareaAutosize,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
export default function AddContext() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [open, setOpen] = useState(false);

	const toggle = () => {
		if (submitted) {
			setName("");
			setDescription("");
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
			setDescription("");
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
				<DialogTitle> Añadir contexto</DialogTitle>
				<DialogContent>
					<TextField
						label="Nombre"
						onChange={ev => setName(ev.target.value)}
						required
						value={name}
						style={{ marginBottom: "20px" }}
					/>
					<TextareaAutosize
						style={{
							width: "850px",
							fontFamily: "IBM Plex Sans, sans-serif",
							fontSize: "0.875rem",
							fontWeight: 400,
							lineHeight: 1.5,
							padding: "18px 12px",
							color: "#C7D0DD",
							border: "1px solid",
							borderColor: "#BBC5C8",
							outline: 0,
							color: "black",
							borderRadius: "4px",
						}}
						value={description}
						onChange={ev => setDescription(ev.target.value)}
						maxRows={4}
						aria-label="maximum height"
						placeholder="Descripción"
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
