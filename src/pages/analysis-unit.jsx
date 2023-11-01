import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import AnalysisUnitTable from "../analysis-unit/AnalysisUnitTable";

const rows = [
	{
		name: "Documentos estimados del 2023",
		id: 1,
	},
	{
		name: "Analisis de datos",
		id: 2,
	},
];

export default function AnalysisUnit() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - AnalysisUnit</title>
			</Head>
			<PageContainer>
				<AnalysisUnitTable data={rows} />
			</PageContainer>
		</>
	);
}
