

function loginUser() {
    let username = $(`#loginEmail`).val();
    let userpass = $(`#loginPassword`).val();
    console.log(username,userpass);

    validateLogin(username,userpass);


}

function validateLogin(username,userpass){

    let users = readUsers();
    found = false
    for(let i=0;i<users.length;i++) {
        //get each user
        let user = users[i];
        if (user.email === username && user.password === userpass) {
            console.log("Matched");
            found = true;
            saveLoggedIn(user);
            window.location = "users.html";
        }
    }
    if (!found) {
        console.log("invalid credentials")
        displayError("Email or Password is Incorrect");
    }
}

function displayError(text) {
    $(`#loginError`).removeClass(`hide`).text(text);
    setTimeout(function(){
        $(`#loginError`).addClass(`hide`)
    },3000);
}

// function blankEmail() {
//     $(`#loginEmail`).after(`*`);
// }
// function blankPassword() {
//     $(`loginPassword`).after(`*`);
// }

function showLogin() {
    let currentUser = localStorage.getItem(KEY_LOGIN);
    let user = JSON.parse(currentUser);
    
    let syntax = `
                Email: ${user.email}<br>
                Name: ${user.firstName} ${user.lastName}
    `;

    $(`#login-info`).append(syntax);
}

function init() {
    
    let currentUser = getLoggedIn();
    if(currentUser) {
        //already logged in
        $(`#loginForm`).hide();
        $(`#currentLogin`).show();
        showLogin(currentUser);
    }else{
        //not logged in
        $(`#loginForm`).show();
        $(`#currentLogin`).hide();
    }




    //Hook Events
    $(`#btnLogin`).click(loginUser);
    $(`#btnLogout`).click(logOut);


}

window.onload = init;


/**
 *clean up CSS
 add checks for blank email/PW and add asterix



 * 
 * 
 */
