const user1 = "Aman"
const user1Pass = 1234;
const user2 = "Nitish"
const user2Pass = 4567;
const user3 = "tita"
const user3Pass = 8910;
const user4 = "divya"
const user4Pass = 1111;

function userpw(userid, password) {
    if (userid === user1 || userid === user2 || userid === user3 || userid === user4) {
        console.log("USER ID Verified");
        return userid;
    }
    else {
        console.log("USER ID Does not exist");
         }

    }

    userpw("divya", 1111)
    
var a = userpw("divya", 1111)
    
    switch (a) {
        case "Aman":
            password === 1234 ? console.log("Login Sucessful") : console.log("Incorrect password")
            break
        case "Nitish":
            password === 4567 ? console.log("Login Sucessful") : console.log("Incorrect password")
            break
        case "tita":
            password === 8910 ? console.log("Login Sucessful") : console.log("Incorrect password")
            break
        case "divya":
            password === 1111 ? console.log("Login Sucessful") : console.log("Incorrect password")
            break
    }


