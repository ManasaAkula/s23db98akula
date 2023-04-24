var express = require('express');
const shoes_controlers= require('../controllers/shoes');
var router = express.Router();

/* GET users listing. 
class shoes{
    constructor(shoes_type, shoes_name, shoes_cost){
        this.shoes_type=shoes_type;
        this.shoes_name=shoes_name;
        this.shoes_cost=shoes_cost;
    }
}

/* GET home page. 
router.get('/', function(req, res, next) {
    let s1= new shoes('Knee-high','Nike',6000);
    let s2= new shoes('Earth shoe','Adidas',4000);
    let s3= new shoes('Flip-flops','Reebok',5000);
  res.render('shoes', { title: 'Search Results Shoes',shoes: [s1,s2,s3] });
});*/

router.get('/', shoes_controlers.shoes_view_all_Page );
router.get('/detail', shoes_controlers.shoes_view_one_Page);
router.get('/create', shoes_controlers.shoes_create_Page);
//router.get('/update', shoes_controlers.shoes_update_Page);
router.get('/delete', shoes_controlers.shoes_delete_Page);
module.exports = router;

const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
    /* GET update costume page */
    
router.get('/update', secured,shoes_controlers.shoes_update_Page);
    
