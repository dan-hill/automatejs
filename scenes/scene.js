"use strict"

var util = require('util');
var EventEmitter = require('events').EventEmitter;

class Scene extends EventEmitter {

    constructor(states) {
        super();
        this._states = states;
        EventEmitter.call(this);
    }

    json(){
        return {'name': this._name, 'value': this._value};
    }
}

module.exports = Scene;