import { Constants } from "../common/constants";
import { IString } from "../interfaces/string.interface";

//#region String基础原型链扩展方法

String.prototype.IsEmpty = function IsEmpty() {
  return this === Constants.STRING_EMPTY;
};

String.prototype.GetStringExtends = function GetStringExtends() {
  return new StringExtends(this.valueOf());
};

//#endregion

// 继承String的扩展库实现
export default class StringExtends implements IString {
  private _inputValue: string = "";
  public constructor(inputValue: string) {
    this._inputValue = inputValue;
  }
  public static InitValue(inputValue: string) {
    return new StringExtends(inputValue);
  }
  TestCustrom(): string {
    return this._inputValue.toUpperCase();
  }
}

// interface ICustormString extends IString {}

// class A extends StringExtends implements ICustormString {}
