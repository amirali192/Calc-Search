// CALCULATOR
// Input
let clac = 0, num1 = 12, num2 = 6;
// Output :
console.log("Calculator Project")
calc = num1 + num2
console.log("Sum", calc)
calc = num1 - num2
console.log("Subtraction =", calc)
calc = num1 * num2
console.log("Multiplication =", calc)
calc = num1 / num2
console.log("Division =", calc)
calc = num1 % num2
console.log("Remainder =", calc)
console.log("=======================")
// Search (EXIST OR DOES NOT EXIST)
console.log("Search (EXIST OR DOES NOT EXIST) Project")
// using the include method we can see if target is inside the string or not
let string = "cheeseBorgor", target = "cheese"
if (string.includes(target) == true) {
    console.log(target, "was found!")
}
else {
    console.log(target, "was not found!")
}
// If it was false
console.log("if it was false =")
let string2 = "cheeseBorgor", target2 = "pickles"
if (string2.includes(target2) == true) {
    console.log(target2, "was found!")
}
else {
    console.log(target2, "was not found!")
}
