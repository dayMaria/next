import Table from "../components/Table";
import { Visibility } from "@mui/icons-material";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import useRepo3 from "./useRepo3";
import { CircularProgress } from "@mui/material";
import useAllCaseStudy from "../case-studies/useAllCaseStudy";

const columns = [
	{
		title: "Estudio de caso",
		key: "casestudy_name",
	},
	{
		title: "Contextos",
		key: "context_name",
	},
];

export default function Repo3Table() {
	const [selectedYearStar, setSelectedYearStar] = useState("");
	const [selectedYearEnd, setSelectedYearEnd] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [data, loading] = useRepo3(startDate, endDate);

	if (loading) {
		return <CircularProgress />;
	}

	const handleSearch = () => {
		setStartDate(selectedYearStar);
		setEndDate(selectedYearEnd);
		console.log({ selectedYearEnd, selectedYearStar });
	};
	return (
		<>
			<Table
				columns={columns}
				data={data}
				title="Contextos y estudios de casos asociados por período de tiempo"
				actions={
					<Stack direction="row" spacing={2}>
						<TextField
							placeholder="Fecha inicial"
							type="number"
							onChange={ev => setSelectedYearStar(ev.target.value)}
							value={selectedYearStar}
						/>
						<TextField
							placeholder="Fecha final"
							type="number"
							onChange={ev => setSelectedYearEnd(ev.target.value)}
							value={selectedYearEnd}
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
