document.getElementById('resumeForm')!.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const profession = (document.getElementById('profession') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const expertise = (document.getElementById('expertise') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim()).join(', ');
    const languages = (document.getElementById('languages') as HTMLInputElement).value.split(',').map(lang => lang.trim()).join(', ');

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const resumeHTML = `
        <div class="resume-content">
            <h3><i class="fa-solid fa-user-tie"></i> ${fullName}</h3>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Location:</strong> ${location}</p>
            <h4><i class="fa-solid fa-briefcase"></i> Work Experience</h4>
            <p>${workExperience}</p>
            <h4><i class="fa-solid fa-graduation-cap"></i> Education</h4>
            <p>${education}</p>
            <h4><i class="fa-solid fa-lightbulb"></i> Expertise</h4>
            <p>${expertise}</p>
            <h4><i class="fa-solid fa-tools"></i> Skills</h4>
            <p>${skills}</p>
            <h4><i class="fa-solid fa-language"></i> Languages</h4>
            <p>${languages}</p>
        </div>
    `;

    document.getElementById('displayResume')!.innerHTML = resumeHTML;
    document.getElementById('printButton')!.style.display = 'block';
});

document.getElementById('printButton')!.addEventListener('click', function() {
    window.print();
});

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
