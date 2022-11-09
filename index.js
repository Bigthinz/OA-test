// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

// Theodore Elikem Attigah11:14
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//  let arr2 = [ ')', '}', ']']
//  let arr2 = [ ')', '}', ']']
// let string = "({[)}]()[]{} "

// const valid = (string)=>{
//   let isValid = true

//   // let list =
//   //  let arr1 = [ '(', '{', '[']
//   //  let arr2 = [ ')', '}', ']']

//    let final = []

//    if(string.length != 0){
//      return false
//    }

//    for(let i = 0; i <string.length; i++){
//      let initValue = string[i]

//      if(initValue == '(' || initValue == '{' || initValue == '['){
//        final += initValue
//      }else{
//        if(initValue == ')' && final[final.length - 1] != '('){
//         isValid = false
//        }else if(initValue == '}' && final[final.length - 1] != '{'){
//         isValid = false
//        }else if( initValue == ']' && final[final.length - 1] != '['){
//         isValid = false

//        }else{
//          final = final
//        }
//      }
//    }

// }

// valid(string)

let string = '({[])}';

const valid = (string) => {
  const stack = [];

  for (let i = 0; i < string.length; i += 1) {
    const top = stack[stack.length - 1];

    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if (string[i] === ')' && top === '(') {
      stack.pop();
    } else if (string[i] === ']' && top === ']') {
      stack.pop();
    } else if (string[i] === '}' && top === '{') {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack;
};

console.log(valid(string));
