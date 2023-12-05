import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import useRepo2 from "../../reports/useRepo2";
import { CircularProgress } from "@mui/material";
import Repo2Table from "../../reports/repo2Table";

export default function Repo2() {
	const [data, loading] = useRepo2();
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Reporte</title>
			</Head>
			<PageContainer>
				{loading ? <CircularProgress /> : <Repo2Table data={data} />}
			</PageContainer>
		</>
	);
}
