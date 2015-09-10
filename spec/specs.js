
describe('pingPong', function() {
    it("checks to see if number is divisible by three", function(){
        expect(pingPong(3)).to.equal("ping");
    });

    it("checks to see if number is divisible by five", function(){
        expect(pingPong(5)).to.equal("pong");
    });

    it("checks to see if number is divisible by both three and five", function(){
        expect(pingPong(15)).to.equal("ping-pong");
    });

    it("checks to see if number is not divisible by both three and five", function(){
        expect(pingPong(17)).to.equal(17);
    });
});
