import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Table from "../components/Table";
import EditTypeEvidence from "./EditTypeEvidence";
import AddTypeEvidence from "./AddTypeEvidence";

const columns = [
	{
		title: "Nombre",
		key: "name",
		width: 11,
	},
	{
		title: "Acciones",
		width: 1,
		render: obj => (
			<Stack direction="row" spacing={1}>
				<EditTypeEvidence typeEvidence={obj} />
			</Stack>
		),
	},
];

export default function TypeEvidenceTable({ data }) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredData = searchTerm
		? data.filter(typeEvidence => {
				const { name } = typeEvidence;
				const searchValue = searchTerm.toLowerCase();
				return name && name.toLowerCase().includes(searchValue);
		  })
		: data;

	return (
		<Table
			columns={columns}
			data={filteredData}
			title="Tipos de evidencia"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField
						placeholder="Search"
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
					<AddTypeEvidence />
				</Stack>
			}
		/>
	);
}
