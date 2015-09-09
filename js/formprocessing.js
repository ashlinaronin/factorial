$(document).ready(function() {
    $("form#factorial").submit(function(event) {
        var number = $("input#number").val();
        var factorialResult = factorial(number);

        $("#result").text(factorialResult);

        $("#result").show();
        event.preventDefault();
    });
});
