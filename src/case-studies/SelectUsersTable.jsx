import { Delete } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import Table from "../components/Table";
import AddSelectUsersTable from "./AddSelectUsersTable";

export default function SelectUsersTable({ users, onToggle }) {
	const columns = [
		{
			title: "Nombre de usuario",
			key: "username",
			width: 11,
		},
		{
			title: "Acciones",
			render: obj => (
				<Stack direction="row" spacing={1}>
					<IconButton>
						<Delete onClick={() => onToggle(obj)} />
					</IconButton>
				</Stack>
			),
		},
	];

	return (
		<Table
			actions={<AddSelectUsersTable users={users} onToggle={onToggle} />}
			columns={columns}
			data={users}
			title="Usuarios asignados"
		/>
	);
}
