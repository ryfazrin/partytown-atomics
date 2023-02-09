const express = require('express')
const app = express()
const port = 3000

var path = require('path');
var public = __dirname + '/public/';

// app.use('/', express.static(public))
app.use('/', express.static('public', {
  setHeaders: function(res, path) {
    res.set({
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    })
  }
}));

app.get('/', (req, res) => {
  res.set({
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin'
  })
  res.sendFile(path.join(public + 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})