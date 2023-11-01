import { CircularProgress, Stack, Typography } from "@mui/material";
import { createContext, useContext, useEffect } from "react";
import { signIn, useSession } from "next-auth/client";

function AuthFallback() {
	useEffect(() => {
		document.title = "SGC - Inicio";
	}, []);

	return (
		<div className="h-screen w-screen pt-8">
			<Stack alignContent="center" justifyContent="center" spacing={3}>
				<Typography align="center" variant="h4">
					Sistema de Gestión de la Calidad
				</Typography>
				<div className="flex justify-center">
					<CircularProgress />
				</div>
			</Stack>
		</div>
	);
}

/**
 * @typedef {Object} User
 * @property {string} area
 * @property {string} email
 * @property {string} name
 * @property {string[]} roles
 * @property {string} sub
 * @property {string} ueb
 * @property {string} username
 */

const UserContext = createContext();

const OidcAuth = ({ children }) => {
	return (
		<UserContext.Provider
			value={{
				token: "accessToken",
				user: {
					area: "Area",
					email: "day@aica.cu",
					name: "Day",
					policies: [],
					roles: [],
					sub: "day",
					ueb: "Aica",
					username: "day",
				},
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

/**
 *
 * @returns {string}
 */
export const useToken = () => {
	const info = useContext(UserContext);
	return info.token;
};

/**
 *
 * @returns {User}
 */
export const useUser = () => {
	const info = useContext(UserContext);
	return info.user;
};

export default OidcAuth;
