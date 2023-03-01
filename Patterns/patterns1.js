// console.log ("Star Increment Pattern")
//  var x = 0;
// function pattern(n) {
//     for (x = 1; x <= n; x++) {
//         console.log("* ".repeat(x));
//     }
// }
// pattern(6)


console.log("Number Increment Pattern")
var a= 0;
function patternnumber(num) {
    for (a = 1; a<= num; a++) {
        for (y=1;y<=a; y++)
        process.stdout.write(y +" ")
      
        console.log('\n')
    }
    
}
patternnumber(6)