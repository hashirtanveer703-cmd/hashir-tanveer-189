let studentname = ["hasir","minhal","muneeb","hassan","musa"];

console.log(studentname);

let num = [27,46,67,45];

console.log(num[2]);

let student = ["hasir","minhal","muneeb","hassan","musa"];

console.log(student.length);

let  student1 = ["hasir","minhal","muneeb","hassan","musa"];

for (let i = 0 ; i<student1.length ; i++){

    console.log(student1[i]);
    
}

let marks = [34 , 12 , 65 , 67 , 89 , 23 ];
 let sum = 0;
 
for(let a = 0 ; a< marks.length ; a++){

    sum = sum + marks[a];

}
let avg = sum / marks.length;

console.log(avg);


let items = [34, 45, 67, 12, 90];

let per = prompt("enter a persentege value");

for(let r = 0; r< items.length; r++){

    let offers = (items[r] * per)/100;
   
    items[r] = items[r] - offers;

}

console.log(items);


let add = [23, 34, 45, 56]

add.push(90);

console.log(add);

let delet = [12, 89, 45, 9];

console.log(delet.pop());

console.log(delet.toString());

let con = ["fish", "cat", "dog",];

console.log(con.concat("loin"));


let start = [1, 2, 3, 4, 5, 6];

console.log(start.unshift(0));

console.log(start.shift());








