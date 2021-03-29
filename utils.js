function formatQuery(query) {
    let queryString = [];
    for (let item in query)
        if (query.hasOwnProperty(item)) {
            queryString.push(encodeURIComponent(item) + "=" + encodeURIComponent(query[item]));
        }
    return queryString.join("&");
}

function buildApiUrl(obj) {
    const baseUrl = obj.baseUrl;
    const query = formatQuery(obj.query);
    const apiKey = obj.apiKey;

    return `${baseUrl}&${query}&key=${apiKey}`
}

exports.buildApiUrl = buildApiUrl;