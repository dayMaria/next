import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import Table from "../components/Table";

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
			actions={
				<Button startIcon={<Add />} variant="contained">
					Añadir
				</Button>
			}
			columns={columns}
			data={data}
			title="Contextos asociados"
		/>
	);
}
