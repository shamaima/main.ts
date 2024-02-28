//ASSIGNMENT SOLUTIONS FROM 2-15

//TASK 2

// Personal Message: Store a person’s name in a variable,
//  and print a message to that person. Your message should be 
//  simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: String = "Eric";
console.log (`hello ${personName}, would you like to learn some python today?`);

//TASK 3

// Name Cases: Store a person’s name in a variable,
// z and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "shamaima hassan";

// // In Lowercase
console.log("Lowercase:", personName.toLowerCase());

// //in uppercase
console.log("uppercase:", personName.toUpperCase());

// //in titlecase
console.log("titlecase:", personName.replace(/\b\w/g,c=> c .toUpperCase()));

//TASK 4

// Famous Quote: Find a quote from a famous person you admire. 
// Print the quote and the name of its author. Your output should look
//  something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote: string = "A person who never made a mistake never tried anything new."
let author: string= "Albert Einstein"

console.log(`${author} once said, "${quote}"`);


// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
//  in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string= "Albert Einstein"
let message: string= `${famous_person} once said,"${quote}"` 
console.log(message)

//TASK 6

// Stripping Names: Store a person’s name, and include
//  some whitespace characters at the beginning and end of the name.
//   Make sure you use each character combination, "\t" and "\n", at least once.
//    Print the name once, so the whitespace around the name is displayed. 
//    Then print the name after striping the white spaces.

let personName: string ="\t\n fatima hassan \n\t"
console.log("original:", personName)
console.log("stripped:", personName .trim())

//TASK 7

// Number Eight: Write addition, subtraction, multiplication, and division operations
//  that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:

console.log(5 + 3)

console.log(5+3)
console.log(10-2)
console.log(4*2)
console.log(16/2)

//TASK 9
// Favorite Number: Store your favorite number in a variable. Then,
//  using that variable, create a message that reveals your favorite number. Print that message.

//TASK 10

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If you don’t have anything specific to write because your programs are too simple at this point,
//   just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Author:[shamaima hassan]
//date:[monday , febuary 24 , 2024]

//task 9:printing my favourite number.


let favoriteNumber: number = 1 
//revealing my favourite number in na message format
console.log (`My favorite number is ${favoriteNumber}`)

//TASK 11

// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

let names: string []=["ali","fatima","hassan","zareen"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

//TASK 12
// Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.


let names: string []=["ali","fatima","hassan","zareen"]
let message: string = "Do you like to play cricket?"
console.log(names[0] +" "+ message)
console.log(names[1] +" "+ message)
console.log(names[2] +" "+ message)
console.log(names[3] +" "+ message)

//TASK 13
// Your Own Array: Think of your favorite mode of transportation,
//  such as a motorcycle or a car, and make a list that stores several examples.
//   Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["Honda Motorcycle", "Audi","Honda City"]
transportation.map((items) => console.log(`I would like to own a ${items}`))

//TASK 14
// Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people you’d like to
//   invite to dinner. Then use your list to print a message to each person, inviting them to dinner.



let GuestArr: string []=["ali","hassan","zareen"]

GuestArr.map((items) =>(console.log( `Dear ${items},you are invited to the dinner`)))
//TASK 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t 
// make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let GuestArr : string[] =["ali","hassan","zareen","fatima"]
let canNotattend : string= "fatima"

 console.log(canNotattend + " " "can not attend the dinner")

 let newGuest : string = "alishba"

 GuestArr[GuestArr.indexOf(canNotattend)]= newGuest;
 console.log(GuestArr)

GuestArr.map((items)=>
console.log(`dear ${items}, you are invited to the dinner`))

























