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
import useEditUsers from "./useEditUsers";
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
			<Dialog open={open}>
				<DialogTitle> Editar usuario</DialogTitle>
				<DialogContent>
					<TextField
						label="Rol"
						onChange={ev => setRol(ev.target.value)}
						required
						value={rol}
						style={{ marginBottom: "20px" }}
					/>
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
