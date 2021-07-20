// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const content = require('./content.json')

const generateTalkShit = require('./models/talk_shit')

const app = express()
const port = 3000

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index', { job: content.jobs })
})

app.post('/', (req, res) => {
  const sentence = generateTalkShit(req.body.job)
  res.render('index', { job: content.jobs, sentence })
})

app.listen(port, () => {
  console.log(`Express app listening on port${port}.`)
})
