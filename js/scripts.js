
var pingPong = function(num) {

        if(num % 3 === 0 && num % 5 === 0) {
            return "ping-pong";
        } else if(num % 3 === 0) {
            return "ping";
        } else if(num % 5 === 0) {
            return "pong";
        } else {
            return num;
        }

}

$(document).ready(function() {
    $("form#pingPong").submit(function(event){
        var number = ($("input#number").val());
        var result = pingPong(number);

        $(".answer").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
