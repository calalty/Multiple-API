const fetch = require('node-fetch');

const getPotterData = async () => {
    const URL = `https://www.potterapi.com/v1/sortingHat`
    let data = await fetch(URL)

    let JSObject = await data.json();
    return JSObject;
}

module.exports = {
    getPotterData
}