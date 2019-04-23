$(document).ready(function() {

  const peopleList = [{
      "name": "Steve Smith",
      "jobTitle": "Project Manager",
      "Company": "Front End Dev Co",
      "Experience": "3 years",
      "School": "UW",
      "Major": "Marketing",
      "Email": "steve@fedc.com",
      "LinkedInUrl": "steve.linkedinprofile.com"
    },
    {
      "name": "Aaron Katz",
      "jobTitle": "Full Stack Developer",
      "Company": "Web Sites and More",
      "Experience": "5 years",
      "School": "SU",
      "Major": "Computer Science",
      "Email": "aaronNotMyEmail@uw.com",
      "LinkedInUrl": "aaron.linkedinprofile.com"
    },
    {
      "name": "Kyle Hendricks",
      "jobTitle": "Starting Pitcher",
      "Company": "Chicago Cubs",
      "Experience": "12 years",
      "School": "USC",
      "Major": "Pitching",
      "Email": "kyleH@cubs.com",
      "LinkedInUrl": "kyle.linkedinprofile.com"
    },
    {
      "name": "Michael Jordan",
      "jobTitle": "Point Guard",
      "Company": "Chicago Buls",
      "Experience": "20 years",
      "School": "UNC",
      "Major": "Trash Talking",
      "Email": "mJordan@bulls.com",
      "LinkedInUrl": "mJordan.linkedinprofile.com"
    }
  ];

  // Create template for bio section that uses JSON data
  let biosectionHTML = peopleList.map(function(el) {
    return biosection = `
    <div class="left-section">
      <div">
        <img class="default-picture" src="./img/unsplash-headshot.jpg" alt="employee headshot">
        <h1>${el.name}</h3>
        <p id="job-type">${el.jobTitle}</h4>
      </div>
      <div class="right-section">
        <p><span class="column">Company: </span>${el.Company}</p>
        <p><span class="column">Experience: </span>${el.Experience}</p>
        <p><span class="column">School: </span>${el.School}</p>
        <p><span class="column">Major: </span>${el.Major}</p>
        <p><span class="column">Email: </span>${el.Email}</p>
        <p class="column"><img src="./img/linkedin.svg" alt="linkedin logo">${el.LinkedInUrl}</p>
      </div>
    </div>
    `;
  });

  // Output templated data to main page
  $(".template-hook").append(biosectionHTML);
});
