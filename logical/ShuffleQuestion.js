// You have been assigned the task of developing a software system for an online examination that generates question papers for various subjects. The system should be able to shuffle the questions within each subject every time a question paper is generated, ensuring that the order of the questions is randomized for each student.

// const func = shuffle(questions)
// const shuffledArray1 = func();
// const shuffledArray2 = func();



// Output:

// shuffleArray1 : [ 'Question5', 'Question3', 'Question1', 
// 'Question4', 'Question2' ]
// shuffleArray2 : [ 'Question3', 'Question1', 'Question4', 
// 'Question5', 'Question2' ]

const shuffle = (array) =>{
    return () =>{
        let result = [];
        let i = 0;
        while(i < array.length){
            let random = Math.floor(Math.random() * array.length);
            if(!result.includes(array[random])){
                result.push(array[random]);
                i++
            }
        }

        return result;
    }
}

const questions = ['question 1' , 'question 2' , 'question 3' , 'question 4' , 'question 5'];

const shuffledArray = shuffle(questions);

console.log(shuffledArray());
console.log(shuffledArray());
console.log(shuffledArray());
