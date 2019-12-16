import express from 'express';
let router = express.Router();
import mongo from 'mongodb';
import assert from 'assert';

let url = 'mongodb://localhost:27017/testProject';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', );
});

router.get('/get-data',(req,res,next)=>{
  let result = [];
  mongo.connect(url,(err,db)=>{
    assert.equal(null,err)
    let cursor = db.collection('user-data').find()
    cursor.map((doc,err)=>{
      result.push(doc)
    }),()=>{
      db.close()
      res.render('index',{items:resultrray})
    }
  })
});
router.post('/insert',(req,res,next)=>{
  let item={
    title:"Ashfaq Test",
    content:"Testing the data",
    author:"Ashfaq"
  }
  mongo.connect(url,(err,db)=>{
    assert.equal(null,err),
    db.collection('user-data').insertOne(item),(err,result)=>{
      assert.equal(null,err)
      console.log('Item Inserted');
      db.close();

    }
  })
});


export default router;
