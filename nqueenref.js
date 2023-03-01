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


function printNumberPattern(input,n,resut){
    if(n==resut.legth-1) console.log( result)
    else{
       
        let x = numberPattern(input,"")
        console.log(x)
        resut.push(x)
        printNumberPattern(x,n,resut)
    }

}
printNumberPattern("1",5,[])