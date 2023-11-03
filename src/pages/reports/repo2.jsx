import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import Repo2Table from "../../reports/repo2Table";

export default function Repo2() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Reporte</title>
			</Head>
			<PageContainer>
				<Repo2Table data={[]} />
			</PageContainer>
		</>
	);
}
