let buildApiUrl = require('./utils').buildApiUrl;
const config = require('./config');
const fetch = require('node-fetch');

async function getImagesData(req, res) {
    const { query } = req;
    const { BASE_URL, API_KEY, SEARCH_ID } = config;

    if (!Object.keys(query).length || !query.q || !BASE_URL || !API_KEY) {
        return res.status(400).json({
            status: 'error',
            message: 'Missing required params',
        })
    }


    const apiUrl = buildApiUrl({
        baseUrl: BASE_URL,
        apiKey: API_KEY,
        cx: SEARCH_ID,
        query
    });


    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.status(400).json({
                status: 'error',
                message: err.message,
            });
        })
}


module.exports = getImagesData;