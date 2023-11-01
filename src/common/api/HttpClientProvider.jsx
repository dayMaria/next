import { useMemo } from "react";

import { useToken, useUser } from "../auth/auth-hooks";
import { HttpClient } from "./http";
import HttpClientContext from "./HttpClientContext";

export default function HttpClientProvider({ children }) {
	const clients = useMemo(
		() => ({
			documentation: new HttpClient({
				baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
				defaultHeaders: {
					authorization: `Bearer`,
				},
			}),
		}),
		[]
	);

	return (
		<HttpClientContext.Provider value={clients}>
			{children}
		</HttpClientContext.Provider>
	);
}
