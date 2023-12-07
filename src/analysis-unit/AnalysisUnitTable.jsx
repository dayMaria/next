import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Table from "../components/Table";
import AddAnalysisUnit from "./AddAnalysisUnit";
import EditAnalysisUnit from "./EditAnalysisUnit";

const columns = [
	{
		title: "Nombre",
		key: "name",
	},
	{
		title: "Descripción",
		key: "description",
	},
	{
		title: "Acciones",
		width: 1,
		render: obj => (
			<Stack direction="row" spacing={1}>
				<EditAnalysisUnit analysisUnit={obj} />
			</Stack>
		),
	},
];
export default function AnalysisUnitTable({ data }) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredData = searchTerm
		? data.filter(analysisUnit => {
				const { name } = analysisUnit;
				const searchValue = searchTerm.toLowerCase();
				return name && name.toLowerCase().includes(searchValue);
		  })
		: data;
	return (
		<Table
			columns={columns}
			data={filteredData}
			title="Unidad de análisis"
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
