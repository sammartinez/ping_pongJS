
describe('pingPong', function() {
    it("checks to see if number is divisible by three", function(){
        expect(pingPong(3)).to.eql([1, 2,"ping"]);
    });

    it("checks to see if number is divisible by five", function(){
        expect(pingPong(5)).to.eql([1 , 2,"ping", 4,"pong"]);
    });

    it("checks to see if number is divisible by both three and five", function(){
        expect(pingPong(15)).to.eql([1 , 2,"ping", 4,"pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong"]);
    });

});
