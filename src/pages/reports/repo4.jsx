import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import Repo4Table from "../../reports/repo4Table";

export default function Repo4() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Reporte</title>
			</Head>
			<PageContainer>
				<Repo4Table data={[]} />
			</PageContainer>
		</>
	);
}
