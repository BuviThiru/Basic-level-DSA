console.log ("Hour Glass Pattern")
var a = 7
var sp = 0
do{
    console.log(" ".repeat(sp)+ "*".repeat(a)+" ".repeat(sp));
    a = a-2;
    sp++;

}
while (a>0);
let a1=3;
let sp1 = 2
do{
    console.log(" ".repeat(sp1)+ "*".repeat(a1)+" ".repeat(sp1));
    a1 = a1+2;
    sp1--;

}while (a1<=7)



console.log ("Playbutton Pattern")
for(a=1; a<=5; a++) {
    console.log("* ".repeat(a));
}
for (a1 = 4; a1 >= 1; a1--) {
    console.log("* ".repeat(a1));
}
