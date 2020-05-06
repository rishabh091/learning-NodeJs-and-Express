var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'spike'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected');

    getSellers(con);
    
});

function getSellers(con){
    let query = 'select * from user;';
    con.query(query, (err, result) => {
        if(err) throw err;

        result.forEach(element => {
            console.log(element.id);
            console.log(element.first_name);
            console.log(element.last_name);
        });
    });
}


