const connection = require('../sql/api')
// showwing the database
const showBeers =  function(req, res){
  console.log('inside my get beers route');
  const sql = "SELECT* from top5_beers";
  connection.query(sql, function(err, results){
    if(err) {
      console.log(`ERR: ${err}`);
      res.status(500).send('internal service err')
    };
    console.log(results);
    res.json(results)
  })
}

//getting the beers by the id

const showBeersById = function(req, res){
  console.log('in the id beers route');
  const sql = `SELECT * from top5_beers where beer_id = '${req.params.id}'`;
  connection.query(sql, (err, res) => {
    if(err){
      console.log(`err : ${err}`);
      res.status(500).send(`internal service error (show beers by id)`)
    };
    console.log(res);
    res.json(res)
  })
};

//creating new beers

const createBeer = (req, res) => {
  console.log('in the /POST');

  let beer_name = req.body.beer_name;
  let beer_type = req.body.beer_type;
  let beer_abv = req.body.beer_abv;

  if(req.body) {
    let sql = `INSERT into top5_beers values (beer_id, ?, ?, ?)`;
    let body = [];

    body.push(beer_name)
    body.push(beer_type)
    body.push(beer_abv);

    connection.query(sql, body, (err) => {
      if(err) {
        console.log(`err: '${err}'`);
        res.status(500).send(`internal service err (create beer)`)
      }
      res.send(`added new beer: ${body}`)
    }
    )
  }
};

//updating beer//
const updateBeer  = (req, res) => {
  console.log('In the /PUT games route');

  let sql = `UPDATE top10_video_games SET
  beer_name = ?,
  beer_type = ?,
  beer_abv
  WHERE beer_id = ${req.params.id}`;
  let body = [];

  body.push(req.body.beer_name);
  body.push(req.body.beer_type);
  body.push(req.body.beer_abv);

  connection.query(sql, body, (err) => {
    if(err) {
      console.log(`ERROR: ${err}`);
      res.status(500).send(`err (create brew)`)
    }
    res.send(`updated beer: ${body}`)
  })
};


//deleting beer
const deleteBeer = (req, res) => {
  console.log(' /DELETE route');
  
  let sql = `DELETE FROM top5_beers WHERE beer_id = ${req.params.id}`;

  connection.query(sql, (err) => {
    if(err) {
      console.log(`err: ${err}`);
      res.status(500).send(`err (create beer)`)
    }
    res.send(`sdeleted beer: ${req.params.id}`)
  })
};

module.exports = {showBeers, showBeersById, createBeer, updateBeer, deleteBeer}