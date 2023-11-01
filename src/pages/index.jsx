import Head from "next/head";

import PageContainer from "../components/layout/PageContainer";

export default function DocumentacionIndex() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} - Documentación</title>
			</Head>
			<PageContainer page="Titulo">Test</PageContainer>
		</>
	);
}
