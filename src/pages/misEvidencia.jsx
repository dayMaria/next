import { Add, Delete, Edit } from "@mui/icons-material";
import { IconButton, Stack, TextField, MenuItem } from "@mui/material";
import Table from "../components/Table";
import { CircularProgress } from "@mui/material";
import useMisEvidenciasFilter from "../case-studies/useMisEvidenciasFilter";
import useCaseStudies from "../case-studies/useCaseStudies";
import useContexts from "../context/useContexts";
import useAnalysisUnits from "../analysis-unit/useAnalysisUnits";
import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import roles from "../constants/roles";
import Head from "next/head";
import AddEvidenceForm from "../case-studies/AddEvidenceForm";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";

const columns = [
	{
		title: "Estudio de caso",
		key: "caseStudyName",
	},
	{
		title: "Contexto",
		key: "context",
	},
	{
		title: "Unidad de análisis",
		key: "ua",
	},
	{
		title: "Evidencia",
		key: "evidence",
	},
	{
		title: "Fecha",
		key: "date",
	},
	{
		title: "Acciones",
		width: 1,
		render: obj => (
			<Stack direction="row" spacing={1}>
				<IconButton>
					<FileDownloadSharpIcon />
				</IconButton>
			</Stack>
		),
	},
];
export default function MisEvidencias() {
	const [items, loading] = useMisEvidenciasFilter();
	const [dataCS, loadingCS] = useCaseStudies();
	const [dataC, loadingC] = useContexts();
	const [dataAU, loadingAU] = useAnalysisUnits();

	const [selectedCaseStudy, setSelectedCaseStudy] = useState("");
	const [selectedContext, setSelectedContext] = useState("");
	const [selectedAU, setSelectedAU] = useState("");

	if (loading || loadingCS || loadingC || loadingAU) {
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

	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Evidencias</title>
			</Head>
			<PageContainer role={roles.Investigador} page="Añadir evidencia">
				<div className="space-y-4">
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
						<AddEvidenceForm items={items} loading={loading} />
					</Stack>
					<Table columns={columns} data={[]} />
				</div>
			</PageContainer>
		</>
	);
}
