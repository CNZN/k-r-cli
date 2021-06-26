

var program = require('commander');
var colors = require('./colors')

const { blue } = colors;
// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
// program.parse(process.argv)
// if( program.debug ){
//     blue('option is debug')
// }else if(program.small){
//     blue('option is small')
// }


const version = require('../package').version;
const figlet = require('figlet');

console.log(
    // 终端打印
    blue(
        figlet.textSync('K-R-CLI')
    )
);

// fox 命令
program
    .version(version)
    .description('CLI for new project')
    .usage('<command> [options]')
    .command('init', 'init a new project') // 命令的描述
    .parse(process.argv);