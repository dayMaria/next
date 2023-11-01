import { Logout } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { signOut } from "next-auth/client";
import { useUser } from "../../config/Oidc";

export default function PageHeader() {
	const user = useUser();

	function handleClick() {
		signOut();
	}

	return (
		<header className="p-2 bg-gray-50 shadow-md flex justify-between items-center">
			<Typography variant="h6">Gestión de estudios de casos</Typography>
			<Button endIcon={<Logout />} onClick={handleClick}>
				{user.name}
			</Button>
		</header>
	);
}
