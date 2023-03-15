
function foo(){
    return 'bar';
}

const fooArrow = bar => bar

console.log(fooArrow('bar'));

const nums = [1,2,3];
const squares = nums.map(x => x ** 2); 

console.log(squares);
console.log(nums);


// Actual lab

const divide = (num1, num2) => num1/num2;

const square = x => x **2;

const add = (num1, num2) => num1+num2;



// If I wasn't using arrow functions 

function legacyAdd(num1, num2){
    return num1 + num2;
}

console.log(legacyAdd(10, 90));
