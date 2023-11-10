import {
	Button,
	IconButton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	TextareaAutosize,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import useAddAnalysisUnit from "./useAddAnalysisUnit";
export default function AddAnalysisUnit() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [open, setOpen] = useState(false);
	const [mutateAsync, loading] = useAddAnalysisUnit();

	const handleSubmit = () => {
		// Aquí puedes realizar acciones adicionales antes de enviar el formulario, si es necesario.
		mutateAsync({ name, description }).then(() => {
			setName("");
			setDescription("");
			setOpen(false);
		});
	};

	const handleClose = () => {
		setName("");
		setDescription("");
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={() => setOpen(true)}>
				<Add />
			</IconButton>
			<Dialog open={open}>
				<DialogTitle> Añadir unidades de análisis</DialogTitle>
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
