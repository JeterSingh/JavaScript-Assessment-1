 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';


//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';
var count = 0;
for(i=0; i<jsHistory.length; i++) {
    if (jsHistory[i] === "A" || jsHistory[i]==='a') {
        count=count+1;
    }
}
console.log(count + ' instances of a and A in the sentence');


//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';
var newSentence = sentence.replace(/ i/g, " I"); 
// g tag denotes global replace, otherwise only first instance will be impacted. THis is how to do it without loops and arrays
// I learned how to do this and then tried to do it the long way
var newText = text.replace(/scream/g, "Scream");
var newSentence1 = "";
var senLen = sentence.length;


// String.prototype.replaceAt=function(index, character) {
//     return this.substr(0, index) + character + this.substr(index+1,character.length - index);
// } I tried to use a function here but this doesnt work as strings are immutable

// replace function using a for loop
// this doesnt work as you use the original sentence string which hasnt changed so only the last 'i' gets replaced with 'I'
for (var i = 0; i < senLen; i++) {
    currentChar = sentence.charAt(i);
    lastChar = sentence.charAt(Math.max(i-1,0));
   
    if (currentChar === "i" && lastChar === " ") {
      newSentence1 = sentence.substr(0,i)+'I'+ sentence.substr(i+1,senLen-i); // since you are using original variable, lose changed
    }
}
console.log('Original sentence : ' + sentence);
console.log('Fix using shorthand : ' + newSentence);
console.log('Fix using a loop to walk through the string - doesnt work as you rely on original sentence that hasnt changed : '+newSentence1);
console.log(text);
console.log(newText);

var temp = sentence.split(" "); // this is the best longhand solution; split the string to make it an array that can be manipulated
for (var i = 0; i < temp.length; i++) {
    if (temp[i] === "i") {
        temp[i] = "I";
    }
}
var temp1 = temp.join(" ");
console.log(temp);
console.log("This was done using strings and arrays : " +temp1);

