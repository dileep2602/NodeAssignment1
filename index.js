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