const express = require('express')
// npm i express espress handle-bars
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
// npm i body-parser
const app = express()
// const getMorty = require('./lib/rickmorty')
const getData = require('./lib/rickmorty')
const getPotterData = require('./lib/harrypotter')
const getJokes = require('./lib/joke')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
// takes everything as a string
app.use(bodyParser.json());
app.use(express.static('images'))

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', '.hbs')

app.get('/', async(req, res) => {
    res.render('index')
})

// app.get('/morty', async(req, res) => {
//     let data = await getMorty.getMorty()
//     console.log(data)
//     let name = data.results[0].name
//     let status = data.results[0].status
//     let species = data.results[0].species
//     let gender = data.results[0].gender
//     let location = data.results[0].location.name
//     res.render('morty', {name, status, species, gender, location})
// })


app.get('/rickmorty', async(req, res) => {
    res.render('rickmorty')
})

app.post('/rickmorty', async (req, res) => {
    let number = req.body.number;
    let data = await getData.getData(number);

    let name = data.name
    let status = data.status
    let species = data.species
    let gender = data.gender
    let origin = data.origin.name
    let image = data.image

    res.render('rickmorty', {
        data: {
            name,
            status,
            species,
            gender,
            origin,
            image
        }
    })
})

app.get('/potter', async (req, res) => {
    let data = await getPotterData.getPotterData();
    res.render('potter', { data });
})

app.get('/jokes', async (req, res) => {
    let data = await getJokes.getJokes();
    console.log(data)
    let joke = data.value.joke
    res.render('jokes', { joke });
})

app.listen(3005,  () => {
    console.log('Server is running')
})

