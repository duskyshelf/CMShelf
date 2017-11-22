const assert = require('assert');
const bodyParser = require('body-parser');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')

const app = express();
app.use(cors());

const URL = 'mongodb://mongo/default'

let db;

(function connectToDatabase() {
  MongoClient.connect(URL, (err, database) => {
    if(database) {
      db = database;
      console.log("Successfully connected to MongoDB.");
    } else {
      console.log("Failed to connect to MongoDB. Retrying...");
      setTimeout(connectToDatabase, 5000);
    }
  })
})()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/healthcheck', (req, res) => {
  res.setHeader('Content-type', 'application/json');
  if(db) {
    res.send({ status: 'OK!' });
  } else {
    res.send({ status: 'Not OK >_<' });
  }
});

app.get('/', (req, res) => {
  console.log('get request')
  db.collection('posts').find({}).toArray((err, docs) => {
    res.setHeader('Content-type', 'application/json');
    res.send({ posts: docs });
  });
});

app.get('/id/:id', (req, res) => {
  console.log('get request')
  const id = req.params.id;

  db.collection('posts').find({ id: id }).toArray((err, docs) => {
    res.setHeader('Content-type', 'application/json');
    res.send(docs);
  });
});

app.post('/new', (req, res, next) => {
  const id = req.body.id;
  const content = req.body.content;

  if (id == '' || content == '') {
    console.log("all fields must be filled");
    res.redirect('/');
  } else {
    db.collection('posts').insertOne(
      { 'id': id, 'content': content },
      (err, r) => {
        assert.equal(null, err);
        res.redirect('/');
      }
    );
  }
});

app.post('/update', function(req, res, next) {
  const id = req.body.id;
  const content = req.body.content;

  console.log('post: ', id, content)

  if (id == '' || content == '') {
    console.log("all fields must be filled");
    res.redirect('/');
  } else {
    db.collection('posts')
      .findAndModify(
        { 'id': id }, // query
        [[ '_id' , 'asc' ]], // sort order
        { $set: { content: content }}, // replace content
        {}, // options
        (err, r) => {
          assert.equal(null, err);
          res.redirect('/');
        }
      );
  }
});

app.use((req, res) => {
  res.sendStatus(404);
});

const server = app.listen(3100, () => {
  const port = server.address().port;
  console.log('Express server listening on port %s.', port);
});