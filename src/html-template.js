// Creating the html page
const generatediv = employeeArr => {

  return `
  <section class="container">
      ${employeeArr
      .filter((({ role }) => role))
      .map(({ name, id, email, role, github, school, officeNo, icon }) => {
        return `
        <article class="boxdesign">
          <div class="boxtitle">
            <h2 class="boxheading">${name}</h2>
            <h3 class="boxheading1"><i>${icon}</i> ${role}</h3>
          </div>
          <hr>
          <div class="boxbody">
            <ul class="list">
              <li>ID: ${id}</li>
              <li>Email: <a href = "mailto:${email}">${email}</a></li>
              <li class="github">GitHub: <a href = "https://github.com/${github}" target="_blank">${github}</a></li>
              <li class="school">School: ${school}</li>
              <li class="officeNo">Office No: ${officeNo}</li>
            </ul>
          </div>
        </article>
          `;
      })
      .join('')}
    </section>
  `;
};

// Exporting module
module.exports = employeeData => {

  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
          <h1>My Team</h1>
      </header>
      <main>
            ${generatediv(employeeData)}
      </main>
      <div class="clear-footer"></div>
      <footer class="text-center fixed-bottom text-lg-start text-light footer">
        <div class="text-center p-3 text-light">
          &copy;2020 Made by Janarthani V Subramaniam</h3>
        </div>
      </footer>
      <script src="script.js"></script>
    </body>
    </html>  
        `;
};
