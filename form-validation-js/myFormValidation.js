function clearErrors() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) 
{
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    let returnval = true;
    clearErrors();
    let name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*First Name should be at least 6 characters long");
        returnval = false;
    } else if (/\d/.test(name)) {
        seterror("name", "*First Name should not contain numbers");
        returnval = false;
    }

    let name2 = document.forms['myForm']["lname"].value;
    if (name2.length < 5) {
        seterror("name", "*Last Name should be at least 6 characters long");
        returnval = false;
    } else if (/\d/.test(name2)) {
        seterror("lname", "*Last Name should not contain numbers");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    let phone = document.forms['myForm']["fphone"].value;
   
    if (/^[0-9]+$/.test(phone)!=1) 
    {
        seterror("phone", "*Please enter only digits!");
        returnval = false;
    }

    else if (phone.length != 10) 
    {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    let password = document.forms['myForm']["fpass"].value;
    if (password.length < 8) {
        seterror("pass", "*Password should be at least 8 characters long!");
        returnval = false;
    }

    let cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }


    let textbox = document.forms['myForm']["ftextbox"].value;
    if (textbox.length < 10) {
        seterror("ctextbox", "*Please fill atleast 10 characters!");
        returnval = false;
    }

    let checkboxes = document.querySelectorAll('input[name="flocations"]:checked');
    if (checkboxes.length < 2) {
        seterror("clocations", "*Please select at least 2 locations");
        returnval = false;
    }

    return returnval;
}

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    if (validateForm()) 
    {
        var formData = new FormData(document.getElementById('myForm'));
        var fieldLabels = {

            fname: 'Name',
            femail: 'Email',
            fphone: 'Phone',
            fpass: 'Password',
            fcpass: 'Confirm Password',
            fgender: 'Gender',
            flocations: 'Preferred Locations',
            ftextbox: 'About AT&T',
            fcity: 'City'
        };
        var tableHTML = '<h2>Entered Values</h2><table>';
        formData.forEach(function (value, key) {
            var label = fieldLabels[key];
            tableHTML += '<tr><th>' + label + '</th><td>' + value + '</td></tr>';
        });
        tableHTML += '</table>';
        document.getElementById('displayTable').innerHTML = tableHTML;
    }
});
