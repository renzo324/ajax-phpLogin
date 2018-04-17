function getUsers() {
    var endPoint = "functions.php?function=getUsers";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', endPoint, true);
    xhr.onload = function() {
        if (this.status == 200) {
            var r = JSON.parse(this.response);
            var x = '';

            for (var i = 0, len = r.length; i < len; i++) {
                x += '<div id="' + r[i].id + '"><button onclick="editUserForm(' + r[i].id + ')">edit</button><button onclick="deleteUser(' + r[i].id + ')">delete</button>' + r[i].lname + ', ' + r[i].fname + '</div>';
            }
            document.getElementById('app').innerHTML = x;


        };
    };
    xhr.send();
}

function addUserForm() {
    var x = '';
    x += 'First Name: <input type="text" name="fname"><br>';
    x += 'Last Name: <input type="text" name="lname"><br>';
    x += 'Email: <input type="text" name="email"><br>';
    x += 'Password: <input type="text" name="password"><br>';
    x += 'Number: <input type="text" name="number"><br>';
    x += '<button onclick="addUser()">Add</button>';
    document.getElementById('app').innerHTML = x;
}

function addUser() {
    var endPoint = "functions.php?function=addUser";

    var formData = new FormData();

    formData.append("fname", document.getElementsByName("fname")[0].value);
    formData.append("lname", document.getElementsByName("lname")[0].value);
    formData.append("email", document.getElementsByName("email")[0].value);
    formData.append("password", document.getElementsByName("password")[0].value);
    formData.append("number", document.getElementsByName("number")[0].value);


    var xhr = new XMLHttpRequest();
    xhr.open('POST', endPoint, true);

    xhr.onload = function() {
        if (this.status == 200) {
            getUsers();
        };
    };
    xhr.send(formData);
}

function deleteUser(id) {
    var endPoint = "functions.php?function=deleteUser&id=" + id;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', endPoint, true);
    xhr.onload = function() {
        if (this.status == 200) {
            getUsers();
        };
    };
    xhr.send();
}

function editUserForm(id) {
    var endPoint = "functions.php?function=editUser&id=" + id;
    var x = '';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', endPoint, true);
    xhr.onload = function() {
        if (this.status == 200) {
        x += 'First Name: <input type="text" name="fname"><br>';
        x += 'Last Name: <input type="text" name="lname"><br>';
        x += 'Email: <input type="text" name="email"><br>';
        x += 'Password: <input type="text" name="password"><br>';
        x += 'Number: <input type="text" name="number"><br>';
        x += '<button onclick="editUser(' + id + ')">Save Changes</button>';
        document.getElementById('app').innerHTML = x;
    };
};
xhr.send();
}

function editUser(id) {
    var endPoint = "functions.php?function=editUser&id=" + id;
    var formData = new FormData();

    formData.append("fname", document.getElementsByName("fname")[0].value);
    formData.append("lname", document.getElementsByName("lname")[0].value);
    formData.append("email", document.getElementsByName("email")[0].value);
    formData.append("password", document.getElementsByName("password")[0].value);
    formData.append("number", document.getElementsByName("number")[0].value);


    var xhr = new XMLHttpRequest();
    xhr.open('POST', endPoint, true);

    xhr.onload = function() {
        if (this.status == 200) {
            getUsers();
        };
    };
    xhr.send(formData);
}
