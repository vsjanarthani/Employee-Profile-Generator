const Employee = require('./Employee');

class Engineer extends Employee {
   constructor(name, id, email, github, icon ='<i class="fas fa-glasses"></i>') {
       super(name, id, email)
       this.github = github;
       this.role = 'Engineer';
       this.icon = icon;
   }

   getGithub() {
       return this.github;
   }
}

module.exports = Engineer;

// const engineer1 = new Engineer ('jana', 1005, 'janarthani@gmail.com', 'github.git');
// engineer1.getRole();
// engineer1.getName();
// engineer1.getId();
// engineer1.getEmail();