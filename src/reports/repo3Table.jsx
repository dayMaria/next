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
];

export default function Repo3Table({ data }) {
	return (
		<Table
			columns={columns}
			data={data}
			title="Contextos y estudios de casos asociados por período de tiempo"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField placeholder="Fecha inicial" />
					<TextField placeholder="Fecha final" />
					<IconButton>
						<SearchIcon />
					</IconButton>
				</Stack>
			}
		/>
	);
}
