var express = require('express');
var router= express.Router();

var Command= require('../models/command.model')

router.get(path='/get',function(req,res,next){
    Command.find(function(err,data){
        res.json(data)
    });
});

router.post('/post', function(req, res, next) {
    new Command({
    numCommand : req.body.numCommand,
    dateCommand : req.body.dateCommand,
    datePayment: req.body.datePayment,
    stateCommand: req.body.stateCommand
    })
    .save(
    (err,newCommand)=>{
    if (err)
    console.log("error message : "+err); else{
    console.log(newCommand);
    res.json(" : Command :" + newCommand._id +" added");
    }
    }
    );})

router.route('/:id').get((req, res) => {
    Command.findById(req.params.id)
      .then(command => res.json(command))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Command.findByIdAndDelete(req.params.id)
      .then(() => res.json('Command deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').put((req, res) => {
    Command.findById(req.params.id)
      .then(command => {
        command.numCommand = req.body.numCommand;
        command.dateCommand = req.body.dateCommand;
        command.datePayment = req.body.datePayment;
        command.stateCommand = req.body.stateCommand;
        command.save()
          .then(() => res.json('Command updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
    
module.exports = router; 