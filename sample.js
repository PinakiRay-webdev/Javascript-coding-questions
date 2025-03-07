const option = [
    'html' , 'css' , 'javascript' , 'react'
]

const genRan = () =>{
    return Math.floor(Math.random() * 4)
}

let i=0;
const newArray = [];
while(i < option.length){
    random = genRan();
    if(!newArray.includes(option[random])){
        newArray.push(option[random]);
        i++;
    }
}

console.log(newArray)