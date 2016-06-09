var express = require('express'),
    bodyParser = require('body-parser'),
    faker = require('faker'),
    app = express(),
    port = 8080;




app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Here is an example of using faker to generate so fake data

app.get('/api/user', function(req, res) {
    res.json({
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        bio: faker.lorem.sentence(),
        image: faker.image.avatar()
    });
});


app.listen(port, function () {
    console.log('Listening on port', port);
});



