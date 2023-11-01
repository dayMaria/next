import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

const columns = [
	{
		title: "Nombre",
		key: "name",
	},
	{
		title: "Fecha inicio",
		key: "commitDate",
	},
	{
		title: "Fecha fin",
		key: "endDate",
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
					<Visibility />
				</IconButton>
			</Stack>
		),
	},
];
export default function CaseStudyTable({ data }) {
	return (
		<Table
			columns={columns}
			data={data}
			title="Estudios de casos"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField placeholder="Search" />
					<Button
						startIcon={<Add />}
						href="/case-studies/add"
						variant="contained"
					>
						Añadir
					</Button>
				</Stack>
			}
		/>
	);
}
