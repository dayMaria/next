import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import locale from "date-fns/locale/es";

import BaseLayout from "../components/layout/BaseLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import ReactQueryProvider from "../config/ReactQueryProvider";
import OidcAuth from "../config/Oidc";
import theme from "../config/theme";

import "../styles/globals.css";
import SnackbarProvider from "../common/feedback/SnackbarProvider";
import Auth from "../auth/auth";

function MyApp({ Component, pageProps }) {
	return (
		<ErrorBoundary>
			<CssBaseline />

			<OidcAuth>
				<ThemeProvider theme={theme}>
					<LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
						<ReactQueryProvider>
							<SnackbarProvider>
								<Auth>
									<BaseLayout>
										<Component {...pageProps} />
									</BaseLayout>
								</Auth>
							</SnackbarProvider>
						</ReactQueryProvider>
					</LocalizationProvider>
				</ThemeProvider>
			</OidcAuth>
		</ErrorBoundary>
	);
}

export default MyApp;
