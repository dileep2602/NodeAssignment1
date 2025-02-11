//create a promoise to display a mesaage and cal the promise.
function displayMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hello, This is a message from promiise");
        },1000);
    });
}

displayMessage()
    .then(message => console.log(message))
    .catch(error => console.log("Error : ",error));

// Create a file using fs module and async/await.
const fs = require("fs").promises;

async function createFile() {
    try {
        const content = "this file is created using fs module";
        await fs.writeFile("message.txt",content);
        console.log("File created successfully");
    } catch (error) {
        console.error(" Error while creating file : ",error);
    }
}

createFile();