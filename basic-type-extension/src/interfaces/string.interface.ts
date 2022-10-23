import StringExtends from "../implements/string.implement";

//String类型扩展接口声明【全局类型声明合并】
declare global {
  interface String {
    /**
     * 当前字符串是否为空字符串
     */
    IsEmpty(): boolean;

    /**
     * 获取StringExtends【字符串扩展对象】
     */
    GetStringExtends(): StringExtends;
  }
}

// 自定义静态类型扩展接口声明
export interface IString {
  TestCustrom(): string;
}
