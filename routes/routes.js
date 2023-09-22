const express = require('express');
const router = express();
const mongoose = require('mongoose');
const visitor_model = require('../models/schema');
const path = require('path');

router.use('/static', express.static(path.join(__dirname, '../static')));

router.get('/home', (req,res) => {

    res.sendFile('landing.html',{root: path.join(__dirname,'../html/')});
    
})


router.get('/about', (req,res) => {

    res.sendFile('about.html',{root: path.join(__dirname,'../html/about/')})
})


//middleware core
async function get_vis(req,res,next) {

    let vis;

    try{

        vis = await visitor_model.findById(req.params.id);

        if (vis === null){ //empty visitor id 

            return res.status(404).json({message : 'Invalid Request'});
        }

    }catch(err){

        return res.status(500).json({message: 'Internal Server Error'});

    }

    res.vis = vis;
    next();
}

module.exports = router;    // exporting this so it can be used in the server side script
