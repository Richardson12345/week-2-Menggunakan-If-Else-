

var word = 'Javascript ';
var second = 'is ';
var third = 'awesome ';
var fourth = 'and ';
var fifth = 'I ';
var sixth = 'love ';
var seventh = 'it!';

console.log(word + second + third + fourth + fifth + sixth + seventh);

//part 1
console.log(' ')

var word = 'wow JavaScript is so cool';

var firstWord = word [0] + word [1] + word [2];
var secondWord = word [4] + word [5] + word [6] + word [7] + word [8] + word [9] + word [10] + word [11] + word [12] + word [13];
var thridWord = word [15] + word [16];
var fourthWord = word [18] + word [19];
var fifthWord = word [21] + word [22] + word [23] + word [24];

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thridWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// part 2
console.log(' ')

var word = 'wow JavaScript is so cool';

var firstWord = word.substring(0,3);
var secondWord = word.substring(4,14);
var thridWord = word.substring(15,17);
var fourthWord = word.substring(18,20);
var fifthWord = word.substring(21,25);

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thridWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// part 3
console.log(' ')

var word = 'wow JavaScript is so cool';

var firstWord = word.substring(0,3);
var secondWord = word.substring(4,14);
var thridWord = word.substring(15,17);
var fourthWord = word.substring(18,20);
var fifthWord = word.substring(21,25);

var firstWordLength = firstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thridWord.length;
var fourthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;

console.log('First Word: ' + firstWord + ', with length ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length ' + secondWordLength);
console.log('Third Word: ' + thridWord + ', with length ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length ' + fifthWordLength);

// part 4 