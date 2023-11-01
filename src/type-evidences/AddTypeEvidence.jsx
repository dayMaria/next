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
export default function AddTypeEvidence() {
	const [name, setName] = useState("");
	const [open, toggle] = useToggle();

	return (
		<>
			<Button startIcon={<Add />} variant="contained" onClick={toggle}>
				Add
			</Button>
			<Dialog open={open}>
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
					<Button disabled={!name} onClick={toggle} variant="contained">
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
