class Message {
    sendMessage(sender,message){
        let id = parseInt(10000000 +Math.random()*99999999-100000000)
        return id
    }
    getMessage(){
        
    }
}

let obj = new Message(123)
// console.log(obj)
const obj1 = new Message(12);

const id = obj.sendMessage('12', 'Hai')

obj1.getMessage();

obj.deleteMessage(id, 12);

obj1.getMessage()