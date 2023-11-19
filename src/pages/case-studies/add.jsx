import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import CaseStudyForm from "../../case-studies/CaseStudyForm";
import { Button, Stack } from "@mui/material";
import useAddCaseStudy from "../../case-studies/useAddCaseStudy";

export default function AddCaseStudy() {
	const [mutateAsync, loading] = useAddCaseStudy();

	return (
		<>
			<Head>
				<title>Crear estudio de caso</title>
			</Head>
			<PageContainer page="Crear estudio de caso">
				<Stack spacing={2}>
					<CaseStudyForm onSubmit={mutateAsync} loading={loading} />
				</Stack>
			</PageContainer>
		</>
	);
}
