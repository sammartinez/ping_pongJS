
var pingPong = function(num) {

        var numArray = [];

    for(var i = 1; i<= num; i++)  {
        if(i % 3 === 0 && i % 5 === 0) {
            numArray.push("ping-pong");
        } else if(i % 3 === 0) {
            numArray.push("ping");
        } else if(i % 5 === 0) {
            numArray.push("pong");
        } else {
            numArray.push(i);
        }
    }   return numArray;
}

$(document).ready(function() {
    $("form#pingPong").submit(function(event){
        var number = ($("input#number").val());
        var result = pingPong(number);

        $(".answer").text(result.join(", "));
        $("#result").show();
        event.preventDefault();
    });
});
