"use strict";

var error = require("./../../error");
var Util = require("./../../util");


var DatumConvert = module.exports = {
    DatumConvert : function(params, callback){
        var self           = this;
        self.name          = "DatumConvert";
        self.config        = self.__proto__.router[self.name];
        self.requestClient = self.__proto__.requestClient;

        if( self.config.defaults ){
            Util.extend(params, self.config.defaults, true);
        }

        self.options = {
            host : self.config.host,
            port : self.config.protocol == "http" ? 80 : 443,
            path : self.config.path + Util.makeParams(params),
            method : self.config.method
        };
        

        self.requestClient(self.config, self.options, callback);
    }
};


