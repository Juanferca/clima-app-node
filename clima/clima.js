const axios = require('axios');


const getClima = async(lat, lng) => {



    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5f111a66c670a4720627ee22a9555826`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay datos para coordenadas ${lat} y ${lng}`);
    }
    return resp.data.main.temp;
}

module.exports = {

    getClima
}