import "../index";

type A = {
  Ceshi: number;
  TestName: string;
};

const arrayA: A[] = [];

arrayA.Add({
  Ceshi: 1,
  TestName: "测试数组写入",
});

console.log(arrayA);
