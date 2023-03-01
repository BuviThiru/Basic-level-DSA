function numberPattern(input, res) {
    if(input =="1"){  res = "11"}
    else{ 
    let counter = 1
    let n = input.length
    for (i = 0; i < input.length - 1; i++) {
        if (input.charAt(i) == input.charAt(i + 1)) {
            counter++
        }
        if ((input.charAt(i) != input.charAt(i + 1))|| i + 1 == input.length - 1) {
            res = res + counter + input.charAt(i)
            counter = 1
                  
        }
        if (i == n - 2 && input.charAt(i) != input.charAt(i + 1)) {
            res = res + counter + input.charAt(i + 1)
        }
    }
    }
return res
}
let n = 6,input = "1",result = []
for(let i =0;i<n;i++){
    let x = numberPattern(input,"")
    result.push(x)
    input=x
}
console.log(result)
