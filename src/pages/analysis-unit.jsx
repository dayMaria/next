import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import AnalysisUnitTable from "../analysis-unit/AnalysisUnitTable";

const rows = [
	{
		name: "Documentos estimados del 2023",
		description:
			"En este ejemplo, utilizamos el hook useState para definir el estado name y la función setName para actualizar su valor.",
		id: 1,
	},
	{
		name: "Analisis de datos",
		description:
			"En este ejemplo, utilizamos el hook useState para definir el estado name y la función setName para actualizar su valor.",
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
