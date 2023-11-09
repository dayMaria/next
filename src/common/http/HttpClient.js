export default class HttpClient {
    constructor({ getToken, headers = {}, url }) {
        this.getToken = getToken;
        this.headers = headers;
        this.url = url;
    }

    async delete({ headers, responseType, url }) {
        return this.fetch({
            init: {
                headers,
                method: 'DELETE',
            },
            responseType,
            url,
        });
    }

    async get({ headers = {}, responseType = 'json', url }) {
        return this.fetch({
            init: {
                headers,
                method: 'GET',
            },
            responseType,
            url,
        });
    }

    async post({ data, headers = {}, responseType, url }) {
        return this.postOrPut({ data, headers, responseType, url }, 'POST');
    }

    async put({ data, headers = {}, responseType, url }) {
        return this.postOrPut({ data, headers, responseType, url }, 'PUT');
    }

    async postOrPut(
        { data, headers = {}, responseType, url },
        method
    ) {
        let body;
        let reqHeaders = Object.assign(this.headers, headers);

        if (!Object.keys(data).some((key) => data[key] instanceof File)) {
            body = JSON.stringify(data);
            reqHeaders = {
                ...reqHeaders,
                'Content-Type': 'application/json; charset=UTF-8',
            };
        } else {
            body = new FormData();
            Object.keys(data).forEach((key) => {
                if (data[key] instanceof File) {
                    body.append(key, data[key]);
                } else {
                    body.append(key, JSON.stringify(data[key]));
                }
            });
        }

        return this.fetch({
            init: {
                body,
                headers: reqHeaders,
                method,
            },
            responseType,
            url,
        });
    }

    async fetch({ init, responseType, url }) {
        let data = null;
        const { headers = {}, ...reqInit } = init;
        const response = await fetch(`${this.url}/${url}`, {
            cache: 'no-cache', // Caching is done by react-query
            headers: Object.assign(this.headers, headers, {
                authorization: this.getToken ? 'Bearer ' + (await this.getToken()) : '',
            }),
            ...reqInit,
        });
        if (response.ok) {
            if (responseType === 'blob') data = await response.blob();
            if (responseType === 'json') data = await response.json();
            if (responseType === 'text') data = await response.text();
            return data;
        } else {
            let error = await response.text();
            try {
                error = JSON.parse(error);
            } catch (_) {
                /* return error as plain text */
            }
            throw new Error(error);
        }
    }
}
