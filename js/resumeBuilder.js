/*
This is empty on purpose! Your code to build the resume will go here.
 */


//resume info
var bio = {
  "name": "Emma Zhu",
  "role": "Web Developer",
  "contacts": {
    "mobile": "+1(917)678-2067",
    "email": "hongzi.emma@gmail.com",
    "github": "https://github.com/z-emma",
    "location": "Jersey City, NJ"
  },
  "biopic": "images/profilepic.jpg",
  "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "SQL", "PHP"],
  "welcomeMessage": "Welcome to my page!"
  //disply: function
};

var work = {
  "jobs": [
    {
      "title": "Web Developer Intern",
      "employer": "RecitedVerse.com",
      "dates": "9/2016-Present",
      "location": "New York",
      "description": "Building custom WordPress plugins with PHP for a web application that allow users to record and upload audio files within the browser."
    },
    {
      "title": "Front-End Engineer Intern",
      "employer": "Yang Fan Academy",
      "dates": "6/2015-8/2015",
      "location": "New York",
      "description": "-Increased efficiency of summer camp enrollment by developing an enrollment web application which would be used by 400 families in tri-valley area. -Designed and Implemented web pages with Bootstrap and React.js. -Customized components such as buttons and panels with HTML and CSS. -Simplified and optimized logic of enrollment system. -Online Demo (ONLY Chrome Browser supported) – http://dry-earth-52799.herokuapp.com/"
    },
    {
      "title": "Analyst Intern",
      "employer": "Industrial and Commercial Bank of China",
      "dates": "7/2012-9/2012",
      "location": "China",
      "description": "-Analyzed financial statements and monitored log of loan payments on outstanding loans using Excel. -Supported the Credit Department with loan procedures, evaluated credit worthiness of corporate borrowers and analyzed anticipated loan programs."
    }
  ]
  //display: function
};

var projects = {
  "projects": [
    {
      "title": "Message Board Database Design",
      "dates": "9/2016-Prsent",
      "description": "-Designed the model of a message board database with Entity-Relationship diagram. -Implemented the database design with SQL scripts in MySQL. -Implemented SQL queries for CRUD operations.",
      "images": []
    },
    {
      "title": "Portfolio Site",
      "dates": "8/2016-9/2016",
      "description": "-Created a website based on design mockup that displays images, descriptions and links to future portfolio projects. -All content is responsive and displays on all display sizes including desktop, mobiles and tablets. -Utilized a grid-based layout using self-written grid CSS.",
      "images": []
    }
  ]
  //display: function
};

var education = {
  "schools": [
    {
      "name": "Fordham University",
      "location": "New York",
      "majors": ["Finance", ""],
      "degree": "Master of Science",
      "dates": "9/2014-12/2015"
    },
    {
      "name": "Shanghai University",
      "location": "Shanghai",
      "majors": ["Broadcasting and Film", ", Finance"],
      "degree": "Bachelor",
      "dates": "9/2009-7/2014"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "6/2016-Present",
      "url": " "
    },
    {
      "title": "Algorithms: Design and Analysis",
      "school": "Stanford University on Coursera",
      "dates": "6/2016-Present",
      "url": " "
    }
  ]
  //display: function
};



//display
bio.display = function(){
  var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
  var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(HTMLheaderStart);
  $(".header-entry").append(formattedBioName);
  $(".header-entry").append(formattedBioRole);

  for(var key in bio.contacts) {
    if(bio.contacts.hasOwnProperty(key)) {
      var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]);
      $("#topContacts").append(formattedContactGeneric);
      $("#header").append($("#topContacts"));
      $("#footerContacts").append(formattedContactGeneric);
      }
  }

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(s){
      var formattedSkills = HTMLskills.replace("%data%", s);
      $("#skills:last").append(formattedSkills);
    });
  }
};
bio.display();


work.display = function() {
  work.jobs.forEach(function(j){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", j.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", j.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", j.dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", j.location);
    var formattedDatesLocation = formattedDates + formattedWorkLocation;
    $(".work-entry:last").append(formattedDatesLocation);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", j.description);
    $(".work-entry:last").append(formattedWorkDescription);
  });
};
work.display();


projects.display = function() {
  projects.projects.forEach(function(p){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", p.title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", p.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", p.description);
    $(".project-entry:last").append(formattedDescription);

    if (p.images.length > 0) {
      p.images.forEach(function(img){
        var formattedImage = HTMLprojectImage.replace("%data%", img);
        $(".project-entry:last").append(formattedImage);
      });
    }
  });
};
projects.display();


education.display = function() {
  education.schools.forEach(function(s){
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", s.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", s.degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", s.dates);
    $(".education-entry:last").append(formattedDates);

    var formattedMajor = HTMLschoolMajor.replace("%data%", s.majors[0]+s.majors[1]);
    $(".education-entry:last").append(formattedMajor);

    var formattedSchooLocation = HTMLschoolLocation.replace("%data%", s.location);
    $(".education-entry:last").append(formattedSchooLocation);
  });

  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(o){
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", o.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", o.school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", o.dates);
    $(".education-entry:last").append(formattedDates);

    var formattedUrl = HTMLonlineURL.replace("%data%", o.url);
    $(".education-entry:last").append(formattedUrl);
  });
};
education.display();


//google map
$("#mapDiv").append(googleMap);



// //track clicks
// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });


// //internationalize button
// function inName(name) {
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//   return name[0] + " " + name[1];
// };
//
// $("#main").append(internationalizeButton);
