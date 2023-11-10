import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import CaseStudyTable from "../../case-studies/CaseStudyTable";
import { CircularProgress } from "@mui/material";
import useCaseStudy from "../../case-studies/useCaseStudy";

export default function CaseStudysIndex() {
	const [items, loading] = useCaseStudy();
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Estudios de casos</title>
			</Head>
			<PageContainer>
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
