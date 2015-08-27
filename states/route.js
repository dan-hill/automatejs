var express = require('express');
var router = express.Router();
var State = require('./state');
var _ = require('lodash');

var states = [new State('at_home', false), new State('yams', 'baked')];
/* GET users listing. */
router.get('/:name', function(req, res, next) {
    var state = _.find(states, function(s){return s._name == req.params.name});
    res.send(state.json())
});

router.get('/:name/:value', function(req, res, next) {
    var state = _.find(states, function(s){return s._name == req.params.name});
    state.setValue(req.params.value);
    res.send(state.json())
});

module.exports = router;