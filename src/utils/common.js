import { githubEndpoint } from "../config/config";

export const queryGithub = (query) => {
    const reqOpts = {
        method: "GET"
    };

    const url = `${githubEndpoint}?q=${query}`;

     return fetch(url, reqOpts)
        .then((data) => data.json()
        .then((dataJson) => dataJson.items));
};