// Requires "request" to be installed (see https://www.npmjs.com/package/request)
var request = require('request');
var fs = require('fs');
const testFolder = 'img';
const downloader = require('image-downloader')

var cloudinary = require('cloudinary')

// console.log(cloudinary.v2)

fs.readdirSync(testFolder).forEach(file => {
  console.log("file found "+ file);


  cloudinary.v2.uploader.upload(''+ testFolder +'/'+ file + '',
  { public_id: file,
    background_removal: "cloudinary_ai",
    notification_url: "https://mysite.example.com/hooks" },
  function(error, result){
    console.log(result);
    console.log(error);

    // fs.writeFileSync("./output/"+file+"", result);
  });

  // Download to a directory and save with an another filename
options = {
  url: 'https://res.cloudinary.com/dlgctfcex/image/upload/v1565685557/'+file+'.png',
  dest: "./output/"+file+"",        // Save to /path/to/dest/photo.jpg
  done: function(err, filename, image) {
    if (err) {
      throw err
    }
    console.log('Saved to', filename)
  }
}

downloader(options)



  // fs.writeFileSync("./output/"+file+"", cloudinary.image("1003.png.png"));
// CLOUDINARY_URL=cloudinary://389661455345197:Fw8Ev60igXc9wHwbzOthpgUrLCo@dlgctfcex
// CLOUDINARY_URL=cloudinary://755282785827467:idHCAUwK6SCYnhhwC0DO3u_wV9A@dbkljd8rx
});
