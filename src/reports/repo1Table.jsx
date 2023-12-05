import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import useTypeEvidence from "../type-evidences/useTypeEvidence";
import useRepo1 from "./useRepo1";
import { CircularProgress } from "@mui/material";
import removeAccents from "../components/removeAccents";

const columns = [
	{
		title: "Estudio de caso",
		key: "caseStudy_name",
	},
	{
		title: "Contexto",
		key: "context_name",
	},
	{
		title: "Unidad de análisis",
		key: "au_name",
	},
];

export default function Repo1Table() {
	const [selectedTE, setSelectedTE] = useState("");
	const [selectedObject, setSelectedObject] = useState("");
	const [dataTE, loadingTE] = useTypeEvidence();
	const [data, loading] = useRepo1(selectedObject.id);

	if (loading || loadingTE) {
		return <CircularProgress />;
	}

	console.log(selectedTE);

	const handleSearch = () => {
		const normalizedSelectTE = removeAccents(selectedTE).toLowerCase();
		const foundObject = dataTE.find(te => {
			const normalizedTEName = removeAccents(te.name).toLowerCase();
			return normalizedTEName.includes(normalizedSelectTE);
		});
		setSelectedObject(foundObject);

		console.log(foundObject);
	};
	return (
		<Table
			columns={columns}
			data={data}
			title="Unidades de análisis, contextos y estudios de casos asociados por tipo de evidencia"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField
						placeholder="Tipo de evidencia"
						onChange={ev => setSelectedTE(ev.target.value)}
						value={selectedTE}
					/>
					<IconButton onClick={handleSearch}>
						<SearchIcon />
					</IconButton>
				</Stack>
			}
		/>
	);
}
