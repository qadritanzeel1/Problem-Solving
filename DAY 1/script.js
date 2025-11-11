//accept a year if it is a leap year or not

//longer version

// let year = 2000;

// if(year%400==0){
//   console.log("leap year")
// }else if(year %100==0){
//   console.log("not a leap year")
// }else if(year%4===0){
//   console.log("leap year")
// }else{
//   console.log("not a leap year")
// }

//shorter version
// if(year%400==0 || (year%4==0 && year%100!==0)){
//   console.log("leap year")
// }else{
//   console.log("not a leap year")
// }

//shop discount

//brute force approach
// let amount = Number(prompt("Please enter a number"));

// if(amount>0 && amount<=5000){
//     console.log(amount)
// }else if(amount>5000 && amount<=7000){
//     console.log(amount-(5*amount)/100);
// }else if(amount>7000 && amount<=9000){
//     console.log(amount-(10*amount)/100);
// }else if(amount>9000){
//     console.log(amount-(20*amount)/100);
// }

// optimal approach
// let amount = Number(prompt("Please enter a number"));
// let dis  = 0;
// if(amount>0 && amount<=5000){
//     dis = 0 
// }else if(amount>5000 && amount<=7000){
//     dis = 5
// }else if(amount>7000 && amount<=9000){
//     dis = 10
// }else if(amount>9000){
//     dis = 20
// }

// console.log(amount-(dis*amount)/100);