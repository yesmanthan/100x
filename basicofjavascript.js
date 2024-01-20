//FIRST WE LEARN ABOUT VARIABLES
//THERE ARE  3 TYPES OF VARIABLES VAR,LET & COST
//LET= WE JUST GAVE THE VALUE TO LWT OS JUST ASSUME IT (LIKELY TO ME MORE USED  THAN VAR)
//CONST = IN CONSTANT IF EW CHANGE THE VALUE IT WILL THROW THE ERROR
//VAR =IT  JUST STANDS FOR VARIABLE LIKE  LER  BUT LET HAS MORE TEST CASES THAN VAR 
 /// LETS EXPERIMENT IT 
 
 let a=100;
 console.log(a);
 let b=200;
 b=250;
console.log(b);

var c=300;
console.log(c);
var d=400;
d=450;
console.log(d);

const e=500;
console.log(e);
const f=600;
// f=650;//changing the value the error will like be TypeError: Assignment to constant variable.
console.log(f);


//we will learn about data types :- string ,boolean &int
//string store alphabets in it and denoted and written in  ""
// int :- they are numeric value that store numeric value in it 
// boolean :- they only store vale in true or false 
let mname= "Manthan" ; //it is an string so i will use "" in it and let statement always end with ;
let mage = 20; // this is integer value not needed to have "" in it 
let mismarried = false // boolean  store value in true or false       not needed to have "" in it 


console.log("My name is "+ mname +"  my age is "+ mage  + "  my married status is "+  mismarried);

//lets learn about if else statement in java script 
//in the following example we needed two different statement should be printed on the basis of my 
// married status 
let firstname= "Manthan" ; //it is an string so i will use "" in it and let statement always end with ;
let age = 20;
let ismarried = false;

console.log("The person firstname is")
console.log(firstname)
 
if (ismarried == false)
{
    console.log("he is not married");
}
else 
{
    console.log("he is married");
}

//lets learn abut loops in the next program  
//loops there are for loop in java script 
// we use loops in program wo run program repeat  the given task until it get complete 
// i want to sum of number from 0-100
let answer=0;
//method 1
    console.log(0+1+2+3+4+5+6+7+8+9);
    //answer will be 45
// method 2
   for(i=0;i<=1000;i++){
   answer = answer +i;
   }
   console.log(answer);
