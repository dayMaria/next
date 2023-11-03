import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import UsersTable from "../users/UsersTable";

const rows = [
	{
		username: "robeAlfonso00",
		password: "00robertico*",
		id: 1,
	},
	{
		username: "marioHernandez87",
		password: "alabao00turu",
		id: 2,
	},
];
export default function Users() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Usuarios</title>
			</Head>
			<PageContainer>
				<UsersTable data={rows} />
			</PageContainer>
		</>
	);
}
