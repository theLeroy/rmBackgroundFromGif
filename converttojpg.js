var gif2jpg = require ("gif2jpg");



const testFolder = 'img';
const jpgfolder = 'jpg';
var fs = require('fs');




fs.readdirSync(testFolder).forEach(file => {
  console.log("file found" + file);

  let path = '' + testFolder + '/' + file + '';
  let onlyname = file.substring(0, file.length-4)
  let newpath = jpgfolder + '/' + onlyname + '.jpg'
  console.log("newpath " + newpath)

  var base64img = base64Img.base64Sync(path);


  imgConvert.fromBuffer({
    buffer: base64img, //replace with buffer
    quality: 100, //quality
    output_format: "jpg", //jpg
    size: "original" //defualt
  }, function(err, response, file) {
    if (!err) {
      console.log(file);

      fs.writeFileSync(newpath, base64Img.img(file, newpath, '1', function(err, filepath) {}));
      // res.end(response);
    } else {
      console.log(err.message)
      // res.json({
      //   "Error": err.message
      // })
    }
  });


})
