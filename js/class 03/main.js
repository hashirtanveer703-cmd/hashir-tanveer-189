for (let h1 = 1; h1 <=100; h1++){

    if(h1%2===0)

console.log(h1);

}


let gamenumber = 18;

let usernum;

do{

    usernum=prompt("guess the game number:");

}while(gamenumber != usernum);

if( gamenumber == usernum){

    console.log("congratulation you guess the ganme number");
    
}


let table = 12;

for(let count = 1 ; count <= 10 ; count++){

    console.log(`${table} * ${count} = ${ table * count}`);
    
}




















