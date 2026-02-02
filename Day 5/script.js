//Calculate the compound interest

// CI = A-P
// A = p * (1+r/100)^t

// let p = Number(prompt("Please Enter a Principle"));
// let r = Number(prompt("Please Enter a Rate"));
// let t = Number(prompt("Please Enter a Time"));

// console.log((p * Math.pow(1+r/100,t))-p);


//Generate OTP


// console.log(Math.floor(Math.random()*9000 +1000));


//Area of triangle by herons formula


// let a = Number(prompt("Please Enter 1st Number"))
// let b = Number(prompt("Please Enter 2nd  Number"))
// let c = Number(prompt("Please Enter 3rd Number"))


// if(a+b <=c || a+c <=b || b+c <= a){
//     console.log("Not Possible")
// }else{
//     let s= (a+b+c)/2
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
// }



// circumference of circle


let r = Number(prompt("Please Enter a Number"));

console.log(2 * Math.PI * r);