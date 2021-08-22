const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // If there is an error, reject the PRomise and send an error to the promise's catch method
            if (err) {
                reject(err);

                // Return out of function
                return;
            }
            // If no errors, resolve and send the package to the user
            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) =>{
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if(err) {
                reject(err); 
                return; 
            }
            
            resolve({
                ok: true,
                message: 'File copied succesfully!'
            }); 
        });
    });
}; 

module.exports = {writeFile, copyFile}; 