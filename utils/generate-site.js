const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// copying CSS file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet copied!'
      });
    });
  });
};

// Copying JS file
const copyJSFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/script.js', './dist/script.js', err => {
      if (err) throw err;

      resolve ({
        ok: true,
        message: 'script.js copied!'
      });
    });
  });
};
module.exports = { writeFile, copyFile, copyJSFile };
