var express = require('express');
var router = express.Router();
var State = require('./state');
var _ = require('lodash');




module.exports = function(states) {

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

    return router;
};