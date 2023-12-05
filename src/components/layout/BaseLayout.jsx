import { Box, IconButton } from "@mui/material";

import theme from "../../config/theme";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";
import { Suspense } from "react";
import Spinner from "../Spinner";

export default function BaseLayout({ children }) {
	/*
  if (
    session.user.roles.some(
      r =>
        r === roles.RESPONSABLE_APROBACION_AREA ||
        r === roles.RESPONSABLE_APROBACION_CALIDAD ||
        r === roles.RESPONSABLE_APROBACION_PROCESO
    ) &&
    !session.user.ci
  )
    return <InsertartCarnetForm />;
*/

	return (
		<div className="min-h-screen flex">
			<Box
				bgcolor={theme.palette.common.black}
				className="hidden lg:inline-block"
				maxWidth="210px"
				minWidth="210px"
				width="210px"
			>
				<Sidebar />
			</Box>
			<div className="flex-grow flex flex-col">
				<PageHeader />
				<main className="m-3 bg-white flex-grow">
					<Suspense fallback={<Spinner />}>{children}</Suspense>
				</main>
			</div>
		</div>
	);
}
