var express = require('express');
var router = express.Router();
var Scene = require('./scene');
var _ = require('lodash');
var states = require('../states/route');

/* test states */
var scenes = [
    new Scene(['at_home', "yams" ])];

/* GET users listing. */
router.get('/:name', function(req, res, next) {
    res.send(states[0].json())
});

router.get('/:name/:value', function(req, res, next) {
    var state = _.find(states, function(s){return s._name == req.params.name});
    state.setValue(req.params.value);
    res.send(state.json())
});

module.exports = router;