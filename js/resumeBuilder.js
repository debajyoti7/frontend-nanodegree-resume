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



/*var sampleName = "AlbERt EINstEiN";

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
*/
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

var work = {
    "internships" : [
        {
            "employer" : HTMLworkEmployer.replace("%data%", "Google Summer of Code"),
            "title" : HTMLworkTitle.replace("%data%", "Student Developer"),
            "dates" : HTMLworkDates.replace("%data%", "2013"),
            //"location" : HTMLworkLocation.replace("%data%", ),
            "description" : HTMLworkDescription.replace("%data%", "Developed OCR tool for a language with connected script")
        },
        {
            "employer" : HTMLworkEmployer.replace("%data%", "Indian institute of Technology, Mumbai"),
            "title" : HTMLworkTitle.replace("%data%", "Textbook Companion Project"),
            "dates" : HTMLworkDates.replace("%data%", "2011"),
            "location" : HTMLworkLocation.replace("%data%", "Mumbai, India"),
            "description" : HTMLworkDescription.replace("%data%", "Developed textbook companions for SciLab")
        }
    ]
};

var education = {
    "schools" : [ //schools array
        {
            "name" : HTMLschoolName.replace("%data%", "Mälardalen University"),
            "years" : HTMLschoolDates.replace("%data%","2012-2014"),
            "city" : HTMLschoolLocation.replace("%data%","Västerås, Sweden"),
            "degree" : HTMLschoolDegree .replace("%data%","Masters"),
            "major" : HTMLschoolMajor.replace("%data%","Computer Science")
        },
        {
            "name" : "Echelon Institute of Technology",
            "years" : "2008-2012",
            "city" : "Haryana, India",
            "degree" : "B.Tech",
            "major" : "Computer Science"
        }  

    ]
};

var project = {
    "workProjects" : [
        {
            "title" : HTMLprojectTitle.replace("%data%","Innovation diffusion in Scale-Free Networks"),
            "duration" : HTMLprojectDates.replace("%data%","2013-2014"),
            "description" : HTMLprojectDescription.replace("%data%","Modelling of Scale-Free Networks")
        },
                {
            "title" : HTMLprojectTitle.replace("%data%","Naiad AUV"),
            "duration" : HTMLprojectDates.replace("%data%","2013-2014"),
            "description" : HTMLprojectDescription.replace("%data%","Autonomous Underwater Vehicle")
        },
                {
            "title" : HTMLprojectTitle.replace("%data%","Awesome CBR"),
            "duration" : HTMLprojectDates.replace("%data%","2013-2013"),
            "description" : HTMLprojectDescription.replace("%data%","CBR-based diagnostic system for Volvo CE, Sweden")
        }

    ]
};


$("#main").append(work.internships[0].employer + work.internships[0].title + work.internships[0].dates + work.internships[0].description);
$("#main").append(work.internships[1].employer + work.internships[1].title + work.internships[1].dates + work.internships[1].description);

$("#main").append(education.schools[0].name + education.schools[0].degree + education.schools[0].years + education.schools[0].city + education.schools[0].major);

$("#main").append(project.workProjects[0].title + project.workProjects[0].duration + project.workProjects[0].description);
$("#main").append(project.workProjects[1].title + project.workProjects[1].duration + project.workProjects[1].description);