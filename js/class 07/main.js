console.log("class 07");

let numbers = [34, 1, 8, 45, 23];

let cube = numbers.map((mul, indx, Array)=>{

    console.log(mul, indx, Array);
    
})

console.log(cube);


//==========filter===========

let fill = [12, 6, 8, 9];

let evennum = fill.filter((h)=>{
    return h % 2 === 0;
})

console.log(evennum);


//===========reduce============

let plus = [2, 103, 4, 5, 96, 97];

let hlo = plus.reduce((o , p)=>{

    return o + p;
})
console.log(hlo);

let nintyabove = [2, 3, 104, 95, 6, 97];

let above = nintyabove.filter((kgf)=>{

    return kgf>90;
})

console.log(above);

let enter = prompt("enter a number");
 
let arr = [];
for (let a = 0 ; a < enter ; a++){ ; 

arr[a]= a+1;
}

console.log(arr);








