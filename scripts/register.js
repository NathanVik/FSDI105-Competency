var users=[]
errorOnForm = true;

class User{
    constructor(email,password,firstName,lastName,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}


function registerUser(){
    console.log("Register button clicked");

    if(errorOnForm){
        //show error
        return;
    }

    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let firstName = $("#txtFirst").val();
    let lastName = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#selColor").val();

    var newUser = new User(email,password,firstName,lastName,age,address,phone,payment,color)
    
    saveUser(newUser); //this fucntion is in storageManager.js
    setNavInfo();
    clearForm();

    readUsers();
}

function clearForm() {
 // homework: clear every input field
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#selColor").val("");


    // set the select to first element


    // set the color back to black
    $("#userColor").css("color", "#000000");

}

function pickColor(){
    let color = $("#selColor").val();
    $("#userColor").css("color", color);
}

function verifyEmail() {
    let txtEmail = $("#txtEmail");
    let email = txtEmail.val();
    if (email == "") {
        txtEmail.css(`border`, `2px solid red`);
        displayError("Please Enter an Email Address");
    }
    else{
        hideError();
        txtEmail.css(`border`, `1px solid rgb(133, 133, 133)`);
    }
}

function verifyPW() {
    
    let txtPass = $("#txtPassword");
    let password = txtPass.val();
    
    if(password.length < 5 ){
       txtPass.css(`border`, `2px solid red`);
       displayError("Error: Password too short");

    } else {
        txtPass.css(`border`, `1px solid rgb(133, 133, 133)`);
        hideError();
    }
}

function verifyFirstName() {
    let txtFirst = $("#txtFirst");
    let first = txtFirst.val();
    if (first == "") {
        txtFirst.css(`border`, `2px solid red`);
        displayError("Please Enter a First Name");
    }
    else{
        hideError();
        txtFirst.css(`border`, `1px solid rgb(133, 133, 133)`);
    }
}

function verifyLastName() {
    let txtLast = $("#txtLast");
    let last = txtLast.val();
    if (last == "") {
        txtLast.css(`border`, `2px solid red`);
        displayError("Please Enter a Last Name");
    }
    else{
        hideError();
        txtLast.css(`border`, `1px solid rgb(133, 133, 133)`);
    }
}

function displayError(text) {
    
    $(`#alertError`).removeClass(`hide`).text(text);
    $(`#btnSave`).attr("disabled", "true");
 
    errorOnForm = true;
}

function hideError() {
    $(`#alertError`).addClass(`hide`);
    $(`#btnSave`).attr("disabled", false);
    
    errorOnForm = false;
}

function init(){
    console.log("Register Page");


    var nathan=new User("nathan@gmail.com","password","Nathan","Vik",32,"123 Main St","123-456-7890","Check","#bf35b5");

    users.push(nathan);
    console.log(nathan);
    console.log(users);

    //# means id
    // . means class
    // TAG
    //
    //
    $("#btnSave").click(registerUser);

    $("#selColor").change(pickColor);

    $("#txtEmail").change(verifyEmail);
    $("#txtPassword").change(verifyPW);
    $("#txtFirst").change(verifyFirstName);
    $("#txtLast").change(verifyLastName);
}

window.onload = init;

