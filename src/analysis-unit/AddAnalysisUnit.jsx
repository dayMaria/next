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
import useToggle from "../hooks/useToggle";
import { useState } from "react";
export default function AddAnalysisUnit() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [open, toggle] = useToggle();

	return (
		<>
			<Button startIcon={<Add />} variant="contained" onClick={toggle}>
				Añadir
			</Button>
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
					<Button onClick={toggle}>Cancelar</Button>
					<Button disabled={!name} onClick={toggle} variant="contained">
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
