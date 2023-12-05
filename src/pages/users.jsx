import { CircularProgress } from "@mui/material";
import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import UsersTable from "../users/UsersTable";
import useUsers from "../users/useUsers";
import roles from "../constants/roles";

export default function Users() {
	const [items, loading] = useUsers();
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Usuarios</title>
			</Head>
			<PageContainer role={roles.Administrador}>
				{loading ? <CircularProgress /> : <UsersTable data={items} />}
			</PageContainer>
		</>
	);
}
