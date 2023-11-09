import { Alert, Snackbar } from "@mui/material";

import { useSnackbar, useSnackbarFns } from "./snackbar-hooks";

export default function SnackbarConsumer() {
	const { message, open, severity } = useSnackbar();
	const { close } = useSnackbarFns();

	return (
		<Snackbar
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			autoHideDuration={severity === "info" ? null : 3000}
			onClose={close}
			open={open}
		>
			<div onClick={close}>
				<Alert elevation={6} severity={severity} variant="filled">
					{message}
				</Alert>
			</div>
		</Snackbar>
	);
}
