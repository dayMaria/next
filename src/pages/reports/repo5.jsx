import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import Repo5Table from "../../reports/repo5Table";

export default function Repo5() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Reporte</title>
			</Head>
			<PageContainer>
				<Repo5Table data={[]} />
			</PageContainer>
		</>
	);
}
