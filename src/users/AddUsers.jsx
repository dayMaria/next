import {
	Button,
	IconButton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	MenuItem,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import useAddUsers from "./useAddUsers";
import roles from "../constants/roles";
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
			<Dialog open={open} fullWidth maxWidth="sm">
				<DialogTitle
					style={{
						background: "#0A4551",
						padding: 4.5,
						display: "flex",
						justifyContent: "center",
						color: "#FAFBFC",
					}}
				>
					Añadir usuario
				</DialogTitle>
				<DialogContent>
					<TextField
						label="Nombre de usuario"
						onChange={ev => setName(ev.target.value)}
						required
						value={username}
						style={{ marginBottom: "20px", marginTop: "20px" }}
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
						select
						placeholder="Select"
						label="Rol"
						onChange={ev => setRol(ev.target.value)}
						required
						value={rol}
						style={{ marginBottom: "20px" }}
					>
						<MenuItem></MenuItem>
						<MenuItem
							key={roles.InvestigadorJefe}
							value={roles.InvestigadorJefe}
						>
							InvestigadorJefe
						</MenuItem>
						<MenuItem key={roles.Investigador} value={roles.Investigador}>
							Investigador
						</MenuItem>
						<MenuItem key={roles.Administrador} value={roles.Administrador}>
							Administrador
						</MenuItem>
					</TextField>
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
