import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import Table from "../components/Table";
import AddAnalysisUnit from "./AddAnalysisUnit";
import EditAnalysisUnit from "./EditAnalysisUnit";

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
				<EditAnalysisUnit analysisUnit={obj} />
				<IconButton>
					<Visibility />
				</IconButton>
			</Stack>
		),
	},
];
export default function AnalysisUnitTable({ data }) {
	return (
		<Table
			columns={columns}
			data={data}
			title="Unidad de análisis"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField placeholder="Search" />
					<AddAnalysisUnit />
				</Stack>
			}
		/>
	);
}
