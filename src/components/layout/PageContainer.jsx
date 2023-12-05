import { Typography } from "@mui/material";
import { Suspense } from "react";

import _roles from "../../constants/roles";
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "../Spinner";
import { useUser } from "../../auth/auth";

const PageContainer = ({ children, page, role }) => {
	const user = useUser();

	const haveAccess = !role || user.rol === role;

	return (
		<>
			{page && (
				<div className="mb-3">
					<Typography className="border-b-2 border-gray-100" variant="h5">
						{page}
					</Typography>
				</div>
			)}
			{haveAccess ? (
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>{children}</Suspense>
				</ErrorBoundary>
			) : (
				<Typography color="error" variant="body1">
					Usted no tiene acceso a esta funcionalidad
				</Typography>
			)}
		</>
	);
};

export default PageContainer;
