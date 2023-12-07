import { IconButton, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import Link from "next/link";

const columns = [
	{
		title: "Nombre",
		key: "cs_name",
	},
	{
		title: "Fecha inicio",
		key: "cs_commit_date",
	},
	{
		title: "Fecha fin",
		key: "cs_end_date",
	},
	{
		title: "Acciones",
		width: 1,
		render: obj => (
			<Stack direction="row" spacing={1}>
				<Link href={`/case-studies/${obj.cs_id}/visualizar`}>
					<IconButton>
						<Visibility />
					</IconButton>
				</Link>
			</Stack>
		),
	},
];
export default function VisualizarEstudiosCasosAsociados({ data }) {
	console.log(data);
	const [searchTerm, setSearchTerm] = useState("");
	const filteredData = searchTerm
		? data.filter(caseStudy => {
				const { cs_name } = caseStudy;
				const searchValue = searchTerm.toLowerCase();
				return cs_name && cs_name.toLowerCase().includes(searchValue);
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
				</Stack>
			}
		/>
	);
}
