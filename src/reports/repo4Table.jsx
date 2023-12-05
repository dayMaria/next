import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import { IconButton, TextField, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import useRepo4 from "./useRepo4";
import { CircularProgress } from "@mui/material";
import useContexts from "../context/useContexts";

const columns = [
	{
		title: "Estudio de caso",
		key: "caseStudy_name",
	},
	{
		title: "Unidades de análisis",
		key: "au_name",
	},
];

export default function Repo4Table() {
	const [selectContext, setSelectedContext] = useState("");
	const [selectedObject, setSelectedObject] = useState("");
	const [dataContext, loadingContext] = useContexts();
	const [data, loading] = useRepo4(selectedObject.id); // Pasamos selectContext como el ID

	if (loading || loadingContext) {
		return <CircularProgress />;
	}

	const handleSearch = () => {
		let foundObject = null;
		const lowerCaseSelectContext = selectContext.toLowerCase(); // Convertir selectContext a minúsculas

		dataContext.forEach(context => {
			const lowerCaseContextName = context.name.toLowerCase(); // Convertir context.name a minúsculas

			if (lowerCaseContextName === lowerCaseSelectContext) {
				foundObject = context;
			}
		});

		setSelectedObject(foundObject);
	};

	return (
		<>
			<Table
				columns={columns}
				data={data}
				title="Unidades de análisis y estudios de casos asociados por contexto"
				actions={
					<Stack direction="row" spacing={2}>
						<TextField
							placeholder="Contexto"
							onChange={ev => setSelectedContext(ev.target.value)}
							value={selectContext}
						/>
						<IconButton onClick={handleSearch}>
							<SearchIcon />
						</IconButton>
					</Stack>
				}
			/>
		</>
	);
}
