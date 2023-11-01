import { getSession } from "next-auth/client";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchConfig = {
	options: {
		cachePolicy: "no-cache",
		interceptors: {
			request: async ({ options }) => {
				const session = await getSession();
				const opts = options;
				opts.headers = {
					...options.headers,
					Authorization: `Bearer ${session?.accessToken}`,
					sub: session?.user.name,
					fullname: session?.user.fullName,
					groups: session?.user.roles
					//token: session?.accessToken
				};
				return opts;
			},
			response: ({ response }) => {
				if (response.ok) return response;
				throw response.data;
			}
		}
	},
	url
};

export default fetchConfig;