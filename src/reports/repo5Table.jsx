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
			title="Estudios de casos por tipo de evidencia"
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
