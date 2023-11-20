import { Add, Delete, Edit } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import Table from "../components/Table";

const columns = [
	{
		title: "Estudio de caso",
		key: "caseStudyName",
	},
	{
		title: "Contexto",
		key: "context",
	},
	{
		title: "Unidad de análisis",
		key: "ua",
	},
	{
		title: "Evidencia",
		key: "evidence",
	},
	{
		title: "Fecha",
		key: "date",
	},
	{
		title: "Acciones",
		width: 1,
		render: obj => (
			<Stack direction="row" spacing={1}>
				<IconButton>
					<Edit />
				</IconButton>
				<IconButton>
					<Delete />
				</IconButton>
			</Stack>
		),
	},
];
export default function MisEvidencias({ data }) {
	return (
		<div className="space-y-4">
			<Stack direction="row" spacing={1}>
				<TextField select placeholder="Select">
					{casosEstudios.map(x => (
						<MenuItem key={x.id} value={x.id}>
							{x.name}
						</MenuItem>
					))}
				</TextField>
				<TextField select placeholder="Select" />
				<TextField select placeholder="Select" />
				<IconButton>
					<Add />
				</IconButton>
			</Stack>
			<Table columns={columns} data={data} title="Añadir evidencias" />
		</div>
	);
}
