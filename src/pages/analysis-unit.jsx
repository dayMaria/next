import { CircularProgress } from "@mui/material";
import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import AnalysisUnitTable from "../analysis-unit/AnalysisUnitTable";
import useAnalysisUnits from "../analysis-unit/useAnalysisUnits";
import roles from "../constants/roles";

export default function AnalysisUnit() {
	const [items, loading] = useAnalysisUnits();
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - AnalysisUnit</title>
			</Head>
			<PageContainer role={roles.InvestigadorJefe}>
				{loading ? <CircularProgress /> : <AnalysisUnitTable data={items} />}
			</PageContainer>
		</>
	);
}
