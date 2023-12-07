import { CircularProgress } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import PageContainer from "../../../components/layout/PageContainer";
import useCaseStudy from "../../../case-studies/useCaseStudy";
import CaseStudyForm from "../../../case-studies/CaseStudyForm";
import useEditCaseStudy from "../../../case-studies/useEditCaseStudy";
import roles from "../../../constants/roles";

export default function Edit() {
	const router = useRouter();
	const [data, loading] = useCaseStudy(router.query.id);
	const [mutateAsync, loadingMutate] = useEditCaseStudy(router.query.id);

	return (
		<>
			<Head>
				<title>
					{process.env.NEXT_PUBLIC_APP_NAME} - Editar caso de estudio
				</title>
			</Head>
			<PageContainer
				page="Editar caso de estudio"
				role={roles.InvestigadorJefe}
			>
				{loading || !data ? (
					<CircularProgress />
				) : (
					<CaseStudyForm
						obj={data}
						loading={loadingMutate}
						onSubmit={mutateAsync}
					/>
				)}
			</PageContainer>
		</>
	);
}
