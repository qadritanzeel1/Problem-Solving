//you are given a number n.You need to find all the odd numbers which are less than and equal to n

let n = 10;
for(let i =0;i<=n;i++){
  if(i%2 !==0 ){
        console.log(i)
  }
}


// you are given  a number N.let us say floor of 32 devided by N is X

// print as per following rules
//In case x is 0 , print too low 
//In case it is not possible to generate a valid number,print -1
//In all other cases print x

let n1 = 0;

if(n1==0){
  console.log(-1)
}else{
  let x = Math.floor(32/n1);
  if(x==0){
    console.log("too low");
  }else{
    console.log(x)
  }
}


// Title: L0 - Array Manipulation: Tracking Daily Temperatures

// Problem Statement: Create an array that stores the temperatures recorded over 7 days.
// Use indexing to access the temperature for the 4th day and update it to a new value by adding 2 degrees.
// After that, log the updated temperatures for all 7 days to the console.

//first creating array
let arr = [10,9,8,7,6,5,4];
arr[3]=7+2;
// console.log(arr)


// Q: 12
// Title: L0 - Managing a To-Do List: Adding and Removing Tasks

// Problem Statement: Create an array that represents your daily to-do list with 5 tasks.
// Add a new task to the beginning of the list. Then, remove the last task from the list.
// Finally, log the updated to-do list to the console.
let tasks = ["Jogging","Coding","Gyming","Salah","Sleeping"];
tasks.unshift("Drawing");
tasks.pop()
// console.log(tasks);



// Title: L1 - Task Rescheduling System: Managing Priorities Dynamically

// Problem Statement: You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks.
// Implement the following operations without using specific method references
// (think about doing this one with optimized approach):

// Remove the first task from the list. Add two new high-priority tasks to the beginning of the list.
// Replace the last task in the list with a new task. Log the updated task list after all operations.

let taskss  = ["Task1","Task2","Task3","Task4","Task5"];
taskss.shift() //removes the first task from list
taskss.unshift("priority1","priority2"); //adds new high-priority tasks
taskss[taskss.length-1]="replaced task"  //replaces last task
// console.log(taskss); 

// Title: L1 - Student Score Manager: Handling Dynamic Adjustments

// Problem Statement: You are creating a score management system for student results.
// Start with an array of 10 student scores. The program should do the following:

// For any student with a score below 40, increase their score by 20.
// For students with scores over 90, adjust their score to a maximum of 90.
// Count and log how many students passed (score of 50 or more) after the adjustments.
// Log the final adjusted array of scores.

let studentScores = [30,40,50,60,70,80,90,100,20,26] ;
let adjustedScores =  [];
let passedCount = 0;

for(let i =0 ;i<studentScores.length;i++){
  let scores = studentScores[i];
  if(scores<40){
    scores= scores+20;
  }
  
  if(scores>90){
    scores = 90
  }
  
  if(scores>=50){
    passedCount++
  }
  adjustedScores.push(scores)
}

console.log(adjustedScores)
console.log(passedCount)
