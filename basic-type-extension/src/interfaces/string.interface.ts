// String类型扩展接口声明

interface String {
  /**
   * 测试转换
   */
  TestConvert(): string;

  ToNumber(): number;

  IsNullOrEmpty(): boolean;
}

// 自定义静态类型扩展接口声明
interface IString {
  TestCustrom(): string;
}
