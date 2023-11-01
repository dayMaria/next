import { useState } from "react";
import useToggle from "../hooks/useToggle";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
	TextareaAutosize,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
export default function EditAnalysisUnit({ analysisUnit }) {
	const [name, setName] = useState(analysisUnit.name);
	const [description, setDescription] = useState(analysisUnit.description);
	const [open, toggle] = useToggle();

	return (
		<>
			<IconButton onClick={toggle}>
				<Edit />
			</IconButton>
			<Dialog open={open}>
				<DialogTitle> Editar unidad de análisis</DialogTitle>
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
