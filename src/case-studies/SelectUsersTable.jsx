import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Table from "../components/Table";
import AddSelectUsersTable from "./AddSelectUsersTable";

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
			actions={<AddSelectUsersTable />}
			columns={columns}
			data={data}
			title="Usuarios asignados"
		/>
	);
}
