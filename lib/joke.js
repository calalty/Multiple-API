const fetch = require('node-fetch');

const getJokes = async () => {
    const URL = `http://api.icndb.com/jokes/random`
    let data = await fetch(URL)

    let JSObject = await data.json();
    return JSObject;
}

module.exports = {
    getJokes
}