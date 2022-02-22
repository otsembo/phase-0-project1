function getSignUpInfo(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let messages = `Hello ${name}, we have sent an email to ${email} with further details`;
    alertMessage(messages);
}

function clicked(){
    
}

function alertMessage(message){
    alert(message);
}

document.getElementById("form").addEventListener("submit", function (e){
    e.preventDefault();
    getSignUpInfo();
})