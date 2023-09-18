const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const djs = {
  'hernan cattaneo': {
    'birthName': 'Hernán Cattáneo',
    'age': 58,
    'genre': 'Progressive House',
    'birthLocation': 'Buenos Aires, Argentina'
  },
  'spencer brown': {
    'birthName': 'Onofrio Spencer Jeffrey Bruno',
    'age': 29,
    'genre': 'Progressive House, Techno',
    'birthLocation': 'Los Gatos, CA, USA'
  },
  'nick warren': {
    'birthName': 'Nicholas John Warren',
    'age': 54,
    'genre': 'Electronic dance music, house, breakbeat',
    'birthLocation': 'Bristol, England'
  },

}



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:djName', (req, res) => {
  const djsName = req.params.djName.toLowerCase()
  if (djs[djsName]) {
    res.json(djs[djsName])
  } else {
    res.json(djs)
    console.log('Please choose one of the listed Djs for a their information to return.')
  }
})

app.get('/api/', (req, res) => {
  res.json(djs)
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server Running on Port ${PORT}`)
})

