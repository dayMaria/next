import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Table from "../components/Table";
import AddContext from "./AddContext";
import EditContext from "./EditContext";

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
				<EditContext context={obj} />
			</Stack>
		),
	},
];

export default function ContextTable({ data }) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredData = searchTerm
		? data.filter(context => {
				const { name } = context;
				const searchValue = searchTerm.toLowerCase();
				return name && name.toLowerCase().includes(searchValue);
		  })
		: data;

	return (
		<Table
			columns={columns}
			data={filteredData}
			title="Contextos"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField
						placeholder="Search"
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
					<AddContext />
				</Stack>
			}
		/>
	);
}
