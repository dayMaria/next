import { Add } from "@mui/icons-material";
import {
	IconButton,
	Dialog,
	DialogTitle,
	Stack,
	TextField,
	MenuItem,
	DialogContent,
	DialogActions,
	Button,
} from "@mui/material";
import { useState } from "react";
import Upload from "../components/Upload";
import { CircularProgress } from "@mui/material";
import useCaseStudies from "../case-studies/useCaseStudies";
import useContexts from "../context/useContexts";
import useAnalysisUnits from "../analysis-unit/useAnalysisUnits";
import useTypeEvidence from "./useTypeEvidence";

export default function AddEvidenceForm({ items, loading }) {
	const [open, setOpen] = useState(false);
	const [dataCS, loadingCS] = useCaseStudies();
	const [dataC, loadingC] = useContexts();
	const [dataAU, loadingAU] = useAnalysisUnits();
	const [dataTE, loadingTE] = useTypeEvidence();
	const [selectedCaseStudy, setSelectedCaseStudy] = useState("");
	const [selectedContext, setSelectedContext] = useState("");
	const [selectedAU, setSelectedAU] = useState("");
	const [selectedEvidence, setSelectedEvidence] = useState("");
	const [selectedTE, setSelectedTE] = useState("");

	if (loading || loadingCS || loadingC || loadingAU || loadingTE) {
		return <CircularProgress />;
	}
	const caseStudy = dataCS.filter(cs =>
		items.map(x => x.caseStudy).includes(cs.id)
	);
	const context = dataC.filter(c => items.map(c => c.context).includes(c.id));
	const au = dataAU.filter(au =>
		items.map(a => a.analysisUnit).includes(au.id)
	);

	let filteredContext = context;
	let filteredAU = au;
	if (selectedCaseStudy) {
		filteredContext = filteredContext.filter(x =>
			items.some(i => i.context === x.id && i.caseStudy === selectedCaseStudy)
		);
		filteredAU = filteredAU.filter(x =>
			items.some(
				i =>
					i.analysisUnit === x.id &&
					i.context === selectedContext &&
					i.caseStudy === selectedCaseStudy
			)
		);
	}

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
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Subir evidencias</DialogTitle>
				<DialogContent>
					<Stack direction="row" spacing={1}>
						<TextField
							select
							placeholder="Select"
							label="Estudio de caso"
							onChange={ev => setSelectedCaseStudy(ev.target.value)}
							value={selectedCaseStudy}
						>
							<MenuItem></MenuItem>
							{caseStudy.map(x => (
								<MenuItem key={x.id} value={x.id}>
									{x.name}
								</MenuItem>
							))}
						</TextField>
						<TextField
							select
							placeholder="Select"
							label="Contexto"
							onChange={ev => setSelectedContext(ev.target.value)}
							value={selectedContext}
						>
							<MenuItem></MenuItem>
							{filteredContext.map(x => (
								<MenuItem key={x.id} value={x.id}>
									{x.name}
								</MenuItem>
							))}
						</TextField>
						<TextField
							select
							placeholder="Select"
							label="Unidad de análisis"
							onChange={ev => setSelectedAU(ev.target.value)}
							value={selectedAU}
						>
							<MenuItem></MenuItem>
							{filteredAU.map(x => (
								<MenuItem key={x.id} value={x.id}>
									{x.name}
								</MenuItem>
							))}
						</TextField>
					</Stack>
					<Stack
						spacing={2}
						style={{
							marginTop: "15px",
						}}
					>
						<TextField
							select
							placeholder="Select"
							label="Tipo de evidencia"
							onChange={ev => setSelectedTE(ev.target.value)}
							value={selectedTE}
						>
							<MenuItem></MenuItem>
							{dataTE.map(x => (
								<MenuItem key={x.id} value={x.id}>
									{x.name}
								</MenuItem>
							))}
						</TextField>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Upload
								label={`Evidencia`}
								onChange={setSelectedEvidence}
								value={selectedEvidence}
							/>
						</div>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle}>Cancelar</Button>
					<Button
						disabled={
							!selectedEvidence ||
							!selectedAU ||
							!selectedCaseStudy ||
							!selectedContext ||
							!selectedTE
						}
						onClick={handleSubmit}
						variant="contained"
					>
						Añadir
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
