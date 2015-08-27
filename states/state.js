"use strict"

var util = require('util');
var EventEmitter = require('events').EventEmitter;

class State extends EventEmitter {

    constructor(name, value) {
        super(name, value);

        EventEmitter.call(this);
        this._this = this;
        this._name = name;
        this._value = value;
    }

    setValue(value){
        this._value = value;
        this.emit('updated');
    }

    json(){
        return {'name': this._name, 'value': this._value};
    }
}

module.exports = State;