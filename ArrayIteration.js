//1. forEach() method
const marks = [25,35,45,55,65];

function list(numb){
    console.log(numb);
}

marks.forEach(list);

//2. map method
const mark = [1,2,3,4,5];

function markList(pass){
    return pass + 10;
}

console.log(mark.map(markList));