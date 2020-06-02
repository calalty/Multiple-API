const fetch = require('node-fetch')


const getData = async (number) => {
    let data = await fetch(`https://rickandmortyapi.com/api/character/${number}`)

    let JSObject = await data.json()

    return JSObject
}


module.exports = {
    getData
}