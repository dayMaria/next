import Link from "next/link";
import Table from "../../components/Table";

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
}
