var express = require('express');
var router = express.Router();

/* GET users listing. */
class shoes{
    constructor(shoes_type, shoes_name, shoes_cost){
        this.shoes_type=shoes_type;
        this.shoes_name=shoes_name;
        this.shoes_cost=shoes_cost;
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
    let s1= new shoes('Knee-high','Nike',6000);
    let s2= new shoes('Earth shoe','Adidas',4000);
    let s3= new shoes('Flip-flops','Reebok',5000);
  res.render('shoes', { title: 'Search Results Shoes',shoes: [s1,s2,s3] });
});

module.exports = router;
