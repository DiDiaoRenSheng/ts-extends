import "../index";

test(String.prototype.IsEmpty.name, () => {
  expect("TestString".IsEmpty()).toBe(false);
  expect("".IsEmpty()).toBe(true);
});

test(String.prototype.GetStringExtends.name, () => {
  expect("ceShi".GetStringExtends().TestCustrom()).toBe("CESHI");
});
