//write a program that inputs numbers untile the user enter the negetive number

//a program calculate the average max and min of all positive numbers

let count = 0;
let num =  Number(prompt("enter the number :"));
let sum = 0;
let max = num;
let min = num;
while(num > 0){
     sum = sum + num;
    num = Number(prompt("enter the number :"));
    count++ ;
    if (num > max){
        max = num;

    }else if(num<min)
    {
    min = num;
    }
}
let avg = sum/count;

console.log("Average:", avg, "Max:", max, "Min:", min);


















