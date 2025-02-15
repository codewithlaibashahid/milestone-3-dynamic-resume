// Type definitions for the resume fields
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    degree: string;
    institution: string;
    gradYear: string;
    experience: string;
    skills: string;
}

// Function to capture the form data and generate a dynamic resume
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent the form from refreshing the page
    
    // Fetching the form values
    const name: string = (document.getElementById("name") as HTMLInputElement).value;
    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const phone: string = (document.getElementById("phone") as HTMLInputElement).value;
    const degree: string = (document.getElementById("degree") as HTMLInputElement).value;
    const institution: string = (document.getElementById("institution") as HTMLInputElement).value;
    const gradYear: string = (document.getElementById("gradYear") as HTMLInputElement).value;
    const experience: string = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills: string = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Creating a resume object to hold the data
    const resumeData: ResumeData = {
        name,
        email,
        phone,
        degree,
        institution,
        gradYear,
        experience,
        skills
    };

    // Display the resume in the designated div
    displayResume(resumeData);
}

// Function to dynamically display the resume
function displayResume(data: ResumeData):void {
    const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

    resumeDisplay.innerHTML = `
        <h2>${data.name}'s Resume</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${data.degree}</p>
        <p><strong>Institution:</strong> ${data.institution}</p>
        <p><strong>Graduation Year:</strong> ${data.gradYear}</p>
        <h3>Experience</h3>
        <p>${data.experience}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
}

// Event listener for the form submission
document.getElementById("resume-form")?.addEventListener("submit", generateResume);
