const fs = require('fs');
const cp = require('child_process');


// Read a text file.
function readTextFile(pth) {
  const txt = fs.readFileSync(pth, 'utf8');
  return txt.replace(/\r\n|\r/g, '\n');
}


// Run a command line.
function runCommand(cmd) {
  cp.execSync(cmd, {stdio: 'inherit'});
}


// Publish package to NPM.
function publishPackages() {
  runCommand('npm publish --access public');
}


// Finally.
function main(a) {
  if (a[2]==='publish-packages') publishPackages();
}
main(process.argv);
