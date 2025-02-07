

function countWords(str){
    str = str.trim();   //not to include first and last spaces
    let count = 0;
    for(let i of str){
        if(i === ' '){
            count++;
        }
    }

    return count;
}

const str = " Odisha is India's best kept secret "
console.log(`Total word count is ${countWords(str) + 1}`)