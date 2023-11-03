import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
	{
		title: "Estudios de caso",
		key: "caseStudy",
	},
	{
		title: "Contextos",
		key: "context",
	},
	{
		title: "Unidades de análisis",
		key: "analysisUnit",
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
			title="Unidades de análisis, contextos y estudios de casos asociados por tipo de evidencia"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField placeholder="Tipo de evidencia" />
					<IconButton>
						<SearchIcon />
					</IconButton>
				</Stack>
			}
		/>
	);
}
