var express = require('express');
var router = express.Router();
var Model = require('./model/model');
router.get('/:id?' , function(req,res,next){
    if (req.params.id){
        Model.getModelById(req.params.id,function(err, rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Model.getAllModel(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/',function(req,res,next){
    Model.addModel(req.body,function(err,count){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    Model.deleteModel(req.params.id,function(err,count){
        if (err){
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next){
    Model.updateModel(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;