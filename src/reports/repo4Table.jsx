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
		title: "Unidades de análisis",
		key: "analysisUnit",
	},
];

export default function Repo4Table({ data }) {
	return (
		<Table
			columns={columns}
			data={data}
			title="Unidades de análisis y estudios de casos asociados por contexto"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField placeholder="Contexto" />
					<IconButton>
						<SearchIcon />
					</IconButton>
				</Stack>
			}
		/>
	);
}
