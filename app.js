//ASSIGNMENT SOLUTIONS FROM 16 TO 30:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//TASK 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestArr = ["ali", "hassan", "zareen", "alishba"];
var canNotAttend = "ali";
var newGuest = "abdullah";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", i found a bigger dinner table so i invited more peoples."));
});
// part 2 began
var guestBeg = "anabia";
guestArr.unshift(guestBeg);
console.log(guestArr);
//part 3 middle
var middleGuest = "mehak";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//part  4 append
guestArr.push("zeeshan");
console.log(guestArr);
//part 5
guestArr.map(function (items) {
    return console.log("dear ".concat(items, ", you are invited in the more people list on dinner"));
});
//to the remaining two guests
guestArr.map(function (items) {
    return console.log("dear ".concat(items, ", you are invited in the more people list on dinner"));
});
//  task 17
//initial list of guests.
var guests = ["ali", "hamza"];
//informing that onlyntwo peoples are invited
console.log("due to limited space, only two people  can be invited for dinner.");
//removing guests until only two names remain.
while (guests.length > 2) {
    var removedGuest = guests.pop();
    //remove the last guest from the list
    console.log("sorry, ".concat(removedGuest, ", you are no longer invited to dinner."));
}
//printing invitition to the remaining two guests
guests.forEach(function (guests) {
    console.log("dear ".concat(guests, ", you are still invited to the dinner."));
});
//removing the last two names from thr list
//printing the final list to confirm its empty
console.log("Final guest list:", guests);
//task 18
//store the locations in an array
var placesToVisit = ["tokyo", "pakistan", "america", "china", "japan"];
//print the array in its otiginal order
console.log("original order:", placesToVisit);
//print the array in alphabetical order without modifying the actual list
console.log("alphabetical order:", __spreadArray([], placesToVisit, true).sort());
//show that the array is still in its original order
console.log("original order after sorting:", placesToVisit);
//print the array in reverse alphabetical order without changing the order if the 
console.log("reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
//show the array in still in its original order
console.log("original order after reverse sorting:", placesToVisit);
//reverse the order of the list
placesToVisit.reverse();
console.log("reverse order:", placesToVisit);
//reverse the order of the list again to grt back to the original order 
placesToVisit.reverse();
console.log("back to original order:", placesToVisit);
//sort the array in alphabetical order
placesToVisit.sort();
console.log("sorted in alphabetical order:", placesToVisit);
//sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placesToVisit);
//task 19
//  Dinner Guests: Working with one of the programs from Exercises 14 through 
//  18, print a message indicating the number of people you are inviting to dinner.
var invitation = ["ali", "hamza"];
var count_invitations = invitation.length;
console.log("".concat(count_invitations, " people will come to the dinner"));
//task 20
//think of something you could store in a array.for eg you could make a list
//of mountains, river,countris,cities,languages,or anything else you'd like
//write a program that creates a list containing these items.
//  let country: String[] = ["pakistan","england","america","iraq","japan"]
console.log("list of country:");
console.log(country);
//task 21
//think of something you could store in a typescript object.write a program 
//that cretes objects containing these items.
var person = { name: "shamaima", fname: "female", age: 18 };
console.log(person);
//task 22
//  intentional Error: If you haven’t received an array index error
//   in one of your programs yet, try to make one happen. Change an index
//    in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// console.log(days{7})
console.log(days[6]);
//task 23
// Conditional Tests: Write a series of conditional tests. Print a statement
//  describing each test and your prediction for the results of each test. Your code should look something like this:
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car == 'subaru');
console.log("is car != 'honda city'? predict true");
console.log(car != 'honda city');
console.log("is car == 'subaru'? pridict false");
console.log(car == 'subaru');
console.log("is car == 'SUBARU'? pridict false");
console.log(car == 'SUBARU');
console.log("is car.length == 6? predict true");
console.log(car.length != 6);
console.log("is car.length == 10? predict true");
console.log(car.length != 10);
console.log("is 10 > 45 ? predict  false");
console.log(10 > 45);
console.log("is 3 <= 2 ? predict  false");
console.log(3 <= 2);
console.log("is 72 >= 83? predict  false");
console.log(72 >= 83);
console.log("is car == 'subaru' && car.length ==6? predict true");
console.log(car == 'subaru' && car.length == 6);
//task 24
//  More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//  If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//  • Tests for equality and inequality with strings
//  • Tests using the lower case function
//  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//  • Tests using "and" and "or" operators
//  • Test whether an item is in a array
//  • Test whether an item is not in a array
var name_1 = "shamaima";
var name_2 = "shamaima hassan";
var name_3 = " miss shamaima hassan";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    // console.log("names are not equal")
}
if (name_1 != name_2) {
    console.log("names are equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 22) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) { //younger
    console.log("younger");
}
if (age_2 >= age_1) { //greater
    console.log("older");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 22) {
    console.log("person is not eligible for vote");
}
var country = ["pakistan", "india", "japan", "china"];
if (country.includes("pakistan")) {
    console.log("pakistan is in country list");
}
if (!country.includes("france")) {
    console.log("france is not included in an array");
}
//task 25
//   Alien Colors #1: Imagine an alien was just shot down in a game. 
//   Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
if (alien_color == "green")
    console.log("you earn 5 points");
var alien_color = "red";
if (alien_color == "red")
    console.log("no output");
//task 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//  let alien_color = "green"
if (alien_color == "green") {
    console.log("  player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
var alien_color = "red";
if (alien_color == "green") {
    console.log("  player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
//task 27
//  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color = "green";
if (alien_color == "green") {
    console.log("player earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
var alien_color = "yellow";
if (alien_color == "green") {
    console.log("player earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
var alien_color = "red";
if (alien_color == "green") {
    console.log("player earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("15 points");
}
else {
    console.log("15 points");
}
//task 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var age = 18;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a kid");
}
else if (age < 13) {
    console.log("you are a teenager");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are adult");
}
else {
    console.log("you are older");
}
var age = 1;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a kid");
}
else if (age < 13) {
    console.log("you are a teenager");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are adult");
}
else {
    console.log("you are older");
}
var age = 14;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a kid");
}
else if (age < 13) {
    console.log("you are a teenager");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are adult");
}
else {
    console.log("you are older");
}
var age = 54;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a kid");
}
else if (age < 13) {
    console.log("you are a teenager");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are adult");
}
else {
    console.log("you are older");
}
var age = 100;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a kid");
}
else if (age < 13) {
    console.log("you are a teenager");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are adult");
}
else {
    console.log("you are older");
}
// task 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["kivi", "orange", "apple", "berry", "peach"];
if (favorite_fruits.includes("kivi")) {
    console.log("kivi");
}
if (favorite_fruits.includes("apple")) {
    console.log("appple");
}
if (favorite_fruits.includes("orange")) {
    console.log("orange");
}
if (favorite_fruits.includes("berry")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("peech")) {
    console.log("you really like bananas");
}
//task 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
//  Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ["admin", "eric", "haseeb", "ali", "fatima"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(" hello ".concat(user, ", thank you for logging in again"));
    }
}
