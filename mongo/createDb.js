var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nodeSampledb";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;

    console.log('Database created');
    console.log(db);
    db.close();
});