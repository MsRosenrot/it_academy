const fs = require('fs-extra');
fs.ensureDirSync('newDirectory');
fs.ensureFileSync('newDirectory/newFile.txt');
fs.ensureDirSync('newDirectory_2');
// The existance check has been added because when the 'fs.move' method is run several times, the file returns to the first directory 
// which is not the expected result.
if(fs.existsSync('newDirectory_2/newFile.txt')){
    fs.removeSync('newDirectory_2/newFile.txt');
}
fs.moveSync('newDirectory/newFile.txt', 'newDirectory_2/newFile.txt');
fs.ensureDirSync('newDirectory_3');
fs.copySync('newDirectory_2', 'newDirectory_3');
fs.removeSync('newDirectory_2/newFile.txt');
fs.removeSync('newDirectory_3/newFile.txt');
fs.removeSync('newDirectory');
fs.removeSync('newDirectory_2');
fs.removeSync('newDirectory_3');