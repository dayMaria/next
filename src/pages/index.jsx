import Head from "next/head";
import { Typography } from "@mui/material";

import PageContainer from "../components/layout/PageContainer";

export default function DocumentacionIndex() {
	return (
		<>
			<Head>
				<title>
					{process.env.NEXT_PUBLIC_APP_NAME} - Gestión de estudios de casos
				</title>
			</Head>
			<PageContainer>
				<div style={{ marginTop: 200 }}>
					<Typography
						style={{
							textAlign: "center",
							fontWeight: "bold",
							color: "#0A4551",
						}}
						variant="h3"
					>
						Bienvenidos al sistema para el diseño y visualización de estudios de
						casos
					</Typography>
				</div>
			</PageContainer>
		</>
	);
}
