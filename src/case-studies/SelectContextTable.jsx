import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import Table from "../components/Table";
import AddSelectContextTable from "./AddSelectContextTable";

const columns = [
	{
		title: "Nombre",
		key: "name",
		width: 11,
	},
	{
		title: "Acciones",
		render: obj => (
			<Stack direction="row" spacing={1}>
				<IconButton>
					<Add />
				</IconButton>
				<IconButton>
					<Delete />
				</IconButton>
			</Stack>
		),
	},
];

export default function SelectContextTable({ data }) {
	return (
		<Table
			actions={<AddSelectContextTable />}
			columns={columns}
			data={data}
			title="Contextos asociados"
		/>
	);
}
