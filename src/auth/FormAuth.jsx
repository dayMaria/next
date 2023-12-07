import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

export default function FormAuth({ onSubmit, loading }) {
	const [username, setName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = ev => {
		ev.preventDefault();
		onSubmit({ username, password });
	};

	return (
		<>
			<div className="pt-12 bg-gray-100 flex justify-center h-screen">
				<form
					autoComplete={false}
					className="shadow-md rounded-md px-6 py-4 space-y-4 bg-white w-80"
					onSubmit={handleSubmit}
					style={{ height: "fit-content", marginTop: "100px" }}
				>
					<Typography
						variant="h4"
						style={{
							color: "#0A4551",
							display: "flex",
							justifyContent: "center",
						}}
					>
						aica+
					</Typography>
					<Typography align="center">Iniciar sesión</Typography>
					<TextField
						autoComplete={false}
						label="Nombre de usuario"
						onChange={ev => setName(ev.target.value)}
						required
						value={username}
					/>
					<TextField
						autoComplete={false}
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
		</>
	);
}
