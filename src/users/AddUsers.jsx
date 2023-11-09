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
import useAddUsers from "./useAddUsers";
export default function AddUsers() {
	const [username, setName] = useState("");
	const [password, setPassword] = useState("");
	const [rol, setRol] = useState("");
	const [open, setOpen] = useState(false);
	const [mutateAsync, loading] = useAddUsers();

	const handleSubmit = () => {
		// Aquí puedes realizar acciones adicionales antes de enviar el formulario, si es necesario.
		mutateAsync({ username, password, rol }).then(() => {
			setName("");
			setPassword("");
			setRol("");
			setOpen(false);
		});
	};

	const handleClose = () => {
		setName("");
		setPassword("");
		setRol("");
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={() => setOpen(true)}>
				<Add />
			</IconButton>
			<Dialog open={open}>
				<DialogTitle> Añadir usuario</DialogTitle>
				<DialogContent>
					<TextField
						label="Nombre de usuario"
						onChange={ev => setName(ev.target.value)}
						required
						value={username}
						style={{ marginBottom: "20px" }}
					/>
					<TextField
						label="Contraseña"
						type="password"
						onChange={ev => setPassword(ev.target.value)}
						required
						value={password}
						style={{ marginBottom: "20px" }}
					/>
					<TextField
						label="Rol"
						onChange={ev => setRol(ev.target.value)}
						required
						value={rol}
						style={{ marginBottom: "20px" }}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button
						disabled={!password || !username || !rol || loading}
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
