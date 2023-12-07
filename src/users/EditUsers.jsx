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
	MenuItem,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import useEditUsers from "./useEditUsers";
import roles from "../constants/roles";
export default function EditUsers({ users }) {
	const [rol, setRol] = useState(users.rol);
	const [open, toggle] = useToggle();
	const [mutateAsync, loading] = useEditUsers(users.id);

	const handleSubmit = () => {
		mutateAsync({ rol }).then(toggle);
	};

	return (
		<>
			<IconButton onClick={toggle}>
				<Edit />
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
					Editar usuario
				</DialogTitle>
				<DialogContent>
					<TextField
						select
						placeholder="Select"
						label="Rol"
						onChange={ev => setRol(ev.target.value)}
						required
						value={rol}
						style={{ marginBottom: "20px", marginTop: "20px" }}
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
					<Button onClick={toggle}>Cancelar</Button>
					<Button
						disabled={!rol || loading}
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
