console.log("this is tut js");
let name ="anchal";
let name1="riya";
let name2="anshika";
let name3="saloni";
let greettext="good morning";
console.log(name+" is a good girl");
console.log(name1+" is a good girl");
console.log(name2+" is a good girl");
console.log(name3+" is a good girl");
//for shortend this program we use functions function is a building block of prog"ramm
function greet(name){
    console.log(name+" is a good girl");
}
greet(name);
greet(name1);
greet(name2);
greet(name3);

//two arg pass
function greet(name,greettext){
    console.log(greettext+" "+name)
    console.log(name+" is a good girl");
}
greet(name,greettext);
greet(name1,greettext);
greet(name2,greettext);
greet(name3,greettext);
let val=sum(1,2,3);
console.log(val);
function sum(a,b,c){
    let d=a*b*c;
    return d;
}

//alert is a function which takes massage string which is pop up in your screen doest nt return anything
alert("this is a alert message");
//u want to questioning to our users we use promt
let Name=prompt("what is your name ?","guest");//it takes a default arg which is already persent in the coloumn
console.log(Name);

//confirm for giving a warning to user
let delpost=confirm("do u really want to delete this post? ");
console.log(delpost);
if(delpost)
console.log("your post is deleted succesfully");
else
console.log("your post is not deleted");
//question
let age=prompt("what is your age?");
let notallow=confirm(" error");
if(age>18)
console.log("you are allowed in the club");
else 
console.log(notallow);




