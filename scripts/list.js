
function displayUsers(users) {
    //travel the array
    for(let i=0;i<users.length;i++) {
        //get each user
        let user = users[i];

        //display the users
        let syntax = `
                    <tr>
                        <td> ${user.email} </td>
                        <td> ${user.firstName} </td>
                        <td> ${user.lastName} </td>
                        <td> ${user.age} </td>
                        <td> ${user.address} </td>
                        <td> ${user.phone} </td>
                        <td> ${user.payment} </td>
                        <td style="background-color:${user.color}; border:1px solid black"> </td>
                    </tr>
                    `;

        $("#tblUsers").append(syntax);
    }

}



function init() {
    console.log("Listing Users");

    let users = readUsers();
    displayUsers(users);

    $("#userListClear").click(clearUsers);
}

window.onload = init;