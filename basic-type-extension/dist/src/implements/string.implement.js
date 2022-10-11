"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String类型扩展实现
String.prototype.TestConvert = function () {
    return this.toString();
};
// 继承String的扩展库实现
var StringExtends = /** @class */ (function () {
    function StringExtends(inputValue) {
        this._inputValue = "";
        this._inputValue = inputValue;
    }
    StringExtends.InitValue = function (inputValue) {
        return new StringExtends(inputValue);
    };
    StringExtends.prototype.TestCustrom = function () {
        return this._inputValue.toUpperCase();
    };
    return StringExtends;
}());
exports.default = StringExtends;
// interface ICustormString extends IString {}
// class A extends StringExtends implements ICustormString {}
