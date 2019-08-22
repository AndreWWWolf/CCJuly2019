const jimp = require('jimp');

function blur(path, blurRadius) {
  jimp.read(path)
  .then( (img) => {
    img.blur(blurRadius).write(`blurry_${path}`);
  }).catch( (err) => {
    console.log(err);
  });
}

blur(process.argv[2], parseInt(process.argv[3]));
