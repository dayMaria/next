import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import ContextTable from "../context/ContextTable";

const rows = [
	{
		name: "Observacion",
		description:
			"En este ejemplo, utilizamos el hook useState para definir el estado name y la función setName para actualizar su valor.",
		id: 1,
	},
	{
		name: "Analisis de documentos",
		description:
			"En este ejemplo, utilizamos el hook useState para definir el estado name y la función setName para actualizar su valor.",
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
