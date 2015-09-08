describe('factorial', function() {
    it("is 1 for 0", function() {
        expect(factorial(0)).to.equal(1);
    });

    it("is 120 for 5", function() {
        expect(factorial(5)).to.equal(120);
    });

    it("is 39916800 for 11", function() {
        expect(factorial(11)).to.equal(39916800);
    });
});
