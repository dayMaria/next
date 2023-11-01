import {createContext, useContext} from 'react';

import {useToken, useUser} from './Oidc'
import HttpClient from '../libs/http';

const HttpClientsContext = createContext();

/**
 *
 * @typedef {Object} HttpClients
 * @property {HttpClient} documentation
 */

/**
 *
 * Provide all http clients
 */
const HttpClientsProvider = ({children}) => {
  const token = useToken()
  const user = useUser()

	const clients = {
		documentation: new HttpClient({
			headers: {
        authorization: `Bearer ${token}`,
        sub: user.sub,
        fullname: user.name,
        groups: user.roles
			},
			url: process.env.NEXT_PUBLIC_BACKEND_URL,
		}),
	};

	return (
		<HttpClientsContext.Provider value={clients}>
			{children}
		</HttpClientsContext.Provider>
	);
};

export default HttpClientsProvider;

/**
 *
 * @returns {HttpClients}
 */
export const useHttpClients = () => {
	const ctx = useContext(HttpClientsContext);
	return ctx;
};
