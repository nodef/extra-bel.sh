const {fs}              = require('extra-build');
const {github, package} = require('extra-build');


const owner  = 'nodef';



// Update GitHub details.
function updateGithub() {
  var m = package.read('.');
  var {name, description} = m;
  var homepage  = `https://www.npmjs.com/package/${name}`;
  var topics    = m.keywords;
  topics.length = Math.min(topics.length, 20);
  github.updateDetails(owner, name, {description, homepage, topics});
}


// Publish root package to NPM, GitHub.
function publishRoot(sym, ver) {
  fs.restoreFileSync('package.json', () => {
    var m = package.read();
    m.version  = ver;
    package.write('.', m);
    package.publish('.');
    package.publishGithub('.', owner);
  });
}


// Deploy root package to NPM, GitHub.
function deployRoot(ver) {
  var m   = package.read();
  publishRoot('', ver);
}


// Perform all deploy work.
function deployAll() {
  var m   = package.read();
  var ver = package.nextUnpublishedVersion(m.name, m.version);
  updateGithub();
  deployRoot(ver);
}


function main(a) {
  if (a[2] === 'deploy') deployAll();
}
main(process.argv);
