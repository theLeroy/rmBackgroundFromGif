// Requires "request" to be installed (see https://www.npmjs.com/package/request)
var request = require('request');
var fs = require('fs');
const testFolder = 'img';

var cloudinary = require('cloudinary').v2



fs.readdirSync(testFolder).forEach(file => {
  console.log("file found "+ file);


  cloudinary.v2.uploader.upload(''+ testFolder +'/'+ file + '',
  { public_id: file,
    background_removal: "cloudinary_ai",
    notification_url: "https://mysite.example.com/hooks" },
  function(error, result){
    console.log(result);
    fs.writeFileSync("./output/"+file+"", result);
  });



});
