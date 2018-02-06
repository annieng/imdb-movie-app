const express = require('express')
const app = express()
const port = process.argv[2] || 4420

app.use(express.static(public))

app.set('view engine', 'ejs')

app.listen(4420, () => {
  console.log('port 4420 is the weed channel tuning in')
  console.log('type CTRL + C to quit the weed')
})
