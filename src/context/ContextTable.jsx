import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import Table from "../components/Table";
import AddContext from "./AddContext";
import EditContext from "./EditContext";

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
				<EditContext context={obj} />
				<IconButton>
					<Visibility />
				</IconButton>
			</Stack>
		),
	},
];

export default function ContextTable({ data }) {
	return (
		<Table
			columns={columns}
			data={data}
			title="Contextos"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField placeholder="Search" />
					<AddContext />
				</Stack>
			}
		/>
	);
}
