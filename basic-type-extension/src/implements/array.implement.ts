//#region String基础原型链扩展方法

Array.prototype.Add = function Add(inputArray) {
  this.push(inputArray);
};

Array.prototype.ToList = function () {
  return new List(this);
};

//#endregion

export class List<T> {
  private _items: T[];
  private static readonly _emptyArray: [] = [];

  public set Capacity(v: number) {
    this.Capacity = v;
  }

  public get Capacity(): number {
    return this.Capacity;
  }

  public get Count(): number {
    return this.Count;
  }

  constructor();
  constructor(parameterType: number);
  constructor(parameterType: T[]);
  constructor(parameterType?: number | T[]) {
    if (parameterType instanceof Number) {
    } else if (parameterType instanceof Array) {
    } else {
      this._items = List._emptyArray;
    }
    this._items = List._emptyArray;
  }

  Add(item: T): void {}

  AddRange(collection: T[]): void {}

  Clear(): void {}
}
