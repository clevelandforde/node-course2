const fs = require('fs');
const { isRegExp } = require('util/types');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// writing files
// fs.writeFile('./docs/blog1.txt', 'New information', () => {
//   console.log('file written to');
// });

// fs.writeFile('./docs/blog2.txt', 'new info again: created new file', () => {
//   console.log('new file');
// });

// creating/deleting directories
// if (!fs.existsSync('./docs2')) {
//   fs.mkdir('./docs2', (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//     console.log('folder created!');
//   });
// } else
//   fs.rmdir('./docs2', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });

// deleting files

// if (!fs.existsSync('./docs2/file.txt')) {
//   console.log('no such file to delete');
// } else
//   fs.rm('./docs2/file.txt', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('file deleted');
//   });

// example 2
// if (fs.existsSync('./docs/deleteme.txt')) {
//   fs.unlink('./docs/deleteme.txt', (err) => {
//     if (err) throw err;

//     console.log('Successful deletion');
//   });
// } else console.log('cannot find');

// shaun example
if (fs.existsSync('./docs2/del.txt')) {
  fs.unlink('./docs2/del.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
} else console.log('out of existence');
