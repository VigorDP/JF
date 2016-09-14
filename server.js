var express = require( 'express' );
var path = require( 'path' );

var app = express()

app.use(express.static(__dirname))

app.get('*', function(req, res) {
  res.sendFile( 'E:/Local_Repository/JF/index.html')
})

var PORT = process.env.port || 8080

app.listen(PORT, function() {
  console.log('You app is running on port ' + PORT)
})
