document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var fullName = document.getElementById('fullName').value;
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var workExperience = document.getElementById('workExperience').value;
    var education = document.getElementById('education').value;
    var expertise = document.getElementById('expertise').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    var languages = document.getElementById('languages').value.split(',').map(function (lang) { return lang.trim(); }).join(', ');
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    var resumeHTML = "\n        <div class=\"resume-content\">\n            <h3><i class=\"fa-solid fa-user-tie\"></i> ".concat(fullName, "</h3>\n            <p><strong>Profession:</strong> ").concat(profession, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Location:</strong> ").concat(location, "</p>\n            <h4><i class=\"fa-solid fa-briefcase\"></i> Work Experience</h4>\n            <p>").concat(workExperience, "</p>\n            <h4><i class=\"fa-solid fa-graduation-cap\"></i> Education</h4>\n            <p>").concat(education, "</p>\n            <h4><i class=\"fa-solid fa-lightbulb\"></i> Expertise</h4>\n            <p>").concat(expertise, "</p>\n            <h4><i class=\"fa-solid fa-tools\"></i> Skills</h4>\n            <p>").concat(skills, "</p>\n            <h4><i class=\"fa-solid fa-language\"></i> Languages</h4>\n            <p>").concat(languages, "</p>\n        </div>\n    ");
    document.getElementById('displayResume').innerHTML = resumeHTML;
    document.getElementById('printButton').style.display = 'block';
});
document.getElementById('printButton').addEventListener('click', function () {
    window.print();
});
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
