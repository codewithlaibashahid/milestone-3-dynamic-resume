var _a;
// Function to capture the form data and generate a dynamic resume
function generateResume(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    // Fetching the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var gradYear = document.getElementById("gradYear").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Creating a resume object to hold the data
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        degree: degree,
        institution: institution,
        gradYear: gradYear,
        experience: experience,
        skills: skills
    };
    // Display the resume in the designated div
    displayResume(resumeData);
}
// Function to dynamically display the resume
function displayResume(data) {
    var resumeDisplay = document.getElementById("resume-display");
    resumeDisplay.innerHTML = "\n        <h2>".concat(data.name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(data.degree, "</p>\n        <p><strong>Institution:</strong> ").concat(data.institution, "</p>\n        <p><strong>Graduation Year:</strong> ").concat(data.gradYear, "</p>\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
}
// Event listener for the form submission
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", generateResume);
