 let symbole = '';
 for(let j1 = 1 ; j1<=4; j1++ ){
    for(let k1 =1 ; k1<=j1 ; k1++){
        symbole+='*';
        
    }
    console.log(symbole);
    symbole = '';
    
}

let hashir = '';
for (let i = 1 ; i<=4 ; i++){
    for (let j = 1 ; j<=4-i ; j++){
        hashir = hashir + ' ' ;
    }
    for (let k = 1 ; k<=i ; k++){
         hashir += '*';
    }
    console.log(hashir);
    hashir = '';
}

















