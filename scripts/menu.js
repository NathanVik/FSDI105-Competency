

//get id from class, and then access label

function setNavInfo() {
//get array of users
    let list = readUsers();
    let count = list.length;

    //update label
    $(`.menu-info > label`).text(`${count} Users`);

}

setNavInfo()