import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import CaseStudyForm from "../../case-studies/CaseStudyForm";
import { Button, Stack } from "@mui/material";
import useAddCaseStudy from "../../case-studies/useAddCaseStudy";
import roles from "../../constants/roles";
export default function AddCaseStudy() {
	const [mutateAsync, loading] = useAddCaseStudy();

	return (
		<>
			<Head>
				<title>Añadir estudio de caso</title>
			</Head>
			<PageContainer
				page="Añadir estudio de caso"
				role={roles.InvestigadorJefe}
			>
				<Stack spacing={2}>
					<CaseStudyForm onSubmit={mutateAsync} loading={loading} />
				</Stack>
			</PageContainer>
		</>
	);
}
