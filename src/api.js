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

function getAsset(coin) {
    return getRequest(`assets/${coin}`);
}

function getAssetHistory(coin) {
    // const now = new Date()
    // const end = now.getTime()
    // now.setDate(now.getTime() - 1)
    // const start = now.getTime()

    return getRequest(`assets/${coin}/history?interval=d1`)
    // return getRequest(`assets/${coin}/history?interval=d1&start=${start}&end=${end}`)
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


export default { getAssets, getAsset, getAssetHistory };