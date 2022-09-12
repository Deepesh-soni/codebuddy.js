// level {3}

// Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.
// ```
// Input string: "a:2,b:3,c:4,a:5,b:6"
// ```
// ```
// Output should be object: {a: 7, b: 9, c: 4}

const str = "a:2,b:3,c:4,a:5,b:6";

const str_arr = str.split(',');

const res = {}

str_arr.forEach((item,index)=>{
    const arr = item.split('');
    // console.log(arr);

    if(res[arr[0]] === undefined){
        res[arr[0]] = Number(arr[2])
    }else{
        res[arr[0]] = res[arr[0]] + Number(arr[2]);
    }
    // console.log(res,index);
})

console.log(res);

// To uppercase
const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

function toUpperCase(obj){

    let output = [];
    [...Object.keys(obj)].forEach((key)=>{
        if(typeof obj[key] !== 'object'){
            obj[key] = obj[key].toUpperCase();
        }else{
            toUpperCase(obj[key])
        }
    })

    return output;
}

toUpperCase(user);
console.log(user);

// Check for balanced parentheses using a stack

const exp = "{[({})]}";
const pair = {
    '{':'}',
    '}':'{',
    '(':')',
    ')':'(',
    '[':']',
    ']':'['
}

function isExpressionBalanced(exp){
    let stack = [];

    [...exp.split('')].forEach((item,index)=>{

        if(index === 0){
            stack.push(item);
        }else{
            // stack.push(item);
            if(stack[stack.length - 1 ] == pair[item]){
                
                stack.pop()
                // console.log("poped",stack,stack[stack.length - 1 ]);
                
            }else{
                stack.push(item);
                // console.log("pushed",stack,stack[stack.length - 1 ]);
            }
        }
    })

    if(stack.length === 0){
        return true;
    }

    return false;
}

// console.log(pair);
console.log(isExpressionBalanced(exp));