const build = require('extra-build');

const owner  = 'nodef';
const repo   = build.readMetadata('.').name;




// Get keywords for main/sub package.
function keywords(ds) {
  var m = build.readMetadata('.');
  var s = new Set([...m.keywords, ...ds.map(d => d.name)]);
  return Array.from(s);
}


// Publish a root package to NPM, GitHub.
function publishRootPackage(ds, ver, typ) {
  var _package = build.readDocument('package.json');
  var m = build.readMetadata('.');
  m.version  = ver;
  if (typ) {
    m.name = `${m.name}.${typ}`;
    m.description = m.description.replace(/\.$/, ` {${typ}}.`);
    md = md.replace(/(unpkg\.com\/)(\S+?)(\/\))/, `$1$2.${typ}$3`);
  }
  build.writeMetadata('.', m);
  build.publish('.');
  try { build.publishGithub('.', owner); }
  catch {}
  build.writeDocument(_package);
}


// Deploy root package to NPM, GitHub.
function publishRootPackages(ds, ver) {
  publishRootPackage(ds, ver, '');
}


// Publish docs.
function publishDocs(ds) {
  build.updateGithubRepoDetails({topics: keywords(ds)});
}


// Pushish root, sub packages to NPM, GitHub.
function publishPackages(ds) {
  var m   = build.readMetadata('.');
  var ver = build.nextUnpublishedVersion(m.name, m.version);
  publishRootPackages(ds, ver);
}


// Finally.
function main(a) {
  var ds = [];
  if (a[2]==='publish-docs') publishDocs(ds);
  else if (a[2]==='publish-packages') publishPackages(ds);
}
main(process.argv);
