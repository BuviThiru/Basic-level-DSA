let num = [7, 6, 3, 5, 1, 9, 2]
n = num.length - 1
let num1 = []
for (i = 0; i <= n; i++) {
    checkvalue = num[i]
    // console.log(checkvalue)
    for (j = i + 1; j <= n; j++) {
     
         (checkvalue > num[j]) ? checkvalue = num[j] : checkvalue = checkvalue
        
    }
    num1.push(checkvalue)
} 