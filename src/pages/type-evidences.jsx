import { CircularProgress } from "@mui/material";
import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import TypeEvidenceTable from "../type-evidences/TypeEvidenceTable";
import useTypeEvidence from "../type-evidences/useTypeEvidence";

export default function TypeEvidences() {
	const [items, loading] = useTypeEvidence();
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Tipos de evidencia</title>
			</Head>
			<PageContainer>
				{loading ? <CircularProgress /> : <TypeEvidenceTable data={items} />}
			</PageContainer>
		</>
	);
}
