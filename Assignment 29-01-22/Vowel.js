// Take a string from the user
var str = prompt("Enter any String: ");
// converting string into array
var ArrStr = str.split("");
// print string by user
console.log("Given String by user is : " + str);
// print converted array
console.log(ArrStr);
// counter initialize
var ctr = 0;
// using for loop for check all elements in the array to get vowels
for (var i = 0; i < ArrStr.length; i = i + 1) {
    // use switch case for findig vowels in given string
    switch (ArrStr[i]) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            ctr = ctr + 1;
            break;
    }
}
// print all counts vowel in the given string
alert("Total vowels in Given String is : " + ctr);