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
} from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function EditTypeEvidence({ typeEvidence }) {
	const [name, setName] = useState(typeEvidence.name);
	const [open, toggle] = useToggle();

	return (
		<>
			<IconButton onClick={toggle}>
				<Edit />
			</IconButton>
			<Dialog open={open}>
				<DialogTitle>Editar tipo de evidencia</DialogTitle>
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
					<Button disabled={!name} onClick={toggle} variant="contained">
						Editar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
