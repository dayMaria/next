import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import ContextTable from "../context/ContextTable";

const rows = [
	{
		name: "Observacion",
		id: 1,
	},
	{
		name: "Analisis de documentos",
		id: 2,
	},
];

export default function Context() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Contextos</title>
			</Head>
			<PageContainer>
				<ContextTable data={rows} />
			</PageContainer>
		</>
	);
}
