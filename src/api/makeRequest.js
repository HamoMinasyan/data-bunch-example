// SIMPLE EXAMPLE

export const getJson = (url = "") => {
    return fetch(url )
        .then(response => response.json())
        .then(data => Promise.resolve(data))
        .catch(err => Promise.reject(err));
};