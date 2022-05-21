const fs = require('fs');
const { Server } = require('http');

const readStream = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf-8',
});

const writeStream = fs.createWriteStream('./docs2/rite.txt', {
  encoding: 'utf-8',
});

// readStream.on('data', (chunk) => {
//   console.log('\n\n CHUNK \n\n');
//   //   console.log(chunk.toString());
//   console.log(chunk);
//   writeStream.write('\n\n NEW Chunk \n\n');
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
