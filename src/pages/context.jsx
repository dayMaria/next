import { CircularProgress } from "@mui/material";
import Head from "next/head";
import PageContainer from "../components/layout/PageContainer";
import ContextTable from "../context/ContextTable";
import useContexts from "../context/useContexts";

export default function Context() {
	const [items, loading] = useContexts();
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Contextos</title>
			</Head>
			<PageContainer>
				{loading ? <CircularProgress /> : <ContextTable data={items} />}
			</PageContainer>
		</>
	);
}
