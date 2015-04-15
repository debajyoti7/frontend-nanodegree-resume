var name = "Debajyoti Nag"
var role = "Software Engineer"
var email = "dave0908@gmail.com"
var contact = "New Delhi, India"
var pic = "images/debajyoti.jpg"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedContact = HTMLcontactGeneric.replace("%data%", contact);
var formattedPic = HTMLbioPic.replace("%data%",pic);

//$("#header").append(formattedName + formattedRole);


var sampleName = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var len = finalName.indexOf(" ");
    var firstName = finalName.slice(0,len).toLowerCase();
    var lastName = finalName.slice(len).toUpperCase();
    
    a = firstName[0].toUpperCase();
    firstName = firstName.replace(firstName[0],a);
    
    finalName = firstName + lastName;

    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(sampleName));

var skills = ["Python", "JavaScript", "MATLAB"];

var bio = {
    "name" : formattedName,
    "role" : formattedRole,
    "contact" : {
        "email" : formattedEmail,
    },
    "skills" : skills,
    "pic" : formattedPic
};

$("#header").append(bio.name + bio.role + bio.contact + bio.pic + bio.skills);