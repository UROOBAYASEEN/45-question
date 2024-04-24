/*
Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop. */


// DONE 



/*
Question 2: Personal Message: Store a person’s name in a variable and print a message to them, 
like “Hello Asharib, would you like to learn some TypeScript today?”  */


let personalname="urooba";

console.log(`hello ${personalname} would you like to learn some typescript today??`)


/* 

Question 3: Name Cases: Store a person’s name in a variable, and then print that
 person’s name in lowercase,
 uppercase, and titlecase. */


 
 console.log(personalname.toUpperCase())
 console.log(personalname.toLowerCase())
 console.log(personalname.charAt(0).toUpperCase()+personalname.slice(1).toLowerCase());



 /* 

 
Question 4: Famous Quote: Find a quote from a famous person you admire.
 Print the quote and the name of its author. Your output should look something like the following, 
 including the quotation marks:
"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
*/

console.log("PROPHET PBUH once said , ' all muslim are brother to each other no one have superior to other ' ")

/*

Question 5: Famous Quote 2: Repeat Exercise 1,
 but this time store the famous person’s name in a variable called famous_person.
  Then compose your message and store it in a new variable called message.
 Print your message.
 */

 let  famous_person="PROPHET PBUH "

 console.log(` ${famous_person} once said " all muslim are brother to each other no one have superior to other"`)


 /*
  Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at 
  the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once,
   so the whitespace around the name is displayed. Then print the name after stripping the white spaces. */



   let famusname="\t\n urooba \t\n"


   console.log(famusname)
   console.log(famusname.trim())

   
   /*
Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations
 that each result in the number 8. Enclose your operations 
in print statements. */


console.log(5+3) //addtion
console.log(10-2) //subtraction
console.log(16/2) //division
console.log(4*2) // multiplication



/*


Question 8: You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.


// already  done in question 7


/*


Question 9: Favorite Number: Store your favorite number in a variable. Then,
 create a message revealing your favorite number.
 Print that message.

 */


 let favroutnumber=8

console.log(`my favriout number is ${favroutnumber}`)



/*

Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If the programs are straightforward at this point, just add your name and the current date at the top of each program file.
  Then, write one sentence describing what the program does.  */

  // urooba 4/4/2024
  // this is which store message 

  let message="learn typescript and working hard for bright future";

  
 /*
Question 11: Names: Store the names of a few of your friends in an array called names.
 Print each person’s name
 by accessing each element in the list, one at a time. */

 
 let friendlist=["naziya","tanzeela","maryam","fatima","amina","uroosa"];


 
 friendlist.forEach(friend=>{
    console.log(friend)
 })


/*      question 12: Use the array from Exercise 11. Instead of just printing each person’s name,

 print a message to them. The message should be the same for each person, but personalized with 
 their name. */

for(let people of friendlist){
    console.log(`hy ${people} how are you?`)
}




  /* Question 13: Your Own Array: Think of your favorite mode of transportation, such a
s a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements 
about these items,
 such as “I would like to own a Honda motorcycle.” */


 let  transportmode=["car","honda","ode","farari","pajaro"]


 for (let i=0;i<=transportmode.length;i++){
     


    console.log(`I WOULD LIKE TO TRAVEL IN ${transportmode[i]}`)
 }


 
 
  /*   Question 14: Guest List: If you could invite anyone, living or deceased, to dinner,
   who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each 
person, inviting them to dinner.  */



let guestlist=['rafia','sajida','tasleem']


guestlist.forEach(guest=>{
    console.log(`HY ${guest} I INVITE YOU IN DINNER `)
})


/* 

 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
  new set of invitations. You’ll have to think of someone else to invite. */

  

  console.log("UNFORTUNATALY SAJIDA  NOT COME ON DINER ")


  console.log("NOW WE INVITE ANY ONE REPALCE OF SAJIDA")

  guestlist.splice(1,1,"hania")

  console.log(guestlist)


  /* 

 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
 program informing people that you found a 
bigger dinner table.   */




console.log("NOW WE INVITE MORE GUEST AT DINNER")

guestlist.unshift("tania","sania","kulsom","saista" ,"rovaida")

console.log(guestlist)
guestlist.forEach(guest1=>{
    console.log(`DEAR ${guest1} you are invite in dinner`)
})




/*

 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
  and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people
 for dinner.   */


 console.log("YOUR TABLE NOT ARRIVE ON TIME SO YOU JUST INVITE TWO FRIENDS AT DINNER")


   let finnalguest=guestlist.slice(0,2)


 console.log(finnalguest)

 finnalguest.forEach(person=>{
    console.log(`DEAR ${person} you are invite in dinner `)
 })




 

/*

 Question 18: Seeing the World: Think of at least five places you’d like to visit. */


 let places=["japan","america","MALDIVE","tuekey","ISTAMBUL"]

 //places.reverse()
 console.log(places)
 console.log(places.sort())
 

 console.log(places)

 console.log(places.sort())
 console.log(places)
 console.log(places.sort())
 console.log(places)
 console.log(places.sort())
 console.log(places)
 console.log(places.sort())
 console.log(places)
 console.log(places.sort())
 console.log(places)
 places.reverse()
 console.log(places)



 /* 
 Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message
  indicating the number of people you are inviting to dinner.  */


  console.log(`I AM INVITING ${guestlist.length} person in dinner`)




  /*
 
Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, 
cities, languages, or anything else you’d like. Write a program that creates a list containing these items.  */






let beautifullplace=['naran','kaghan','muree','islamabad']
console.log(`I WOULD LIKE TO VISIT ${beautifullplace}`)


/* 


Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Object
containing these items.  */


let myself={


    name:"UROOBA YASEEN",
    fathername:"MUHAMMAD YASEEN SHAKEEL",
    class:"ASSOCIATE DEGREE PRMGRAM ",
    addres:"NORTH KARACHI SEC 1 A4",
    age:" UNDER 18",
    nationality:"PAKISTANI"



}

console.log(`my name is ${myself.name} i am countine our education at ${myself.class} and my nationality is ${myself.nationality}`)



/*

Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing. */


let childen=['samama','sufyan','tuba','khansa','hamza']
console.log(childen[5])  // in arry index is become start form zero index so this program will note excute
console.log(childen[4]) // according to this hamza is excute


/*

Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.  */



let course= "typescript"

console.log(course=="typescript")
console.log(course=="javascript")

let age=18
console.log(age==18)
console.log(age==65)
 

let nationality="pakistani";
console.log(nationality=="pakistani")

console.log(nationality=="american")

let bestfriend= "pirah"
console.log(bestfriend=="pirah")
console.log(bestfriend=="anaya")

let favdrink="cocacola"

console.log(favdrink=="cocacola")
console.log(favdrink=="string")

/*


Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.  */


console.log(10<43)
console.log(43>23)
console.log(2>123)
console.log(46<100)
console.log(4<6 && 5<3)
console.log(3<4 || 2==2)


/* 

Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red'
 to a variable called alien_color.  
 
Explain & TIP: Use an if statement to check the alien's color. This introduces you to simple conditionals.
 */

 
let aliencolor="green";
 
if(aliencolor=="green"){
    console.log("you win the match")
}



/*


Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions. */


if(aliencolor=="greem"){
    console.log('you earn 5 point')
}
else{
    console.log("you earn 10 point")
}




/*

Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.  */



if(aliencolor=="green"){
    console.log("you win the match")
}
else if(aliencolor=="red"){
    console.log("your game on dead line")
}
else if(aliencolor=="pink"){
    console.log("new game start")
}
else if(aliencolor=="yellow"){
    console.log("nice shorts")
}
else if(aliencolor=="black"){
    console.log(" big enmy is in front of you kill them")
}
else if(aliencolor=="blue"){
    console.log("you are near to losing game ")
}
else{
    console.log("UNFORTUNATALY YOU LOSE THE GAME")
}


/*

Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

Explain & TIP: Use age to check the life stage. This practice shows how to handle multiple conditions with an if-else chain.  */


let agee=18

if(agee==1){
    console.log("newborn baby")
}
else if(age<1){

    console.log("baby")
}
else if(agee<5){
    console.log("child")
}
else if(agee<15){
    console.log("young")
}
else if(agee<20){
    console.log("tenager")
}
else if(agee<40){
    console.log("men or women ")
}

else{
    console.log("old")
}


/*

Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

Explain & TIP: Arrays can store multiple items like fruit names. Use if statements to check for specific fruits.
*/

let fruit=['apple','orange','mango','banana','litchi']
if(fruit.includes('apple')){
    console.log("i like apple very much") 
}




/*

 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  */   



fruit.forEach(things=>{

if(things=="mango"){
    console.log("i like mango in summer")
}
else{
    console.log(`i like  ${things} in daily morning`)
}

})


/*


Question 31: No Users: Ensure your user list isn’t empty.

Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.  */


let userlist=[]
if(userlist.length===0){
    console.log("your user list is empty")
}
else{
    console.log("ADD USER IN YOUR USER LIST")
}
/*
Question 32: Checking Usernames: Ensure uniqueness in usernames.
Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals 
to handle case-insensitive comparisons.   */


let current_users=["user1","user2","user3","user4","user5"];


let new_users=["admin","uSer1","User3","teacher","principal","sir","fbuser"];


new_users.forEach(user=>{
   let  newuser=user.toLowerCase();


 
   let username=current_users.some(current_user=>{
    current_user.toLowerCase()===newuser // ture  false 
   })  
   if(username){
    console.log(`${newuser} avalible`)
   }
   else{
    console.log(`${newuser}is not avaible`)
    current_users.push(newuser)
   }


})
console.log(current_users)



/*

33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
Most ordinal numbers end in th, except 1, 2, and 3.

* Store the numbers 1 through 9 in a array.

* Loop through the array.

* Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line.   */



let i=0;
let output=" "

for(i=0;i<10;i++){
if(i==1){
  output="st"  
}
else if(i==2){
    output="nd"
}
else if(i==3){
    output="rd"
}

else if(i==4){
    output="th"
}

else if(i==5){
    output="th"
}

else if(i==6){
    output="th"
}

else if(i==7){
    output="th"
}

else if(i==8){
    output="th"
}

else if(i==9){
    output="th"
}

console.log(`${i}${output}`)

}


/*
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

* Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.    */


let Pizzas=["chiken pizza","californa pizza","chez pizza"]

Pizzas.forEach(piza=>{

    console.log(`I VERY WANT TO EAT ${piza}`)
})

/*

35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
* Modify your program to print a statement about each animal, such as
A dog would make a great pet.
* Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!    */


                                                                                                                                                                                                                                                         


let animal=["cat","dog","mouse"]

animal.forEach(val=>{
    console.log(`${val} is also in home`)
    console.log(`${val} is home pet`)
    
})


console.log("these animal are  present in all home almost ")




/*
question number 36   */

function make_shirt(size,print){

    console.log(`the  shirt size is ${size}  and in shirt print  ${print}`)
}

make_shirt("medium","i love pakistan")



/*

queston number  37 */


   function made_shirt(size="large",message="i love shirts "){

    console.log(`my shirt size is ${size} and messege is ${message}`)
   }

   made_shirt("medium","pakitan are beautifull")



   /*

   question number 38

   */

   function city_country(city,country){
    console.log( `the ${city} is in ${country}`)
   }
   city_country("karachi","pakistan")
   
city_country("faislabad","pakistan")

city_country("lahore","pakistan")



/* 
question number 39
*/


    function city_name(city,country){


        console.log(`  ${city}, ${country}`)
    }
    city_name("rajanpur","pakistan")
    city_name("miyanwali","pakistan")
    city_name("lahore","pakistan")


    /* 
    question number 40
    */


    function make_album(name,tittle,tracks){

    let album={name,tittle}
    if(tracks){
        album["tracks"]=tracks
    }
    return album

    }
 console.log(make_album('name one',"history place"))
 console.log(make_album('name two','the horizontal space'))
 console.log(make_album("name three","human discorder",39))

/*
question no 41
*/


let  magician=["alian","draval","aleees"]
function show_magic(magician){
    
    magician.forEach(person=>{
        console.log(person)
        console.log(` ${person} show magic`)
    })
}

show_magic(magician)



/*


question no 42

*/

function make_great(magician){

for(let i=0;i<magician.length;i++){

    console.log(`${magician[i]} the great `)
}
}
make_great(magician)




/*
question no 43

*/
let  magician2=["alian","draval","aleees"]

let newarry=[...magician2]

let withgreeting=""


function show_megacians(great:string){

    for(let val of newarry){

        withgreeting += `${great} ${val}\n `
    }
    return withgreeting


    
}


let mygreeting= show_megacians("hello")

let makearry=mygreeting.split("\n")

console.log(makearry)

// for original arry

console.log(magician2)




/*
question 44

*/


function mysandwich(...items: string[]){

    console.log(`this is always inculde in sandwich ${items}`)
}

let  burgur1=mysandwich("cheez","egg","bun")

let burger2=mysandwich("salt","souses","kachap")




/*
question no 45
*/




function cardetails(manufacture:string,model:string,...option:[string,any][]){


    let car = {manufacture, model };
    option.forEach(([key, value]) => car[key] = value);
    return car;

}






    let car1=cardetails("toyotta","carotalla",["color","black"],["year",2024])


  let car2=cardetails("honda","farari",["color","gry"],["year",2024])

  console.log(car1)
console.log(car2)












































