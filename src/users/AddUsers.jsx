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
export default function AddUsers() {
	const [name, setName] = useState("");
	const [passport, setPassport] = useState("");
	const [open, toggle] = useToggle();

	return (
		<>
			<Button startIcon={<Add />} variant="contained" onClick={toggle}>
				Añadir
			</Button>
			<Dialog open={open}>
				<DialogTitle> Añadir usuario</DialogTitle>
				<DialogContent>
					<TextField
						label="Nombre de usuario"
						onChange={ev => setName(ev.target.value)}
						required
						value={name}
						style={{ marginBottom: "20px" }}
					/>
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
					<Button
						disabled={!passport || !name}
						onClick={toggle}
						variant="contained"
					>
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
