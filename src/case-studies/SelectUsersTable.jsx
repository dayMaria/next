import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Table from "../components/Table";

const columns = [
	{
		title: "Nombre de usuario",
		key: "name",
	},
	{
		title: "Acciones",
		render: obj => (
			<IconButton>
				<Delete />
			</IconButton>
		),
	},
];

export default function SelectUsersTable({ data }) {
	return (
		<Table
			actions={
				<Button startIcon={<Add />} variant="contained">
					Añadir
				</Button>
			}
			columns={columns}
			data={data}
			title="Usuarios asignados"
		/>
	);
}
