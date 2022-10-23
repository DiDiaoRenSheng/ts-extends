//String类型扩展接口声明【全局类型声明合并】
declare global {
  interface Array<T> {
    Add(inputArray: T): void;
  }
}
export {};
