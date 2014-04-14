StringUtil = require('../lib/string/StringUtil');

describe("StringUtil", function() {
    it("should set prototype.min to a function", function() {
        expect("a".min(4)).toEqual("a   ");
    });
    it("should set prototype.premin to a function", function() {
        expect("a".premin(4)).toEqual("   a");
    });
    it("should set prototype.repeat to a function", function() {
        expect("abc".repeat(4)).toEqual("abcabcabcabc");
    });
    it("should set prototype.iff to a function", function() {
        expect("abc".iff(true)).toEqual("abc");
    });
    it("should set prototype.iff to a function", function() {
        expect("abc".iff(false)).toEqual("");
    });
    it("should set prototype.esc to a function", function() {
        expect("^$".esc).toEqual("\\^\\$");
    });
});