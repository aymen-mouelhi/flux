/**
 * Created by I060307 on 22/03/2015.
 */

var Colr = require('colr');
var _ = require('lodash');

var Color = function (stringOrColr) {
    this._colr = _.isString(stringOrColr) ?
        Colr.fromHex(stringOrColr) :
        stringOrColr;
};

Color.prototype.toString =  function () {
    return this._colr.toHex();
};

Color.prototype.darken = function (val) {
    return new Color(this._colr.clone().darken(val));
};

Color.prototype.lighten = function (val) {
    return new Color(this._colr.clone().lighten(val));
};

module.exports = Color;