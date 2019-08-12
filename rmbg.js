// Requires "request" to be installed (see https://www.npmjs.com/package/request)
var request = require('request');
var fs = require('fs');
const testFolder = 'img';



fs.readdirSync(testFolder).forEach(file => {
  console.log("file found "+ file);

  request.post({
    url: 'https://api.remove.bg/v1.0/removebg',
    formData: {
      image_file: fs.createReadStream(''+ testFolder +'/'+ file + ''),
      size: 'auto',
    },
    headers: {
      'X-Api-Key': 'U9aW6buJceKqrkj9PTpvJiaa'
    },
    encoding: null
  }, function(error, response, body) {
    if(error) return console.error('Request failed:', error);
    if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    fs.writeFileSync("./output/"+file+".png", body);
  });

});
