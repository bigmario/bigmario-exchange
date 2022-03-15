const url = 'https://api.coincap.io/v2'

// function getAssets() {
//     return fetch(`${url}/assets?limit=20`)
//         .then(res => res.json)
//         .then(res => res.data)
// }

// export default {
//     getAssets
// }

function getAssets() {
    return getRequest("assets?limit=20");
}

function getRequest(endpoint) {
    return fetch(`${url}/${endpoint}`, {
        mode: "cors",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then((response) => {
            return response.data;
        })
        .catch(error => { console.log('request failed', error); }); // Syntax error: unexpected end of input
}

export default { getAssets };