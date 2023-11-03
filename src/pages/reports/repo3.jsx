import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import Repo3Table from "../../reports/repo3Table";

export default function Repo3() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Reporte</title>
			</Head>
			<PageContainer>
				<Repo3Table data={[]} />
			</PageContainer>
		</>
	);
}
