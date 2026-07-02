console.log("FUNCTIONS");

//=============function=============

function text(ah) {
    console.log("my car model is", ah);
    console.log("my car name is corola");
    console.log("my car color is whit");
    
}

text(2026);

function print(num1,num2) {
    
    return num1+num2;
}

let rum = print(45,57);

console.log(rum);

   let arrow =(a , b)=>{
    console.log("hello");
    return a + b;
}
 let arr = arrow (23 , 54);

console.log(arr);

 function vowel(name) {
   let count = 0;
    for(let val of name){
        
    if(val==="a" || val==="e" || val==="i" || val==="o" || val==="u"){
        count++;
    }
    }
    console.log(`the ${name} include vowel ${count}`);
   }

   vowel("hashir tanveer");


vowel ("hashir tanveer");

let printvowel = (text)=>{
    
   let count = 0;
    for(let val of name){
        
    if(val==="a" || val==="e" || val==="i" || val==="o" || val==="u"){
        count++;
    }
    }
    console.log(`the ${name} include vowel ${count}`);
}


//==========practice=================

let array = [1, 2, 3, 4, 5];

array.forEach((printnum)=>{
    console.log(printnum**2);
    
})






