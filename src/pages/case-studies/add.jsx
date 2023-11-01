import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import CaseStudyForm from "../../case-studies/CaseStudyForm";

export default function AddCaseStudy() {
	return (
		<>
			<Head>
				<title>Crear estudio de caso</title>
			</Head>
			<PageContainer page="Crear estudio de caso">
				<CaseStudyForm />
			</PageContainer>
		</>
	);
}
