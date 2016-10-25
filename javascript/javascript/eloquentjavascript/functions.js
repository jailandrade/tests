var square = function(x) {
    return x * x;
};

var makeNoise = function() {
    console.log('zzzzzzzz');
};

var power = function(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
	result *= base; 
    }
    return result;
};

function cube(x) {
    return x * x * x;
}

function multiplier(factor) {
    return function(number){
	return number*factor; 
    }
}

console.log(square(12));
makeNoise();
console.log(power(2, 4));
console.log(cube(20));
var twice = multiplier(8);
console.log(twice(20));
