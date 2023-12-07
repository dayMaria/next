import { Logout } from "@mui/icons-material";
import { IconButton, Typography, Stack } from "@mui/material";
import { useSignOut, useUser } from "../../auth/auth";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";

export default function PageHeader() {
	const user = useUser();
	const signOut = useSignOut();

	return (
		<header
			className="shadow-md flex justify-between items-center"
			style={{ background: "#0A4551", padding: 8.5 }}
		>
			<Typography variant="h5" style={{ color: "#FAFBFC" }}>
				Gestión de estudios de casos
			</Typography>
			<Stack direction="row" spacing={2}>
				<Typography style={{ color: "#FAFBFC", marginTop: 4 }}>
					Bienvenido {user.username}
				</Typography>
				<Link href={`/user/${user.id}/editarUsuario`}>
					<IconButton>
						<PersonIcon style={{ color: "#FAFBFC" }} />
					</IconButton>
				</Link>
				<IconButton onClick={signOut}>
					<Logout style={{ color: "#FAFBFC" }} />
				</IconButton>
			</Stack>
		</header>
	);
}
