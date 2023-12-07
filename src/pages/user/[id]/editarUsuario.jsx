import Head from "next/head";
import PageContainer from "../../../components/layout/PageContainer";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import useUpdateUser from "../../../auth/useUpdateUser";
import Update from "../../../auth/ChangeData";
import { useUser } from "../../../auth/auth";
export default function Edituser() {
	const user = useUser();
	console.log(user.id);

	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Editar usuario</title>
			</Head>
			<PageContainer>
				<Update userUpdate={user} />
			</PageContainer>
		</>
	);
}
