import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import TypeEvidenceTable from "../type-evidences/TypeEvidenceTable";

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

export default function TypeEvidences() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Tipos de evidencia</title>
			</Head>
			<PageContainer>
				<TypeEvidenceTable data={rows} />
			</PageContainer>
		</>
	);
}
