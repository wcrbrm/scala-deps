const fs = require('fs')
const stripLine = x => (x.replace(/(\/\/.*)/g, ''))

const gen = {
  deps: {},
  plugins: {},
  build: {},
  resolvers: {}
};

const parseFolder = (folder) => {
  fs.readdirSync(folder).forEach(file => {
    const indexExt = file.indexOf('.scala');
    if (indexExt === -1) return;
    const name = file.substring(0, indexExt);

    // read contents, strip line comments
    const content = stripLine(fs.readFileSync( folder + '/' + file, 'utf8')).trim();
    if (content.indexOf('val') === 0) {
	gen.deps[name] = content;
    } else if (content.indexOf('addSbtPlugin') === 0) {
        const lines = content.split("\n");
	gen.plugins[name] = lines[0];
    } else {
      console.error('weird content: ', name, content);
      process.exit(1);
    }
    
  })
}

parseFolder('./');
parseFolder('./plugins');

console.log(JSON.stringify(gen, null, 2));

