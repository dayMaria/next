import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";

const columns = [
	{
		title: "Contextos",
		key: "context",
	},
	{
		title: "Unidades de análisis",
		key: "analysisUnit",
	},
	{
		title: "Tipos de evidencias",
		key: "typeEvidence",
	},
	{
		title: "Acciones",
		width: 1,
		render: obj => (
			<Stack direction="row" spacing={1}>
				<IconButton>
					<Visibility />
				</IconButton>
			</Stack>
		),
	},
];

export default function Repo1Table({ data }) {
	return (
		<Table
			columns={columns}
			data={data}
			title="Contextos, unidades de análisis y tipos de evidencias asociados"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField placeholder="Search" />
				</Stack>
			}
		/>
	);
}
