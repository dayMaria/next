import Link from "next/link";
import Table from "../../components/Table";
import Head from "next/head";
import PageContainer from "../../components/layout/PageContainer";
import CaseStudyTable from "../../case-studies/CaseStudyTable";

const rows = [
	{
		name: "Proyectos actualizados 2021-2023",
		commitDate: "25-03-2010",
		endDate: "01-12-2023",
		id: 1,
	},
	{
		name: "Proyectos de investigaciones 2021-2023",
		commitDate: "25-03-2010",
		endDate: "01-12-2023",
		id: 1,
	},
];

export default function CaseStudysIndex() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Estudios de casos</title>
			</Head>
			<PageContainer>
				<CaseStudyTable data={rows} />
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
