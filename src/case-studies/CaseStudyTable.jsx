import { useState } from "react";
import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import Link from "next/link";

const columns = [
	{
		title: "Nombre",
		key: "name",
	},
	{
		title: "Fecha inicio",
		key: "commit_date",
	},
	{
		title: "Fecha fin",
		key: "end_date",
	},
	{
		title: "Acciones",
		width: 1,
		render: obj => (
			<Stack direction="row" spacing={1}>
				<Link href={`/case-studies/${obj.id}/editar`}>
					<IconButton>
						<Edit />
					</IconButton>
				</Link>
				<Link href={`/case-studies/${obj.id}/visualizar`}>
					<IconButton>
						<Visibility />
					</IconButton>
				</Link>
			</Stack>
		),
	},
];
export default function CaseStudyTable({ data }) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredData = searchTerm
		? data.filter(caseStudy => {
				const { name } = caseStudy;
				const searchValue = searchTerm.toLowerCase();
				return name && name.toLowerCase().includes(searchValue);
		  })
		: data;

	return (
		<Table
			columns={columns}
			data={filteredData}
			title="Estudios de casos"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField
						placeholder="Search"
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
					<IconButton href="/case-studies/add">
						<Add />
					</IconButton>
				</Stack>
			}
		/>
	);
}
