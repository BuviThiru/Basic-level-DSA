// function validatePassword(pwd){

// let smallCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
// let upperCaseAlphabet  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let symbols = " `~!@#$%^&*()_-+=}{][/?><.,|\":; "
// let numbers = "1234567890"
// let smallCaseAlphabet_arr = smallCaseAlphabet.split("")
// let upperCaseAlphabet_arr = upperCaseAlphabet.split("")
// let symbols_arr = symbols.split("")
// let numbers_arr = numbers.split("")
// let pwd_arr = pwd.split("")
// let isSmallcase,isUppercase, isSymbol,isNumber = false
// for (const key of pwd_arr){ 
// if(smallCaseAlphabet_arr.includes(key)) isSmallcase = true;
// else if (upperCaseAlphabet_arr.includes(key)) isUppercase = true;
// else if (symbols_arr.includes(key)) isSymbol = true
// else if (numbers_arr.includes(key)) isNumber = true
// }
// if(isNumber && isUppercase &&isSymbol && isSmallcase){ console.log(`${pwd} is a Valid Password`)}
// else { console.log(`${pwd} is not a Valid Password`)}
// }
// validatePassword("asFghc1#2")
// validatePassword("eD%ghj")
// validatePassword("222$aa")


// function printLex(n) {
//     let res = [];
//     lexOrder(1, n, res);
//     console.log(res);
// }


// function lexOrder(temp, n, res) {
//     if(temp > n) {
//         return;
//     }
//     res.push(temp);
//     lexOrder(temp*10, n, res);
//     if(temp % 10 != 9) {
//         // temp = 10 
//         //temp%10 = 0
//         lexOrder(temp+1, n, res);
//     }
// }
// printLex(25);

// function printLex(n) {
//     let res = [];
//     lexOrder(1, n, res);
//     console.log(res);
// }
// function lexOrder(temp, n, res) {
//   console.log("temp is "+temp+' n is '+n+' res is '+res);
//     if(temp > n) {
//         return;
//   }
//   console.log("before pushing res "+res);
//   /*1*/res.push(temp);
//   console.log("after pushing res "+res);
// //   console.log("temp is"+temp);
//   /*2*/lexOrder(temp * 10, n, res);
//    /*3 */ if (temp % 10 != 9) {
//         lexOrder(temp+1, n, res);
//     }
// }
// printLex(15)


function generateParenthesis(n, open, close, s) {

  if(open == n && close == n) {
    console.log("stage1",open,close,s)
      console.log(s);
      return;
  }

  if(open < n) {
      generateParenthesis(n, open+1, close, s+"{");
      console.log("stage2",open,close,s)
  }

  if(open > close) {
      generateParenthesis(n, open, close+1 , s+"}");
      console.log("stage3",open,close,s)
  }
}

let res = new Array();

console.log("generateParenthesis ");
// generateParenthesis(2,0,0,res,"");
generateParenthesis(3,0,0,"")