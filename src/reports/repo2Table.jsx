import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";

const columns = [
	{
		title: "Contexto",
		key: "context_name",
	},
	{
		title: "Unidad de análisis",
		key: "analysis_unit_name",
	},
	{
		title: "Tipo de evidencia",
		key: "type_evidence_name",
	},
];

export default function Repo2Table({ data }) {
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
