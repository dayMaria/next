import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import Repo3Table from "../../reports/repo3Table";
import roles from "../../constants/roles";

export default function Repo3() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Reporte</title>
			</Head>
			<PageContainer role={roles.InvestigadorJefe}>
				<Repo3Table />
			</PageContainer>
		</>
	);
}
