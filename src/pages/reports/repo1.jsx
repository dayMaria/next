import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import Repo1Table from "../../reports/repo1Table";

export default function Repo1() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Reporte</title>
			</Head>
			<PageContainer>
				<Repo1Table data={[]} />
			</PageContainer>
		</>
	);
}
