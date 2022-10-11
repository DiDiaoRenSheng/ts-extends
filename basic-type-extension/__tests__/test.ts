import { StringExtends } from "../index";

let ceshi = "ceshi";

console.log(ceshi.TestConvert());
console.log(StringExtends.InitValue("Good").TestCustrom());

test("TestConvert", () => {
  expect(ceshi.TestConvert()).toBe(ceshi);
});
