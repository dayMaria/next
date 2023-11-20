import { TextField, Typography, Button } from "@mui/material";
import { createContext, useContext, useState } from "react";
import useAuth from "./useAuth";

const UserContext = createContext();

export default function Auth({ children }) {
	const [username, setName] = useState("");
	const [password, setPassword] = useState("");
	const [login, loading] = useAuth();
	const [user, setUser] = useState();

	const handleSubmit = ev => {
		ev.preventDefault();
		login({ username, password }).then(setUser);
	};

	if (user) return children;

	return (
		<div className="pt-12 bg-gray-100 flex justify-center h-screen">
			<form
				className="shadow-md rounded-md px-6 py-4 space-y-4 bg-white w-80"
				onSubmit={handleSubmit}
				style={{ height: "fit-content" }}
			>
				<Typography align="center">Iniciar sesion</Typography>
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
					<Button disabled={loading} type="submit" variant="contained">
						Iniciar sesión
					</Button>
				</div>
			</form>
		</div>
	);
}

export function useUser() {
	return useContext(UserContext);
}
