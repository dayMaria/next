import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import roles from "../constants/roles";
import VisualizarEstudiosCasosAsociados from "../case-studies/VisualizarEstudiosCasosAsociados";
import { useUser } from "../auth/auth";
import useVisualizar from "../case-studies/useVisualizarEstudiosCasos";
import { CircularProgress } from "@mui/material";
export default function VisualizingAssociatedCaseStudies() {
	const user = useUser();
	const [data, loading] = useVisualizar(user.id);
	return (
		<>
			<Head>
				<title>
					{process.env.NEXT_PUBLIC_APP_NAME} - Visualizar estudios de casos
					asociados
				</title>
			</Head>
			<PageContainer page={"Visualizar estudios de casos asociados"}>
				{loading ? (
					<CircularProgress />
				) : (
					<VisualizarEstudiosCasosAsociados data={data} />
				)}
			</PageContainer>
		</>
	);
}
