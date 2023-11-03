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
export default function EditUsers({ users }) {
	const [passport, setPassport] = useState(users.passport);
	const [open, toggle] = useToggle();

	return (
		<>
			<IconButton onClick={toggle}>
				<Edit />
			</IconButton>
			<Dialog open={open}>
				<DialogTitle> Editar usuario</DialogTitle>
				<DialogContent>
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
					<Button disabled={!passport} onClick={toggle} variant="contained">
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
