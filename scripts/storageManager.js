const KEY_USERS = "data";
const KEY_LOGIN = "login";


function saveUser(user){
    // load old data, 
    let data = readUsers();

    //merge, 
    data.push(user);
    
    //and then save


    let val = JSON.stringify(data); //parses what you pass into a string, converts the object
    localStorage.setItem(KEY_USERS, val);
}


//setItem is a key -> value system, using strings
// key is "users" and value is the array
//JSON JS object Notation -- 

function readUsers() {
    let data = localStorage.getItem(KEY_USERS);
    if (!data) {
        return [];
    }else{
    let list = JSON.parse(data); //parse string back to object
    return list;
    }
}

function clearUsers() {
    localStorage.removeItem(KEY_USERS);
}

function getLoggedIn() {
    let dataString = localStorage.getItem(KEY_LOGIN);
    if(dataString){
        return JSON.stringify(dataString);
    }
    return null;
}

function saveLoggedIn(user) {
    localStorage.setItem(KEY_LOGIN, JSON.stringify(user));
}

function logOut() {
    localStorage.removeItem(KEY_LOGIN);
    location.reload();
}

