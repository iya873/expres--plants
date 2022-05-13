const express = require('express');

const app = express();

port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', 'Witches Butter',];

app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});

//http://localhost:3000/2
// protocol, host, port, path*
//*path can be a url or a url param


// app.get('/hello/:firstname/:lastname', (req, res) => {
//     console.log('======================');
//     console.log('This is the entire Req Object');
//     console.log(req);
//     console.log('=======================');
// 	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
// });

app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });



app.listen(port,() => {
    console.log('Listening on port', port);
});