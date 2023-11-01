import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
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
				<IconButton>
					<Visibility />
				</IconButton>
			</Stack>
		),
	},
];

export default function TypeEvidenceTable({ data }) {
	return (
		<Table
			columns={columns}
			data={data}
			title="Tipos de evidencia"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField placeholder="Search" />
					<AddTypeEvidence />
				</Stack>
			}
		/>
	);
}
