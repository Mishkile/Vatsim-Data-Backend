const axios = require('axios');


const getVatsimData = async () => {
    const {data} = await axios.get('https://data.vatsim.net/v3/vatsim-data.json');
    return data;
}

module.exports = {
    getVatsimData
}