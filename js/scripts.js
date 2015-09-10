
var pigLatin = function(phrase){
    var splitPhrase = phrase.split(" ");
    var wordArray = new Array();
    var index = 0;
    while(index < splitPhrase.length){
        var word = splitPhrase[index];
        if (word.substring(0,2).match(/qu/)) {
            word = word.substring(2, word.length) + word[0] + word[1];

        }else if (word.substring(1,3).match(/qu/)) {
            word = word.substring(3, word.length) + word[0] + word[1] + word[2];

        }else if (word.match(/[^aeiou]/) && word[1].match(/[aeiou]/)) {
            word = word.substring(1, word.length) + word[0];

        }else if(word.match(/[^aeiouy](\w{2})/)) {
            word = word.substring(2, word.length) + word[0] + word[1];
        }

        word += "ay";
        wordArray.push(word);
        index++;
    }
    return wordArray.join(' ');
}

$(document).ready(function() {
    $("form#pigLatin").submit(function(event){
        var phrase = ($("input#phrase").val());
        var result = pigLatin(phrase);

        $(".answer").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
