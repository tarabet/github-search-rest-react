export const queryGithub = (url) => {
    const reqOpts = {
        method: "GET"
    };

     return fetch(url, reqOpts);
};