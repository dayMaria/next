import { TextField, Typography, Button, IconButton } from "@mui/material";
import useUpdateUser from "./useUpdateUser";
import { createContext, useContext, useState } from "react";
import useToggle from "../hooks/useToggle";

export default function Update({ userUpdate }) {
	const [username, setName] = useState(userUpdate.username);
	const [password, setPassword] = useState(userUpdate.password);
	const [mutateAsync, loading] = useUpdateUser(userUpdate.id);
	const [open, toggle] = useToggle();

	const handleSubmit = ev => {
		ev.preventDefault();
		mutateAsync({ username, password }).then(toggle);

		setTimeout(() => {
			window.location.href = "/"; // Reemplaza '/index' con la URL de tu página index
		}, 1000); // 2000 milisegundos = 2 segundos
	};

	return (
		<>
			<div className="pt-12 bg-gray-100 flex justify-center h-screen">
				<form
					className="shadow-md rounded-md px-6 py-4 space-y-4 bg-white w-80"
					onSubmit={handleSubmit}
					style={{ height: "fit-content" }}
					open={open}
				>
					<Typography align="center">Cambiar datos personales</Typography>
					<TextField
						label="Nombre de usuario"
						onChange={ev => setName(ev.target.value)}
						required
						value={username}
					/>
					<TextField
						label="Contraseña"
						type="password"
						onChange={ev => setPassword(ev.target.value)}
						required
						value={password}
					/>
					<div className="flex justify-center">
						<Button
							disabled={loading}
							type="submit"
							variant="contained"
							onClick={toggle}
						>
							Guardar
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
