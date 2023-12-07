import { Add } from "@mui/icons-material";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Typography,
} from "@mui/material";
import { useState } from "react";
import SelectAnalysisUnitTable from "./SelectAnalysisUnitTable";
export default function AddAnalysisUnitForm({
	analysisUnits,
	onToggleAU,
	context,
}) {
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={toggle}>
				<Add />
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
				style={{ maxHeight: "520px", overflowY: "scroll" }}
			>
				<DialogTitle
					style={{
						background: "#0A4551",
						padding: 4.5,
						display: "flex",
						justifyContent: "center",
						color: "#FAFBFC",
					}}
				>
					Añadir unidades de análisis
				</DialogTitle>
				<Typography
					variant="h6"
					style={{ marginLeft: "26px", fontFamily: "sans-serif" }}
				>
					Contexto: {context.name}
				</Typography>
				<DialogContent>
					<SelectAnalysisUnitTable
						analysisUnits={analysisUnits}
						onToggleAU={onToggleAU}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle}>Cancelar</Button>
					<Button onClick={handleSubmit} variant="contained">
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
