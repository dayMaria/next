import { createContext, useContext, useState } from "react";
import useAuth from "./useAuth";
import FormAuth from "./FormAuth";

const SignOutContext = createContext();
const UserContext = createContext();

export default function Auth({ children }) {
	const [login, loading] = useAuth();
	const [user, setUser] = useState();

	const handleSubmit = data => {
		login(data).then(obj => {
			setUser(obj);
		});
	};

	if (user)
		return (
			<SignOutContext.Provider value={() => setUser()}>
				<UserContext.Provider value={user}>{children}</UserContext.Provider>
			</SignOutContext.Provider>
		);

	return (
		<FormAuth onSubmit={handleSubmit} key={Math.random()} loading={loading} />
	);
}

export function useUser() {
	return useContext(UserContext);
}

export function useSignOut() {
	return useContext(SignOutContext);
}
