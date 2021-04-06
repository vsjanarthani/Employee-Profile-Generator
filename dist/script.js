// Initialising DOM Elements
const githubEl = document.querySelectorAll('.github');
const schoolEl = document.querySelectorAll('.school');
const officeNoEl = document.querySelectorAll('.officeNo');


// Function to remove undefined list item in HTML
function removeList() {

    // console.log(githubEl);
    for (let i = 0; li = githubEl[i]; i++) {
        if (githubEl[i].textContent === "GitHub: undefined") {
            li.parentNode.removeChild(li);
        }
    }

    for (let i = 0; li = schoolEl[i]; i++) {
        if (schoolEl[i].textContent === "School: undefined") {
        li.parentNode.removeChild(li);
    }
}

    for (let i = 0; li = officeNoEl[i]; i++) {
        if (officeNoEl[i].textContent === "Office No: undefined") {
        li.parentNode.removeChild(li);
    }
}
};

removeList();