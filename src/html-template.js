// Creating the html page
const generatediv = employeeArr => {
  if (!employeeArr) {
    return '';
  }

  return `
    <section class="container">
    <article class="boxdesign">
      ${employeeArr
      .filter(({ feature }) => feature)
      .map(({ name, id, email }) => {
        return `
          <div class="boxtitle">
            <h2 class="boxheading">${name}</h2>
            <h3 class="boxheading1"><i>Icon</i>Assistant Manager</h3>
          </div>
          <hr>
          <div class="boxbody">
            <ul>
              <li>${id}</li>
              <li>Email:<a href = "${email}"></a><i class="fas fa-at"></i>${email}</a></li>
              // <li>List3</li>
            </ul>
          </div>
          `;
        })
        .join('')}

        ${employeeArr
          .filter(({ feature }) => feature)
          .map(({ name, id, email }) => {
            return `
              <div class="boxtitle">
                <h2 class="boxheading">${name}</h2>
                <h3 class="boxheading1"><i>Icon</i>Assistant Manager</h3>
              </div>
              <hr>
              <div class="boxbody">
                <ul>
                  <li>${id}</li>
                  <li>Email:<a href = "${email}"></a><i class="fas fa-at"></i>${email}</a></li>
                  // <li>List3</li>
                </ul>
              </div>
              `;
            })
            .join('')}

    </article>
    </section>
  `;
};

// Exporting module
module.exports = templateData => {
    // destructure page data by section
    const { employeeData } = templateData;
    console.log(employeeData);
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
      <footer class="text-center text-lg-start fixed-bottom text-light">
        <div class="text-center p-3 text-light">
          &copy;2020 by Janarthani V Subramaniam</h3>
        </div>
      </footer>
    </body>
    </html> 
        `;
};
