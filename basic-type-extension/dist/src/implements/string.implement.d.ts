export default class StringExtends implements IString {
    private _inputValue;
    constructor(inputValue: string);
    static InitValue(inputValue: string): StringExtends;
    TestCustrom(): string;
}
