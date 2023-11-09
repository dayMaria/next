import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import CaseStudyForm from "../../case-studies/CaseStudyForm";
import { Button,Stack } from "@mui/material";

export default function AddCaseStudy() {
	return (
		<>
			<Head>
				<title>Crear estudio de caso</title>
			</Head>
			<PageContainer page="Crear estudio de caso">
				<Stack spacing={2}>
					<CaseStudyForm />
					<div className="flex justify-end">
						<Button variant="contained">Añadir</Button>
					</div>
				</Stack>
			</PageContainer>
		</>
	);
}
