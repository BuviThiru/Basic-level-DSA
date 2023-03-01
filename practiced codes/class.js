function playtime(temp, rain) {
    if ((temp > 20 && temp < 25) && (rain == "False"))
        console.log("Time to Play Outdoor!!!!")
    else if (temp >= 18 && temp <= 20)
        console.log("Stay in playschool")
    else if ((temp < 18) || (temp >= 25))
        console.log("stay home")
}
playtime(18, "True")
playtime(19, "False")
playtime(24, "False")
playtime(24, "True")
playtime(17, "True")
playtime(17, "False")


function typeofnum(num) {
    switch (true) {
        case (num === 0):
            console.log("The number is zero");
            break
        case (num > 0):
            console.log("The given number is Positive");
            break
        case (num < 0):
            console.log("The number is negative");
            break
        default:
            console.log("Incorrect number/Not a number");

    }
}
typeofnum(45)
typeofnum(-987)
typeofnum(0)
typeofnum("aaa")

function passornot(mark) {
    (mark >= 40) ? console.log("Pass Mark!!!!") : console.log("Better Luck next Time")
}
passornot(46)
passornot(12)






