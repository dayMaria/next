/**
 * @private
 * @param {Object} params
 * @param {Object} [params.data] Data to send
 * @param {string} [params.dataKey] Key to append data. For example, to use with FormData or like graphql: { data: {...} }
 * @param {boolean} [params.hasFiles=false]
 * @returns {BodyInit}
 */
function createBody({ data, dataKey, hasFiles }) {
	if (hasFiles) {
		const body = new FormData();
		if (data) {
			if (dataKey !== '') {
				const formData = {};
				for (const key of Object.keys(data)) {
					if (data[key] instanceof File) {
						formData[key] = data[key];
					} else {
						formData[key] = JSON.stringify(data[key]);
					}
				}
				body.append(dataKey, formData);
			} else {
				for (const key of Object.keys(data)) {
					if (data[key] instanceof File) {
						body.append(key, data[key]);
					} else {
						body.append(key, JSON.stringify(data[key]));
					}
				}
			}
		}
		return body;
	}
	if (dataKey) {
		return JSON.stringify({ [dataKey]: data });
	}
	return JSON.stringify(data);
}

/**
 * @private
 * @param {Object} params
 * @param {Object.<string, string>} params.defaultHeaders
 * @param {boolean} [params.hasFiles]
 * @returns {Object.<string, string>}
 */
function createHeaders({ defaultHeaders, hasFiles }) {
	const headers = {
		Accept: '*/*',
		...defaultHeaders,
	};
	if (!hasFiles) {
		headers['Content-Type'] = 'application/json';
	}
	return headers;
}

/**
 * @param {Object} params
 * @param {Response} params.response
 * @param {'json' | 'blob' | 'text' | null} [params.responseType=json]
 * @returns {Promise.<Object | Blob | string | null>}
 */
async function processResponse({ response, responseType = 'json' }) {
	if (response.status >= 400) {
		const json = await response.json();
		throw new Error(json);
	}
	switch (responseType) {
		case 'json': {
			return response.json();
		}
		case 'blob': {
			return response.blob();
		}
		case 'text': {
			return response.text();
		}
		default:
			return null;
	}
}

/**
 * A convenient wrapper for fetch
 */
export class HttpClient {
	/**
	 * @param {Object} params
	 * @param {Object.<string, string>} [params.defaultHeaders]
	 * @param {string} [params.dataKey] Key to append data. For example, to use with FormData or like graphql: { data: {...} }
	 * @param {string} params.baseUrl Base url
	 */
	constructor(params) {
		this.defaultHeaders = params.defaultHeaders || {};
		this.dataKey = params.dataKey || '';
		this.baseUrl = params.baseUrl;
	}

	/**
	 * @param {Object} params
	 * @param {string} [params.id] ID of object to delete
	 * @param {string[]} [params.ids] To delete many objects
	 * @param {'json' | 'blob' | 'text' | null} [params.responseType]
	 * @param {string} params.url Resource
	 * @throws If either id nor ids were provided
	 * @returns {Promise.<Object | Blob | string | null>}
	 */
	async delete(params) {
		const { responseType, url, id, ids } = params;
		let response;
		if (id) {
			response = await fetch(`${this.baseUrl}${url}/${id}`, {
				headers: createHeaders({ defaultHeaders: this.defaultHeaders }),
				method: 'DELETE',
			});
		} else if (ids) {
			response = await fetch(`${this.baseUrl}${url}`, {
				body: JSON.stringify({ ids }),
				headers: createHeaders({ defaultHeaders: this.defaultHeaders }),
				method: 'DELETE',
			});
		} else {
			throw new Error('Neither id nor ids were specified');
		}
		return processResponse({ response, responseType });
	}

	/**
	 * @param {Object} params
	 * @param {'json' | 'blob' | 'text' | null} [params.responseType]
	 * @param {string} params.url Resource (with querystring)
	 * @returns {Promise.<Object | Blob | string>}
	 */
	async get(params) {
		const { responseType = 'json', url } = params;
		const response = await fetch(`${this.baseUrl}${url}`, {
			headers: createHeaders({ defaultHeaders: this.defaultHeaders }),
		});
		return processResponse({ response, responseType });
	}

	/**
	 * @param {Object} params
	 * @param {Object} [params.data] Data to send
	 * @param {boolean} [params.hasFiles]
	 * @param {'json' | 'blob' | 'text' | null} [params.responseType]
	 * @param {string} params.url Resource
	 * @returns {Promise.<Object | Blob | string | null>}
	 */
	async post(params) {
		const { data, hasFiles, responseType, url } = params;
		const response = await fetch(`${this.baseUrl}${url}`, {
			body: createBody({ data, dataKey: this.dataKey, hasFiles }),
			headers: createHeaders({ defaultHeaders: this.defaultHeaders, hasFiles }),
			method: 'POST',
		});
		return processResponse({ response, responseType });
	}

	/**
	 * @param {Object} params
	 * @param {Object} params.data Data to send
	 * @param {string} params.id
	 * @param {'json' | 'blob' | 'text' | null} [params.responseType]
	 * @param {string} params.url Resource
	 * @returns {Promise.<Object | Blob | string | null>}
	 */
	async put(params) {
		const { data, id, responseType, url } = params;
		const response = await fetch(`${this.baseUrl}${url}/${id}`, {
			body: createBody({ data, dataKey: this.dataKey }),
			headers: createHeaders({ defaultHeaders: this.defaultHeaders }),
			method: 'PUT',
		});
		return processResponse({ response, responseType });
	}
}

export default HttpClient;
