var request = require('request');
var fs = require('fs');
const testFolder = 'img';



fs.readdirSync(testFolder).forEach(file => {
  console.log("file found"+ file);

  let path = ''+ testFolder +'/'+ file + '';
  let newPath = path.substring(0, path.length-4) + '.jpg';

  fs.rename(path, newPath, function(err) {
    if ( err ) console.log('ERROR: ' + err);
  }); 

})
