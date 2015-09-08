///1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
var num8 = parseInt(string8);
function sum (x,y,z) {
    return x + y + z;
}
var total = sum(num8,num10,one);
//console.log(num10 + num8 + one);
console.log('Your total is : ' +total);

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
var validInput = 0;
function remainder(num,x) {return num % x;}
while (validInput === 0) {
    var x =  prompt("Enter a Value between 20 and 100 that is divisble by 3","0");
    if (!isNaN(x)) {
        var numx = parseInt(x);
        if (x > 20 && x < 100) {
            if (remainder(x, 3) === 0) {
                validInput = 1;
            } 
        } // end of nested if
    } // end of main if
}
console.log('you entered ' +x +", a valid number between 20 and 100 divisible by 3");
//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var sum = 0;
var average = 0;
var len = scores.length;
for (var i =0; i < scores.length; i++) {
    sum = sum + scores[i];
}
average = sum/scores.length;
console.log('Total of ' +len + ' scores is: ' +sum);
console.log('Average of ' +len + ' scores is: ' +average);
