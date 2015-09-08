var factorial = function(number) {
    var result = 0;

    if (number === 0) {
        return 1;
    } else if (number > 0) {
        return number * factorial(number-1);
    }


}
