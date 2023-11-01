import { signIn, signOut, useSession } from "next-auth/client";
import { useMemo } from "react";

import OidcFallback from "./AuthFallback";
import { AuthContext, AuthFnsContext } from "./AuthContext";

export default function AuthProvider({ children }) {
	const [session, loading] = useSession();
	const oidcFns = useMemo(
		() => ({
			signOut,
		}),
		[]
	);

	const oidcValue = useMemo(() => {
		if (!session) return {};
		return {
			token: session.accessToken,
			user: {
				email: session.user.sub + "@aica.cu",
				name: session.user.fullName,
				policies: session.user.policies,
				roles: session.user.roles,
				sub: session.user.sub,
				ueb: session.user.ueb,
				username: session.user.sub,
			},
		};
	}, [session]);

	if (loading) return <OidcFallback />;

	if (!session) {
		signIn("is");
		return <OidcFallback />;
	}

	return (
		<AuthFnsContext.Provider value={oidcFns}>
			<AuthContext.Provider value={oidcValue}>{children}</AuthContext.Provider>
		</AuthFnsContext.Provider>
	);
}
