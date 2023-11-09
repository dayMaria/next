import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import Table from "../components/Table";
import AddSelectContextTable from "./AddSelectContextTable";

export default function SelectContextTable({ contexts, onToggle }) {
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
						<Delete onClick={() => onToggle(obj)} />
					</IconButton>
				</Stack>
			),
		},
	];
	return (
		<Table
			actions={
				<AddSelectContextTable contexts={contexts} onToggle={onToggle} />
			}
			columns={columns}
			data={contexts}
			title="Contextos asociados"
		/>
	);
}
