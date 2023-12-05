import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import CaseStudyTable from "../../case-studies/CaseStudyTable";
import { CircularProgress } from "@mui/material";
import useCaseStudies from "../../case-studies/useCaseStudies";
import roles from "../../constants/roles";

export default function CaseStudysIndex() {
	const [items, loading] = useCaseStudies();
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Estudios de casos</title>
			</Head>
			<PageContainer role={roles.InvestigadorJefe}>
				{loading ? <CircularProgress /> : <CaseStudyTable data={items} />}
			</PageContainer>
		</>
	);
}
/*
const columns = [
	{
		title: "Nombre",
		key: "name",
	},
];

export default function CaseStudiesIndex() {
	return (
		<Table
			actions={<Link href="/case-studies/add">Crear</Link>}
			columns={columns}
			data={[]}
		/>
	);
}*/
