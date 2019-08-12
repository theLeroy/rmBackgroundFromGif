const toApng = require('gif-to-apng')

const testFolder = 'img';
const jpgfolder = 'jpg';
var fs = require('fs');


fs.readdirSync(testFolder).forEach(file => {
  console.log("file found" + file);

  let path = '' + testFolder + '/' + file + '';
  let onlyname = file.substring(0, file.length-4)
  let newpath = jpgfolder + '/' + onlyname + '.jpg'
  console.log("newpath " + newpath)


toApng(path)
  .then(() => console.log('Done 🎉'))
  .catch(error => console.log('Something went wrong 💀', error))


})
