import { Delete } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import Table from "../components/Table";
import AddSelectContextTable from "./AddSelectContextTable";
import AddAnalysisUnitForm from "./AddAnalysisUnitForm";

export default function SelectContextTable({
	contexts,
	onToggleAU,
	analysisUnits,
	onToggle,
	selectedYear,
}) {
	const columns = [
		{
			title: "Nombre",
			key: "name",
			width: 11,
		},
		{
			title: "Acciones",
			render: obj => (
				<Stack direction="row" spacing={1}>
					<AddAnalysisUnitForm
						analysisUnits={analysisUnits.filter(x => x.context === obj.id)}
						onToggleAU={x =>
							onToggleAU({ ...x, year: selectedYear, context: obj.id })
						}
						context={obj}
					/>
					<IconButton>
						<Delete onClick={() => onToggle(obj)} />
					</IconButton>
				</Stack>
			),
		},
	];

	return (
		<Table
			actions={
				<AddSelectContextTable contexts={contexts} onToggle={onToggle} />
			}
			columns={columns}
			data={contexts}
			title="Contextos asociados"
		/>
	);
}
