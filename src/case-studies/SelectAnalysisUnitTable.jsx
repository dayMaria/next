import { Delete } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import Table from "../components/Table";
import AddSelectAnalysisUnitTable from "./AddSelectAnalysisUnitTable";

export default function SelectAnalysisUnitTable({ analysisUnits, onToggleAU }) {
	const columns = [
		{
			title: "Nombre",
			key: "name",
			width: 10,
		},
		{
			title: "Acciones",
			render: obj => (
				<Stack direction="row" spacing={1}>
					<IconButton>
						<Delete onClick={() => onToggleAU(obj)} />
					</IconButton>
				</Stack>
			),
		},
	];
	return (
		<Table
			actions={
				<AddSelectAnalysisUnitTable
					analysisUnits={analysisUnits}
					onToggleAU={onToggleAU}
				/>
			}
			columns={columns}
			data={analysisUnits}
			title="Unidades de análisis asociados"
		/>
	);
}
