/*Requirements: "1. Write a function astroguru that:
A. Takes four arguments: number of children, spouses name, location and job
B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”*/

console.log("Name: Buvaneshwari T")
console.log("Assignment - 3 .1")

function astroguru(childnum,spousename,location,job) {
    console.log (`You will be a ${job} in ${location} and married to ${spousename} with ${childnum} kids`);
}

astroguru('2', 'Kumar', 'Delhi', 'Software Developer')
astroguru('3', 'Ravi', 'Chennai', 'Homemaker')

console.log("Assignment - 3 .2")


/*2. Write a function that compares two numbers and returns the larger of the two.
Bonus: Output appropriate message if numbers cant be compared or are equal"*/

function comparenum(a, b) {
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    }
    else if(b > a){
        console.log(`${a} is smaller than ${b}`);

    } else if(a == b){
        console.log("Both the values are equal");
    }
    else {
        console.log("Values cannot be compared");
    }
}
comparenum(10, 3567)
comparenum(234, -789)
comparenum ('ii', 345)
comparenum (45,45)




